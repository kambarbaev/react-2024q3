import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { peopleApi } from '@services/index';

export const rootReducer = combineReducers({
  [peopleApi.reducerPath]: peopleApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
  });
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});
