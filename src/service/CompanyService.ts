// services/companyService.ts
import { ICompanyData } from "@/interface/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getCompanyAll: builder.query<ICompanyData[], { sortByRating?: boolean; sortByPositiveReviews?: boolean; sortByCountOrder?: boolean; sortByCountCall?: boolean }>({
      query: (params) => {
        let url = 'api/all/rituals';
        const queryParams = [];
    
        if (params.sortByRating !== undefined) {
          queryParams.push(`sort_by_rating=${params.sortByRating}`);
        }
    
        if (params.sortByPositiveReviews !== undefined) {
          queryParams.push(`sort_by_positive_reviews=${params.sortByPositiveReviews}`);
        }
    
        if (params.sortByCountOrder !== undefined) {
          queryParams.push(`sort_by_count_order=${params.sortByCountOrder}`);
        }
    
        if (params.sortByCountCall !== undefined) {
          queryParams.push(`sort_by_count_call=${params.sortByCountCall}`);
        }
    
        if (queryParams.length > 0) {
          url += `?${queryParams.join('&')}`;
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
