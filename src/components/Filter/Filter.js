import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filterSlice';
import { selectFilters } from '../../redux/contacts/selectors';

import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box pt="4">
      Find contacts by name
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" mt="2" />
        </InputLeftElement>
        <Input
          mt="2"
          size="sm"
          type="text"
          name="filter"
          onChange={evt => dispatch(updateFilter(evt.target.value))}
          value={useSelector(selectFilters)}
        />
      </InputGroup>
    </Box>
  );
};
