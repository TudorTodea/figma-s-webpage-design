import { Circle } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { BenefitsBox } from '../../styles/benefits'

const Benefits = () => {
    return (
        <Box sx={{ backgroundColor: '#c7b9ff', display: 'flex', justifyContent: 'center', padding: 10 }}>
            <BenefitsBox>
                <Typography variant='h4' sx={{ fontSize: { xs: '30px', md: '50px' } }}>
                    Built with all the benefits of any good cloud software
                </Typography>

                <Grid container mt={5}>
                    <Grid item lg={6} md={12}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '20px' }}>
                            <Circle fontSize="small" sx={{ marginRight: 1 }} />
                            Access files anywhere with Internet access
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '20px' }}>
                            <Circle fontSize="small" sx={{ marginRight: 1 }} />
                            Never have to save files again with auto-save
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={12}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '20px' }}>
                            <Circle fontSize="small" sx={{ marginRight: 1 }} />
                            Goodbye PDFs and outdated exports; share files with a live link
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '20px' }} y>
                            <Circle fontSize="small" sx={{ marginRight: 1 }} />
                            Worry-free editing and collaboration with version history
                        </Typography>
                    </Grid>
                </Grid>
            </BenefitsBox>
        </Box>
    )
}

export default Benefits