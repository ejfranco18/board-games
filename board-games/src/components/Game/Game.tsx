import React from 'react';
import { GameStyled } from './Game.styled';
import { GameStyledProps } from './Game.types';
import { Link } from 'react-router-dom'

const Game: React.FC<GameStyledProps> = ({
  game
}) => {
  return (
    <Link to={'/game/' + game.id}>
      <GameStyled>
        <div>
          <img style={{borderWidth: '3px', width:'300px', height:'300px', objectFit:'cover'}} alt={game.name} src={game.image}/>
          <div className='game-info'>
            <p>{game.name}</p>
            <p>Players: {game.minPlayers} - {game.maxPlayers}</p>
            <p>Type: {game.type}</p>
          </div>
        </div>
      </GameStyled>
    </Link>
  );
};

export default Game;
