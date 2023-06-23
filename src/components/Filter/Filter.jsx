import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/contactsSlice';
import { StyledLabel, StyledInput, StyledFilterSection } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;

    dispatch(setFilter(value));
  };

  return (
    <StyledFilterSection>
      <StyledLabel htmlFor="search">Find contacts by name</StyledLabel>
      <StyledInput
        id="search"
        type="text"
        onChange={handleChangeFilter}
        value={filter}
        placeholder="Seach name"
      />
    </StyledFilterSection>
  );
};

export default Filter;
