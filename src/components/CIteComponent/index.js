import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { CiteTitle } from '../../styles/CiteComponent'

const CiteComponent = () => {
    return (
        <Box mb={10} sx={{ backgroundColor: '#c7b9ff', display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="lg" sx={{
                paddingTop: 10
            }}>
                <CiteTitle mb={5}>
                    "I want my team to spend time thinking about high level UX problems, rather than mindlessly repeating busy work. Figma helps them do that."
                </CiteTitle>
                <Typography variant="h6" mb={10} sx={{ fontWeight: 400 }}>
                    Ellen Beldner, Head of Product Design at StitchFix
                </Typography>
            </Container>
        </Box>
    )
}

export default CiteComponent