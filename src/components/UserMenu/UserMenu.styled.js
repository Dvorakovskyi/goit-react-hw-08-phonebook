import styled from 'styled-components';
import { StyledDeleteBtn } from 'components/ContactList/ContactItem/ContactItem.styled';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogoutBtn = styled(StyledDeleteBtn)`
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
`;

export const StyledUserName = styled.p`
  font-weight: 500;
`;
