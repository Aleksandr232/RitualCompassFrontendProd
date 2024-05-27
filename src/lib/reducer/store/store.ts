import { configureStore } from "@reduxjs/toolkit";
import companySlice from "../companySlice";
import { companyApi } from "@/service/CompanyService";
import { setupListeners } from "@reduxjs/toolkit/query";


export const makeStore = () => {
  const store = configureStore({
    reducer: {
      company: companySlice,
      [companyApi.reducerPath] : companyApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(companyApi.middleware),
  });

  setupListeners(store.dispatch);
  return store
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// import { configureStore } from "@reduxjs/toolkit";
// import companySlice from "../companySlice";
// import { companyApi } from "@/service/CompanyService";
// import { setupListeners } from "@reduxjs/toolkit/query";

// export const makeStore = () => {
//   const store = configureStore({
//     reducer: {
//       company: companySlice,
//       [companyApi.reducerPath]: companyApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(companyApi.middleware),
//   });

//   // Enable the store to automatically setup listeners when required
//   setupListeners(store.dispatch);
//   return store;
// };

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
