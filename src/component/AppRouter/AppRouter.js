import React, { Component } from 'react';

import './AppRouter.css';

class AppRouter extends Component {

    constructor(props) {
        console.log("AppRouter", props);
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

    render() {
        return (
            <div>
                <p>Welcome to CV HUNT</p>
            </div>
        );
    }
}

export default AppRouter;  