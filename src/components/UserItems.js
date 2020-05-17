import React, { Component } from "react";
import PropTypes from "prop-types";

export class UserItems extends Component {
  render() {
    return (
      <>
        <div>
          <img src={this.props.userList.image} />
        </div>

        <div className="form__wrapper">
          <div>
            <h2>{this.props.userList.name}</h2>
            <h2>{this.props.userList.date}</h2>
          </div>
          <h4>{this.props.userList.comments}</h4>
        </div>
      </>
    );
  }
}

//PropTypes
UserItems.propTypes = {
  userLists: PropTypes.array.isRequired,
};

export default UserItems;
//<h2 className="subheader">3 Comments</h2>
