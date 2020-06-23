import React, {useState} from 'react';
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SignInContainer from "./sign-in.styles";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({...userCredentials, [name]: value})
    };
    return <SignInContainer>
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
                name="email"
                type="email"
                handleChange={handleChange}
                value={email}
                label="Email"
                required/>
            <FormInput
                name="password"
                type="password"
                value={password}
                label="Password"
                handleChange={handleChange}
                required
            />
            <div className='buttons'>
                <CustomButton type='submit'> Sign In</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>
                    {' '}
                    Sign In with Google{' '}
                </CustomButton>
            </div>
        </form>
    </SignInContainer>
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);