import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { Box, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box fontSize="lg">
      Welcome, <b>{user.name}</b>
      <Button
        type="button"
        ml="4"
        colorScheme="blue"
        size="sm"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
    </Box>
  );
};
