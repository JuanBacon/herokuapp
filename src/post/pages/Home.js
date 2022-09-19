import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { Grid, Link } from '@mui/material';

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

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid container>
                <Grid item xs>
                    <Typography component="p" variant="p">Bienvenido, {user.email}! </Typography>
                </Grid>
                <Grid item>
                    <Link href='' onClick={handlelogout}>
                        Cerrar sesion
                    </Link>
                </Grid>
            </Grid>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
            >
                <div>Elemento1</div>
                <div>Elemento1</div>
                <div>Elemento1</div>
                <div>Elemento1</div>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Home