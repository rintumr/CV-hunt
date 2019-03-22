import axios from 'axios';

const formHandler = (props) => {

    console.log("Submit", props);
    if(props.state.isSubmitted){
        axios.post(props.api, {
        username: props.value.user.userName,
        password: props.value.user.password,
        email: props.value.user.email,
        usertype: props.value.user.userType
    })
        .then(function (response) {
            console.log('POST',response.data.message);
            return response.data.message
        })
        .catch(function (error) {
            console.log('POST', error);
            return error;
        });
    }else{

        return null;
    }
}

export default formHandler;