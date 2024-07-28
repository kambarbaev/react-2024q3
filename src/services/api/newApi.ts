import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from './api.props';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (build) => ({
    getPersons: build.query<ApiResponse, number>({
      query: (page: number) => ({
        url: `?search=&page=${page}`,
        params: {
          page: page,
        },
      }),
    }),
  }),
});
