import React from "react";
import { Link } from "react-router-dom";

export default function SideVideos({
  id,
  title,
  path,
  isActive,
  image,
  channel,
}) {
  return (
    <Link
      to={`/videos/${id}`}
      id={id}
      className={`side-video-item ${isActive && "side-video-item--is-active"}`}
    >
      <div className="side-vid__wrp">
        <div className="vid">
          <video
            className="video-item__vid"
            src={path}
            alt={title}
            poster={image}
          />
        </div>

        <div className="side-vid__inf">
          <h2 className="side-vid__title subheader">{title}</h2>
          <h2 className="side-vid__channel paragraph">{channel}</h2>
        </div>
      </div>
    </Link>
  );
}
