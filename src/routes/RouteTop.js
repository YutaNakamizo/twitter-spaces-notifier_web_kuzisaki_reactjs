import React from 'react';
import {
  Box,
  Container,
  Button,
} from '@mui/material';
import {
  signIn,
} from '~/apis/auth';

export const RouteTop = ({
  ...props
}) => {
  const handleSignInClick = e => {
    signIn();
  };

  return (
    <>
      Root
      <Button
        variant="contained"
        disableElevation
        onClick={handleSignInClick}
      >
        さっそく通知を設定する
      </Button>
    </>
  );
};

