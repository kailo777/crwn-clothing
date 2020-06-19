import React, {useState} from 'react';
import {connect} from "react-redux";
import SignUpContainer from './sign-up.styles'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signUpStart} from "../../redux/user/user.action";

const SignUp = ({signUpStart}) => {
    const [userCredential, setUserCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        signUpStart({email, password, displayName});
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredential({...userCredential, [name]: value});
    };


    return <SignUpContainer>
        <h2 className='title'>I dont have a account</h2>
        <span>Sign up with your emil and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type='test'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required/>
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required/>
            <CustomButton type='submit'> SIGN UP </CustomButton>
        </form>
    </SignUpContainer>
};


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(null, mapDispatchToProps)(SignUp);