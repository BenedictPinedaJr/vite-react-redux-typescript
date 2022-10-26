import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    logout: (state, action) => {
      state.name = initialState.name
      state.email = initialState.email
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer