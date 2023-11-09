import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { gameSliceReducer, userSliceReducer, initialGameState, initialUserState } from './gameSlice';

const reducers = combineReducers({
  games: gameSliceReducer,
  users: userSliceReducer,
});

const preloadedState = {
  games: initialGameState,
  users: initialUserState,
};

export const store = configureStore({
  reducer: reducers,
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
