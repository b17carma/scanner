import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);

// Use serviceworker for PWA
serviceWorker.register();
