import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyle } from '../src/statics/style';
import store from './store';
import { Provider } from 'react-redux';

const warp = (
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
);

ReactDOM.render(warp, document.getElementById('root'));