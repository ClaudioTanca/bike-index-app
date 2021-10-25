import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL, BERLIN_LOCATION} from "../../utils/const";
import {Bike, BikeCountRequest, BikeCountResponse, BikeSearchRequest} from '../../models';
import {asUrParams} from "../../utils/functions";
import { BikeDetailsRequest } from "../../models/bikeByIdResponse";

export const bikeFeature = createApi({
  reducerPath: 'bikes',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => {
    return {
      getBikes: builder.query<Bike[], BikeSearchRequest | void>({
        query({page = 1, per_page = 10, stolenness = "proximity", location = BERLIN_LOCATION, distance = "10", query}: BikeSearchRequest) {
          const s = asUrParams({page, per_page, stolenness, location, distance, query});
          return `/search?${s.toString()}`;
        },
        keepUnusedDataFor: 0,
        transformResponse: (response: { bikes: Bike[] }): Bike[] | Promise<Bike[]> => response.bikes
      }),
      getBikesCount: builder.query<BikeCountResponse, BikeCountRequest | void>({
        query({stolenness = "proximity", location = BERLIN_LOCATION, distance = "10", query}: BikeCountRequest) {
          const s = asUrParams({stolenness, location, distance, query});
          return `/search/count?${s.toString()}`;
        },
        keepUnusedDataFor: 0,
      }),
      getBikeDetails: builder.query<Bike, BikeDetailsRequest | void>({
        query({ id }: BikeDetailsRequest) {
          return `/bikes/${id}`;
        },
        keepUnusedDataFor: 0,
        transformResponse: (response: { bike: Bike }): Bike | Promise<Bike> => response.bike
      }),
    }
  }
})

export const { useGetBikesQuery, useGetBikesCountQuery, useGetBikeDetailsQuery } = bikeFeature;