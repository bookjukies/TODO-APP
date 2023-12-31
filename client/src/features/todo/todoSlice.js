import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TODOS_URL = 'http://localhost:8000/todos';

const initialState = {
    todos: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(TODOS_URL)
    // console.log(response.data)
    return response.data
})

export const addTodoAsync = createAsyncThunk('todos/addTodo', async (newTodo) => {
    const res = await axios.post(TODOS_URL, newTodo)
    const todo = await res.data
    return todo;
  });

  export const editTodoAsync = createAsyncThunk('todos/editTodo', async (todo) => {
    const {id} = todo
    try {
        const res = await axios.put(`${TODOS_URL}/${id}`, todo)
        return res.data
    } catch (error) {
        return error.message;
    }
  });

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (todo) => {
    const {id} = todo
    try {
        const res = await axios.delete(`${TODOS_URL}/${id}`)
        if (res?.status === 200) return todo;
        return `${res?.status}`;
    } catch (error) {
        return error.message;
    }
  });



export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }).addCase(deleteTodoAsync.fulfilled, (state, action) => {
        if (!action.payload?.id) {
            console.log('Delete could not complete')
            console.log(action.payload)
            return;
        }
        const { id } = action.payload;
        const todos = state.todos.filter(todo => todo.id !== id);
        state.todos = todos
    })
  },
});

export default todoSlice.reducer;
