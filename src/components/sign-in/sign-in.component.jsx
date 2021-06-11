import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIN extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
        
    }

    render() {
        return(
        <div className='sign-in'>
            <h2>I already have a account</h2>
            <span>Sign in with your email and password </span>
            
            <form onSubmit={ this.handleSubmit}>
                <FormInput name='email' label='email' type='email' value={this.state.email} handleChange={ this.handleChange} required />
                <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={ this.handleChange}  required />
                <div className='buttons'>
                    <CustomButton type='submit' > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign In With Google{'  '}</CustomButton>
                </div>
            </form>

        </div>
        )
    }
    
}

export default SignIN;