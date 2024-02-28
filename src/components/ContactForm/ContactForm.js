import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  Heading,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EditIcon, PhoneIcon } from '@chakra-ui/icons';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Must not be empty'),
  number: Yup.string()
    .min(9, 'Must be 9 or more')
    .max(15, 'Must be no more than 15')
    .required('Must not be empty'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <VStack
          spacing="4"
          p="5"
          m="5"
          bg="white"
          align="stretch"
          w="350px"
          borderRadius="5"
        >
          <Heading size="md">Add contact:</Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name" fontSize="">
                  Username
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EditIcon color="gray.300" mb="2" />
                  </InputLeftElement>
                  <Input {...field} id="name" type="text" size="sm" />
                </InputGroup>

                <FormErrorMessage color="red">
                  {form.errors.name}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="number">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.number && form.touched.number}
              >
                <FormLabel htmlFor="number" fontSize="">
                  Number
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" mb="2" />
                  </InputLeftElement>
                  <Input {...field} id="number" type="text" size="sm" />
                </InputGroup>
                <FormErrorMessage color="red">
                  {form.errors.number}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button colorScheme="teal" type="submit" size="sm">
            Add contact
          </Button>
        </VStack>
      </Form>
    </Formik>
  );
};
