import { Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const GridGifComp = () => {
    return (
        <>
            <Grid container>
                <Grid item md={12} lg={6} p={5} mt={20} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        Design for the web made easy
                    </Typography>
                    <Typography mt={2} variant="body1">
                        Figma was built for the future of web. That’s why you’ll see features you won’t find elsewhere.
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
                                A modern pen tool: Draw in any direction with Vector Networks. No more merging or needing to connect to the path's original point.
                            </ListItem>
                            <ListItem>
                                Instant arc designs: Design clocks, watch screens, or pie charts easily with the Arc tool.</ListItem>
                            <ListItem>
                                Be expressive with OpenType: Tap into advanced font features to fully express your brand.</ListItem>

                        </List>
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6} mt={10}>
                    <video loop="true" autoplay="autoplay" id="vid" muted width='100%' height="auto">
                        <source src="https://cdn.sanity.io/files/599r6htc/localized/a98a5cd76ef39cea239f565695c902b57101bb43.mp4" type="video/mp4" />
                    </video>
                </Grid>
                <Grid item md={12} lg={6}>
                    <video loop="true" autoplay="autoplay" id="vid" muted width='100%' height="auto">
                        <source src="https://cdn.sanity.io/files/599r6htc/localized/73cabd83927e5e3049d1674b1cf8f49728fcfe0e.mp4" type="video/mp4" />
                    </video>
                </Grid>
                <Grid item md={12} lg={6} p={5} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        Design responsively with Auto Layout
                    </Typography>
                    <Typography mt={2} variant="paragraph">
                        Spend more time iterating and less time moving things around.
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
                            Less manual resizing: Buttons can resize with their text and lists can rearrange themselves when items are moved around.
                        </ListItem>
                        <ListItem>
                            Stretch to fill: Auto Layout components can now stretch left and right (or top and bottom) for easier responsive design.</ListItem>
                        <ListItem>
                            Design speaks development: Auto Layout’s padding, direction, and spacing settings translate directly into code, simplifying developer handoffs.</ListItem>
                    </List>
                </Grid>
                <Grid item md={12} lg={6} p={5} mt={10} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        Automate and augment your work with Plugins and Widgets
                    </Typography>
                    <Typography mt={2} variant="body1">
                        Remove repetitive tasks, bring in data, and power custom workflows.
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
                                Plugins: Automate tasks and improve your workflow.
                            </ListItem>
                            <ListItem>
                                Widgets: Boost collaboration and productivity with your team.</ListItem>
                            <ListItem>
                                Easy development: If you can build a website, you can build a plugin or widget.</ListItem>
                            <ListItem>
                                Private extensions: Organization customers can create and distribute private plugins and widgets within their company.
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item md={12} lg={6} mt={5}>
                    <video loop="true" autoplay="autoplay" id="vid" muted width='100%' height="auto">
                        <source src="https://cdn.sanity.io/files/599r6htc/localized/c48f753ce58c8aef5d5539674cac135203949bfd.mp4" type="video/mp4" />
                    </video>
                </Grid>
            </Grid>
        </>
    )
}

export default GridGifComp