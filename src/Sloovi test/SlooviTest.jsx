import React, { useState, useEffect } from "react";
import "./SlooviTest.css";
import { GrFormAdd, GrFormCheckmark } from "react-icons/gr";
import { TbBellZ } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { addTask, getTasks, updateTasks, deleteTask } from "../redux/apiCalls";

const SlooviTest = () => {
  const isFetching = useSelector((state) => state.task.isFetching);
  // const validation = useSelector((state) => state.task.Tasks.find(koom => koom));
  const error = useSelector((state) => state.user.currentUser.status);
  const Tasks = useSelector((state) => state.task.Tasks);
  const [AddTask, setAddTask] = useState(false);
  const [task_msg, setTask] = useState("");
  const [task_date, setDate] = useState("");
  const [tas, setTime] = useState("");
  const [assigned_user, setAssignedName] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  // const [validationCheck, setValidationCheck] = useState();
  // const [validationAfterCheckMessage, setValidationAfterCheckMessage] = useState();
   const [is_completed, setIs_completed] = useState(0);
   const [successRessult, setSucessResult] = useState("");
   const [notLogged, setNotLogged] = useState("");




   useEffect(() => {
     
    if (error === 200) {
      setSucessResult("You're logged in.")
    } else{
      setNotLogged("You're not logged in.")
    }
   }, [])
   

  useEffect(()=>{
    getTasks(dispatch)
  },[dispatch])

  

// TOGGLE UPDATE MODE
  const toggle = (index) => {
    if (updateMode === index) {
      return setUpdateMode(null);
    }
    setUpdateMode(index);
  };

  // useEffect(() => {
  //   setValidationCheck(validation)
  //   console.log(validationCheck);
  //   validationCheck === "Invalid Access Token" ? setValidationAfterCheckMessage("If after saving you got a blank Task, please refresh your browser an try again") : console.log(false);
    
   
  // }, [])

  // useEffect(() => {
  //   setValidationCheck([Tasks])
  // }, [])
  
  


// HOVER UPDATE ICON
  const mousehover = (index) => {
    if (hover === index) {
      return setHover(null);
    }
    setHover(index);
  };
  
// UPDATE TASK
  const handleUpdate = (id) => {
    const task = {
      task_time,
      time_zone,
      task_date: task_date,
      task_msg: task_msg,
      assigned_user: assigned_user,
      is_completed,
    };
    updateTasks(id, task, dispatch);
  };


// DELETE TASK
  const handleDelete = (id) => {
    deleteTask(id, dispatch);
  };



// TASK DATE
  var date = new Date();
  const offset = date.getTimezoneOffset();
  var time_zone = parseInt(offset * 60);



// TASK TIME
  const str = tas.split(":");
  var task_time =
    parseInt(str[0], 10) * 60 * 60 +
    parseInt(str[1], 10) * 60 +
    parseInt(str[2], 10);



// ADD TASK
  const handleClick = (e) => {
    e.preventDefault();

    const task = {
      task_time,
      time_zone,
      task_date: task_date,
      task_msg: task_msg,
      assigned_user: assigned_user,
      is_completed: is_completed,
    };
    addTask(task, dispatch);
    setUpdateMode(null)
    e.target.reset()

  };

  return (
    <div className="sloov-container">
      <div></div>
      { successRessult && <div className="login">{successRessult}</div>}  
      {notLogged && <div  className="logout">{notLogged}</div>}
      <div className="sloovi-wrapper">
        <div className="task-wrapper">
          <label className="task-label-and-quantity">TASKS</label>
          <span className="task-label-and-quantity">{Tasks.length}</span>
          <div onClick={() => setAddTask(!AddTask)} className="add">
            <GrFormAdd />
          </div>
        </div>
        

        <form action="" className={AddTask ? "form" : "noForm"} onSubmit={handleClick}>
          <div className="form-wrapper">
            <div className="task-input-wrapper">
              <div className="task-titles">Task Description</div>
              <input
                name="task_msg"
                onChange={(e) => setTask(e.target.value)}
                className="task-input"
                type="text"
                disabled={isFetching}
                required
              />
            </div>
            <div className="date-and-time">
              <div className="date-input-wrapper">
                <div className="task-titles">Date</div>
                <input
                  name="task_date"
                  onChange={(e) => setDate(e.target.value)}
                  className="date-and-time-input"
                  type="date"
                  disabled={isFetching}
                  required
                />
              </div>

              <div>
                <div className="task-titles">Time</div>
                <input
                  onChange={(e) => setTime(e.target.value)}
                  name=""
                  step="1"
                  className="date-and-time-input"
                  type="time"
                  disabled={isFetching}
                  required
                />
              </div>
            </div>

            <div className="task-input-wrapper">
              <div className="task-titles">Assign User</div>
              <input
                onChange={(e) => setAssignedName(e.target.value)}
                name="assigned_user"
                className="task-input"
                type="text"
                disabled={isFetching}
                required
              />
            </div>
          </div>
          <div className="cancel-save-wrapper">
           
            <div className="btn-and-cancel-wrapper">
              <div className="cancel-button" onClick={()=> setAddTask(false)}>Cancel</div>
              <button disabled={isFetching}  type="submit" >Save</button>
            </div>
          </div>
        </form>

        {Array.isArray(Tasks)?Tasks.map((task, index) => (
          <div className="all-task-wrap" task={task} key={index}>
            <div className="editable" onMouseEnter={() => mousehover(index)}
                onMouseLeave={() => mousehover(index)}
                  key={index}> 
              <div className="editable-img-task-time-wrapper">
                <div className="editable-task-and-time-wrapper">
                  <div className="editable-task">
                    {task.task_msg}
                  </div>
                  <div className="editable-time">
                    {task.task_date}
                  </div>
                </div>
              </div>
              <div className="icon-wrapper">
              {hover  === index ? (
                <div
                  id="edit"
                  className="icon" 
                  onClick={() => toggle(index)}
                  
                  
                >
                  <MdModeEditOutline />
                </div>
              ): null}
                <div className="inner-icons-wrapper">
                  <div className="icon">
                    <TbBellZ />
                  </div>
                  <div className="icon">
                    <GrFormCheckmark />
                  </div>
                </div>
              </div>
            </div>

            {updateMode === index ? (
              <form action="" className="form">
                
                  <div className="task-input-wrapper">
                    <div className="task-titles">Task Description</div>
                    <input
                      name="task_msg"
                      onChange={(e) => setTask(e.target.value)}
                      className="task-input"
                      type="text"
                      defaultValue={task.task_msg}
                      disabled={isFetching}
                      autoFocus="true"
                    />
                  </div>
                  <div className="date-and-time">
                    <div className="date-input-wrapper">
                      <div className="task-titles">Date</div>
                      <input
                        name="task_date"
                        onChange={(e) => setDate(e.target.value)}
                        className="date-and-time-input"
                        type="date"
                        defaultValue={task.task_date}
                        disabled={isFetching}
                      />
                    </div>

                    <div>
                      <div className="task-titles">Time</div>
                      <input
                        onChange={(e) => setTime(e.target.value)}
                        name=""
                        step="1"
                        className="date-and-time-input"
                        type="time"
                        defaultValue={task.task_time}
                        disabled={isFetching}
                      />
                    </div>
                  </div>

                  <div className="task-input-wrapper">
                    <div className="task-titles">Assign User</div>
                    <input
                      onChange={(e) => setAssignedName(e.target.value)}
                      name="assigned_user"
                      className="task-input"
                      type="text"
                      defaultValue={task.assigned_user}
                      disabled={isFetching}
                    />
                  </div>
                <div className="delete-cancel-save-wrapper">
                  <div className="delete" onClick={(e) => { window.confirm( 'Are you sure you want to delete this Task?', ) && handleDelete(task.id) }}>
                    <RiDeleteBin6Line />
                  </div>
                  <div className="btn-and-cancel-wrapper">
                    <div className="cancel-button" onClick={()=> setUpdateMode(null)}>Cancel</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpdate(task.id);
                      }}
                      disabled={isFetching}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default SlooviTest;
