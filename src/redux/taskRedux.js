import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    Tasks: [],
    isFetching: false,
    error: false,
    is_completed: 0,
    quantity: 0,
  },
  reducers: {
    //GET ALL
    getTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.Tasks = action.payload;
    },
    getTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.Tasks.splice(
        state.Tasks.findIndex((item) => item.data.results.id === action.payload.data.results.id),
        1
      );
      state.quantity -= 1;
    },
    deleteTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTaskSuccess: (state, action) => {
     
      state.isFetching = false;

      state.Tasks[
        state.Tasks.findIndex((item) => item.data.results.id === action.payload.data.results.id)
      ] = action.payload;
      state.is_completed = 1;
    },
    updateTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.is_completed = 0;
    },
    //add
    addTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.Tasks.push(action.payload);
      state.is_completed = 1;
      state.quantity += 1;

    },
    addTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.is_completed = 0;
    },
  },
});

export const {
  getTaskStart,
  getTaskSuccess,
  getTaskFailure,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
} = TaskSlice.actions;

export default TaskSlice.reducer;