import styled from 'styled-components';
import { StyledAddBtn } from 'components/ContactForm/ContactForm.styled';

export const StyledLoginWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8ec3e0;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  border-radius: 10px;

  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 320px;
  width: 400px;

  transform: translate(-50%, -50%);
`;

export const StyledLoginTitle = styled.h2`
    margin: 0;
    margin-bottom: 30px;
`;

export const StyledLoginInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 15px;
    width: 320px;

    border: 2px solid rgba(196, 192, 179, 0.5);
    border-radius: 6px;
    outline: none;

    &:focus {
        border: 2px solid #8ec3e0;
    }
`;

export const StyledLoginBtn = styled(StyledAddBtn)`
margin-bottom: 30px;
margin-top: 10px;
width: 140px;
font-size: 14px;
border-radius: 30px;
padding: 10px 0;
`;
