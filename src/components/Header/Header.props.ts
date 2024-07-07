import { People } from '../../serviсes/api.props';

export type SearchFormState = {
  searchString: string;
};

export type HeaderProps = {
  updateSearchData: (data: People[]) => void;
};
