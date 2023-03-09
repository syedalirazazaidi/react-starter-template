/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import todoSlice from './features/todos/todoSlice';

// ...

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
