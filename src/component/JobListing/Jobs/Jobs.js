import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './Jobs.css';

class Jobs extends Component {
    constructor(props) {
        super();
        console.log("Jobs", props);
    }
    render() {
        return (
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.value.job_title}</Card.Title><hr/>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Skills:</strong></td>
                                        <td className="description">{this.props.value.key_skills}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Experience:</strong></td>
                                        <td className="description">{this.props.value.experience}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Type:</strong></td>
                                        <td className="description">{this.props.value.jobtype}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <label><strong>Skills: </strong>{this.props.value.key_skills}</label> */}
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted date:{this.props.value.posted_date}</small><br/>
                        <small className="text-muted">Posted by:{this.props.value.postedbyname}</small>
                    </Card.Footer>
                </Card>
        );
    }
}

export default Jobs;