"use client";

import React from "react";

interface VideoPlayerProps {
  src: string; // external video URL
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  thumbnail?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  className = "",
  thumbnail,
}) => {
  return (
    <video
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      preload="auto"
      className={`w-full h-full object-cover ${className}`}
      poster={thumbnail}
      style={{ display: "block" }}
      onError={(e) => {
        console.error("Video error:", e);
      }}
      onLoadedData={() => {
        console.log("Video loaded successfully");
      }}
    />
  );
};

export default VideoPlayer;
