import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { SlFire } from "react-icons/sl";
import { CiMusicNote1 } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import One from "../images/one-pic.png";
import Two from "../images/two pic.png";
import Three from "../images/three pic.png";
import Four from "../images/four pic.png";
import Fife from "../images/five pic.png";
import YoutubePremium from "../images/YOUTUBE-premium-logo.png";
import YoutubeStudio from "../images/youtube-studio-logo.png";
import YoutubeMusic from "../images/youtube-music-logo.png";
import YoutubeKid from "../images/youtube-kid-logo.png";
import "../custom-styling/global.css";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div className="main-sidebar fixed top-14 left-0 w-64 h-[95vh]  overflow-scroll overflow-y-scroll  scrollbar-custom scrollbar-thumb-gray-900 scrollbar-track-gray-300 bg-white shadow-lg z-50 rounded-md">
          <div className="sidebar-wrapper p-4">
            <ul className="flex flex-col space-y-1">
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md ">
                <IoMdHome className="text-[21px]" />
                <p className="text-sm ml-4">Home</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <SiYoutubeshorts className="text-[21px]" />
                <p className="text-sm ml-4">Shorts</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <MdOutlineSubscriptions className="text-[21px]" />
                <p className="text-sm ml-4">Subscriptions</p>
              </li>
              <hr />
              <li className="flex items-center cursor-pointer p-1 hover:bg-slate-200 rounded-md">
                <p className="text-[17px] pl-2 font-semibold">You</p>
                <MdKeyboardArrowRight className="text-2xl pt-1" />
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <GrHistory className="text-[21px] font-bold" />
                <p className="text-sm ml-4">History</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <CgPlayList className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Playlists</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <CiYoutube className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Your Videos</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <GoLightBulb className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Your Courses</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <MdOutlineWatchLater className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Watch Later</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <SlLike className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Like Videos</p>
              </li>
              <hr />
              <li className="flex items-center cursor-pointer p-1 hover:bg-slate-200 rounded-md">
                <p className="text-[17px] pl-2 font-semibold">Subscriptions</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={One} alt="" className="h-7 w-9" />
                <p className="text-sm ml-4">Haider Channel</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={Two} alt="" className="h-7 w-9" />
                <p className="text-sm ml-4">Talha Channel</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={Three} alt="" className="h-7 w-9" />
                <p className="text-sm ml-4">Safdar Channel</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={Four} alt="" className="h-7 w-9" />
                <p className="text-sm ml-4">Jidran Channel</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={Fife} alt="" className="h-7 w-9" />
                <p className="text-sm ml-4">Zarsher Channel</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <FaChevronDown />
                <p className="text-sm ml-9">Show more</p>
              </li>
              <hr />
              <li className="flex items-center cursor-pointer p-1 hover:bg-slate-200 rounded-md">
                <p className="text-[17px] pl-2 font-semibold">Subscriptions</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <SlFire className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Trending</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <CiMusicNote1 className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Music</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <SiYoutubegaming className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Gaming</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <MdNewspaper className="text-[21px] font-bold" />
                <p className="text-sm ml-4">News</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <IoTrophyOutline className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Sports</p>
              </li>
              <hr />
              <li className="flex items-center cursor-pointer p-1 hover:bg-slate-200 rounded-md">
                <p className="text-[17px] pl-2 font-semibold">
                  More From YouTube
                </p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={YoutubePremium} alt="" className="h-7 w-7" />
                <p className="text-sm ml-4">YouTube Premium</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={YoutubeStudio} alt="" className="h-7 w-7" />
                <p className="text-sm ml-4">YouTube Studio</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={YoutubeMusic} alt="" className="h-7 w-7" />
                <p className="text-sm ml-4">YouTube Music</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <img src={YoutubeKid} alt="" className="h-7 w-7" />
                <p className="text-sm ml-4">YouTube Kids</p>
              </li>
              <hr />
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <IoSettingsOutline className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Setting</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <FaRegFlag className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Report History</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <IoIosHelpCircleOutline className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Help</p>
              </li>
              <li className="flex items-center cursor-pointer p-2 hover:bg-slate-200 rounded-md">
                <MdOutlineFeedback className="text-[21px] font-bold" />
                <p className="text-sm ml-4">Send Feedback</p>
              </li>
              <hr />
              <li className="pt-4 ">
                <p className="text-xs font-semibold text-gray-500 ">
                  <div className="flex">
                    {" "}
                    <a href="" className="ml-2  ">
                      About
                    </a>
                    <a href="" className="ml-2">
                      Press
                    </a>{" "}
                    <a href="" className="ml-2">
                      Copyright
                    </a>
                  </div>
                  <div className="flex ml-2">
                    {" "}
                    <a href="">Contact us</a>{" "}
                    <a href="" className="ml-2">
                      Creator
                    </a>{" "}
                    <a href="" className="ml-2">
                      Advertise
                    </a>
                  </div>
                  <a href="" className="ml-2">
                    Developers
                  </a>
                </p>
              </li>
              <li className="pt-4">
                <p className="text-xs font-semibold text-gray-500 ">
                  <div className="flex">
                    {" "}
                    <a href="" className="ml-2  ">
                      Terms
                    </a>
                    <a href="" className="ml-2">
                      Privacy
                    </a>{" "}
                    <a href="" className="ml-2">
                      Policy & Safety
                    </a>
                  </div>
                  <a href="" className="ml-2 flex">
                    How YouTube works
                  </a>{" "}
                  <a href="" className="ml-2">
                    Test new features
                  </a>{" "}
                </p>
                <p className="text-gray-500 text-xs pt-6 pb-2">
                  © 2024 Made by Safdar
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
