import { People } from '../serviсes/api.props';

export type AppState = {
  searchData: People[];
  loading: boolean;
};
