import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { peopleApi } from '@services/index';
import searchSlice from '../features/searchSlice';

export const rootReducer = combineReducers({
  [peopleApi.reducerPath]: peopleApi.reducer,
  search: searchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});
