import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { peopleApi } from '@services/index';
import searchSlice from '@features/search/searchSlice';
import cardSlice from '@features/card/cardSlice';

export const rootReducer = combineReducers({
  [peopleApi.reducerPath]: peopleApi.reducer,
  search: searchSlice,
  card: cardSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});
