import { useSelector } from 'react-redux';
import { visibleContacts } from '../../redux/contacts/selectors';
import { ContactItem } from './ContactItem';

import { UnorderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const visibleContact = useSelector(visibleContacts);

  return (
    <>
      {visibleContact.length ? (
        <UnorderedList mt="4">
          {visibleContact.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </UnorderedList>
      ) : (
        <p>No contacts according to your search!</p>
      )}
    </>
  );
};
