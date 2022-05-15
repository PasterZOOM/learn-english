import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';
import React from 'react';
import {v1} from 'uuid';
import {NavLink} from 'react-router-dom';

export type LetterType = {
    id: string,
    title: string,
    transcription: string,
    sound1: string
    urlSound1: string
    sound2?: string
    urlSound2?: string
    sound3?: string
    urlSound3?: string
    rus: string
    url: string
}

export type AlphabetType = Array<LetterType>
export const alphabet: AlphabetType = [
    {
        id: v1(),
        title: 'a',
        transcription: 'eı',
        sound1: 'eı',
        urlSound1: 't_ei',
        sound2: 'æ',
        urlSound2: 't_ae',
        rus: 'эй',
        url: 'a'
    },
    {
        id: v1(),
        title: 'b',
        transcription: 'bi:',
        sound1: 'b',
        urlSound1: 't_b',
        rus: 'би',
        url: 'b'
    },
    {
        id: v1(),
        title: 'c',
        transcription: 'si:',
        sound1: 's',
        urlSound1: 't_s',
        sound2: 'k',
        urlSound2: 't_k',
        rus: 'си',
        url: 'c'

    },
    {
        id: v1(),
        title: 'd',
        transcription: 'di:',
        sound1: 'd',
        urlSound1: 't_d',
        rus: 'ди',
        url: 'd'
    },
    {
        id: v1(),
        title: 'e',
        transcription: 'i:',
        sound1: 'i:',
        urlSound1: 't_ii',
        sound2: 'e',
        urlSound2: 't_e',
        rus: 'ии',
        url: 'e'
    },
    {
        id: v1(),
        title: 'f',
        transcription: 'ef:',
        sound1: 'f',
        urlSound1: 't_f',
        rus: 'эф',
        url: 'f'
    },
    {
        id: v1(),
        title: 'g',
        transcription: 'dʒi:',
        sound1: 'ʤ',
        urlSound1: 't_tu',
        sound2: 'g',
        urlSound2: 't_g',
        rus: 'джи',
        url: 'g'
    },
    {
        id: v1(),
        title: 'h',
        transcription: 'eıtʃ',
        sound1: 'h',
        urlSound1: 't_h',
        rus: 'эйч',
        url: 'h'
    },
    {
        id: v1(),
        title: 'i',
        transcription: 'aı',
        sound1: 'aı',
        urlSound1: 't_ai',
        sound2: 'ı',
        urlSound2: 't_i',
        rus: 'ай',
        url: 'i'
    },
    {
        id: v1(),
        title: 'j',
        transcription: 'ʤeı',
        sound1: 'ʤ',
        urlSound1: 't_tu',
        rus: 'джэй',
        url: 'j'
    },
    {
        id: v1(),
        title: 'k',
        transcription: 'keı',
        sound1: 'k',
        urlSound1: 't_k',
        rus: 'кэй',
        url: 'k'
    },
    {
        id: v1(),
        title: 'l',
        transcription: 'el',
        sound1: 'l',
        urlSound1: 't_l',
        rus: 'эл',
        url: 'l'
    },
    {
        id: v1(),
        title: 'm',
        transcription: 'em',
        sound1: 'm',
        urlSound1: 't_m',
        rus: 'эм',
        url: 'm'
    },
    {
        id: v1(),
        title: 'n',
        transcription: 'en',
        sound1: 'n',
        urlSound1: 't_n',
        rus: 'эн',
        url: 'n'
    },
    {
        id: v1(),
        title: 'o',
        transcription: 'əʊ',
        sound1: 'əʊ',
        urlSound1: 't_ou',
        rus: 'оу',
        url: 'o'
    },
    {
        id: v1(),
        title: 'p',
        transcription: 'pi:',
        sound1: 'p',
        urlSound1: 't_p',
        rus: 'пи',
        url: 'p'
    },
    {
        id: v1(),
        title: 'q',
        transcription: 'kju:',
        sound1: 'k',
        urlSound1: 't_k',
        rus: 'кью',
        url: 'q'
    },
    {
        id: v1(),
        title: 'r',
        transcription: 'ɑ:',
        sound1: 'r',
        urlSound1: 't_r',
        rus: 'ар',
        url: 'r'
    },
    {
        id: v1(),
        title: 's',
        transcription: 'es',
        sound1: 's',
        urlSound1: 't_s',
        rus: 'эс',
        url: 's'
    },
    {
        id: v1(),
        title: 't',
        transcription: 'ti:',
        sound1: 't',
        urlSound1: 't_t',
        rus: 'ти',
        url: 't'
    },
    {
        id: v1(),
        title: 'u',
        transcription: 'ju:',
        sound1: 'ju:',
        urlSound1: 't_ju',
        sound2: 'ʌ',
        urlSound2: 't_a',
        sound3: 'ʊ',
        urlSound3: 't_u',
        rus: 'ю',
        url: 'u'
    },
    {
        id: v1(),
        title: 'v',
        transcription: 'vi:',
        sound1: 'v',
        urlSound1: 't_v',
        rus: 'ви',
        url: 'v'
    },
    {
        id: v1(),
        title: 'w',
        transcription: '\'dʌbl ju:',
        sound1: 'w',
        urlSound1: 't_w',
        rus: 'дабл ю',
        url: 'w'
    },
    {
        id: v1(),
        title: 'x',
        transcription: 'eks',
        sound1: 'ks',
        urlSound1: 't_ks',
        sound2: 'gz',
        urlSound2: 't_gz',
        rus: 'экс',
        url: 'x'
    },
    {
        id: v1(),
        title: 'y',
        transcription: 'waı',
        sound1: 'j',
        urlSound1: 't_j',
        rus: 'уай',
        url: 'y'
    },
    {
        id: v1(),
        title: 'z',
        transcription: 'zed',
        sound1: 'z',
        urlSound1: 't_z',
        rus: 'зэд',
        url: 'z'
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
                                <NavLink to={`/alphabet/${letter.url}`} style={{textDecoration: 'none', color:'initial'}}>
                                    <ListItemButton alignItems={'center'} >
                                        <ListItemText style={{textAlign: 'center'}}>
                                            <div
                                                style={{fontSize: '40px'}}>{letter.title.toUpperCase()}{letter.title}</div>
                                            <div style={{fontSize: '25px'}}>[ {letter.transcription} ]</div>
                                            <div>{letter.sound2 ? `изображает звуки:` : `изображает звук:`}</div>
                                            <div>{!letter.sound2 ? `[ ${letter.sound1} ]` :
                                                !letter.sound3 ? `[ ${letter.sound1}, ${letter.sound2} ]` :
                                                    `[ ${letter.sound1}, ${letter.sound2}, ${letter.sound3} ]`}</div>
                                        </ListItemText>
                                    </ListItemButton>
                                </NavLink>
                            </Tooltip>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    );
};