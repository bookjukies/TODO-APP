import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",

    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    
    }
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        
    }
})

// export const {add} = todoSlice.actions

export default todoSlice.reducer

