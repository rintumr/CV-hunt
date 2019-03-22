import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Register from '../component/Register/Register';
import Login from '../component/Login/Login';
import AppRouter from '../component/AppRouter/AppRouter';
import JobListing from '../component/JobListing/JobListing';
import Modal from '../component/Modal/Modal';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      status: '',
      success: '',
      showModal: false
    }
  }

  render() {
    let display = null;
    console.log(this.state.showModal);
    if (this.state.showModal) {
      display = <Modal data={this.state} onClose={this.toggleModal} />
    }
    return (
      <Fragment>
        <div>
          {display}
        </div>
        <div className="navbar">
          <Router>
            <div className="col-md-12 row">
              <div className="col-md-6 nav navbar-nav navbar-left">
                <p>CV Hunt</p>
              </div>
              <div className=" col-md-6 nav navbar-nav navbar-right">
                <ul>
                  <li>
                    <Link to="/login">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      New User
                     </Link>
                  </li>
                  <li>
                    <Link to="/jobs">
                      Job Listing
                     </Link>
                  </li>
                </ul>

              </div>
              <Route exact path="/" component={AppRouter} />
              <Route exact path="/login" render={() => <Login changeState={this.stateHandler} />} />
              <Route exact path="/register" render={() => <Register changeState={this.stateHandler} />} />
              <Route exact path="/jobs" component={JobListing} />
            </div>
          </Router>
        </div>
      </Fragment>
    );

  }

  // Function to handle the state

  stateHandler = (value) => {
    let data = { ...this.state };
    data.message = value.message;
    data.status = value.status;
    data.success = value.success;
    this.updateState(data);
    this.toggleModal();
  }

  // Function to toggle modal

  toggleModal = () => {
    let data = { ...this.state };
    data.showModal = !data.showModal;
    this.updateState(data);
  }

  // Function to update state

  updateState = (value) => {
    this.setState(value);
  }

}

export default App;