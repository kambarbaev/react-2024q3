import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, GetPersonsParams, People } from './api.props';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getPersons: build.query<ApiResponse, GetPersonsParams>({
      query: ({ pageNumber, search }) => ({
        url: `people/`,
        params: {
          search: search,
          page: pageNumber,
        },
      }),
    }),
    getPerson: build.query<People, string>({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const { useGetPersonsQuery, useGetPersonQuery } = peopleApi;
