import { createSlice } from "@reduxjs/toolkit";

export interface ModeState {
  value: "light" | "dark";
}

const getInitialState = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("Theme") as "light" | "dark";
    if (storedTheme){
      return storedTheme;
    } else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", 'dark');
      return 'dark';
    }
  }
  return "dark";
};

const initialState: ModeState = {
  value: getInitialState(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
      if (state.value === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("Theme", state.value);
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: ModeState }) => state.theme.value;
export default themeSlice.reducer;
