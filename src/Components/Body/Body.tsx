import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AlphabetPage} from './AlphabetPage/AlphabetPage';
import {DictionaryPage} from './DictionaryPage/DictionaryPage';
import {GrammarPage} from './GrammarPage/GrammarPage';
import {HomePage} from './HomePage/HomePage';
import {TensesPage} from './TensesPage/TensesPage';
import {PhoneticPage} from './PhoneticPage/PhoneticPage';
import {LetterPage} from './AlphabetPage/LetterPage/LetterPage';
import {SoundPage} from './PhoneticPage/SoundPage/SoundPage';

export const Body = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/alphabet" element={<AlphabetPage/>}/>
                <Route path="/alphabet/:title" element={<LetterPage/>}/>
                <Route path="/phonetic" element={<PhoneticPage/>}/>
                <Route path="/phonetic/:url" element={<SoundPage/>}/>
                <Route path="/dictionary" element={<DictionaryPage/>}/>
                <Route path="/grammar" element={<GrammarPage/>}/>
                <Route path="/tenses" element={<TensesPage/>}/>
            </Routes>
        </div>
    );
};


