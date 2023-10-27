import { createSlice } from "@reduxjs/toolkit";
import { Root } from "./utils/types";

const initialState: Root = {
  initialData: null,
  filterData: [],
  cartData: [],
};

const dataSlice = createSlice({
  name: "eCommerce",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.initialData = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filterData = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { setData,setFilteredData,setCartData } = dataSlice.actions;
export default dataSlice.reducer;