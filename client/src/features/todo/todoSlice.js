import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

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
});

export const selectAllTodos = (state) => state.todos;
export const { todoAdded } = todoSlice.actions;

export default todoSlice.reducer;
