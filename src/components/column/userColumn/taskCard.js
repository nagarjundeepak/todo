import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../../../store/actions/";

function TaskCard({ list, uid, onDelete }) {
  // checking for list is empty
  if (list.length === 0) {
    return <div className="user__taskList">No tasks available</div>;
  }
  return (
    <div className="user__taskList">
      {list.map(item => {
        return (
          <div key={item.tid} className="card">
            <div className="card__title">
              <div>{item.name}</div>
              <div
                className="remove"
                onClick={() => {
                  onDelete(uid, item.tid);
                }}
                aria-label="remove task"
              >
                X
              </div>
            </div>
            <div className="card__content">{item.details}</div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (uid, tid) => {
      dispatch(removeTask(uid, tid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskCard);
