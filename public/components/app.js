import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginWindow } from './login/LoginWindow';

export class App extends Component {

    render() {
        return (
            <div>
            <LoginWindow />
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginWindow}/>
                </Switch>
                </div>
            </BrowserRouter>
            </div>
        );
    }
}
