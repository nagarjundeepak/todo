export const addNewUser = data => {
  return { type: "ADD_NEW_USER", data };
};

export const addNewTask = (uid, task) => {
  return {
    type: "ADD_NEW_TASK",
    uid,
    task
  };
};

export const removeTask = (uid, tid) => {
  return {
    type: "REMOVE_TASK",
    uid,
    tid
  };
};

export const removeUser = uid => {
  return {
    type: "REMOVE_USER",
    uid
  };
};
