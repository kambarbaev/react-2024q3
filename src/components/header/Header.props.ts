export type HeaderProps = {
  handleSearch?: (searchString: string, page: number) => void;
  currentPage?: number;
  totalPages?: number;
  handlePage?: (page: number) => void;
};
