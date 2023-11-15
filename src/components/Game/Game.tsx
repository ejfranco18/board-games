import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import { GameStyled } from './Game.styled';
import { GameStyledProps } from './Game.types';

const Game: React.FC<GameStyledProps> = ({
  game
}) => {
  return (
    <GameStyled>
      <img alt={game.name} src={game.image}/>
      <div className='game-info'>
        <p className='title'>{game.name}</p>
        <p>Players: {game.minPlayers} - {game.maxPlayers}</p>
        <p>Type: {game.type}</p>
        <Link to={'/game/' + game.id}>
          <CustomButton
          text={'Details'}
          />
        </Link>
      </div>
    </GameStyled>
  );
};

export default Game;
