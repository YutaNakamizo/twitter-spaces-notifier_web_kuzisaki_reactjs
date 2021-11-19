import React, {
  useState,
  useEffect,
} from 'react';
import {
  TextField,
} from '@mui/material';

export const DestFormOptionsDiscordWebhook = ({
  onChange = () => {},
  ...props
}) => {
  const [ url, setUrl ] = useState();
  useEffect(() => {
    onChange({
      changed: true,
      valid: true,
      value: {
        url,
      },
    });
  }, [
    url,
  ]);

  return (
    <>
      <TextField
        label="Webhook URL"
        variant="standard"
        fullWidth
        onChange={e => {
          setUrl(e.target.value);
        }}
      />
    </>
  );
};

