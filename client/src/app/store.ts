/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
// eslint-disable-next-line import/no-cycle
// import todoReducer from '../features/todos/todoSlice';

// ...

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
