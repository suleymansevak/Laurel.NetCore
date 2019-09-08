import React, { Component } from 'react';
import { Switch, Route, HashRouter, Link, Router, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import GetList2 from './components/GetList2';
import Register from './components/Login/register';
import AddProduct from './components/Product/AddProduct'
import Menu from './components/Menu/Menu';
import './Loginn.css';



export default class App extends Component {
    render() {
        return (
            <div>

                <Menu />
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Login} />
                        <Route path='/GetList2' component={GetList2} />
                        <Route path='/Register' component={Register} />
                        <Route path='/AddProduct' component={AddProduct} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};
