import React from "react";

const UserList = (props) => {
  return (
    <ul>
      {props.users
        //.filter((user) => user.date > 0)
        .map((user, index) => (
          <li
            key={user.name}
            // onClick={props.handleClickProp}
            // onClick={() => props.handleClickProp("hi there")}
          >
            <img src={user.usericon} alt={user.name} />
            <h2>
              {user.name} {user.date}
            </h2>
          </li>
        ))}
    </ul>
  );
};

export default UserList;
