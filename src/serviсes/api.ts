import { ApiResponse } from './api.props';

const API_BASE_URL = 'https://swapi.dev/api';

export const fetchApi = async (searchString: string, page: number): Promise<ApiResponse> => {
  const endpoint = searchString
    ? `${API_BASE_URL}/people/?search=${encodeURIComponent(searchString)}`
    : `${API_BASE_URL}/people/?page=${page}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('API not available');
  }
  return response.json();
};

export const fetchPerson = async (personUrl: string) => {
  const response = await fetch(`${API_BASE_URL}/people/${encodeURIComponent(personUrl)}`);
  if (!response.ok) {
    throw new Error('API not available');
  }
  return response.json();
};
