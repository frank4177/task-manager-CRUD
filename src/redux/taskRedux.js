import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    Tasks: [],
    isFetching: false,
    error: false,
    is_completed: 1,
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
      state.is_completed = 0;
    },
    deleteTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.Tasks.splice(
        state.Tasks.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
    deleteTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.is_completed = 0;

    },
    updateTaskSuccess: (state, action) => {
     
      state.isFetching = false;
      state.Tasks[
        state.Tasks.findIndex((item) => item.id === action.payload.id)
      ] = action.payload.task;
      
    },
    updateTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //add
    addTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.is_completed = 0;
    },
    addTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.Tasks.push(action.payload);

    },
    addTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
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