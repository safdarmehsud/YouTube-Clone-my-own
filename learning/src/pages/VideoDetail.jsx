import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import ReactPlayer from "react-player";
import Vdcart from "../components/Vdcart";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { SlLike, SlDislike } from "react-icons/sl";

import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

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
      <div className="video-detail-main lg:block">
        <div className="video-detail-1 h-[100%] w-[95%] absolute left-[5%] top-[11%]">
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              width: "67%",
              height: "65%",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              playing
              volume={0.8}
              width="100%"
              height="100%"
            />
          </div>
          <h2 className="text-xl font-semibold w-[66%] mt-2">{video.title}</h2>
          <div className=" flex justify-between w-[67%]">
            <div className="flex mt-5 ">
              <img
                src={
                  video?.thumbnail?.[0]?.url || "default_channel_thumbnail.jpg"
                }
                alt="Channel Thumbnail"
                className="h-12 w-12 rounded-full "
              />
              <div className="block ml-2">
                <p className="text-sm text-black font-semibold cursor-pointer ">
                  {video?.channelTitle}
                </p>
                <p className="text-sm text-gray-600 cursor-pointer">
                  {video?.subscriberCountText || "N/A Subscribers"}
                </p>
              </div>
              <ul
                className="flex border-1 border-solid border-black cursor-pointer p-2"
                // onClick={handleSubscribersClick}
              >
                <li>
                  <IoMdNotificationsOutline className="text-2xl font-light" />
                </li>
                <p className="text-sm font-semibold p-1">Subscribe</p>
                <li className="p-1">
                  <IoIosArrowDown />
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className="flex  ">
                <ul className="flex    border-solid rounded-full bg-slate-100 p-1 mr-1 h-8">
                  <li
                    className={`flex  p-1 text-lg cursor-pointer ${
                      isLike ? " text-gray-400" : "text-black"
                    }`}
                    onClick={handleLikeClick}
                  >
                    <SlLike className="" />
                    <p className="ml-1  text-sm">
                      {video?.likeCount || "2.6K"}
                    </p>
                  </li>
                  <li
                    className={` p-1 border-l-[2px]  border-solid border-gray-300 text-lg cursor-pointer ${
                      isDislike ? "text-gray-400" : " text-black"
                    }`}
                    onClick={handleDislikeClick}
                  >
                    <SlDislike className="ml-1 " />
                  </li>
                </ul>
                <li className="p-[8px] flex bg-slate-100 rounded-full mr-1 h-8 cursor-pointer">
                  <PiShareFatLight className="text-xl" />
                  <p className="text-sm">Share</p>
                </li>
                <li className="p-[8px] flex bg-slate-100 rounded-full mr-1 h-8 cursor-pointer">
                  <HiDownload className="text-xl" />
                  <p className="text-sm">Download</p>
                </li>
                <li className="p-[6.5px] bg-slate-100 rounded-full mr-1 h-8 w-9 cursor-pointer">
                  <BsThreeDots className="text-xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="video-detail-2 flex absolute top-[15%] left-[70%] flex-col space-y-4">
          {relatedVideo.map((related, index) => (
            <Vdcart key={index} video={related} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
