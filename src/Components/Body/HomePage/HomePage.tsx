import React from 'react';
import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import {menuItems} from '../../Navbar/Navbar';


export const HomePage = () => {
    return (
        <Container fixed>
                {menuItems.map((button) => {
                    return ( button.title !== 'Home' &&
                        <Grid key={button.id}>
                            <Tooltip title={button.rus} arrow placement='left'>
                                <ListItemButton component="a" href={button.url} alignItems={'center'}>
                                    <ListItemText style={{textAlign: 'center'}}>
                                        <div style={{fontSize: '40px'}}>{button.title}</div>
                                    </ListItemText>
                                </ListItemButton>
                            </Tooltip>
                        </Grid>

                    )
                })}
        </Container>
    );
};