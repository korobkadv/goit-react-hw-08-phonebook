import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Box,
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
import { AtSignIcon, EditIcon, LockIcon } from '@chakra-ui/icons';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Must not be empty'),
  email: Yup.string()
    .email('Enter valid email address')
    .required('Must not be empty'),
  password: Yup.string()
    .min(7, 'Must be 7 or more')
    .max(15, 'Must be no more than 15')
    .required('Must not be empty'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Box padding="4" w="100%">
        <Form>
          <VStack
            spacing="4"
            p="5"
            bg="white"
            align="stretch"
            w="350px"
            ml="auto"
            mr="auto"
            borderRadius="5"
          >
            <Heading size="md">Register:</Heading>
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

            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" fontSize="">
                    Email
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <AtSignIcon color="gray.300" mb="2" />
                    </InputLeftElement>
                    <Input {...field} id="email" type="email" size="sm" />
                  </InputGroup>
                  <FormErrorMessage color="red">
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.300" mb="2" />
                    </InputLeftElement>
                    <Input {...field} id="password" type="password" size="sm" />
                  </InputGroup>
                  <FormErrorMessage color="red">
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button colorScheme="teal" type="submit">
              Log In
            </Button>
          </VStack>
        </Form>
      </Box>
    </Formik>
  );
};
