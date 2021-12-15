import React from 'react';
import {
  Divider,
  List,
} from '@mui/material';
import { EndpointsListItem } from '~/components/EndpointsListItem';

export const EndpointsList = ({
  endpoints = [],
  ...props
}) => {
  return (
    <List
      {...props}
    >
      {(() => {
        if(Array.isArray(endpoints)) {
          return (
            endpoints.length > 0 ? (
              <>
                <Divider
                />
                {endpoints.map(endpoint => (
                  <EndpointsListItem
                    key={endpoint.id}
                    {...endpoint}
                  />
                ))}
              </>
            ) : (
              <>
                No Contents
              </>
            )
          );
        }
        else {
          return (
            <>
              Please wait...
            </>
          );
        }
      })()}
    </List>
  );
};

