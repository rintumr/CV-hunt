import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super();
        console.log(props.data.success);
    }
    render() {
        let header = '';
        if (this.props.data.success === "true") {
            header = "SUCCESS!!";
        } else {
            header = "FAILED!!";
        }

        if (this.props.data.showModal) {
            return (
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">{header}</h4>
                            </div>

                            <div className="modal-body">
                                {this.props.data.message}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" onClick={this.props.onClose}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            );
        } else {

            return null;
        }
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    data: PropTypes.object,
    //   children: PropTypes.string
};

export default Modal;