import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';

export const DestRemovePopup = ({
  onClose = () => {},
  onRemoveClick = () => {},
  endpoint,
  ...props
}) => {
  return (
    <Dialog
      {...props}
    >
      <DialogTitle
      >
        "{endpoint.label}" を削除しますか？
      </DialogTitle>

      <DialogContent
      >
        <DialogContentText
        >
          この操作は取り消せません. 本当に "{endpoint.label}" を削除してよろしいですか？
        </DialogContentText>
      </DialogContent>

      <DialogActions
      >
        <Button
          onClick={e => {
            onClose(false);
          }}
        >
          キャンセル
        </Button>

        <Button
          color="warning"
          variant="contained"
          disableElevation
          onClick={e => {
            onRemoveClick(endpoint.id);
          }}
        >
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

