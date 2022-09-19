import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useAuth } from "../hook/useAuth";
import  Alert  from '@mui/material/Alert';

const theme = createTheme();

export default function Login() {
  
  const [userLogin, setUserLogin ] = useState(({
    email: '',
    password: ''
  }))
  const [catchError, setCatchError] = useState('');
  // const [correctSignIn, setCorrectSignIn] = useState(false);

  const {signin} = useAuth();
  const navigate = useNavigate()
  
  const handleChange = ({target: {name, value}}) => {
    setUserLogin({...userLogin, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
      signin(userLogin.email, userLogin.password)
      .then(() => {
        navigate('/posts')
      })
      .catch((error) => {
        setCatchError(error.message)
        console.log(error);
      })
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
          {catchError && <Alert severity="error">{catchError}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Iniciar sesion
            </Button>
              <Grid>
                <Link to="/register" variant="body2">
                  {"No tienes una cuenta? Crea una"}
                </Link>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}