import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { db } from '../db/firebase';
import { GameType, UserType } from '../Interfaces';
import { RootState } from './store';

export type GameState = {
  games: GameType[];
};

export type UserState = {
  user: UserType[] | any;
};

export const initialGameState: GameState = {
  games: [],
};

export const initialUserState: UserState = {
  user: [],
};



export const getGames = createAsyncThunk('getGames', async (userId: UserType) => {
  const gamesCollectionRef = collection(db, `games-${userId?.uid}`);
  const data = await getDocs(gamesCollectionRef);
  const result = data.docs.map((doc) => {
    return {
      id: doc.id,
      name: doc.data().name,
      image: doc.data().image,
      minPlayers: doc.data().minPlayers,
      maxPlayers: doc.data().maxPlayers,
      type: doc.data().type,
    }
  });
  return result;
});

export const addGameDB = createAsyncThunk(
  'addGAmes',
  async ({userId, newGame}: {userId: {uid: string} | null, newGame: GameType}) => {
    const newDoc = await addDoc(collection(db, `games-${userId?.uid}`), newGame);
    return { ...newGame, id: newDoc.id };
  }
);

export const updateGameDB = createAsyncThunk(
  'updateGames',
  async (id: string) => {
    console.log('slice update', id)
    const gameDoc = doc(db, 'games', id);
    const docSnap = await getDoc(gameDoc);
    const status = !docSnap.data()!.completed
    const updateFields = { completed: status}
    await updateDoc(gameDoc, updateFields);
    return {id, status };
  }
);

export const deleteGameDB = createAsyncThunk(
  'deleteGames',
  async (id: string) => {
    console.log('slice delete', id)
    const gameDoc = doc(db, 'games', id);
    await deleteDoc(gameDoc);
    return id;
  }
);

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    addGame: (state, action) => {
      state.games.push(action.payload);
    },
    deleteGame: (state, action) => {
      state.games = state.games.filter((game) => {
        return game.id !== action.payload;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload;
      })
      .addCase(getGames.rejected, (state) => {
        state.games = [];
      })
      .addCase(addGameDB.fulfilled, (state, action) => {
        state.games.push(action.payload);
      })
      .addCase(updateGameDB.fulfilled, (state, action) => {
        const game = state.games.find((game) => {
          return game.id === action.payload.id;
        });
      })
      .addCase(deleteGameDB.fulfilled, (state, action) => {
        state.games = state.games.filter((game) => {
          return game.id !== action.payload;
        });
      });
  },
});

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = [];
    },
  },
});

export const { addGame, deleteGame } = gameSlice.actions;

export const { login, logout } = userSlice.actions;

export const selectGames = (state: RootState) => state.games;

export const selectUser = (state: RootState) => state.users;

export const gameSliceReducer =  gameSlice.reducer;

export const userSliceReducer =  userSlice.reducer;
