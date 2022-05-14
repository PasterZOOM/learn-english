import React from 'react';
import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import {AlphabetType, LetterType} from './AlphabetPage';

export type APropsType = {
    alphabet: AlphabetType
}


export const E: React.FC<APropsType> = ({alphabet}) => {
    const letter = alphabet.find((l: LetterType) => l.upperCaseLetter === 'E')

    return (letter ?
            <Container fixed>
                <Grid container>
                    <Grid item justifyItems={'center'} alignItems={'center'}>
                        <Tooltip title={letter.rus} followCursor placement="right-start">
                            <ListItemButton component="a" href={`/alphabet${letter.url}`} alignItems={'center'}>
                                <ListItemText style={{textAlign: 'center'}}>
                                    <div
                                        style={{
                                            fontSize: '100px',
                                            lineHeight: '1'
                                        }}>{letter.upperCaseLetter}{letter.lowerCaseLetter}</div>
                                    <div style={{fontSize: '50px'}}>{letter.transcription}</div>
                                    <div>{letter.sound2 ? `изображает звуки:` : `изображает звук:`}</div>
                                    <div>{!letter.sound2 ? `[ ${letter.sound1} ]` :
                                        !letter.sound3 ? `[ ${letter.sound1}, ${letter.sound2} ]` :
                                            `[ ${letter.sound1}, ${letter.sound2}, ${letter.sound3} ]`}</div>
                                </ListItemText>
                            </ListItemButton>
                        </Tooltip>
                    </Grid>

                </Grid>
            </Container>
            :
            <div>
                Error
            </div>
    );
};
