import React from 'react';

import Login from '../Login/Login';
import Register from '../Register/Register';

const modal = (props) => {
    console.log(props);

    if(props.show){
        let content = null;
        if(props.page === 'Login'){
            content = <Login/>
       } else  if(props.page === 'Register'){
           content = <Register/>
       } 
        return (
            <div className="modal">
            <div className ="modal-header">
                <span className="close" onClick={props.onClose}>&times;</span>
            </div>
              <div className="modal-content">
                {content}
              </div>
            </div>
          );
    }else{
        return null;
    }
    

}
export default modal;