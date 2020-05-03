import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './sign-up.styles.scss';
import { useDispatch } from 'react-redux';
import * as userActions from '../../redux/user/user.actions';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

const SingUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event, cb) => {
    event.preventDefault();
    cb(event.target.value);
  };

  return (
    <div className='sign-up'>
      <h2 className='titel'> I do not have account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displyName'
          value={displayName}
          label='Name'
          onChange={(e) => handleChange(e, setDisplayName)}
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          onChange={(e) => handleChange(e, setConfirmPassword)}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SingUp;
