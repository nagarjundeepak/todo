import React from "react";
import { connect } from "react-redux";
import { removeUser } from "../../../store/actions/";

function UserName({ name, uid, onDelete }) {
  return (
    <div className="user__name">
      <div>{name}</div>
      <div
        className="remove"
        onClick={() => {
          onDelete(uid);
        }}
      >
        x
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: uid => {
      dispatch(removeUser(uid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserName);
