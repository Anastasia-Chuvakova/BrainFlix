import React, { Component } from "react";
import VideoItems from "./VideoItems";
import { uuid } from "uuidv4";
import PropTypes from "prop-types";

class VideoLists extends Component {
  render() {
    return this.props.videoLists.map((videoList) => (
      <VideoItems key={uuid()} videoList={videoList} />
    ));
  }
}

//PropTypes
VideoLists.propTypes = {
  videoLists: PropTypes.array.isRequired,
};

export default VideoLists;
