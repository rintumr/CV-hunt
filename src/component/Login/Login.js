import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

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
            isValidated:false
        }
        console.log("Login", this.state);
        this.validateHandler = this.validateHandler.bind(this);
    }

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


    buttonHandler = () => {
        let enable = {...this.state};
        if(!(enable.passwordValidate || enable.emailValidate) && (enable.email.length>0 && enable.password.length>0)){
            enable.isValidated = false;
        }else{
            enable.isValidated = true;
        }
        let value = enable.isValidated;
        return (value);
    }


    render() {
        return (
            <div className="login">
                <header className="loginHeader"><strong>LOGIN</strong></header>
                <form name="login-form">

                    <label>Email</label>
                    <input type="email" name="email" onChange={this.validateHandler} />
                    <Validator name="email" validate={this.state.emailValidate} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.validateHandler} />
                    <Validator name="loginPassword" validate={this.state.passwordValidate} />
                    <Button variant="info" disabled={this.buttonHandler()}>Submit</Button>
                </form>
                <p className="redirectText">Not a member? <a href="/register">Click here</a></p>
            </div>
        );
    }
}

export default Login;