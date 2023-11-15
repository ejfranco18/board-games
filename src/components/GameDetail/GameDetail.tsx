import React, { useState } from 'react';
import { GameDetailStyled } from './GameDetail.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteGameDB,
  selectGames,
  selectUser,
} from '../../state/gameSlice';
import { Navigate, useParams } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const GameDetail: React.FC = () => {
  const [gameDeleted, setGameDeleted] = useState<boolean>(false);
  const gamesStates = useSelector(selectGames).games;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const gameId = useParams().id;

  const handleDeleteGame = (): void => {
    dispatch(
      deleteGameDB({userId: user.user, gameId})
    );
    setGameDeleted(true);
  };

  const filteredGame = gamesStates.find((game) => {
    return game.id === gameId;
  });

  const redirection = gameDeleted ? (
    <Navigate replace to="/" />
  ) : (
    <h1>Loading...</h1>
  )

  return (
    <GameDetailStyled>
      {
        filteredGame ? (
          <>
            <h1>{filteredGame.name}</h1>
            <div className='details'>
              <img style={{borderWidth: '3px', width:'300px', height:'300px', objectFit:'cover'}} alt={filteredGame.name} src={filteredGame.image}/>
              <div className='game-info'>
                <p>{filteredGame.name}</p>
                <p>Players: {filteredGame.minPlayers} - {filteredGame.maxPlayers}</p>
                <p>Type: {filteredGame.type}</p>
                <CustomButton
                  onClick={(handleDeleteGame)}
                  text={'Delete'}
                />
              </div>

            </div>
          </>
        ) :
        (
          redirection
        )
      }

    </GameDetailStyled>
  );
};

export default GameDetail;