import React from 'react';
import { GamesListStyled } from './GamesList.styled';
import { GamesListStyledProps } from './GamesList.types';
import Game from '../Game/Game';
import { GameType } from '../../Interfaces';



const GamesList: React.FC<GamesListStyledProps> = ({
  games
}) => {
  const sortedGames = games.slice().sort( (a,b) => (a.name > b.name) ? 1 : -1);

  return (
    <GamesListStyled>
      <main>
        <h1>Board Games Inventory</h1>
        <div className='games-container'>
          {sortedGames.map((game: GameType) => {
            return (
              <Game
                key={game.id}
                game={game}
              />
            );
          })}
        </div>
      </main>
    </GamesListStyled>
  );
};

export default GamesList;
