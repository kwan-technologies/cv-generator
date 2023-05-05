import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Button } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

const Home = () => (
    <AuthWrapper>
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: { xs: 0.5, sm: 0.5 } }}>
                    <Button variant="contained">Create CV</Button>
                    <Button component={Link} to="/check-cv">
                        Open CV
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: { xs: 0.5, sm: 0.5 } }}>
                    <Button component={Link} to="/login">
                        Login
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Home;
