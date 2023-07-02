import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfile } from 'redux/auth/authSlice';
import { logOutThunk } from 'redux/auth/thunks';
import {
  StyledUserWrapper,
  StyledLogoutBtn,
  StyledUserName,
} from './UserMenu.styled';

const UserMenu = () => {
  const profile = useSelector(selectProfile);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      {profile && (
        <StyledUserWrapper>
          <StyledUserName>{profile.email}</StyledUserName>
          <StyledLogoutBtn
            type="button"
            onClick={() => {
              handleLogOut();
            }}
          >
            Logout
          </StyledLogoutBtn>
        </StyledUserWrapper>
      )}
    </>
  );
};

export default UserMenu;
