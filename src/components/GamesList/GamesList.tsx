import React from 'react';
import { GamesListStyled } from './GamesList.styled';
import { GamesListStyledProps } from './GamesList.types';
import Game from '../Game/Game';
import { GameType } from '../../Interfaces';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/gameSlice';



const GamesList: React.FC<GamesListStyledProps> = ({
  games
}) => {
  const sortedGames = games.slice().sort( (a,b) => (a.name > b.name) ? 1 : -1);
  const user = useSelector(selectUser);

  return (
    <GamesListStyled>
      <main>
        <h1>Board Games Inventory</h1>
        <h2>Total games: {games.length}</h2>
        {
          games.length ? (
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
          ) :
          ( <>
              {user.user?
                <h2>Add games to your inventory</h2> :
                <h2>Login to add games to your inventory</h2>
              }
            </>
          )
        }

      </main>
    </GamesListStyled>
  );
};

export default GamesList;
