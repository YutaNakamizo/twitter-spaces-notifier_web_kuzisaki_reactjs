import React, {
  useContext,
} from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import {
  signOut,
} from '~/apis/auth';
import { AppContext } from '~/App';

export const CommonHeader = ({
  ...props
}) => {
  const {
    user,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const handleSignOutClick = e => {
    signOut();
    navigate('/', { replace: true });
  };

  return (
    <AppBar
      color="inherit"
      position="sticky"
      {...props}
    >
      <Toolbar
      >
        <Box
        >
          <Typography
            component="h1"
            variant="h6"
          >
            #くじスペ 通知 bot
          </Typography>
        </Box>

        <Box
          flexGrow={1}
        >
        </Box>

        <Box
        >
          {user ? (
            <Button
              onClick={handleSignOutClick}
            >
              ログアウト
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

