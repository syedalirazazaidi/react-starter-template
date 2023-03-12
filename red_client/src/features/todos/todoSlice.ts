/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import todoService from "./todoService";
// import { RootState } from '../../store';
import axios from "axios";
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
const API_URL = "http://localhost:8000";
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
export const updateTodo = createAsyncThunk(
  "todos/update",
  async (updateNew: any, { rejectWithValue }) => {
    console.log(updateNew);
    // {_id: '640ce8b85b1169351fde7ee6', title: 'ali raza', description: 'zaidi', done: false, createdAt: '2023-03-11T20:46:48.416Z', …}
    try {
      const { _id, title, description, createdAt } = updateNew;
      console.log(title, _id, description);
      console.log(`http://localhost:8000/todos${_id}`);

      const response = await axios.put(
        `http://localhost:8000/todos${_id}`,
        updateNew
        //   `${API_URL} /todos${_id}`, {
        //   _id,
        //   title,
        //   description,
        // }
      );
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const getTodos = createAsyncThunk("todos/get", async (_, thunkAPI) => {
  try {
    return await todoService.getTodoice();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
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
      })
      .addCase(updateTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        console.log(action.payload, "????");
        // state.isLoading = false;
        // state.isSuccess = true;
        // state.todos = action.payload;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        // state.isLoading = false;
        // state.isError = true;
        // state.message = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default todoSlice.reducer;
