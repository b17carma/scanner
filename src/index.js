import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import 'react-calendar-heatmap/dist/styles.css';
import {Provider} from "react-redux";
import store from "./redux/store";

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);

// Use serviceworker for PWA
serviceWorker.register();
