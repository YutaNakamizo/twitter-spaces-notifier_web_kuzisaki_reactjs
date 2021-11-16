import React from 'react';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const theme = createTheme({
});

export const App = () => {
  return (
    <ThemeProvider
      theme={theme}
    >
      <div className="App">
      </div>
    </ThemeProvider>
  );
}

