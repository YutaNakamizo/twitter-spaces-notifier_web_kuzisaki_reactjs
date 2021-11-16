import React from 'react';
import {
  Box,
  Container,
  Button,
} from '@mui/material';

export const RouteTop = ({
  ...props
}) => {
  return (
    <>
      Root
      <Button
        variant="contained"
        disableElevation
      >
        さっそく通知を設定する
      </Button>
    </>
  );
};

