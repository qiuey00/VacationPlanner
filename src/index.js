import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
const articleData = require('./locations.json');

let globalLocationList = []

ReactDOM.render(<App data={articleData} globalLocationList={globalLocationList}/>, document.getElementById('root'));
