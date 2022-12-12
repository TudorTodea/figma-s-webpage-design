import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BenefitsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 600,
    padding: '10px 0px 10px 10px',
    [theme.breakpoints.down('md')]: {
        width: '300px'
    },

}))