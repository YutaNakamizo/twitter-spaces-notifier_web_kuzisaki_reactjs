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
import {
  registerEndpoint,
} from '~/apis/backend';

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
      valid: false,
      values: initialValue,
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

  const save = (e, values) => {
    return registerEndpoint(values).then(resp => {
      console.log(resp.data);
      onClose(e);
      return;
    });
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
            onClick={e => {
              save(e, formValue.values);
            }}
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

