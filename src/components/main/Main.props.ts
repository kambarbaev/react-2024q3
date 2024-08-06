import { People } from '@services/index';

export type MainProps = {
  searchData?: People[];
  loading?: boolean;
  currentPage?: number;
  totalPages?: number;
  handlePage?: (page: number) => void;
  isError?: unknown;
};
