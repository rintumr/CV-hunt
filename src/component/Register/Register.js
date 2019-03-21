import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './Register.css';
import Validator from '../Validator/Validator';
import FormHandler from '../FormHandler/FormHandler';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                userName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: '',
                userType: 1,
                userNameValidate:false,
                emailValidate:false,
                confirmEmailValidate:false,
                passwordValidate:false,
                confirmPasswordValidate:false,
                emailVerification:false,
                passwordVerification:false,
            },
            userType:'1'
        }
        console.log("[Register.js]", this.state);
        this.changeHandler = this.changeHandler.bind(this);
    }

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
            console.log("Verify",enableValidation);
        }
    }

    verificationHandler(value, verifyValue) {
        if (value === verifyValue) {
            return false;
        } else {
            return true;
        }
    }

    updateHandler = (value) => {
        let temp = {...this.state};
        temp.user = value;
        this.setState({user:temp.user});
    }

    buttonHandler(){
        let validate = false;
        let userValues = false;
        let disable = true;
        let user = {...this.state.user};
        console.log("User",user)
        if(!(user.userNameValidate || user.emailValidate || user.confirmEmailValidate || 
            user.passwordValidate || user.confirmPasswordValidate || user.passwordVerification || user.emailVerification)){
                validate = true;
            }
        if((user.userName.length>0) && (user.email.length>0) && (user.confirmEmail.length>0) && 
            (user.password.length>0) && (user.confirmPassword.length>0)){
                userValues = true;
            }
        if(validate && userValues){
            disable = false;
            return disable;
        }else{
            disable = true;
            return disable;
        }
    }
    formSubmit (event){
        event.preventDefault();
        return <FormHandler/>;
    }

    render() {
        return (
            <div className="register">
                <header className="registerHeader"><strong>REGISTER</strong></header><hr/>
                <form name="registerForm" onSubmit={this.formSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>User Name </label>
                            <input type="text" name="userName" value={this.state.userName} onChange={this.changeHandler} />

                            <Validator name="userName" validate={this.state.userNameValidate}/>

                            <label>Email </label>
                            <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />

                            <Validator name="email" validate={this.state.emailValidate}/>

                            <label>Confirm Email </label>
                            <input type="email" name="confirmEmail" value={this.state.confirmEmail} onChange={this.changeHandler} />
                           
                            <Validator name="confirmEmail" validate={this.state.emailVerification}/>
                        </div>

                        <div className="col-md-6">
                            <label>Password </label>
                            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />

                            <Validator name="password" validate={this.state.passwordValidate}/>
                            
                            <label>Confirm Password </label>
                            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.changeHandler} />

                            <Validator name="confirmPassword" validate={this.state.passwordVerification}/>

                            <label>User Type </label>
                            <input type="text" name="userType" defaultValue={this.state.userType} disabled />

                        </div>

                    </div>
                            <Button type="submit" variant="info" disabled={this.buttonHandler()}>Submit</Button>
                </form>
                <p className="redirectText">Already a member? <a href="/login">Click here</a></p>
            </div>
        )
    }
}

export default Register;