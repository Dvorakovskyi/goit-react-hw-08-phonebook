import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledDeleteBtn,
  StyledContactDescr,
} from './ContactItem.styled';

const ContactItem = ({name, number, onClick }) => {
  return (
    <StyledItem>
      <StyledContactDescr>
        {name}: {number}
      </StyledContactDescr>
      <StyledDeleteBtn type="button" onClick={onClick}>
        Delete
      </StyledDeleteBtn>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
