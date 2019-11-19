import React from "react";
import { connect } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/plusIcon.svg";
import { addNewUser } from "../../store/actions/";

function AddNewUser({ onAddNewUser }) {
  const handleClick = () => {
    let username = prompt("Enter username", "Username");
    onAddNewUser(username);
  };

  return (
    <div
      className="column__addUser"
      onClick={handleClick}
      aria-label="add new user"
    >
      <PlusIcon className="icon" />
      <div>Add New User</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNewUser: data => {
      dispatch(addNewUser(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewUser);
