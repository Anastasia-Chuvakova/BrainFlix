import React, { Component } from "react";
import PropTypes from "prop-types";

export class UserItems extends Component {
  render() {
    return (
      <>
        <div className="conversation__wrapper">
          <div className="users__icon">
            <img src={this.props.userList.image} alt="userpic" />
          </div>
          <div className="conversation__container">
            <div className="conversation__info">
              <h2 className="conversation__subheader subheader">
                {this.props.userList.name}
              </h2>
              <h5 className="conversation__labels labels">
                {this.props.userList.date}
              </h5>
            </div>
            <h4 className="conversation__paragraph paragraph">
              {this.props.userList.comment}
            </h4>
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
