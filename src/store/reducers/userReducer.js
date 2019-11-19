import uuid from "uuid";

const userData = [
  {
    uid: "1001",
    username: "Username 1",
    tasks: [
      {
        tid: "101",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      },
      {
        tid: "102",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      }
    ]
  },
  {
    uid: "1002",
    username: "Username 2",
    tasks: [
      {
        tid: "101",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      }
    ]
  },
  {
    uid: "1003",
    username: "Username 3",
    tasks: [
      {
        tid: "101",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      },
      {
        tid: "102",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      },
      {
        tid: "103",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      }
    ]
  },
  {
    uid: "1004",
    username: "Username 4",
    tasks: [
      {
        tid: "101",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      },
      {
        tid: "102",
        name: "Task Name",
        details:
          "Task details text Tech virtual drone online browser platform through in a system. But stream software offline. Professor install"
      }
    ]
  }
];

const initState = {
  userData
};

// helper functions to add data to state
const user = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        uid: uuid.v4(),
        username: action.data,
        tasks: []
      };
    default:
      return state;
  }
};

const addTask = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        tid: uuid.v4(),
        name: action.task.name,
        details: action.task.details
      };
    default:
      return state;
  }
};

const users = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { userData: [...state.userData, user(undefined, action)] };
    case "ADD_NEW_TASK":
      const { uid } = action;
      let updatedUserData = [];
      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].uid === uid) {
          state.userData[i].tasks.push(addTask(undefined, action));
          updatedUserData.push(state.userData[i]);
        } else {
          updatedUserData.push(state.userData[i]);
        }
      }
      return { userData: updatedUserData };
    case "REMOVE_TASK":
      let newState = [];
      // eslint-disable-next-line
      state.userData.map(o => {
        if (o.uid === action.uid) {
          let nt = o.tasks.filter(i => i.tid !== action.tid);
          newState.push({ ...o, tasks: nt });
        } else {
          newState.push(o);
        }
      });
      return { userData: newState };
    case "REMOVE_USER":
      return { userData: state.userData.filter(o => o.uid !== action.uid) };
    default:
      return state;
  }
};

export default users;
