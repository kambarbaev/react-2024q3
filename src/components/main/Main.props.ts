import { People } from '../../serviсes/api/api.props';

export type MainProps = {
  searchData: People[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  handlePage: (page: number) => void;
};
