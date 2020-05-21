import React from "react";
import { Link } from "react-router-dom";

export default function VideoItems({ id, title, path, isActive }) {
  return (
    <Link
      to={`/video/${id}`}
      id={id}
      className={`video-item ${isActive && "video-item--is-active"}`}
    >
      <figure className={`video-item__figure'}`}>
        <img className="video-item__vid" src={path} alt={title} />
        <figcaption className="video-item__caption">{title}</figcaption>
      </figure>
    </Link>
  );
}

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export class VideoItems extends Component {
//   render() {
//     return (
//       <div className="side__wrapper">
//         <div className="side__videos">
//           <img
//             className="videos"
//             src={this.props.videoList.image}
//             alt="videopic"
//           />
//         </div>
//         <div className="side__info">
//           <h2 className="side__subheader subheader">
//             {this.props.videoList.title}
//           </h2>
//           <h4 className="side__paragraph paragraph">
//             {this.props.videoList.channel}
//           </h4>
//         </div>
//       </div>
//     );
//   }
// }
// //PropTypes
// VideoItems.propTypes = {
//   videoList: PropTypes.object.isRequired,
// };
// export default VideoItems;
