import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.module.scss';
import Melkwegsite from './HOC/melkwegsite'

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Melkwegsite />
            </BrowserRouter>
        );
    }
}

export default App;
