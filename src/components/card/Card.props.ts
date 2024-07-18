import { People } from '../../serviсes/api.props';

export type CardProps = {
  person: People;
  currentPage: number;
  isOpen: boolean;
  onCardClick: (id: string, isOpen: boolean) => void;
};
