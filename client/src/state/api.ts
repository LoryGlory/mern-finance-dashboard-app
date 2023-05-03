// react redux query component for api calls
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GetKpisResponse, GetProductsResponse} from './types';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}), reducerPath: 'main',
  tagTypes: ['Kpis', 'Products'], // information is saved here
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis'],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'product/products/',
      providesTags: ['Products'],
    }),
  }),
});

export const {useGetKpisQuery, useGetProductsQuery} = api;