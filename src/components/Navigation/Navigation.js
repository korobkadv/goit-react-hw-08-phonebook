import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { useAuth } from '../../hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link as={NavLink} to="/" mr="4" fontSize="lg">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" fontSize="lg">
          Contacts
        </Link>
      )}
    </nav>
  );
};
