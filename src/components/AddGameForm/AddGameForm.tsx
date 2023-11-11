import React, { ChangeEvent, useState } from 'react';
import { AddGameFormStyled } from './AddGameForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addGameDB, selectUser,
} from '../../state/gameSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

const AddGameForm: React.FC = () => {
  const [gameName, setGameName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [minPlayers, setMinPlayers] = useState<number>(0);
  const [maxPlayers, setMaxPlayers] = useState<number>(0);
  const [type, setType] = useState<string>('Basegame');
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    setGameName(event.target.value);
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>): void => {
    setImage(event.target.value);
  };

  const handleMinPlayers = (event: ChangeEvent<HTMLInputElement>): void => {
    setMinPlayers(Number(event.target.value));
  };

  const handleMaxPlayers = (event: ChangeEvent<HTMLInputElement>): void => {
    setMaxPlayers(Number(event.target.value));
  };

  const handleType = (event: ChangeEvent<HTMLSelectElement>): void => {
    setType(event.target.value);
  };

  const handleAddGame = (): void => {
    dispatch(
      addGameDB({
        userId: user.user,
        newGame: {
          id: '',
          name: gameName,
          image,
          minPlayers,
          maxPlayers,
          type,
        }
      })
    );
    setGameName('');
    setImage('');
    setMinPlayers(0);
    setMaxPlayers(0);
    setType('Basegame');
  };

  const options = ["Basegame","Expansion"]

  const disabledButton = !(gameName && image && minPlayers && maxPlayers);

  return (
    <AddGameFormStyled>
      {user.user?
        (<>
          <h1>Add a new game to the inventory</h1>
          <div className="form-wrapper">
            <Input
              type="text"
              name="gameName"
              placeholder="Game Name"
              value={gameName}
              onChange={handleName}
            />
            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={handleImage}
            />
            <Input
              type="number"
              name="minPlayers"
              value={minPlayers !== 0 ? minPlayers : ""}
              placeholder="Minimum number of players"
              onChange={handleMinPlayers}
            />
            <Input
              type="number"
              name="maxPlayers"
              value={maxPlayers !== 0 ? maxPlayers : ""}
              placeholder="Maximum number of players"
              onChange={handleMaxPlayers}
            />
            <Dropdown options={options} onChange={handleType}/>
            <Button
              onClick={handleAddGame}
              text={'Add Game'}
              disabled={disabledButton}
            />
          </div>
          </>) :
        <h2>Login to add games to your inventory</h2>
      }
    </AddGameFormStyled>
  );
};

export default AddGameForm;
