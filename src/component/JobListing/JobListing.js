import React, { Component } from 'react';
import axios from 'axios';

import Jobs from './Jobs/Jobs';
import './JobListing.css';

class JobListing extends Component {

    constructor() {
        super();
        this.state = {
            jobDetail: {
                bookmarkstatus: '',
                job_status: '',
                position_added_by: '',
                job_id: '',
                job_code: '',
                job_title: '',
                posted_date: '',
                remainingdays: '',
                experience: '',
                commission: '',
                key_skills: '',
                jobtype: '',
                recruitmenttype: '',
                postedbyname: '',
                postedbytype: '',
                postedbylogo: '',
                Location: ''
            }
        }
    }
    componentDidMount() {
        let self = this;
        axios.post('http://cvhunt.com/API/viewJobs', {
            id: 480,
            accessToken: "5dc50099e1e7a42f60169d68daeb4025",
            campaignStartBy: "1",
            showType: "Open"
        })
            .then(function (response) {
                console.log("Jobs", response.data.data);
                self.setState({ jobDetail: response.data.data });
                console.log("set", self.state);
            })
            .catch(function (error) {
                console.log("Jobs", error);
                return error;
            })
    }

    render() {
        let jobs = null;
        if (this.state.jobDetail.length > 0) {
            jobs = (
                <div>
                    {this.state.jobDetail.map((job,index) => {
                        return <Jobs key={index} value={job} />
                    })}
                </div>
            )
        }
        console.log("Dataresponse", this.state);
        return (
            <div>
                <div className="col-md-12 text-center">
                    <header>Jobs</header>
                    
                    {jobs}
                </div>
            </div>
        );
    }
}

export default JobListing;