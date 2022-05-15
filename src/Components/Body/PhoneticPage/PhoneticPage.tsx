import React from 'react';
import {v1} from 'uuid';
import {Container, Grid, ListItemButton, ListItemText, Tooltip} from '@mui/material';


export type SoundType = {
    id: string,
    transcription: string,
    rus: string
    vowel: boolean
    url: string
}
export type TranscriptionsType = Array<SoundType>
export const transcriptions: TranscriptionsType = [
    {
        id: v1(),
        transcription: 'i:',
        rus: 'и-и',
        vowel: true,
        url: 't_ii'
    },
    {
        id: v1(),
        transcription: 'ı',
        rus: 'и',
        vowel: true,
        url: 't_i'
    },
    {
        id: v1(),
        transcription: 'e',
        rus: 'э',
        vowel: true,
        url: 't_e'
    },
    {
        id: v1(),
        transcription: 'æ',
        rus: 'среднее между а и э',
        vowel: true,
        url: 't_ae'
    },
    {
        id: v1(),
        transcription: 'ɑ:',
        rus: 'а-а',
        vowel: true,
        url: 't_aa'
    },
    {
        id: v1(),
        transcription: 'ɒ',
        rus: 'o',
        vowel: true,
        url: 't_o'
    },
    {
        id: v1(),
        transcription: 'ɔ:',
        rus: 'o-о',
        vowel: true,
        url: 't_oo'
    },
    {
        id: v1(),
        transcription: 'ɜ:',
        rus: 'йо',
        vowel: true,
        url: 't_oe'
    },
    {
        id: v1(),
        transcription: 'ə',
        rus: 'неясный звук',
        vowel: true,
        url: 't_'
    },
    {
        id: v1(),
        transcription: 'ʌ',
        rus: 'неударный а',
        vowel: true,
        url: 't_a'
    },
    {
        id: v1(),
        transcription: 'ʊ',
        rus: 'у',
        vowel: true,
        url: 't_u'
    },
    {
        id: v1(),
        transcription: 'u:',
        rus: 'у-у',
        vowel: true,
        url: 't_uu'
    },
    {
        id: v1(),
        transcription: 'aı',
        rus: 'ай',
        vowel: true,
        url: 't_ai'
    },
    {
        id: v1(),
        transcription: 'eı',
        rus: 'ей',
        vowel: true,
        url: 't_ei'
    },
    {
        id: v1(),
        transcription: 'ɔı',
        rus: 'ой',
        vowel: true,
        url: 't_oi'
    },
    {
        id: v1(),
        transcription: 'aʊ',
        rus: 'ау',
        vowel: true,
        url: 't_au'
    },
    {
        id: v1(),
        transcription: 'əʊ',
        rus: 'оу',
        vowel: true,
        url: 't_ou'
    },
    {
        id: v1(),
        transcription: 'ıə',
        rus: 'иэ',
        vowel: true,
        url: 't_ie'
    },
    {
        id: v1(),
        transcription: 'ʊə',
        rus: 'уэ',
        vowel: true,
        url: 't_ue'
    },
    {
        id: v1(),
        transcription: 'eə',
        rus: 'эа',
        vowel: true,
        url: 't_ea'
    },
    {
        id: v1(),
        transcription: 'p',
        rus: 'п',
        vowel: false,
        url: 't_p'
    },
    {
        id: v1(),
        transcription: 'b',
        rus: 'б',
        vowel: false,
        url: 't_b'
    },
    {
        id: v1(),
        transcription: 'm',
        rus: 'м',
        vowel: false,
        url: 't_m'
    },
    {
        id: v1(),
        transcription: 'k',
        rus: 'к',
        vowel: false,
        url: 't_k'
    },
    {
        id: v1(),
        transcription: 'g',
        rus: 'г',
        vowel: false,
        url: 't_g'
    },
    {
        id: v1(),
        transcription: 'f',
        rus: 'ф',
        vowel: false,
        url: 't_f'
    },
    {
        id: v1(),
        transcription: 'v',
        rus: 'в',
        vowel: false,
        url: 't_v'
    },
    {
        id: v1(),
        transcription: 's',
        rus: 'с',
        vowel: false,
        url: 't_s'
    },
    {
        id: v1(),
        transcription: 'z',
        rus: 'з',
        vowel: false,
        url: 't_z'
    },
    {
        id: v1(),
        transcription: 't',
        rus: 'т',
        vowel: false,
        url: 't_t'
    },
    {
        id: v1(),
        transcription: 'd',
        rus: 'д',
        vowel: false,
        url: 't_d'
    },
    {
        id: v1(),
        transcription: 'n',
        rus: 'н',
        vowel: false,
        url: 't_n'
    },
    {
        id: v1(),
        transcription: 'l',
        rus: 'л',
        vowel: false,
        url: 't_l'
    },
    {
        id: v1(),
        transcription: 'ʃ',
        rus: 'ш',
        vowel: false,
        url: 't_sh'
    },
    {
        id: v1(),
        transcription: 'ʒ',
        rus: 'ж',
        vowel: false,
        url: 't_su'
    },
    {
        id: v1(),
        transcription: 'tʃ',
        rus: 'ч',
        vowel: false,
        url: 't_ch'
    },
    {
        id: v1(),
        transcription: 'ʤ',
        rus: 'дж',
        vowel: false,
        url: 't_tu'
    },
    {
        id: v1(),
        transcription: 'r',
        rus: 'р',
        vowel: false,
        url: 't_r'
    },
    {
        id: v1(),
        transcription: 'h',
        rus: 'х',
        vowel: false,
        url: 't_h'
    },
    {
        id: v1(),
        transcription: 'j',
        rus: 'й',
        vowel: false,
        url: 't_j'
    },
    {
        id: v1(),
        transcription: 'ju:',
        rus: 'ю-у',
        vowel: false,
        url: 't_ju'
    },
    {
        id: v1(),
        transcription: 'je',
        rus: 'e',
        vowel: false,
        url: 't_je'
    },
    {
        id: v1(),
        transcription: 'jɒ',
        rus: 'ё',
        vowel: false,
        url: 't_jo'
    },
    {
        id: v1(),
        transcription: 'jʌ',
        rus: 'я',
        vowel: false,
        url: 't_ja'
    },
    {
        id: v1(),
        transcription: 'w',
        rus: 'ув',
        vowel: false,
        url: 't_w'
    },
    {
        id: v1(),
        transcription: 'ŋ',
        rus: 'н',
        vowel: false,
        url: 't_ng'
    },
    {
        id: v1(),
        transcription: 'θ',
        rus: 'c',
        vowel: false,
        url: 't_ths'
    },
    {
        id: v1(),
        transcription: 'ð',
        rus: 'з',
        vowel: false,
        url: 't_thz'
    },
]

export const PhoneticPage = () => {

    return (
        <Container fixed>
            <Grid container textAlign={'center'} spacing={5}>
                <Grid item xs={6}>
                    <Tooltip title={'Гласные звуки'} followCursor placement="right-start">
                        <ListItemButton component="a" href={`/phonetic/vowels`}
                                        alignItems={'center'}>
                            <ListItemText style={{textAlign: 'center'}}>
                                Vowels
                            </ListItemText>
                        </ListItemButton>
                    </Tooltip>
                    <Grid container>
                        {transcriptions.map((sign: SoundType) => {
                            return sign.vowel && (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={sign.id}>
                                    <Tooltip title={sign.rus} followCursor placement="right-start">
                                        <ListItemButton component="a" href={`/phonetic/${sign.url}`}
                                                        alignItems={'center'}>
                                            <ListItemText style={{textAlign: 'center'}}>
                                                <div style={{fontSize: '40px'}}>[ {sign.transcription} ]</div>
                                            </ListItemText>
                                        </ListItemButton>
                                    </Tooltip>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <Tooltip title={'Согласные звуки'} followCursor placement="right-start">
                        <ListItemButton component="a" href={`/phonetic/consonants`}
                                        alignItems={'center'}>
                            <ListItemText style={{textAlign: 'center'}}>
                                Сonsonants
                            </ListItemText>
                        </ListItemButton>
                    </Tooltip>
                    <Grid container alignItems={'center'} textAlign={'center'}>
                        {transcriptions.map((sign: SoundType) => {
                            return !sign.vowel && (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={sign.id}>
                                    <Tooltip title={sign.rus} followCursor placement="right-start">
                                        <ListItemButton component="a" href={`/phonetic/${sign.url}`}
                                                        alignItems={'center'}>
                                            <ListItemText style={{textAlign: 'center'}}>
                                                <div style={{fontSize: '40px'}}>[ {sign.transcription} ]</div>
                                            </ListItemText>
                                        </ListItemButton>
                                    </Tooltip>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    );
};