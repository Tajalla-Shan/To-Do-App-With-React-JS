import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, checked: false });
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
    toggleChecked: (state, action) => {
      const taskToCheck = state.find((task) => task.id === action.payload.id);
      if (taskToCheck) {
        taskToCheck.checked = !taskToCheck.checked; // Toggle the `checked` state
      }
    },
  },
});

export const { addTask, removeTask, editTask, toggleChecked } =
  todoSlice.actions;
export default todoSlice.reducer;
