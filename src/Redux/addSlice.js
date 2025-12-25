import { createSlice } from "@reduxjs/toolkit";
import courses from "../Data/data";

export const addSlice = createSlice({
  name: "courses",
  initialState: {
    coursesList: courses,
    selectedCart: [],
    login: false,
    infoLogin: {},
  },

  reducers: {
    addCarts: (state, action) => {
      const item = action.payload;

      const checkItem = state.selectedCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (checkItem) {
        checkItem.quantity += 1;
      } else {
        state.selectedCart.push({
          ...item,
          quantity: 1,
        });
      }
    },
    deleteCarts: (state, action) => {
      state.selectedCart = state.selectedCart.filter(
        (_, index) => index !== action.payload
      );
    },
    IsLoggedIn: (state, action) => {
      state.login = action.payload;
    },
    addInfo: (state, action) => {
      state.infoLogin = action.payload;
    },
    logOut: (state, action) => {
      state.login = action.payload;
      state.selectedCart.length = 0;
    },
  },
});

export default addSlice.reducer;

export const { addCarts, deleteCarts, IsLoggedIn, addInfo, logOut } =
  addSlice.actions;
