import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store/store";
import { ICompanyFormData } from "@/interface/interface";

export const saveToLocalStorage = (state: ICompanyFormData[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("companies", serializedState);
  } catch {
    // обработать ошибку
  }
};

// Вспомогательная функция для загрузки состояния
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("companies");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const initialState: ICompanyFormData[] = loadFromLocalStorage() || [];

export const companySlice = createSlice({
  name: "company",

  initialState,
  reducers: {
    addNewCompany: (state, action: PayloadAction<ICompanyFormData>) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
  },
});

export const { addNewCompany } = companySlice.actions;

export const selectCompany = (state: RootState) => state.company;

export default companySlice.reducer;
