import { useState, useEffect } from 'react';
import { SearchStringTuple } from './useSearchString.props';

export function useSearchQuery(initialString: string = ''): SearchStringTuple {
  const [searchString, setSearchString] = useState<string>(() => {
    return localStorage.getItem('searchString') || initialString;
  });

  useEffect(() => {
    localStorage.setItem('searchString', searchString);
  }, [searchString]);

  return [searchString, setSearchString];
}
