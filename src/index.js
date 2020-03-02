import React from 'react';
import ReactDOM from 'react-dom';
/**
 * ? why do we include {} while importing BrowerRouter component
 */
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    /**
     * *We wrap our app component around browserRouter component so that we can access all the functionality of the browserRouter inside App
     */
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));


