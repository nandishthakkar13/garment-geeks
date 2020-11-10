import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({email: '', password: ''})
   }

   /**
    * *this way we can use this function for both field email and password.
    * ?Does the order matters while destructuring? Like const {value,name} = event.target ; or  const {name,value} = event.target ;
    */
   handleChange = (event) =>{
    const {value,name} = event.target ;

    this.setState({[name]: value});
   }

   /*
   we add type=button to google button, because when we click google button the form fields prompt to fill it in
   as any button inside form tag treats it as submit button
   but with the google button we dont want that feature
   so by adding type=button we prevent that behaviour
     */
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    
                    
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                    </form>
            </div>
        );
    }
}

export default SignIn;