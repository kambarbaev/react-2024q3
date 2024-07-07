import { People } from '../../serviсes/api.props';

export type SearchFormState = {
  searchString: string;
  error: boolean;
};

export type HeaderProps = {
  updateSearchData: (data: People[]) => void;
  handleSearch: (searchString: string) => void;
};
