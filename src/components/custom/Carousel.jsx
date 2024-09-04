import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCalendarDays, FaSackDollar, FaSchoolFlag, FaGraduationCap } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { TbUniverse } from "react-icons/tb";
import { BiSolidNetworkChart, BiSolidSchool } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../index.css";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
} from "swiper/modules";

const events  = [
    {
        id: 1,
        icon: <FaCalendarDays className="w-10 h-10 text-[#369fff]"/>,
        participation: "25+",
        title: "Events"
    },
    {
        id: 2,
        icon: <FaUsers className="w-10 h-10 text-[#369fff]"/>,
        participation: "10k+",
        title: "Participants"
    },
    {
        id: 3,
        icon: <FaSackDollar className="w-10 h-10 text-[#369fff]"/>,
        participation: "Rs. 500k",
        title: "Prize Pool"
    },
    {
        id: 4,
        icon: <BiSolidSchool className="w-10 h-10 text-[#369fff]"/>,
        participation: "7+",
        title: "School Participations"
    },
    {
        id: 5,
        icon: <BiSolidNetworkChart className="w-10 h-10 text-[#369fff]"/>,
        participation: "5+",
        title: "IT College Participations"
    },
    {
        id: 6,
        icon: <FaSchoolFlag className="w-10 h-10 text-[#369fff]"/>,
        participation: "9+",
        title: "+2 College Participations"
    },
    {
        id: 7,
        icon: <FaGraduationCap className="w-10 h-10 text-[#369fff]"/>,
        participation: "3+",
        title: "Univeristy Participations"
    },
]

export default function App() {
  return (
    <div className="flex justify-center items-center w-[1800px]">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={150}
        speed={1000}
        grabCursor={true}
        loop= {true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[ Pagination, Autoplay]}
        className="flex justify-center items-center"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="flex flex-col space-y-2 justify-center shadow-xl border-gray-400 border items-center h-[200px] bg-slate-100 rounded-3xl">
                <span className="text-center text-wrap">{event.icon}</span>
                <h1 className="text-[#14C58F] font-bold text-4xl text-wrap text-center">{event.participation}</h1>
                <h1 className="text-gray-500 font-semibold text-2xl text-wrap text-center">{event.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
