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
import validator from 'validator';

const methodOptions = [
  'POST',
  'GET',
];

export const DestFormOptionsJSON = ({
  onChange = () => {},
  initialValue = {
    method: methodOptions[0],
    url: '',
  },
  ...props
}) => {
  const [ method, setMethod ] = useState(initialValue.method);
  const [ url, setUrl ] = useState(initialValue.url);
  
  const validate = ({
    method,
    url,
  }) => {
    const result = {
      changed: false,
      valid: false,
    };

    if(
      method !== initialValue.method
      || url !== initialValue.url
    ) {
      console.log(!!initialValue.method, method !== initialValue.method, !!initialValue.url, url !== initialValue.url);
      result.changed = true;
    }
    
    if(
      methodOptions.includes(method)
      && (
        validator.isURL(url, {
          require_protocol: true,
          require_valid_protocol: true,
          protocols: [
            'http',
            'https',
          ],
          require_host: true,
          require_port: false,
          allow_protocol_relative_urls: false,
          allow_fragments: true,
          allow_query_components: true,
          validate_length: true,
        })
      )
    ) {
      result.valid = true;
    }

    return result;
  };

  useEffect(() => {
    const {
      changed,
      valid,
    } = validate({
      method,
      url,
    });

    onChange({
      changed,
      valid,
      values: {
        method,
        url,
      },
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
          defaultValue={initialValue.method}
          onChange={e => {
            setMethod(e.target.value);
          }}
        >
          {methodOptions.map(methodName => (
            <MenuItem
              value={methodName}
              key={methodName}
            >
              {methodName}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="送信先 URL"
          defaultValue={initialValue.url}
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

