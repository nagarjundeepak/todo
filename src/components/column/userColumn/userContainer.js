import React from "react";
import { connect } from "react-redux";
import AddNewTask from "./addNewTask";
import UserName from "./userName";
import TaskCard from "./taskCard";

function UserContainer({ users }) {
  const { userData } = users;
  // check for users list
  if (userData.length === 0) {
    return <div className="column__users">No users available!</div>;
  }
  return (
    <div className="column__users">
      {userData.map(user => {
        return (
          <div className="user" key={user.uid}>
            <UserName name={user.username} uid={user.uid} />
            <TaskCard list={user.tasks} uid={user.uid} />
            <AddNewTask uid={user.uid} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(UserContainer);
