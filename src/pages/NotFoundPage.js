import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Box padding="4" w="100%" textAlign="center">
      <Helmet>
        <title>Phonebook - 404 page not found!</title>
      </Helmet>
      <Text
        w="80%"
        m="auto"
        textAlign="justify"
        bg="white"
        boxShadow="base"
        p="5"
        borderRadius="5"
      >
        Sorry! Error! Please use this{' '}
        <b>
          <Link to="/">link</Link>
        </b>
      </Text>
    </Box>
  );
}
