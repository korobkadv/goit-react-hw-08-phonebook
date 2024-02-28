import { Flex, Box, Heading } from '@chakra-ui/react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      minWidth="100%"
      alignItems="baseline"
      justifyContent="space-between"
      gap="2"
      bg="white"
      boxShadow="base"
    >
      <Box p="4">
        <Heading
          size="lg"
          color="#e3710e"
          textDecoration="underline"
          textShadow="2px 1px #2C5364"
        >
          Phonebook
        </Heading>
      </Box>

      <Box p="4">
        <Navigation />
      </Box>
      <Box p="4">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
