import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './post/pages/App'
import reportWebVitals from './reportWebVitals';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { AppBar, Toolbar } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main:'#8561c5'},
    secondary: {main:'#2979ff'},
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <AppBar position='relative'>
            <Toolbar>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Typography variant="h3">HerokuApp </Typography>
                  <Typography variant="p">por Juan Bustamante </Typography>
                </Box>
            </Toolbar>
          </AppBar>
      <Container>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
