import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';

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
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';

const contactsSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email address')
    .required('Must not be empty'),
  password: Yup.string().required('Must not be empty'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
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
            <Heading size="md">Log In:</Heading>
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
