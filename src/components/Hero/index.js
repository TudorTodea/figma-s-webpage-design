import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { HeroImage } from '../../styles/Hero'

const Hero = () => {
    return (
        <Box sx={{ backgroundColor: '#c7b9ff', display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={12} lg={6} p={5} mt={15} sx={{ display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
                        <Typography variant="body1" sx={{ fontWeight: 800 }}>DESIGN FEATURES</Typography>
                        <Typography variant="h2" mt={5} sx={{ fontWeight: 800 }}>
                            It’s time to design on your terms
                        </Typography>
                        <Typography mt={2} variant="body1">
                            Figma is the only platform that brings together powerful design features you already love and a more efficient workflow to boot.
                        </Typography>

                    </Grid>
                    <Grid item md={12} lg={6} p={5} mt={5} sx={{ display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
                        <HeroImage src='https://cdn.sanity.io/images/599r6htc/localized/d7f10319305a2d1f5b8ecab86ebf3f345befda7e-1108x1108.png?w=514&q=75&fit=max&auto=format&dpr=1.5' alt='photo1' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Hero