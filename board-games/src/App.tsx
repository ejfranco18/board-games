import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Theme from './components/Styles/theme';
import GamesList from './components/GamesList/GamesList';
import AddGameForm from './components/AddGameForm/AddGameForm';
import {
  selectGames,
  getGames,
  login,
  logout,
  selectUser
} from './state/gameSlice';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import GameDetail from './components/GameDetail/GameDetail';
import { auth, onAuthStateChanged } from './db/firebase';

const App: FC = () => {
  const gamesStates = useSelector(selectGames).games;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Theme>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<GamesList games={gamesStates} />} />
          <Route path="/game/:id" element={<GameDetail />}/>
          <Route path="/addgame" element={<AddGameForm />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
