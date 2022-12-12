import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BoxImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '350px',
    [theme.breakpoints.down('md')]: {
        width: '300px'
    },

}))

export const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: 600,
    padding: '30px',
    [theme.breakpoints.down('md')]: {
        padding: '0px',
        width: 400
    },

}))