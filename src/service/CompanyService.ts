// services/companyService.ts
import { ICompanyData } from "@/interface/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getCompanyAll: builder.query<ICompanyData[], { sortByRating: boolean }>({
      query: ({ sortByRating }) => {
        let url = `api/all/rituals`;
        if (sortByRating) {
          url += '?sort_by_rating=true';
        } else {
          url += '?sort_by_rating=false';
        }
        return url;
      },
    }),

    deleteCompany: builder.mutation<
      { success: boolean; id: number },
      { token: string; id: number }
    >({
      query: ({ id, token }) => ({
        url: `/api/rituals/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [{ type: 'Company', id: 'LIST' }],
    }),
    changeCompany: builder.mutation<ICompanyData, { token: string; id: number; data: Partial<ICompanyData> }>({
      query: ({ id, token, data }) => ({
        url: `/api/rituals/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: [{ type: 'Company', id: 'LIST' }],
    }),
  }),
});

export const { useGetCompanyAllQuery, useDeleteCompanyMutation , useChangeCompanyMutation } = companyApi;
