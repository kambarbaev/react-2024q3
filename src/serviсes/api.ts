import { People } from './api.props';

const API_BASE_URL = 'https://swapi.dev/api';

export async function fetchApi(searchString?: string): Promise<People[]> {
  let url = `${API_BASE_URL}/people/`;

  if (searchString && searchString.trim() !== '') {
    const encodedSearchTerm = encodeURIComponent(searchString.trim());
    url += `?search=${encodedSearchTerm}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
