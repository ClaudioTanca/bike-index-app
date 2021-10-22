import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ApplicationState {
  // PAGINATION
  currentPage: number,
  pageCount: number,
  pageSize: number,
  // SEARCH
  query: string,
};

const initialState: ApplicationState = {
  currentPage: 1,
  pageCount: 1,
  pageSize: 10,
  query: '',
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    // PAGINATION
    goNext(state) {
        state.currentPage++
    },
    goPrev(state) {
        state.currentPage--
    },
    goFirst(state) {
        state.currentPage = 1
    },
    goLast(state) {
        state.currentPage = state.pageCount
    },
    setPageCount(state, action: PayloadAction<number>) {
        state.pageCount = action.payload || 1;
    },
    // SEARCH
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    resetQuery(state) {
        state.query = ''
    },
  },
});

export const { 
  goFirst, 
  goLast, 
  goNext, 
  goPrev, 
  setPageCount,
  setQuery,
  resetQuery, 
} = applicationSlice.actions;
export default applicationSlice.reducer;