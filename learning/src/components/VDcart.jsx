import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Vdcart = ({ video }) => {
  const { id } = useParams(); // Get video ID from URL params

  const [isHovered, setIsHovered] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };

  return (
    <Link to={`/video-detail/${video?.videoId}`}>
      {" "}
      <div
        className="vd-cart flex rounded-xl overflow-hidden w-[350px] h-[120px] bg-white "
        onMouseEnter={() => {
          setIsHovered(true);
          setPlaybackTime(0); // Reset playback time on hover
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-xl overflow-hidden w-[180px] h-full">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
            playing={isHovered}
            muted
            width="100%"
            height="100%"
            style={{ borderRadius: "15px" }}
            onProgress={({ playedSeconds }) => {
              if (playedSeconds >= 3) {
                // Stop after 5 seconds
                setIsHovered(false);
              }
            }}
            loop={true}
          />
        </div>
        <div className="block ml-2 gap-2 w-[140px]">
          <p className="font-medium text-[14px] mt-2 line-clamp-2">
            {video?.title}
          </p>
          <p className="font-light text-gray-400 text-xs">
            {video?.channelTitle}
          </p>
          <div className="flex mt-1">
            <p className="font-light text-gray-400 text-[11px]">
              {formatViews(video?.viewCount)} views
            </p>
            <p className="font-light text-gray-400 text-[11px] ml-2">
              {video?.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Vdcart;
