import { Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const GifComponent = () => {
    return (
        <>
            <Grid container>
                <Grid item md={12} lg={6}>
                    <video loop="true" autoplay="autoplay" id="vid" muted width='100%' height="80%">
                        <source src="https://cdn.sanity.io/files/599r6htc/localized/ed502d68dc88b05937e8ca42f10cebd4159334b4.mp4" type="video/mp4" />
                    </video>
                </Grid>
                <Grid item md={12} lg={6} p={5} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        Be efficiently consistent and consistently efficient
                    </Typography>
                    <Typography mt={2} variant="paragraph">
                        With your design system in the cloud, all the goodies in your libraries are always one click away.
                    </Typography>

                    <List
                        sx={{
                            listStyleType: 'disc',
                            pl: 2,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}>
                        <ListItem>
                            Flexible Styles: Create consistent Styles—color, text, grid, or effect. Apply them to any text or object across all your projects.
                        </ListItem>
                        <ListItem>
                            Design systematically: Speed up design with components. Edit and override on the fly.</ListItem>
                        <ListItem>
                            Accessible libraries: A quick search surfaces the assets you seek. Simply drag and drop them into your file.</ListItem>
                    </List>
                </Grid>
                <Grid item md={12} lg={6} mt={5}>
                    <video loop="true" autoplay="autoplay" id="vid" muted width='100%' height="auto">
                        <source src="https://cdn.sanity.io/files/599r6htc/localized/97223cf6f53cad6ee7d3b79b07a905f23daed273.mp4" type="video/mp4" />
                    </video>
                </Grid>
                <Grid item md={12} lg={6} p={5} mt={10} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        Be efficiently consistent and consistently efficient
                    </Typography>
                    <Typography mt={2} variant="body1">
                        With your design system in the cloud, all the goodies in your libraries are always one click away.
                    </Typography>
                    <Typography mt={2} variant="body1">
                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                '& .MuiListItem-root': {
                                    display: 'list-item',
                                },
                            }}>
                            <ListItem >
                                Flexible Styles : Create consistent Styles—color, text, grid, or effect. Apply them to any text or object across all your projects.
                            </ListItem>
                            <ListItem>
                                Design systematically: Speed up design with components. Edit and override on the fly.</ListItem>
                            <ListItem>
                                Accessible libraries: A quick search surfaces the assets you seek. Simply drag and drop them into your file.</ListItem>
                        </List>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default GifComponent