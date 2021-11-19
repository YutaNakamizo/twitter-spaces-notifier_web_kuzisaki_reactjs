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

const destOptions = [
  {
    value: 'discord-webhook',
    label: 'Discord (Webhook)',
    sampleText: 'サークル Discord サーバ',
  },
  {
    value: 'json',
    label: 'JSON (開発者向け)',
    sampleText: '自作 bot 用',
  },
];

export const DestForm = ({
  onChange = () => {},
  initialValue = {},
  ...props
}) => {
  const [ label, setLabel ] = useState();
  const [ destIndex, setDestIndex ] = useState(0);
  const [ destDetails, setDestDetails ] = useState({});
  useEffect(() => {
    const changed = true;
    const valid = true;

    onChange({
      changed,
      valid,
      values: {
        label,
        dest: destOptions[destIndex].value,
        destDetails: destDetails.value,
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
                    onChange={setDestDetails}
                  />
                </>
              );
            }
            case 'json': {
              return (
                <>
                  <DestFormOptionsJSON
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

