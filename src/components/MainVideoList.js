import React, { Component } from "react";
import { uuid } from "uuidv4";
import PropTypes from "prop-types";
import MainVideoItem from "./MainVideoItem";

export class MainVideoList extends Component {
  render() {
    return this.props.mainVideoList.map((mainVideoList) => (
      <MainVideoItem key={uuid()} mainVideoList={mainVideoList} />
    ));
  }
}

//PropTypes
MainVideoList.propTypes = {
  mainVideoList: PropTypes.array.isRequired,
};

export default MainVideoList;
