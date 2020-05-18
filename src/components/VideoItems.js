import React, { Component } from "react";
import PropTypes from "prop-types";

export class VideoItems extends Component {
  render() {
    return (
      <div className="side__wrapper">
        <div className="side__videos">
          <img src={this.props.videoList.image} />
        </div>
        <div className="side__info">
          <h2>{this.props.videoList.title}</h2>
          <h4>{this.props.videoList.channel}</h4>
        </div>
      </div>
    );
  }
}
//PropTypes
VideoItems.propTypes = {
  videoList: PropTypes.object.isRequired,
};
export default VideoItems;

//videoList.splice(mainVideoIndex, 1);
/* <img src={this.props.videolist.image} /> */
