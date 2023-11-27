import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TODOS_URL = 'http://localhost:8000/todos/';

const initialState = {
    todos: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(TODOS_URL)
    return response.data
})


export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
            payload: {
                id: nanoid(),
                title,
                content,
            }
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { todoAdded } = todoSlice.actions;

export default todoSlice.reducer;
