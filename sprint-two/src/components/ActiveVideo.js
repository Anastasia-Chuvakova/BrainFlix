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
        <h1 className="active-video__title">{props.video.title}</h1>
        <h2 className="active-video__desc">{props.video.channel}</h2>
        <p className="active-video__desc">{props.video.image}</p>
        <p className="active-video__desc">{props.video.description}</p>
        <p className="active-video__desc">{props.video.views}</p>
        <p className="active-video__desc">{props.video.likes}</p>
        <p className="active-video__desc">{props.video.duration}</p>
        <p className="active-video__vid">{props.video.video}</p>
        <p className="active-video__desc">{props.video.timestamp}</p>
        <p className="active-video__vid">{props.video.comments}</p>
      </div>
    </div>
  );
}

export default ActiveVideo;
