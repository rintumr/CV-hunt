import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './AppRouter.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

class AppRouter extends Component {

    render() {

        return (
            <Router>
                <div>
                    <h1 className="header">
                    Welcome to <span className="title">CV Hunt</span>
                    </h1>
                    <hr/>
                    <this.Header />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </Router>
        );
    }

    

    Header() {
        return (
            <div>
                <Link to ="/login">
                <Button variant="success">Sign In</Button>
                </Link>
                <Link to ="/register">
                <Button variant="danger">New User</Button>
                </Link>
            </div>
        );
    }
}

export default AppRouter;  