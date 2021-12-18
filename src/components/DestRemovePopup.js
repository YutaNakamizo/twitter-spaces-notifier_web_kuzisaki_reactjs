import React, {
  useState,
} from 'react';
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
  const [ removing, setRemoving ] = useState(false);
  const handleRemoveClick = e => {
    setRemoving(true);
    onRemoveClick(endpoint.id).catch(err => {
      setRemoving(false);
    });
  };

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
          disabled={removing}
          onClick={e => {
            onClose(false);
          }}
        >
          キャンセル
        </Button>

        <Button
          color="warning"
          variant="contained"
          disabled={removing}
          disableElevation
          onClick={handleRemoveClick}
        >
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

