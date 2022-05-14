import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {alphabet, AlphabetPage} from './AlphabetPage/AlphabetPage';
import {DictionaryPage} from './DictionaryPage/DictionaryPage';
import {GrammarPage} from './GrammarPage/GrammarPage';
import {HomePage} from './HomePage/HomePage';
import {TensesPage} from './TensesPage/TensesPage';
import {PhoneticPage} from './PhoneticPage/PhoneticPage';
import {E} from './AlphabetPage/E';

export const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/alphabet" element={<AlphabetPage/>}/>
                <Route path="/alphabet/e" element={<E alphabet={alphabet}/>}/>
                <Route path="/phonetic" element={<PhoneticPage/>}/>
                <Route path="/dictionary" element={<DictionaryPage/>}/>
                <Route path="/grammar" element={<GrammarPage/>}/>
                <Route path="/tenses" element={<TensesPage/>}/>
            </Routes>
        </div>
    );
};


