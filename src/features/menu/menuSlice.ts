// features/menu/menuSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Menu } from "../../types/menuTypes";
import { fetchMenu as fetchMenuApi } from "../../services/menuService";

interface MenuState {
  data: Menu | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MenuState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  console.log("OK");

  const response = await fetchMenuApi();
  return response as Menu;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default menuSlice.reducer;
