/*
应用的根组件  
*/
import React , { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import { message, Button } from 'antd';

export default class App extends Component{

render(){//使用jsx语法书写虚拟dom
    return (
        <BrowserRouter>
        <Switch></Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
        </BrowserRouter>
     )
    }
}