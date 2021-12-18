import React, {
  useState,
  useEffect,
  createContext,
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
import {
  red,
} from '@mui/material/colors';
import { CommonHeader } from '~/components/CommonHeader';
import { RouteTop } from '~/routes/RouteTop';
import { RouteApp } from '~/routes/RouteApp';
import { RouteSignOut } from '~/routes/RouteSignOut';
import {
  onAuthStateChanged,
} from '~/apis/auth';

const theme = createTheme({
  palette: {
    warning: red,
  },
});

export const AppContext = createContext({
});

export const App = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(_user => {
      //console.log(_user);
      setUser(
        _user || null
      );
      navigate('/app', { replace: true });
    }, err => {
      console.error(err);
      setUser(null);
      return;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
      }}
    >
      <ThemeProvider
        theme={theme}
      >
        <div className="App">
          <CommonHeader
          />

          {(() => {
            switch(user) {
              case undefined: {
                return (
                  <>
                    Loading...
                  </>
                );
              }
              default: {
                return (
                  <Routes
                  >
                    <Route
                      path="/"
                      element={
                        (() => {
                          switch(user) {
                            case null: {
                              return (
                                <RouteTop
                                />
                              );
                            }
                            default: {
                              return (
                                <Navigate
                                  to="/app"
                                />
                              );
                            }
                          }
                        })()
                      }
                    />

                    <Route
                      path="/app"
                      element={
                        (() => {
                          switch(user) {
                            case null: {
                              return (
                                <Navigate
                                  to="/"
                                />
                              );
                            }
                            default: {
                              return (
                                <RouteApp
                                />
                              );
                            }
                          }
                        })()
                      }
                    />

                    <Route
                      path="/signout"
                      element={
                        <RouteSignOut
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
                );
              }
            }
          })()}
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

