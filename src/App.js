import React, {
  useState,
  useEffect,
} from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { CommonHeader } from '~/components/CommonHeader';
import { RouteTop } from '~/routes/RouteTop';
import { RouteApp } from '~/routes/RouteApp';
import {
  handleAuthStateChange,
} from '~/apis/auth';

const theme = createTheme({
});

export const App = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState(undefined);
  useEffect(() => {
    handleAuthStateChange().then(_user => {
      console.log(_user);
      setUser(
        _user || null
      );
      navigate('/app', { replace: true });
    }).catch(err => {
      console.error(err);
      setUser(null);
      return;
    });
  }, []);

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

