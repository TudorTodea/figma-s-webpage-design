import { useTheme } from "@mui/system";
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Grid, List, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FooterIconsTypography, FooterTitle } from '../../styles/footer'

const Footer = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box mt={20}>

            <Grid container>
                <Grid item sm={6} lg={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FooterTitle variant='h5'>Figma</FooterTitle>
                    <Box  >
                        <FooterIconsTypography><Twitter /></FooterIconsTypography>
                        <FooterIconsTypography><YouTube /></FooterIconsTypography>
                        <FooterIconsTypography><Instagram /></FooterIconsTypography>
                        <FooterIconsTypography><Facebook /></FooterIconsTypography>
                    </Box>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <FooterTitle variant='h6'>Use cases</FooterTitle>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItemText>UI design</ListItemText>
                        <ListItemText>UX design</ListItemText>
                        <ListItemText>Graphic design</ListItemText>
                        <ListItemText>Wireframming</ListItemText>
                        <ListItemText>Diagramming</ListItemText>
                        <ListItemText>Brainstorming</ListItemText>
                        <ListItemText>Templates</ListItemText>
                        <ListItemText>Remote design</ListItemText>
                        <ListItemText>Agencies</ListItemText>
                        <ListItemText>Figma for education</ListItemText>

                    </List>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <FooterTitle variant='h6'>Explore</FooterTitle>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItemText>UI design</ListItemText>
                        <ListItemText>UX design</ListItemText>
                        <ListItemText>Graphic design</ListItemText>
                        <ListItemText>Wireframming</ListItemText>
                        <ListItemText>Diagramming</ListItemText>
                        <ListItemText>Brainstorming</ListItemText>
                        <ListItemText>Templates</ListItemText>
                        <ListItemText>Remote design</ListItemText>
                        <ListItemText>Agencies</ListItemText>
                        <ListItemText>Figma for education</ListItemText>

                    </List>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <FooterTitle variant='h6'>Resources</FooterTitle>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItemText>UI design</ListItemText>
                        <ListItemText>UX design</ListItemText>
                        <ListItemText>Graphic design</ListItemText>
                        <ListItemText>Wireframming</ListItemText>
                        <ListItemText>Diagramming</ListItemText>
                        <ListItemText>Brainstorming</ListItemText>
                        <ListItemText>Templates</ListItemText>
                        <ListItemText>Remote design</ListItemText>
                        <ListItemText>Agencies</ListItemText>
                        <ListItemText>Figma for education</ListItemText>

                    </List>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <FooterTitle variant='h6'>Compare</FooterTitle>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItemText>UI design</ListItemText>
                        <ListItemText>UX design</ListItemText>
                        <ListItemText>Graphic design</ListItemText>
                        <ListItemText>Wireframming</ListItemText>
                        <ListItemText>Diagramming</ListItemText>
                        <ListItemText>Brainstorming</ListItemText>
                        <ListItemText>Templates</ListItemText>
                        <ListItemText>Remote design</ListItemText>
                        <ListItemText>Agencies</ListItemText>
                        <ListItemText>Figma for education</ListItemText>

                    </List>
                </Grid>
                <Grid item sm={6} lg={2}>
                    <FooterTitle variant='h6'>Compare</FooterTitle>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItemText>UI design</ListItemText>
                        <ListItemText>UX design</ListItemText>
                        <ListItemText>Graphic design</ListItemText>
                        <ListItemText>Wireframming</ListItemText>
                        <ListItemText>Diagramming</ListItemText>
                        <ListItemText>Brainstorming</ListItemText>
                        <ListItemText>Templates</ListItemText>
                        <ListItemText>Remote design</ListItemText>
                        <ListItemText>Agencies</ListItemText>
                        <ListItemText>Figma for education</ListItemText>

                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer