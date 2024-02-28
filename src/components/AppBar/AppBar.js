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
        <Heading size="lg">Phonebook</Heading>
      </Box>

      <Box p="4">
        <Navigation />
      </Box>
      <Box p="4">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
