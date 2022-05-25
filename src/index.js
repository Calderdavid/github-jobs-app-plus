import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DATA from './data/jobs.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App jobs={DATA}/>
);


