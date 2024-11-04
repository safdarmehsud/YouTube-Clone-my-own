import { IoIosSearch } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import myImg from "../images/my-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Navbar = ({ favCount, cartCount }) => {
  return (
    <>
      <div className="container bg-white   rounded-t-lg sticky top-0  z-50 ">
        <div className="navbar flex justify-between content-center max-w-[100%]">
          <div className="left-N">
            <h2 className="logo text-4xl font-bold p-3  cursor-pointer">
              S TUBE
            </h2>
          </div>

          <div className="right-N flex justify-between content-center p-4 ">
            <form action="action" className="flex">
              <input
                type="search"
                placeholder="Search"
                className="border-2 h-10 w-96 placeholder:pl-3 rounded-l-full outline-none p-2"
              />
              <i className="bg-slate-100  h-10 rounded-r-full w-10 border  flex justify-center content-center">
                <IoIosSearch className=" text-3xl pt-2" />
              </i>
              <i className="h-9 w-9 rounded-full bg-slate-100 flex justify-center content-center ml-4">
                {" "}
                <FaMicrophone className="text-3xl  p-1" />
              </i>
            </form>
          </div>
          <div className="center-N ml-6">
            <ul className="flex justify-center content-center mt-3 ">
              <li className="p-3 cursor-pointer hover:border-b-2 ">
                <MdVideoCall className="text-2xl" />
              </li>
              <li className="p-3 cursor-pointer hover:border-b-2 relative">
                <IoMdNotificationsOutline className="text-2xl" />
                <p className="text-white bg-red-600 text-[11px] font-semibold h-4 w-[22px] rounded-full absolute top-[10px] left-6 pl-1 ">
                  5+
                </p>
              </li>
              <li className="p-3 cursor-pointer  ">
                <img src={myImg} alt="" className="h-8 w-8 rounded-full" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-Nav w-[95%] float-right  ">
        <Swiper
          spaceBetween={5}
          slidesPerView={15}
          // navigation
          // pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            one
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            two
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            three
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            four
          </SwiperSlide>

          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            five
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            six
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            seven
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            eight
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            nine
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            ten
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            eleven
          </SwiperSlide>

          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            twelf
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            thirteen
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            fouteen
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            fifteen
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            sixteen
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            seventeen
          </SwiperSlide>
          <SwiperSlide className="bg-slate-200 rounded-full pl-3 cursor-pointer overflow-hidden">
            eighteen
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Navbar;
