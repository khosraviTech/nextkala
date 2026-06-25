import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import orederSlice from "./features/orderSlice";
import wishlistSlice from "./features/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      cart: cartSlice.reducer,
      user: userSlice.reducer,
      order: orederSlice.reducer,
      wishlist:wishlistSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];