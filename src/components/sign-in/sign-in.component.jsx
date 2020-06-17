import React from 'react';

import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SignInContainer from "./sign-in.styles";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        const {googleSignInStart} = this.props;
        return <SignInContainer>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="Email"
                    required/>
                <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    label="Password"
                    handleChange={this.handleChange}
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
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);