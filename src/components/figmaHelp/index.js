import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { BoxImage } from '../../styles/figmaHelp'
import { TitleBox } from '../../styles/figmaHelp'
const FigmaHelp = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
                <TitleBox>
                    <Typography variant='h4' sx={{ fontSize: { xs: '25px', md: '35px' } }}>See how Figma can help you design from start to finish</Typography>
                </TitleBox>
            </Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={4}>
                <Grid md={12} lg={4} item >
                    <BoxImage src='https://cdn.sanity.io/images/599r6htc/localized/a15bf1d9c4ba733ecd56f4d38050cf3c2d7af7be-720x720.png?w=360&h=360&q=75&fit=max&auto=format' />
                    <Typography variant='h5' mt={2}>Design process</Typography>
                    <Typography variant='body1' mt={2} mb={5} sx={{ textDecoration: "underline" }}>Learn More</Typography>
                </Grid>
                <Grid md={12} lg={4} item>
                    <BoxImage src='https://cdn.sanity.io/images/599r6htc/localized/f5f01ba3e1e6f53d3c06dfd69bc0438965c422ac-720x720.png?w=360&h=360&q=75&fit=max&auto=format' />
                    <Typography variant='h5' mt={2}>Prototyping</Typography>
                    <Typography variant='body1' mt={2} mb={5} sx={{ textDecoration: "underline" }}>Learn More</Typography>
                </Grid>
                <Grid md={12} lg={4} item>
                    <BoxImage src='https://cdn.sanity.io/images/599r6htc/localized/7747f4329098ada39aca24b4b43d6d4e8dfaadf4-720x720.png?w=360&h=360&q=75&fit=max&auto=format&dpr=2' />
                    <Typography variant='h5' mt={2}>Design Systems</Typography>
                    <Typography variant='body1' mt={2} mb={5} sx={{ textDecoration: "underline" }}>Learn More</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FigmaHelp
