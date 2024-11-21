import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import ReactPlayer from "react-player";
import Vdcart from "../components/Vdcart";

import { SlLike, SlDislike } from "react-icons/sl";

import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  // const [subscribers, setSubscribers] = useState(false);

  const url = `https://yt-api.p.rapidapi.com/video/info?id=${id}`;
  const urlRelated = `https://yt-api.p.rapidapi.com/related?id=${id}`;

  // const handleSubscribersClick = () => {
  //   setSubscribers(() => {
  //     return (
  //       <div className="subscribers">
  //         <ul>
  //           <li>Hello</li>
  //           <li>Helllo</li>
  //           <li>Hello</li>
  //         </ul>
  //       </div>
  //     );
  //   });
  // };

  const handleLikeClick = () => {
    setIsLike(!isLike);
    if (isDislike) setIsDislike(false); // If dislike is active, deactivate it
  };

  const handleDislikeClick = () => {
    setIsDislike(!isDislike);
    if (isLike) setIsLike(false); // If like is active, deactivate it
  };
  useEffect(() => {
    if (id) {
      axios
        .get(url, {
          headers: {
            "x-rapidapi-key":
              "229c7fc249mshc00ff8ca96573ecp1ba454jsn8f3475a91f43",
            "x-rapidapi-host": "yt-api.p.rapidapi.com",
          },
        })
        .then((response) => setVideo(response.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(urlRelated, {
          headers: {
            "x-rapidapi-key":
              "229c7fc249mshc00ff8ca96573ecp1ba454jsn8f3475a91f43",
            "x-rapidapi-host": "yt-api.p.rapidapi.com",
          },
        })
        .then((response) => setRelatedVideo(response.data.data || []))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="video-detail-main  min-h-screen p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[88%] mx-auto">
          {/* Video Player and Details Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="w-[100%] aspect-video rounded-lg overflow-hidden bg-black">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                playing
                volume={0.8}
                width="100%"
                height="100%"
              />
            </div>

            {/* Video Title */}
            <h1 className="text-2xl font-bold mt-4 text-gray-800">
              {video.title}
            </h1>

            {/* Channel Details and Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-4 border-b border-gray-300 pb-4">
              <div className="flex items-center">
                <img
                  src={
                    video?.thumbnail?.[0]?.url ||
                    "default_channel_thumbnail.jpg"
                  }
                  alt="Channel Thumbnail"
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-lg font-semibold text-gray-800 cursor-pointer">
                    {video?.channelTitle}
                  </p>
                  <p className="text-sm text-gray-600 cursor-pointer">
                    {video?.subscriberCountText || "N/A Subscribers"}
                  </p>
                </div>
              </div>

              <button className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600">
                Subscribe
              </button>
            </div>

            {/* Like, Share, and Other Actions */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleLikeClick}
                className={`flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg ${
                  isLike ? "text-blue-600" : "text-gray-800"
                }`}
              >
                <SlLike className="text-xl" />
                <span>{video?.likeCount || "2.6K"}</span>
              </button>
              <button
                onClick={handleDislikeClick}
                className={`flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg ${
                  isDislike ? "text-blue-600" : "text-gray-800"
                }`}
              >
                <SlDislike className="text-xl" />
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg text-gray-800">
                <PiShareFatLight className="text-xl" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg text-gray-800">
                <HiDownload className="text-xl" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Related Videos Section */}
          <div className="space-y-3 md:w-full">
            {relatedVideo.map((related, index) => (
              <Vdcart key={index} video={related} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
