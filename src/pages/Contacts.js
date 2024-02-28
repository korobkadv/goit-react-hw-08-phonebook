import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Loader } from '../components/Loader/Loader';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

import { Flex, Box, Heading } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex alignItems="flex-start" justifyContent="center">
      <Helmet>
        <title>Phonebook - Contacts list</title>
      </Helmet>
      <div>
        <Section>
          <ContactForm />
        </Section>
      </div>

      <Box
        spacing="4"
        p="5"
        m="5"
        bg="white"
        align="stretch"
        w="350px"
        borderRadius="5"
        boxShadow="base"
      >
        <Heading size="md">Contacts:</Heading>
        {contacts.length ? (
          <Section>
            <Filter />
            <ContactList />
          </Section>
        ) : (
          <p>No contacts...</p>
        )}
        {isLoading && !error && <Loader />}
      </Box>
    </Flex>
  );
}
