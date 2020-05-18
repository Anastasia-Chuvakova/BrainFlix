import React, { Component } from "react";
import PropTypes from "prop-types";

export class UserItems extends Component {
  render() {
    return (
      <>
        <div className="comment__wrapper">
          <div className="users__icon">
            <img src={this.props.userList.image} />
          </div>
          <div className="comment__conainer">
            <div className="comment__info">
              <h2>{this.props.userList.name}</h2>
              <h2>{this.props.userList.date}</h2>
            </div>
            <h4>{this.props.userList.comment}</h4>
          </div>
        </div>
      </>
    );
  }
}

//PropTypes
UserItems.propTypes = {
  userList: PropTypes.object.isRequired,
};

export default UserItems;
//<h2 className="subheader">3 Comments</h2>
