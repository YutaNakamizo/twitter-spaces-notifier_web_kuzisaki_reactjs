import React, {
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

export const DestFormOptionsJSON = ({
  onChange = () => {},
  ...props
}) => {
  const [ method, setMethod ] = useState('POST');
  const [ url, setUrl ] = useState();
  useEffect(() => {
    onChange({
      method,
      url,
    });
  }, [
    method,
    url,
  ]);

  return (
    <>
      <Box
        display="flex"
      >
        <Select
          value={method}
          onChange={e => {
            setMethod(e.target.value);
          }}
        >
          <MenuItem
            value="POST"
          >
            POST
          </MenuItem>
          <MenuItem
            value="GET"
          >
            GET
          </MenuItem>
        </Select>
        <TextField
          label="送信先 URL"
          variant="standard"
          fullWidth
          onChange={e => {
            setUrl(e.target.value);
          }}
        />
      </Box>
    </>
  );
};

