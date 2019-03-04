import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSubcriber from './components/addSubscriber/AddSubscriber';

const routing =(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={App} />
    <Route path="/add" exact component={AddSubcriber} />
    </Switch> 
    </BrowserRouter>
)


ReactDOM.render( routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
