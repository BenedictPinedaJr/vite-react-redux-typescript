import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import appThemeReducer from "./features/app-theme";
import musicPlayerReducer from "./features/music-player";
import { shazamCoreApi } from "./services/shazam-core";

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    user: userReducer,
    appTheme: appThemeReducer,
    musicPlayer: musicPlayerReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
