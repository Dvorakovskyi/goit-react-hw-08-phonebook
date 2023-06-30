import { StyledSection } from 'components/App.styled';
import styled from 'styled-components';

export const StyledFilterSection = styled(StyledSection)`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 310px;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid black;
  outline: none;

  &:focus {
    border: 2px solid #8ec3e0;
  }
`;
