import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { AppBar, Box, Grid, Link, Toolbar } from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import Posts from './Posts';

const Home = () => {

    const theme = createTheme();
    const navigate = useNavigate();
    const {user, signout} = useAuth();

    const handlelogout = async () => {
        await signout();
        navigate('/login')
    }

  return (
    <ThemeProvider theme={theme}>
        <Container component="main">
            <CssBaseline />
            <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Typography variant="p">Bienvenido </Typography>
            <Typography variant="h4">{user.email} </Typography>
            <Link href='' onClick={handlelogout}>Cerrar Sesion</Link>
          </Box>
            <Routes>
                <Route path= "/posts" element={<Posts/>} />
            </Routes>
        </Container>
    </ThemeProvider>
  )
}

export default Home