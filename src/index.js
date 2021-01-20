import React from 'react';
import ReactDOM from "react-dom";
import App from './app';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./store/index.js";
import {BrowserRouter} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


let store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
