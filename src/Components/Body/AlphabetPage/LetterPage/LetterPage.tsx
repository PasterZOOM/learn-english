import React, {useEffect, useState} from 'react';
import {alphabet, LetterType} from '../AlphabetPage';
import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import {useParams} from 'react-router-dom';


export const LetterPage = () => {
    const {title} = useParams()
    let [letter, setLetter] = useState<LetterType | null>(null)

    useEffect(() => {
        const newLetter = alphabet.find(l => l.title === title)
        newLetter && setLetter(newLetter)
    }, [title])
    return (
        <div>
            {letter && (
                <Container fixed>
                    <Grid container
                          direction="column"
                          alignItems="flex-start">
                        <Grid item>
                            <Tooltip title={letter.rus} followCursor placement="right-start">
                                <ListItemButton alignItems={'center'}>
                                    <ListItemText style={{textAlign: 'center', minWidth: '150px'}}>
                                        <div style={{
                                            fontSize: '100px',
                                            lineHeight: '1'
                                        }}>{letter.title.toUpperCase()}{letter.title}</div>
                                        <div style={{fontSize: '50px'}}>[ {letter.transcription} ]</div>
                                    </ListItemText>
                                </ListItemButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <ListItemButton component="a" href={`/phonetic/${letter.urlSound1}`} alignItems={'center'}>
                                <ListItemText style={{fontSize: '100px', textAlign: 'center', minWidth: '150px'}}>
                                    <div style={{fontSize: '60px'}}>[ {letter.sound1} ]</div>
                                </ListItemText>
                            </ListItemButton>
                        </Grid>
                        {letter.sound2 && (<Grid item>
                            <ListItemButton component="a" href={`/phonetic/${letter.urlSound2}`} alignItems={'center'}>
                                <ListItemText style={{textAlign: 'center', minWidth: '150px'}}>
                                    <div style={{fontSize: '60px'}}>[ {letter.sound2} ]</div>
                                </ListItemText>
                            </ListItemButton>
                        </Grid>)}
                        {letter.sound3 && (<Grid item>
                            <ListItemButton component="a" href={`/phonetic/${letter.urlSound3}`} alignItems={'center'}>
                                <ListItemText style={{textAlign: 'center', minWidth: '150px'}}>
                                    <div style={{fontSize: '60px'}}>[ {letter.sound3} ]</div>
                                </ListItemText>
                            </ListItemButton>
                        </Grid>)}

                    </Grid>
                </Container>
            )}
        </div>
    )
}