import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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

    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;