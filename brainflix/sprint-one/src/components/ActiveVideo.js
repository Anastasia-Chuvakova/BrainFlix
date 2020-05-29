import React from "react";

function ActiveVideo(props) {
  if (!props.video) {
    return <p>Loading...</p>;
  }
  return (
    <div className="active-video">
      <video
        className="active-video__vid"
        src={props.video.path}
        alt={props.video.title}
      />
      <div className="active-video__text-wrapper">
        <h2 className="active-video__title">{props.video.title}</h2>
        <p className="active-video__desc">{props.video.desc}</p>
      </div>
    </div>
  );
}

export default ActiveVideo;
