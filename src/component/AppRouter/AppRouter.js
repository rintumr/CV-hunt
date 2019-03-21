import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './AppRouter.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';

class AppRouter extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            status: '',
            success: '',
            showModal: false
        }
    }

    // Function to update the API response in state

    stateHandler = (value) => {
        console.log("State");
        let data = { ...this.state };
        data.message = value.message;
        data.status = value.status;
        data.success = value.success;
        this.updateState(data);
        this.toggleModal();
    }

    // Function to toggle Modal

    toggleModal = () => {
        let data = { ...this.state };
        data.showModal = !data.showModal;
        this.updateState(data);
    }

    updateState(value) {
        this.setState(value);
    }

    render() {
        let display = null;
        console.log(this.state.showModal);
        if (this.state.showModal) {
            display = <Modal data={this.state} onClose={this.toggleModal} />
        }

        return (
            <div>
                {display}
                <Router>
                    <div>
                        <h1 className="header">
                            Welcome to <span className="title">CV Hunt</span>
                        </h1>
                        <hr />
                        <this.Header />
                        <Route path="/login" component={() => <Login changeState={this.stateHandler} />} />
                        <Route path="/register" render={() => <Register changeState={this.stateHandler} />} />
                    </div>
                </Router>
            </div>
        );
    }

    // Function to display the nav button

    Header() {
        return (
            <div>
                <Link to="/login">
                    <Button variant="success">Sign In</Button>
                </Link>
                <Link to="/register">
                    <Button variant="danger">New User</Button>
                </Link>
            </div>
        );
    }
}

export default AppRouter;  