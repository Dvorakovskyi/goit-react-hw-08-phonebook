import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectProfile, logOut } from 'redux/auth/authSlice';
import { deleteToken } from 'redux/auth/thunks';

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
        <div>
          <p>{profile.email}</p>
          <button
            type="button"
            onClick={() => {
              handleLogOut();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
