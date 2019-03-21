import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Register.css';
import Validator from '../Validator/Validator';

class Register extends Component {

    constructor(props) {
        super();

        this.state = {
            user: {
                userName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: '',
                userType: 1,
                userNameValidate: false,
                emailValidate: false,
                confirmEmailValidate: false,
                passwordValidate: false,
                confirmPasswordValidate: false,
                emailVerification: false,
                passwordVerification: false,
            },
            userType: '1',
            isSubmitted: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    // Function to validate and update the user input

    changeHandler = (event) => {
        let updateState = { ...this.state.user };

        if (event.target.name === "userName") {
            updateState.userName = event.target.value;
            let enable = ((updateState.userName.length > 0 && (!updateState.userName.startsWith(" "))) ? false : true);
            updateState.userNameValidate = enable;
            this.updateHandler(updateState);
        }
        else if (event.target.name === "email") {
            updateState.email = event.target.value;
            const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            let enable = false;
            if (!(re.test(updateState.email) || (updateState.email > 0))) {
                enable = true;
            } else {
                enable = false;
            }
            let enableValidation = this.verificationHandler(updateState.email, updateState.confirmEmail);
            updateState.emailValidate = enable;
            updateState.emailVerification = enableValidation;
            this.updateHandler(updateState);
        }
        else if (event.target.name === "confirmEmail") {
            updateState.confirmEmail = event.target.value;
            let enableValidation = this.verificationHandler(updateState.email, updateState.confirmEmail);
            updateState.emailVerification = enableValidation;
            this.updateHandler(updateState);
        }
        else if (event.target.name === "password") {
            updateState.password = event.target.value;
            let enableValidation = this.verificationHandler(updateState.password, updateState.confirmPassword);
            let reWhiteSpace = new RegExp(/^\w*$/);
            let enable = (((event.target.value.length > 3) && (reWhiteSpace.test(event.target.value))) ? false : true);
            updateState.passwordValidate = enable;
            updateState.passwordVerification = enableValidation;
            this.updateHandler(updateState);
        }
        else if (event.target.name === "confirmPassword") {
            updateState.confirmPassword = event.target.value;
            console.log("Verify123", updateState.confirmPassword);
            let enableValidation = this.verificationHandler(updateState.password, updateState.confirmPassword);
            updateState.passwordVerification = enableValidation;
            this.updateHandler(updateState);
            console.log("Verify", enableValidation);
        }
    }

    // Function to verify the email and password

    verificationHandler(value, verifyValue) {
        if (value === verifyValue) {
            return false;
        } else {
            return true;
        }
    }

    // Function to update state

    updateHandler = (value) => {
        let temp = { ...this.state };
        temp.user = value;
        this.setState({ user: temp.user });
    }

    // Function to enable/disable submit button

    buttonHandler() {
        let validate = false;
        let userValues = false;
        let disable = true;
        let user = { ...this.state.user };
        console.log("User", user)
        if (!(user.userNameValidate || user.emailValidate || user.confirmEmailValidate ||
            user.passwordValidate || user.confirmPasswordValidate || user.passwordVerification || user.emailVerification)) {
            validate = true;
        }
        if ((user.userName.length > 0) && (user.email.length > 0) && (user.confirmEmail.length > 0) &&
            (user.password.length > 0) && (user.confirmPassword.length > 0)) {
            userValues = true;
        }
        if (validate && userValues) {
            disable = false;
            return disable;
        } else {
            disable = true;
            return disable;
        }
    }

    // Function to call POST API

    submitHandler(event) {
        
        event.preventDefault();
        let isSubmit = true;
        let self =this;
        this.setState({isSubmitted:isSubmit});
        axios.post('http://cvhunt.com/API/signupInfo', {
        username: self.state.user.userName,
        password: self.state.user.password,
        email: self.state.user.email,
        usertype: self.state.user.userType
    })
        .then(function (response) {
            console.log('POST',response.data.message);
            self.props.changeState (response.data);
        })
        .catch(function (error) {
            console.log('POST', error);
        });
    }

    render() {
        
        return (
            <div className="register">
                <header className="registerHeader"><strong>REGISTER</strong></header><hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <label>User Name </label>
                            <input type="text" name="userName" value={this.state.user.userName} onChange={this.changeHandler} />

                            <Validator name="userName" validate={this.state.user.userNameValidate} />

                            <label>Email </label>
                            <input type="email" name="email" value={this.state.user.email} onChange={this.changeHandler} />

                            <Validator name="email" validate={this.state.user.emailValidate} />

                            <label>Confirm Email </label>
                            <input type="email" name="confirmEmail" value={this.state.user.confirmEmail} onChange={this.changeHandler} />

                            <Validator name="confirmEmail" validate={this.state.user.emailVerification} />
                        </div>

                        <div className="col-md-6">
                            <label>Password </label>
                            <input type="password" name="password" value={this.state.user.password} onChange={this.changeHandler} />

                            <Validator name="password" validate={this.state.user.passwordValidate} />

                            <label>Confirm Password </label>
                            <input type="password" name="confirmPassword" value={this.state.user.confirmPassword} onChange={this.changeHandler} />

                            <Validator name="confirmPassword" validate={this.state.user.passwordVerification} />

                            <label>User Type </label>
                            <input type="text" name="userType" defaultValue={this.state.user.userType} disabled />

                        </div>

                    </div>
                    <Button type="button" variant="info" disabled={this.buttonHandler()} onClick={this.submitHandler}>Submit</Button>
                <p className="redirectText">Already a member? <a href="/login">Click here</a></p>
            </div>
        )
    }
}

export default Register;