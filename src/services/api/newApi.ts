import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, GetPersonsParams } from './api.props';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getPersons: build.query<ApiResponse, GetPersonsParams>({
      query: ({ page, search }) => ({
        url: `people/`,
        params: {
          search: search,
          page: page,
        },
      }),
    }),
  }),
});

export const { useGetPersonsQuery } = peopleApi;
