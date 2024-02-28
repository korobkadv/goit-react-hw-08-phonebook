import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <ButtonGroup gap="2">
      <Button colorScheme="blue" as={NavLink} to="/register">
        Sign Up
      </Button>
      <Button colorScheme="blue" as={NavLink} to="/login">
        Log in
      </Button>
    </ButtonGroup>
  );
};
