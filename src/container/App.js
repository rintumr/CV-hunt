import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Register from '../component/Register/Register';
import Login from '../component/Login/Login';
import AppRouter from '../component/AppRouter/AppRouter';
import JobListing from '../component/JobListing/JobListing';

class App extends Component {

  render() {

    return (
      <div className="navbar">
        <Router>
          <div className="col-md-12 row">
            <div className="col-md-6 nav navbar-nav navbar-left">
              <p>CV Hunt</p>
            </div>
            <this.Header />
            <Route path="/" component={AppRouter} />
            <Route path="/login" render={() => <Login changeState={this.stateHandler} />} />
            <Route path="/register" render={() => <Register changeState={this.stateHandler} />} />
            <Route path="/jobs" component={JobListing}/>
          </div>
        </Router>
      </div>
    );

  }

  stateHandler(modalToggle){
    console.log("stateHandler",modalToggle);
    let modal = null
    modal=<AppRouter data={modalToggle}/>
    console.log("stateHandler123",modal);
    return modal;
  }

  Header() {
    return (
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
    );
  }

}

export default App;