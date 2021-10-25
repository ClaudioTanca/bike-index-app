import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Bike} from "../../models";
import { store } from "../../store";

export interface ModalContent {
  isError?: boolean,
  title?: string,
  text?: string | null,
  data?: object | any[] | null,
  bike?: Bike | null,
};
export interface ModalState extends ModalContent {
  isOpen: boolean,
};

const initialState: ModalState = {
  isOpen: false,
  isError: false,
  title: 'Title',
  text: null,
  data: null,
  bike: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalContent>) {
      state.isOpen = true;
      state.isError = action.payload.isError || false;
      state.title = action.payload.title || 'Title';
      state.text = action.payload.text || null;
      state.data = action.payload.data || null; 
      state.bike = action.payload.bike || null;
    },
    closeModal(state) {
      state.isOpen = false;
      state.isError = false;
      state.title = 'Title';
      state.text = null;
      state.data = null; 
      state.bike = null;
    },
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
