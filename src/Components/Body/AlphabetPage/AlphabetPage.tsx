import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import React from 'react';
import {v1} from 'uuid';

export type LetterType = {
    id: string,
    upperCaseLetter: string,
    lowerCaseLetter: string,
    transcription: string,
    sound1: string
    sound2?: string
    sound3?: string
    rus: string
    url: string
}
export type AlphabetType = Array<LetterType>
export const alphabet: AlphabetType = [
    {
        id: v1(),
        upperCaseLetter: 'A',
        lowerCaseLetter: 'a',
        transcription: '[ eı ]',
        sound1: 'eı',
        sound2: 'æ',
        rus: 'эй',
        url: '/a'
    },
    {
        id: v1(),
        upperCaseLetter: 'B',
        lowerCaseLetter: 'b',
        transcription: '[ bi: ]',
        sound1: 'b',
        rus: 'би',
        url: '/b'
    },
    {
        id: v1(),
        upperCaseLetter: 'C',
        lowerCaseLetter: 'c',
        transcription: '[ si: ]',
        sound1: 's',
        sound2: 'k',
        rus: 'си',
        url: '/c'

    },
    {
        id: v1(),
        upperCaseLetter: 'D',
        lowerCaseLetter: 'd',
        transcription: '[ di: ]',
        sound1: 'd',
        rus: 'ди',
        url: '/d'
    },
    {
        id: v1(),
        upperCaseLetter: 'E',
        lowerCaseLetter: 'e',
        transcription: '[ i: ]',
        sound1: 'i:',
        sound2: 'e',
        rus: 'ии',
        url: '/e'
    },
    {
        id: v1(),
        upperCaseLetter: 'F',
        lowerCaseLetter: 'f',
        transcription: '[ ef: ]',
        sound1: 'f',
        rus: 'эф',
        url: '/f'
    },
    {
        id: v1(),
        upperCaseLetter: 'G',
        lowerCaseLetter: 'g',
        transcription: '[ dʒi: ]',
        sound1: 'ʤ',
        sound2: 'g',
        rus: 'джи', url: '/g'
    },
    {
        id: v1(),
        upperCaseLetter: 'H',
        lowerCaseLetter: 'h',
        transcription: '[ eıtʃ  ]',
        sound1: 'h',
        rus: 'эйч',
        url: '/h'
    },
    {
        id: v1(),
        upperCaseLetter: 'I',
        lowerCaseLetter: 'i',
        transcription: '[ aı ]',
        sound1: 'aı',
        sound2: 'ı',
        rus: 'ай',
        url: '/i'
    },
    {
        id: v1(),
        upperCaseLetter: 'J',
        lowerCaseLetter: 'j',
        transcription: '[ ʤeı ]',
        sound1: 'ʤ',
        rus: 'джэй',
        url: '/j'
    },
    {
        id: v1(),
        upperCaseLetter: 'K',
        lowerCaseLetter: 'k',
        transcription: '[ keı ]',
        sound1: 'k',
        rus: 'кэй',
        url: '/k'
    },
    {
        id: v1(),
        upperCaseLetter: 'L',
        lowerCaseLetter: 'l',
        transcription: '[ el ]',
        sound1: 'l',
        rus: 'эл',
        url: '/l'
    },
    {
        id: v1(),
        upperCaseLetter: 'M',
        lowerCaseLetter: 'm',
        transcription: '[ em ]',
        sound1: 'm',
        rus: 'эм',
        url: '/m'
    },
    {
        id: v1(),
        upperCaseLetter: 'N',
        lowerCaseLetter: 'n',
        transcription: '[ en ]',
        sound1: 'n',
        rus: 'эн',
        url: '/n'
    },
    {
        id: v1(),
        upperCaseLetter: 'O',
        lowerCaseLetter: 'o',
        transcription: '[ əʊ ]',
        sound1: 'əʊ',
        rus: 'оу',
        url: '/o'
    },
    {
        id: v1(),
        upperCaseLetter: 'P',
        lowerCaseLetter: 'p',
        transcription: '[ pi: ]',
        sound1: 'p',
        rus: 'пи',
        url: '/p'
    },
    {
        id: v1(),
        upperCaseLetter: 'Q',
        lowerCaseLetter: 'q',
        transcription: '[ kju: ]',
        sound1: 'k',
        rus: 'кью',
        url: '/q'
    },
    {
        id: v1(),
        upperCaseLetter: 'R',
        lowerCaseLetter: 'r',
        transcription: '[ ɑ: ]',
        sound1: 'r',
        rus: 'ар',
        url: '/r'
    },
    {
        id: v1(),
        upperCaseLetter: 'S',
        lowerCaseLetter: 's',
        transcription: '[ es ]',
        sound1: 's',
        rus: 'эс',
        url: '/s'
    },
    {
        id: v1(),
        upperCaseLetter: 'T',
        lowerCaseLetter: 't',
        transcription: '[ ti: ]',
        sound1: 't',
        rus: 'ти',
        url: '/t'
    },
    {
        id: v1(),
        upperCaseLetter: 'U',
        lowerCaseLetter: 'u',
        transcription: '[ ju: ]',
        sound1: 'ju:',
        sound2: ' ʌ',
        sound3: 'ʊ',
        rus: 'ю', url: '/u'
    },
    {
        id: v1(),
        upperCaseLetter: 'V',
        lowerCaseLetter: 'v',
        transcription: '[ vi: ]',
        sound1: 'v',
        rus: 'ви',
        url: '/v'
    },
    {
        id: v1(),
        upperCaseLetter: 'W',
        lowerCaseLetter: 'w',
        transcription: '[ \'dʌbl ju: ]',
        sound1: 'w',
        rus: 'дабл ю', url: '/w'
    },
    {
        id: v1(),
        upperCaseLetter: 'X',
        lowerCaseLetter: 'x',
        transcription: '[ eks ]',
        sound1: 'ks',
        sound2: 'gz',
        rus: 'экс', url: '/x'
    },
    {
        id: v1(),
        upperCaseLetter: 'Y',
        lowerCaseLetter: 'y',
        transcription: '[ waı ]',
        sound1: 'j',
        rus: 'уай',
        url: '/y'
    },
    {
        id: v1(),
        upperCaseLetter: 'Z',
        lowerCaseLetter: 'z',
        transcription: '[ zed ]',
        sound1: 'z',
        rus: 'зэд',
        url: '/z'
    },
]

export const AlphabetPage = () => {


    return (
        <Container fixed>
            <Grid container>
                {alphabet.map((letter: LetterType) => {
                    return (
                        <Grid item xl={12} xs={6} sm={4} md={3} lg={2} key={letter.id}>
                            <Tooltip title={letter.rus} followCursor placement="right-start">
                                <ListItemButton component="a" href={`/alphabet${letter.url}`} alignItems={'center'}>
                                    <ListItemText style={{textAlign: 'center'}}>
                                        <div
                                            style={{fontSize: '40px'}}>{letter.upperCaseLetter}{letter.lowerCaseLetter}</div>
                                        <div style={{fontSize: '25px'}}>{letter.transcription}</div>
                                        <div>{letter.sound2 ? `изображает звуки:` : `изображает звук:`}</div>
                                        <div>{!letter.sound2 ? `[ ${letter.sound1} ]` :
                                            !letter.sound3 ? `[ ${letter.sound1}, ${letter.sound2} ]` :
                                                `[ ${letter.sound1}, ${letter.sound2}, ${letter.sound3} ]`}</div>
                                    </ListItemText>
                                </ListItemButton>
                            </Tooltip>
                        </Grid>

                    )
                })}
            </Grid>
        </Container>

    );
};