/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import todoService from "./todoService";
// import { RootState } from '../../store';
interface IntialStateProp {
  todos: [];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: any = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const createTodo = createAsyncThunk(
  "todos/create",
  async (todoData: { title: string; description: string }, thunkAPI) => {
    try {
      return await todoService.createTodoice(todoData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getTodos = createAsyncThunk("todos/get", async (_, thunkAPI) => {
  try {
    return await todoService.getTodoice();
  } catch (error) {
    // const message =
    // (error.response &&
    //   error.response.data &&
    //   error.response.data.message) ||
    // error.message ||
    // error.toString();
    // return thunkAPI.rejectWithValue(message);
  }
});
export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   //   state.value += 1;
    // },
    // decrement: (state) => {
    //   //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default todoSlice.reducer;
