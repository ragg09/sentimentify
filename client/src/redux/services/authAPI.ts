import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: 'register/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),

  }),
});

export const {
  useRegisterUserMutation,
} = authAPI;
