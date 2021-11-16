import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { CommonHeader } from '~/components/CommonHeader';
import { RouteTop } from '~/routes/RouteTop';
import { RouteApp } from '~/routes/RouteApp';

const theme = createTheme({
});

export const App = () => {
  return (
    <ThemeProvider
      theme={theme}
    >
      <div className="App">
        <CommonHeader
        />
        
        <Routes
        >
          <Route
            path="/"
            element={
              <RouteTop
              />
            }
          />

          <Route
            path="/app"
            element={
              <RouteApp
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace={true}
              />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

