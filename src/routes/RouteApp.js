import React, {
  useState,
} from 'react';
import {
  Box,
  Container,
  Toolbar,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DestFormPopup } from '~/components/DestFormPopup';

export const RouteApp = ({
  ...props
}) => {
  const [ openPopup, setOpenPopup ] = useState(null);

  return (
    <>
      <Container
      >
        <Toolbar
        >
          <Button
            variant="contained"
            disableElevation
            startIcon={
              <AddIcon
              />
            }
            onClick={e => {
              setOpenPopup('add');
            }}
          >
            通知先を追加
          </Button>
        </Toolbar>
      </Container>

      <DestFormPopup
        open={openPopup !== null}
        onClose={e => {
          setOpenPopup(null);
        }}
      />
    </>
  );
};

