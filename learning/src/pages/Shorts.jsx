import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router-dom";
import { SlLike, SlDislike } from "react-icons/sl";
import { PiShareFatLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

const Shorts = () => {
  const { id } = useParams(); // Get dynamic ID from route params
  const url = `https://yt-api.p.rapidapi.com/shorts/info?id=${id}`;
  const [shortsPlay, setShortsPlay] = useState([]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(url, {
        params: { id: "jOcyYhsc1mA" },
        headers: {
          "x-rapidapi-key":
            "229c7fc249mshc00ff8ca96573ecp1ba454jsn8f3475a91f43",
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      })
      .then((response) => setShortsPlay(response?.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(shortsPlay);
  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };
  return (
    <div className="main-shorts h-[90vh] w-[100%]">
      <Navbar />
      <div className="shorts-container w-[25%] h-[96%] m-auto rounded-xl overflow-hidden mt-3">
        <Swiper direction="vertical" spaceBetween={10} slidesPerView={1}>
          <SwiperSlide>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${shortsPlay?.videoId}`}
              playing={true}
              volume={0.8}
              width="100%"
              height="100%"
              controls={true}
              muted
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="icons-div absolute top-[55%] left-[63%]">
        <ul className="space-y-4">
          <li className="p-2 h-10 w-10 bg-slate-100 rounded-full cursor-pointer">
            <SlLike className="text-xl" />
            <p className="text-xs ml-[-2px] mt-3 font-semibold">
              {formatViews(shortsPlay?.likeCount)}
            </p>
          </li>
          <li className="p-2 h-10 w-10 bg-slate-100 rounded-full mt-2 cursor-pointer">
            <SlDislike className="text-xl" />
            <p className="text-xs ml-[-6px] mt-3 font-semibold">Dislike</p>
          </li>
          <li className="p-2 h-10 w-10 bg-slate-100 rounded-full cursor-pointer">
            <MdComment className="text-xl" />
            <p className="text-xs ml-[-2px] mt-3 font-semibold">
              {formatViews(shortsPlay?.commentCount)}
            </p>
          </li>
          <li className="p-2 h-10 w-10 bg-slate-100 rounded-full cursor-pointer ">
            <PiShareFatLight className="text-xl" />
            <p className="text-xs ml-[-2px] mt-3 font-semibold">Share</p>
          </li>
          <li className="p-2 h-10 w-10 bg-slate-100 rounded-full cursor-pointer">
            <BsThreeDotsVertical className="text-xl" />
          </li>
        </ul>
      </div>
      <div className="icons-div absolute top-[47%] left-[95%]">
        <ul>
          <li className="p-3 h-10 w-10 bg-slate-100 rounded-full cursor-pointer">
            <FaArrowUpLong />
          </li>
          <li className="p-3 h-10 w-10 bg-slate-100 rounded-full mt-7 cursor-pointer">
            <FaArrowDownLong />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shorts;
