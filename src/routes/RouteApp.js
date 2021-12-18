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

const destOptions = require('~/destOptions');

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
  const handlePopupClose = forceRefresh => {
    setOpenPopup(null);
    if(!forceRefresh) return;
    
    reloadEndpoints();
    return;
  };
  
  const [ editingEndpoint, setEditingEndpoint ] = useState(null);
  const [ editInitialValue, setEditInitialValue ] = useState(null);
  const handleEditClick = endpoint => {
    setEditingEndpoint(endpoint);
    setEditInitialValue({
      label: endpoint.label,
      destIndex: destOptions.findIndex(d => d.value === endpoint.dest),
      destDetails: endpoint.destDetails,
    });
    setOpenPopup('edit');
  };

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
          onEditClick={handleEditClick}
          editDisabled={
            loadingEndpoints
            && openPopup !== null
          }
        />
      </Container>
      
      {/* Add new endpoint */}
      <DestFormPopup
        open={openPopup === 'add'}
        onClose={handlePopupClose}
      />
      
      {/* Edit endpoint */}
      {editingEndpoint !== null && (
        <DestFormPopup
          initialValue={editInitialValue}
          open={openPopup === 'edit'}
          onClose={handlePopupClose}
        />
      )}
    </>
  );
};

