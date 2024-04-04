import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/menuSlice";
import orderSlice from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
