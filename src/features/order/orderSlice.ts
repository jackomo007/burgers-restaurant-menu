import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface OrderState {
  totalPrice: number;
}

const initialState: OrderState = {
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { updateTotalPrice } = orderSlice.actions;

export const selectTotalPrice = (state: RootState) => state.order.totalPrice;

export default orderSlice.reducer;
