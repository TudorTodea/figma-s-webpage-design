import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const CiteTitle = styled(Typography)(({ theme }) => ({
    fontSize: '68px',
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
    },
}))