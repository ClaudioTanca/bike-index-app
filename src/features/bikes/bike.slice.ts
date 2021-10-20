import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {BASE_URL, BERLIN_LOCATION} from "../../utils/const";
import { Bike, BikeSearchRequest, BikeSearchResponse } from '../../models';

export const bikeFeature = createApi({
  reducerPath: 'bikes',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => {
    return {
      getBikes: builder.query<Bike[], BikeSearchRequest | void>({
        query({page = 1, per_page = 10, stolenness = "proximity", location = BERLIN_LOCATION, distance = "10", query}: BikeSearchRequest) {

          const s = new URLSearchParams('');
          s.append("page", page.toString());
          s.append("per_page", per_page.toString());
          s.append("location", location);
          s.append("distance", distance);
          s.append("stolenness", stolenness);

          if (query) {
            s.append("query", query)
          }
          return `/search?${s.toString()}`;
        },
        transformResponse: (response: { bikes: Bike[] }, meta ): Bike[] | Promise<Bike[]> => response.bikes
      }),
    }
  }
})

export const { useGetBikesQuery } = bikeFeature;