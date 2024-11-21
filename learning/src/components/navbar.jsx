import { useState } from "react";
import {
  IoMdMenu,
  IoMdHome,
  IoMdContact,
  IoMdNotificationsOutline,
} from "react-icons/io";

import { IoIosSearch } from "react-icons/io";
import { MdVideoCall, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaMicrophone } from "react-icons/fa";
import myImg from "../images/my-img.jpg";
import YouTubeLogo from "../images/YOUTUBE-Logo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [showMicPopup, setShowMicPopup] = useState(false);
  const [showCreatVPopup, setShowCreatVPopup] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-white flex space-between rounded-t-lg sticky top-0 h-16 z-10 max-w-[100%]">
        <div className="sidebar fixed">
          <div className="flex flex-col justify-between items-center py-2">
            <ul className="flex flex-col">
              <li
                className="h-9 w-9 hover:bg-slate-100 rounded-full ml-2 flex justify-center items-center cursor-pointer"
                onClick={toggleSidebar}
              >
                <IoMdMenu className="text-2xl" />
              </li>
              <ul className="hidden sm:block">
                <Link to={"/home"}>
                  {" "}
                  <li className="h-20 w-16 hover:bg-slate-100 rounded-lg mt-4 flex flex-col justify-center content-center ">
                    <IoMdHome className="text-2xl ml-4 cursor-pointer" />
                    <p className="text-[10px] ml-4 cursor-pointer">Home</p>
                  </li>
                </Link>

                <Link to={"/shorts"}>
                  <li className="h-20 w-16 hover:bg-slate-100 rounded-lg flex flex-col justify-center content-center">
                    <SiYoutubeshorts className="text-2xl ml-4 cursor-pointer" />
                    <p className="text-[10px] ml-4 cursor-pointer">Shorts</p>
                  </li>
                </Link>
                <li className="h-20 w-16 hover:bg-slate-100 rounded-lg flex flex-col justify-center content-center">
                  <MdOutlineSubscriptions className="text-2xl ml-4 cursor-pointer" />
                  <p className="text-[10px] ml-1 cursor-pointer">
                    Subscriptions
                  </p>
                </li>
                <li className="h-20 w-16 hover:bg-slate-100 rounded-lg flex flex-col justify-center content-center">
                  <IoMdContact className="text-2xl ml-4 cursor-pointer" />
                  <p className="text-[10px] ml-5 cursor-pointer">You</p>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="navbar flex flex-row justify-between w-full bg-white fixed top-0 left-[5%] max-w-[95%] ">
          <div className="left-N ">
            <Link to={"/home"}>
              <img
                src={YouTubeLogo}
                className="logo h-18 max-w-40 text-4xl font-bold p-3 cursor-pointer"
              />
            </Link>
          </div>

          <div className="right-N flex justify-between content-center p-4">
            <form action="action" className="flex">
              <input
                type="search"
                placeholder="Search"
                className="border-2 h-10 lg:w-96 md:w-52 sm:w-28  placeholder:pl-3 rounded-l-full outline-none p-2 hidden sm:block "
              />

              <div
                className="relative"
                onMouseEnter={() => setShowSearchPopup(true)}
                onMouseLeave={() => setShowSearchPopup(false)}
              >
                <i className="sm:bg-slate-100 h-10 rounded-r-full sm:w-16 sm:border flex justify-center items-center ">
                  <IoIosSearch className="sm:text-3xl pt-1 cursor-pointer text-2xl" />
                </i>
                {showSearchPopup && (
                  <div className="absolute top-0 right-[70%]  z-10 p-2 bg-gray-500 text-white rounded shadow-lg text-sm ">
                    Search
                  </div>
                )}
              </div>

              <div
                className="ml-4"
                onMouseEnter={() => setShowMicPopup(true)}
                onMouseLeave={() => setShowMicPopup(false)}
              >
                <i className="h-9 w-9 rounded-full sm:bg-slate-100 flex justify-center items-center">
                  <FaMicrophone className="sm:text-2xl p-1 mt-[5px] cursor-pointer text-2xl" />
                </i>
                {showMicPopup && (
                  <div className="absolute top-0 right-[20%]  w-36 p-2 bg-gray-500 text-white rounded shadow-lg text-xs ">
                    Search with your voice
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="center-N  ">
            <ul className="flex justify-center content-center mt-3">
              <div
                className="relative flex items-center "
                onMouseEnter={() => setShowCreatVPopup(true)}
                onMouseLeave={() => setShowCreatVPopup(false)}
              >
                <li className="p-2 cursor-pointer">
                  <MdVideoCall className="text-2xl " />
                </li>
                {showCreatVPopup && (
                  <div className="absolute top-0 left-[-100%] z-20 p-2 bg-gray-500 text-white rounded shadow-lg text-xs">
                    Create
                  </div>
                )}
              </div>
              <div
                className="relative flex items-center "
                onMouseEnter={() => setShowNotificationPopup(true)}
                onMouseLeave={() => setShowNotificationPopup(false)}
              >
                <li className="p-2 cursor-pointer relative">
                  <IoMdNotificationsOutline className="text-2xl" />
                  <p className="text-white bg-red-600 sm:text-[11px] text-[11px] font-semibold sm:h-4 sm:w-[22px] rounded-full absolute top-[10px] left-5 pl-1">
                    5+
                  </p>
                </li>
                {showNotificationPopup && (
                  <div className="absolute top-0 left-[50%] z-20 p-2 bg-gray-500 text-white rounded shadow-lg text-xs">
                    Notifications
                  </div>
                )}
              </div>
              <li className="p-2 cursor-pointer">
                <img
                  src={myImg}
                  alt=""
                  className="max-h-14 max-w-8 rounded-full "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Navbar;
