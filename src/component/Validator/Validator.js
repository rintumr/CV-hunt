import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import './Validator.css';

const Validate = (props) => {

    let validateMessage = null;

    switch (props.name) {

        case 'userName':
            if (props.validate) {
                validateMessage = "Username must be at least 8 characters long with no special characters."
            }
            break;
        case 'email':
            if (props.validate) {
                validateMessage = 'Enter a valid email'
            }
            break;
        case 'confirmEmail':
            if (props.validate) {
                validateMessage = 'Email doesnot match'
            }
            break;
        case 'password':
            if (props.validate) {
                validateMessage = "Password must be at least 8 characters and must contain at least one lower case letter, one upper case letter and one digit.";
            }
            break;
        case 'loginPassword':
            if (props.validate) {
                validateMessage = "Enter a valid password.";
            }
            break;
        case 'confirmPassword':
            if (props.validate) {
                validateMessage = 'Password doesnot match'
            }
            break;
        default: validateMessage = "";
    };

    if (props.validate) {
        return (
            <div className="validateMessage">
                <FaExclamationCircle /> {validateMessage}
            </div>
        );
    } else {
        return null;
    }
}

export default Validate;