import React from "react";
import VideoItems from "./VideoItems";

export default function VieoGrid({ videoData, activeVideo, routerProps }) {
  return (
    <div className="video-grid">
      {videoData
        .sort((a, b) => a.id - b.id)
        .map((video) => (
          <VideoItems
            key={video.id}
            id={video.id}
            title={video.title}
            path={video.path}
            isActive={video.id === activeVideo ? true : false}
          />
        ))}
    </div>
  );
}
