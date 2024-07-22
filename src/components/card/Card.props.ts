import { People } from '../../serviсes/api/api.props';

export type CardProps = {
  person: People;
  currentPage: number;
  isOpen: boolean;
  onCardClick: (id: string, isOpen: boolean) => void;
};
