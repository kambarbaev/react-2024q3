import { People } from '@services/index';

export type CardProps = {
  person: People;
  currentPage: number;
  isOpen: boolean;
  onCardClick: (id: string, isOpen: boolean) => void;
};
