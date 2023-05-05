// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Logo = () => {
    const theme = useTheme();

    return (
        <>
            <Typography variant="h2" component="h2">
                LOGO
            </Typography>
        </>
    );
};

export default Logo;
