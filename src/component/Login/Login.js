import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Login.css';
import Validator from '../Validator/Validator';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            emailValidate: false,
            passwordValidate: false,
            isValidated: false
        }
        this.validateHandler = this.validateHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    // Function to validate fields

    validateHandler = (event) => {
        let userData = { ...this.state };
        if (event.target.name === "email") {
            userData.email = event.target.value;
            const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            let enable = false;
            if ((userData.email.length > 0) && (re.test(userData.email))) {
                enable = false;
            } else {
                enable = true;
            }
            userData.emailValidate = enable;
        }
        else if (event.target.name === "password") {
            userData.password = event.target.value;
            let enable = false;
            if (userData.password.length > 0) {
                enable = false
            } else {
                enable = true
            }
            userData.passwordValidate = enable;
        }
        this.setState(userData);
    }

    // Function to enable/disable form button

    buttonHandler = () => {
        let enable = { ...this.state };
        if (!(enable.passwordValidate || enable.emailValidate) && (enable.email.length > 0 && enable.password.length > 0)) {
            enable.isValidated = false;
        } else {
            enable.isValidated = true;
        }
        let value = enable.isValidated;
        return (value);
    }

    // Function for API request

    submitHandler(event) {

        event.preventDefault();
        let self = this;
        axios.post('http://cvhunt.com/API/userLogin', {
            password: self.state.password,
            email: self.state.email,
        })
            .then(function (response) {
                console.log('POST', response.data.message);
                self.props.changeState(response.data);
            })
            .catch(function (error) {
                console.log('POST', error);
            });
    }


    render() {
        return (
            <div className="login">
                <header className="loginHeader"><strong>LOGIN</strong></header>

                <label>Email</label>
                <input type="email" name="email" onChange={this.validateHandler} />
                <Validator name="email" validate={this.state.emailValidate} />
                <label>Password</label>
                <input type="password" name="password" onChange={this.validateHandler} />
                <Validator name="loginPassword" validate={this.state.passwordValidate} />
                <Button type="button" variant="info" disabled={this.buttonHandler()} onClick={this.submitHandler}>Submit</Button>
                <p className="redirectText">Not a member? <a href="/register">Click here</a></p>
            </div>
        );
    }
}

export default Login;