import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import {SoundType, transcriptions} from '../PhoneticPage';

export const SoundPage = () => {
    const {url} = useParams()
    let [sound, setSound] = useState<SoundType | null>(null)

    useEffect(() => {
        const newSound = transcriptions.find(s => s.url === url)
        newSound && setSound(newSound)
    }, [url])
    return (
        <div>
            {sound && (
                <Container fixed>
                    <Grid container
                          direction="column"
                          alignItems="flex-start">
                        <Grid item>
                            <Tooltip title={sound.rus} followCursor placement="right-start">
                                <ListItemButton alignItems={'center'}>
                                    <ListItemText style={{textAlign: 'center', minWidth: '150px'}}>
                                        <div style={{fontSize: '100px',}}>[ {sound.transcription} ]</div>
                                    </ListItemText>
                                </ListItemButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </div>
    )
}