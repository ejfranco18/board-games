import React, { ChangeEvent, useState } from 'react';
import { SignupStyled } from './Signup.styled';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { auth } from '../../db/firebase';
import {
  createUserWithEmailAndPassword,
 } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/gameSlice';
import { Navigate } from 'react-router';

const Signup: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const user = useSelector(selectUser);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      password
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

  const disabledButton = !(userEmail && handlePassword);

  return (
    <SignupStyled>
      {user.user && <Navigate replace to="/" />}
      <h1>Signup</h1>
      <h2>{auth.currentUser?.email}</h2>
      <div className="form-wrapper">
          <Input
            type="text"
            name="userEmail"
            placeholder="Email"
            value={userEmail}
            onChange={handleEmail}
          />
          <Input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        <Button
          onClick={register}
          text={'Sign up'}
          disabled={disabledButton}
        />
      </div>
    </SignupStyled>
  );
};

export default Signup;