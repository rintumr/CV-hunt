import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import './Validator.css';

const Validate = (props) => {
    
    let validateMessage = null;

    switch (props.name) {

        case 'userName':
            if (props.validate) {
                validateMessage = "Enter a valid username."
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
                validateMessage = "Password must contain atleast 4 alphanumeric characters without space.";
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