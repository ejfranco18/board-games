import React from 'react';
import { GameDetailStyled } from './GameDetail.styled';
import { useSelector } from 'react-redux';
import {
  selectGames,
} from '../../state/gameSlice';
import { useParams } from 'react-router-dom';
import { GameType } from '../../Interfaces';

const Game: React.FC = () => {
  const gamesStates = useSelector(selectGames).games;
  const id = useParams().id;


  const filteredGame = gamesStates.find((game) => {
     return game.id === id;
  });


  return (
    <GameDetailStyled>
      {
        filteredGame ? (
          <>
            <img style={{borderWidth: '3px', width:'300px', height:'300px', objectFit:'cover'}} alt={filteredGame.name} src={filteredGame.image}/>
            <div className='game-info'>
              <p>{filteredGame.name}</p>
              <p>Players: {filteredGame.minPlayers} - {filteredGame.maxPlayers}</p>
              <p>Type: {filteredGame.type}</p>
            </div>
          </>
        ) :
        (
          <p>NO</p>
        )
      }

    </GameDetailStyled>
  );
};

export default Game;


// state.games = state.games.filter((game) => {
//     return game.id !== action.payload;
//   });