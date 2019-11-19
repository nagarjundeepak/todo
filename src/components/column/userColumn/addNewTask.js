import React from "react";
import { connect } from "react-redux";
import { ReactComponent as PlusIcon } from "../../../assets/plusIcon.svg";
import { addNewTask } from "../../../store/actions/index";

function AddNewTask({ uid, onAddNewTask }) {
  const handleClick = () => {
    let tName = prompt("Enter task name", "Task Name");
    let tDetails = prompt("Enter your details", "details of the task");
    let task = { name: tName, details: tDetails };
    onAddNewTask(uid, task);
  };

  return (
    <div
      className="user__newTask"
      onClick={handleClick}
      aria-label="add new task"
    >
      <PlusIcon className="icon" />
      <div>Add New Task</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { users: state.users, ownProps };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewTask: (uid, task) => {
      dispatch(addNewTask(uid, task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewTask);
