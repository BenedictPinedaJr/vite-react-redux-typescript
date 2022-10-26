import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false
}

const appThemeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
   changeTheme: (state) => {
    if (state.isDarkMode) {
      state.isDarkMode = false
    } else {
      state.isDarkMode = true
    }
   }
  }
})

export const { changeTheme } = appThemeSlice.actions

export default appThemeSlice.reducer