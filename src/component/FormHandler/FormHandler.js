import axios from 'axios';

const formHandler = (props) => {

    console.log("Submit", props);
    axios.post('http://cvhunt.com/API/signupInfo', {
        username: "satlineglobal",
        password: "Satlineglobal2018",
        email: "satlineglobal@yopmail.com",
        usertype: "1"
    })
        .then(function (response) {
            console.log('POST',response.data.message);
            return response.data.message
        })
        .catch(function (error) {
            console.log('POST', error);
            return error;
        });
    return ;
}

export default formHandler;