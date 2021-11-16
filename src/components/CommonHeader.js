import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

export const CommonHeader = ({
  ...props
}) => {
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

