import React, {
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Container,
  Toolbar,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import { EndpointsList } from '~/components/EndpointsList';
import { DestFormPopup } from '~/components/DestFormPopup';
import {
  listEndpoints,
} from '~/apis/backend';

export const RouteApp = ({
  ...props
}) => {
  const [ endpoints, setEndpoints ] = useState(null);
  const [ loadingEndpoints, setLoadingEndpoints ] = useState(true);
  const reloadEndpoints = () => {
    setLoadingEndpoints(true);
    listEndpoints().then(_endpoints => {
      _endpoints.sort((a, b) => (
        a.createTime - b.createTime
      ));
      _endpoints.sort((a, b) => (
        a.label < b.label ? -1 : 1
      ));
      setEndpoints(_endpoints);
      setLoadingEndpoints(false);
      console.log(_endpoints);
    });
  };
  useEffect(() => {
    reloadEndpoints();
  }, []);

  const [ openPopup, setOpenPopup ] = useState(null);

  return (
    <>
      <Container
      >
        <Toolbar
          disableGutters
        >
          <Box
            display="flex"
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
          </Box>

          <Box
            display="flex"
            flexGrow={1}
          />
          
          <Box
            display="flex"
          >
            <Button
              variant="outlined"
              disabled={loadingEndpoints}
              startIcon={
                <RefreshIcon
                />
              }
              onClick={e => {
                reloadEndpoints();
              }}
            >
              {loadingEndpoints ? (
                '更新中'
              ) : (
                '最新情報に更新'
              )}
            </Button>
          </Box>
        </Toolbar>

        <EndpointsList
          endpoints={endpoints}
        />
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

