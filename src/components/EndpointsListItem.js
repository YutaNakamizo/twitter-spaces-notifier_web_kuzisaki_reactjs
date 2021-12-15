import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@mui/material';

export const EndpointsListItem = ({
  id,
  label,
  dest,
  destDetails = {},
  createTime,
  updateTime,
  ...props
}) => {
  return (
    <ListItem
      divider
    >
      <ListItemText
        primary={label}
      />
    </ListItem>
  );
};

