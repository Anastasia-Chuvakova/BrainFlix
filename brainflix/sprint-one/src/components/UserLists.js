import React, { Component } from "react";
import UserItems from "./UserItems";
import { uuid } from "uuidv4";
import PropTypes from "prop-types";
// import Moment from "react-moment";
// import "moment-timezone";

class UserLists extends Component {
  render() {
    return this.props.userLists.map((userList) => (
      <UserItems key={uuid()} userList={userList} />
    ));
  }
}

//PropTypes
UserLists.propTypes = {
  userLists: PropTypes.array.isRequired,
};

export default UserLists;
