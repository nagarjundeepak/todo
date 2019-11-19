import React from "react";
import AddNewUser from "./addNewUser";
import UserContainer from "./userColumn/userContainer";

function ColumnContainer() {
  return (
    <div className="column">
      <UserContainer />
      <AddNewUser />
    </div>
  );
}

export { ColumnContainer };
