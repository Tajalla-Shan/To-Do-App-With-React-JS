import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const taskToEdit = state.find((task) => task.id === action.payload.id);
      if (taskToEdit) {
        taskToEdit.title = action.payload.title;
        taskToEdit.description = action.payload.description;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
