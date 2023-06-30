import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectProfile, logOut } from 'redux/auth/authSlice';
import { deleteToken } from 'redux/auth/thunks';
import {
  StyledUserWrapper,
  StyledLogoutBtn,
  StyledUserName,
} from './UserMenu.styled';

const UserMenu = () => {
  const profile = useSelector(selectProfile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());

    deleteToken();

    navigate('/login');
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
