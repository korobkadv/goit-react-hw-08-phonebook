import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ListItem, Button } from '@chakra-ui/react';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem mt="4">
      <b>{contact.name}</b>: {contact.number}
      <Button
        size="xs"
        ml="2"
        colorScheme="yellow"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Button>
    </ListItem>
  );
};
