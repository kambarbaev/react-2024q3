import { ApiResponse } from './api.props';

const API_BASE_URL = 'https://swapi.dev/api';

export const fetchApi = async (searchString: string): Promise<ApiResponse> => {
  const endpoint = searchString
    ? `${API_BASE_URL}/people/?search=${encodeURIComponent(searchString)}`
    : `${API_BASE_URL}/people/`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('API not available');
  }
  return response.json();
};
