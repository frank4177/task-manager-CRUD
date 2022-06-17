import { taskRequest, userRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure} from "./userRedux";
import {
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
} from "./taskRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/login", user);

    dispatch(loginSuccess(res));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addTask = async (task, dispatch) => {
  dispatch(addTaskStart());
  try {
    const res = await taskRequest.post(
      `/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
      task
    );
    dispatch(addTaskSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(addTaskFailure());
  }
};

// export const getTasks = async (id) => {
//   try {
//     const getAll = await taskRequest.get("/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7");

//        const getSingle = await taskRequest.get(`/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`);
//     }catch (err) {
//         console.log.err("getTask Error", err);
//   } 
  
// };

export const updateTasks = async (id, task, dispatch) => {
  dispatch(updateTaskStart());
  try {
    const res = await taskRequest.put(
      `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
      task
    );

    dispatch(updateTaskSuccess(res));
  } catch (err) {
    dispatch(updateTaskFailure());
  }
};

export const deleteTask = async (id, dispatch) => {
  dispatch(deleteTaskStart());
  try {
    const res = await taskRequest.delete(
      `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
      { id }
    );
    dispatch(deleteTaskSuccess(res));
  } catch (err) {
    dispatch(deleteTaskFailure());
  }
};
