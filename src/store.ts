import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/menuSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
