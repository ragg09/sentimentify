import { getUserToken } from '@/src/utils';
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

    loginUser: builder.mutation({
      query: (data) => ({
        url: 'login/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),

    logoutUser: builder.mutation({
      query: () => {
        return {
          url: 'logout/',
          method: 'POST',
          headers: {
            Authorization: `Token ${getUserToken()}`,
          },
        };
      },
      invalidatesTags: ['auth'],
    }),

  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authAPI;
