import React from 'react';
import ReactDOM from  'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';
import {Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

ReactDOM.render(
    <Provider store={store()}>
    <Routes />
    </Provider>,
    document.getElementById('root')
);
