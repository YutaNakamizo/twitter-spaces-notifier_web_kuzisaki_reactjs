import React, {
  useState,
  useEffect,
} from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { DestFormOptionsDiscordWebhook } from '~/components/DestFormOptionsDiscordWebhook';
import { DestFormOptionsJSON } from '~/components/DestFormOptionsJSON';

const destOptions = require('~/destOptions');

export const DestForm = ({
  onChange = () => {},
  initialValue = {
    label: '',
    destIndex: 0,
    destDetails: undefined,
  },
  ...props
}) => {
  const [ label, setLabel ] = useState(initialValue.label);
  const [ destIndex, setDestIndex ] = useState(initialValue.destIndex);
  const [ destDetails, setDestDetails ] = useState({
    changed: false,
    valid: false,
    values: initialValue.destDetails,
  });
  const validate = ({
    label,
    destIndex,
    destDetails,
  }) => {
    const result = {
      changed: false,
      valid: false,
    };

    if(
      label !== initialValue.label
      || destIndex !== initialValue.destIndex
      || destDetails?.changed
    ) {
      result.changed = true;
    }

    if(
      label.trim() !== ''
      && -1 < destIndex && destIndex < destOptions.length
      && destDetails?.valid
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
      label,
      destIndex,
      destDetails,
    });

    onChange({
      changed,
      valid,
      values: {
        label,
        dest: destOptions[destIndex].value,
        destDetails: destDetails.values,
      }
    });
  }, [
    label,
    destIndex,
    destDetails,
  ]);

  return (
    <>
      <TextField
        label="ラベル"
        defaultValue={initialValue.label}
        variant="standard"
        placeholder={`例) ${destOptions[destIndex].sampleText}`}
        fullWidth
        autoFocus
        onChange={e => {
          setLabel(e.target.value);
        }}
      />

      <Select
        value={destOptions[destIndex].value}
        defaultValue={destOptions[initialValue.destIndex].value}
        onChange={e => {
          setDestIndex(destOptions.findIndex(option => option.value === e.target.value));
        }}
      >
        {destOptions.map(({
          value,
          label,
        }, index) => (
          <MenuItem
            key={index}
            value={value}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
      
      <Box
      >
        {(() => {
          switch(destOptions[destIndex].value) {
            case 'discord-webhook': {
              return (
                <>
                  <DestFormOptionsDiscordWebhook
                    initialValue={initialValue.destDetails}
                    onChange={setDestDetails}
                  />
                </>
              );
            }
            case 'json': {
              return (
                <>
                  <DestFormOptionsJSON
                    initialValue={initialValue.destDetails}
                    onChange={setDestDetails}
                  />
                </>
              );
            }
            default: {
            }
          }
        })()}
      </Box>
    </>
  );
};

