import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import CheckCvForm from './forms/CheckCvForm';
import AuthWrapper from './AuthWrapper';

const CheckCv = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Open CV - Header</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <CheckCvForm />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default CheckCv;
