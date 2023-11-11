import React, { ChangeEvent, useEffect, useState } from 'react';
import { LoginStyled } from './Login.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  login, selectUser,
} from '../../state/gameSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';

import {
    auth,
    signInWithEmailAndPassword,
  } from '../../db/firebase';
import { Navigate } from 'react-router';

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleLogin = (): void => {
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const disabledButton = !(userEmail && handlePassword);

  return (
    <LoginStyled>
        {user.user && <Navigate replace to="/" />}
      <h1>Login</h1>
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
            onClick={handleLogin}
            text={'Login'}
            disabled={disabledButton}
          />
        </div>
    </LoginStyled>
  );
};

export default Login;