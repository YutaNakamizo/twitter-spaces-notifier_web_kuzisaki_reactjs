import React, {
  forwardRef,
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Slide,
  Dialog,
  Toolbar,
  Button,
  DialogContent,
} from '@mui/material';
import { DestForm } from '~/components/DestForm';

const Transition = forwardRef((props, ref) => (
  <Slide
    direction="up"
    ref={ref}
    {...props}
  />
));

export const DestFormPopup = ({
  onClose = () => {},
  initialValue,
  ...props
}) => {
  const [ formValue, setFormValue ] = useState(
    {
      changed: false,
      valid: true,
      value: initialValue || {},
    }
  );
  useEffect(() => {
    console.log(formValue);
  }, [
    formValue,
  ]);

  const confirmClose = e => {
    const close = window.confirm('キャンセルすると入力した内容が失われます. 編集をキャンセルしますか？');
    if(!close) return;
    onClose(e);
  };

  return (
    <Dialog
      fullScreen
      scroll="paper"
      disableEscapeKeyDown
      {...props}
      TransitionComponent={Transition}
    >
      <Toolbar
      >
        <Box
          flexGrow={1}
        />

        <Box
        >
          <Button
            onClick={formValue.changed ? confirmClose : onClose}
          >
            キャンセル
          </Button>
          <Button
            disabled={
              !formValue.changed
              || !formValue.valid
            }
          >
            保存
          </Button>
        </Box>
      </Toolbar>

      <DialogContent
        dividers
      >
        <DestForm
          initialValue={initialValue}
          onChange={setFormValue}
        />
      </DialogContent>
    </Dialog>
  );
};

