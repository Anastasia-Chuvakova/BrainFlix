import React from "react";
//import VideoItems from "./SideVideos";
import SideVideos from "./SideVideos";
import { Link } from "react-router-dom";

export default function VieoGrid({ videoData, activeVideo, routerProps }) {
  console.log(activeVideo);
  let nextVideoId = 0;
  let nextVideo = videoData
    .filter((video) => video.id !== activeVideo)
    .sort((a, b) => a.id - b.id)[0];
  if (nextVideo !== undefined) {
    console.log("nextVid", nextVideo.id);
    nextVideoId = nextVideo.id;
  }

  return (
    <div className="side-vid">
      <Link to={`/video-details?video=${nextVideoId}`} exact>
        <button className="side-vid__header labels">next video</button>
      </Link>

      {videoData
        .filter((video) => video.id !== activeVideo)
        .sort((a, b) => a.id - b.id)
        .map((video) => (
          <SideVideos
            key={video.id}
            id={video.id}
            title={video.title}
            path={video.path}
            video={video.video}
            image={video.image}
            channel={video.channel}
            isActive={video.id === activeVideo ? true : false}
          />
        ))}
    </div>
  );
}
