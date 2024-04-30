import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItem: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItem = state.cartItem.filter((items) => items.id !== itemID);
    },
    increase: (state, { payload }) => {
      const singleCartItem = state.cartItem.find(
        (item) => item.id === payload.id
      );
      singleCartItem.amount = singleCartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const singleCartItem = state.cartItem.find(
        (item) => item.id === payload.id
      );
      singleCartItem.amount = singleCartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItem.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
