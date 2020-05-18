import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainVideoItem extends Component {
  render() {
    return (
      <div className="main-video">
        <img src={this.props.mainVideoList.image} />
      </div>
    );
  }
}

export default MainVideoItem;

//PropTypes
MainVideoItem.propTypes = {
  mainVideoList: PropTypes.object.isRequired,
};
