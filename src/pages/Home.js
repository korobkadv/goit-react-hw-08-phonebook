import { Helmet } from 'react-helmet-async';
import { Box, Image, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box padding="4" w="100%" textAlign="center">
      <Helmet>
        <title>Phonebook - Welcome page</title>
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
        <Image
          src="https://cdn.pixabay.com/photo/2017/06/22/10/11/icon-2430270_960_720.png"
          alt="Phonebook"
          w="100px"
          float="left"
        />
        <b>Phonebook</b> is an online application designed for convenient
        management of contacts and phone numbers. Thanks to Phonebook, you can
        easily organize your contacts, add new ones, and quickly find the
        information you need. A simplified interface allows users to easily
        navigate and search contacts by name. With Phonebook, you will never
        have to look for the right phone number again among old records or a
        confused address book - everything you need is always at hand!
      </Text>
    </Box>
  );
}
