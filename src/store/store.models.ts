import { setupStore, store } from './store';

export type RootState = typeof store.getState;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
