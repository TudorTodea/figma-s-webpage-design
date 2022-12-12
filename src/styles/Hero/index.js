import styled from "@emotion/styled";

export const HeroImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    [theme.breakpoints.down('md')]: {
        width: '300px'
    },

}))