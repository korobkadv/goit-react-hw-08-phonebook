import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filterSlice';
import { selectFilters } from '../../redux/contacts/selectors';

import { Box, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box pt="4">
      Find contacts by name
      <Input
        mt="2"
        size="sm"
        type="text"
        name="filter"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
        value={useSelector(selectFilters)}
      />
    </Box>
  );
};
