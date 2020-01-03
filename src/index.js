import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
//import store from './redux/parent';
import './index.css';
//import App from './App';
import App from './js/components/App';
import Form from './js/components/InputForm';
import DataTable from './js/components/dataTable';
import FromDetail from './js/components/detail';
// import index from './js/index';
import View from './redux/view';
import Reapeater from './Repeater';
import a from './redux/redux2';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';


export default function ReactRouter() {

    return (
        <Router>
            <Switch >
                <Route exact path="/">
                    <Form />
                </Route>
                <Route path="/datatable">
                    <DataTable />
                </Route>
                <Route path="/detail">
                    <FromDetail />
                </Route>
            </Switch>
        </Router>
    )
}

// ReactDOM.render(<Provider store={store}><ReactRouter /></Provider>, document.getElementById('root'));
ReactDOM.render(<ReactRouter />, document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><View /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Reapeater></Reapeater>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
