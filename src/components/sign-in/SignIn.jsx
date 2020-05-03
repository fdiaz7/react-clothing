import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.style.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event, cb) => {
    event.preventDefault();
    cb(event.target.value);
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          value={email}
          handleChange={(e) => handleChange(e, setEmail)}
          label='email'
          required
        />

        <FormInput
          type='password'
          value={password}
          handleChange={(e) => handleChange(e, setPassword)}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' value='Submint Form'>
            Sign In
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            isGoogleSignIn
            value='Submint Form'>
            SING IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
