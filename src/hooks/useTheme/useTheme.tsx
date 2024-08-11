import { useContext } from 'react';
import { ThemeContext } from '@context/index';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error;
  }
  return context;
};
