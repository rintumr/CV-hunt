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
        let style = {};
        console.log("PROPS", this.props.data.success);
        if (this.props.data.success === true) {
            header = "SUCCESS!!";
            style = {
                color: "mediumseagreen"
            }
        } else {
            header = "FAILED!!";
            style = {
                color: "red"
            }
        }

        if (this.props.data.showModal) {
            return (
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title" style={style}>{header}</h4>
                            </div>

                            <div className="modal-body">
                                {this.props.data.message}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.props.onClose}>Close</button>
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
};

export default Modal;