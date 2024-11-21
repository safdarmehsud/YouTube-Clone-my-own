import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const swiper = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // useEffect(() => {
  //   if (cahnnelsData) {
  //     setLoading(false);
  //   }
  // }, [cahnnelsData]);

  const changeColor = (index) => {
    setActiveIndex(index); // Update the active index to the clicked slide
  };
  return (
    <>
      <div className="sub-Nav w-[95%] float-right fixed  left-16 z-10">
        <Swiper
          spaceBetween={5}
          slidesPerView={15}
          // navigation
          // pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="bg-white h-7 flex flex-row w-full"
          breakpoints={{
            // For xl screens and up (1280px and up)
            1280: {
              slidesPerView: 15,
            },
            // For large screens (1024px to 1279px)
            1024: {
              slidesPerView: 11,
            },
            // For medium screens (768px to 1023px)
            768: {
              slidesPerView: 8,
            },
            // For small screens (up to 767px)
            640: {
              slidesPerView: 5, // Hide slides on small screens
            },
            475: {
              slidesPerView: 0, // Hide slides on small screens
            },
          }}
        >
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 0
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(0)} // Pass index 0 for the first slide
          >
            All
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 1
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(1)} // Pass index 0 for the first slide
          >
            One
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 2
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(2)} // Pass index 0 for the first slide
          >
            two
          </SwiperSlide>

          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 3
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(3)} // Pass index 0 for the first slide
          >
            three
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 4
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(4)} // Pass index 0 for the first slide
          >
            four
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 5
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(5)} // Pass index 0 for the first slide
          >
            five
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 6
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(6)} // Pass index 0 for the first slide
          >
            six
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 7
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(7)} // Pass index 0 for the first slide
          >
            seven
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 8
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(8)} // Pass index 0 for the first slide
          >
            eight
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 9
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(9)} // Pass index 0 for the first slide
          >
            nine
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 10
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(10)} // Pass index 0 for the first slide
          >
            ten
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 11
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(11)} // Pass index 0 for the first slide
          >
            eleven
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 12
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(12)} // Pass index 0 for the first slide
          >
            twelf
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 13
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(13)} // Pass index 0 for the first slide
          >
            thirteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 14
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(14)} // Pass index 0 for the first slide
          >
            fourteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 15
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(15)} // Pass index 0 for the first slide
          >
            fifteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 16
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(16)} // Pass index 0 for the first slide
          >
            sixteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 17
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(17)} // Pass index 0 for the first slide
          >
            seventeen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 18
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(18)} // Pass index 0 for the first slide
          >
            eighteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 19
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(19)} // Pass index 0 for the first slide
          >
            nineteen
          </SwiperSlide>
          <SwiperSlide
            className={`sliderItems ${
              activeIndex === 20
                ? "bg-black text-white"
                : "bg-slate-200 text-black"
            } px-4 py-1 text-sm md:text-base font-medium cursor-pointer rounded-lg overflow-hidden`}
            onClick={() => changeColor(20)} // Pass index 0 for the first slide
          >
            twenty
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default swiper;
