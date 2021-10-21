import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface PaginationState {
    currentPage: number,
    pageCount: number,
    pageSize: number
}

const initialState: PaginationState = {
    currentPage: 1,
    pageCount: 1,
    pageSize: 10
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
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
        }
    }
})

export const { goFirst, goLast, goNext, goPrev, setPageCount } = paginationSlice.actions;
export default paginationSlice.reducer;