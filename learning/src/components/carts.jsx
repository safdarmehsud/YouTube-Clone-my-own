// Import necessary libraries
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Component for displaying cart
const Carts = ({ dat }) => {
  const [loading, setLoading] = useState(true);

  // Set loading to false once data is available
  useEffect(() => {
    if (dat) {
      setLoading(false);
    }
  }, [dat]);

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };

  return (
    <Link to={`/video-detail/${dat?.videoId}`}>
      <div className="cartcomponent h-[50%] w-[100%] relative left-[6%] xs:left-[10%] top-[19%] rounded-lg p-4">
        {loading ? (
          <Skeleton height={150} width="100%" className="mb-2 rounded-lg" />
        ) : (
          <img
            src={dat?.thumbnail?.[0]?.url || "default_thumbnail.jpg"} // Default thumbnail if not available
            alt="Video Thumbnail"
            className="rounded-lg h-[100%] w-[100%] mb-2 cursor-pointer"
          />
        )}

        <div className="flex gap-1">
          {loading ? (
            <Skeleton circle={true} height={50} width={50} />
          ) : (
            <img
              src={
                dat?.channelThumbnail?.[0]?.url ||
                "default_channel_thumbnail.jpg"
              } // Default channel thumbnail if not available
              alt="Channel Thumbnail"
              className="h-[14%] w-[10%] mt-3 rounded-full cursor-pointer"
            />
          )}

          <p className="font-semibold text-black mb-1 text-md mt-2 cursor-pointer">
            {loading ? (
              <Skeleton width={150} />
            ) : (
              dat?.title || "No Title Available"
            )}
          </p>
        </div>

        <p className="text-xs text-gray-400 mb-1 cursor-pointer pl-9">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            dat?.channelTitle || "Unknown Channel"
          )}
        </p>

        <div className="flex gap-2 pl-9">
          <p className="text-xs text-gray-500 cursor-pointer">
            {loading ? (
              <Skeleton width={60} />
            ) : (
              `${formatViews(dat?.viewCount || 0)} Views`
            )}
          </p>
          <p className="text-xs text-gray-500 cursor-pointer">
            {loading ? (
              <Skeleton width={60} />
            ) : (
              dat?.publishedTimeText || "N/A"
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Carts;
