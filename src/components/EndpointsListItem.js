import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const EndpointsListItem = ({
  onEditClick,
  editDisabled = false,
  onRemoveClick,
  removeDisabled = false,
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
      secondaryAction={
        (!onEditClick && !onRemoveClick) ? (
          <>
          </>
        ) : (
          <>
            {typeof onEditClick === 'function' && (
              <IconButton
                disabled={editDisabled}
                onClick={e => {
                  onEditClick({
                    id,
                    label,
                    dest,
                    destDetails,
                    createTime,
                    updateTime,
                  });
                }}
              >
                <EditOutlinedIcon
                />
              </IconButton>
            )}
            {typeof onRemoveClick === 'function' && (
              <IconButton
                disabled={removeDisabled}
                onClick={e => {
                  onRemoveClick();
                }}
              >
                <DeleteOutlinedIcon
                />
              </IconButton>
            )}
          </>
        )
      }
    >
      <ListItemText
        primary={label}
      />
    </ListItem>
  );
};

