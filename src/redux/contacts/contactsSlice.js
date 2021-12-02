import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsSlice = createApi({
  reducerPath: 'contacts',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6196d384af46280017e7e2d4.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts' },
            ]
          : ['Contacts'],
    }),
    addContact: builder.mutation({
      query: item => ({
        url: '/contacts',
        method: 'POST',
        body: { ...item },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsSlice;
