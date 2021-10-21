import { configureStore } from '@reduxjs/toolkit';
import { bikeFeature } from '../features/bikes/bike.slice';
import paginationReducer from "../features/pagination/pagination.slice";
import searchReducer from '../features/search/search.slice'

export const store = configureStore({
  reducer: {
    [bikeFeature.reducerPath]: bikeFeature.reducer,
    pagination: paginationReducer,
    search: searchReducer
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(bikeFeature.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;