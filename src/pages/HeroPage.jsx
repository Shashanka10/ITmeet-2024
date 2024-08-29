import React from "react";
import ITMeetLogo from "@/assets/images/itmeetlogo.png";
import BGNeon from "@/assets/images/bgreen.png";
import Mascot from "@/assets/images/tiger.png";
import HexaBg from "@/assets/images/hexabg.png";
import Blocks from "@/assets/images/blocks.png";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function HeroPage() {
  return (
    <div className="flex flex-col overflow-hidden gap-8 sm:gap-6 md:gap-10 xl:gap-12 items-center justify-center min-h-[calc(100vh-3rem)] relative bg-[#171A23] px-4 sm:px-6 md:px-8">
      <div>
        <img
          src={ITMeetLogo}
          alt="itmeetlogo"
          className="object-contain w-[180px] sm:w-[200px] md:w-[230px] xl:w-[250px]"
        />
      </div>
      <div className="text-white flex flex-col gap-2 sm:gap-3 md:gap-4 z-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
          MAKE <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">IT MEET</span> GREAT AGAIN
        </h2>
        <hr className="w-1/2 mx-auto" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-center font-bold">
          COMING <span className="text-[#14C58F]">SOON</span>
        </h1>
      </div>
      <div className="text-gray-400 flex items-center z-20 gap-4">
        <a
          href="https://www.facebook.com/KUITMEET/"
          className="hover:translate-y-0.5 hover:transition-all"
        >
          <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://www.instagram.com/kuitmeet/"
          className="hover:translate-y-0.5 hover:transition-all"
        >
          <FaSquareInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://www.linkedin.com/company/kuitmeet/"
          className="hover:translate-y-0.5 hover:transition-all"
        >
          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://twitter.com/kuitmeet"
          className="hover:translate-y-0.5 hover:transition-all"
        >
          <FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
      <div className="flex flex-col items-center text-gray-300 text-center">
        <h1 className="text-lg sm:text-xl flex gap-2 font-semibold">
          <span className="text-[#14C58F]">@</span>KATHMANDU UNIVERSITY
        </h1>
        <h2 className="font-medium text-sm sm:text-base">
          Dhulikhel, Kavrepalanchok
        </h2>
      </div>
      <div className="absolute -top-24 -left-24 sm:-top-28 sm:-left-28 md:-top-32 md:-left-32 opacity-30 rotate-90">
        <img src={BGNeon} alt="bgneo" className="object-contain w-[300px] sm:w-[350px] md:w-[400px]" />
      </div>
      <div className="absolute -bottom-48 -right-32 sm:-bottom-56 sm:-right-40 md:-bottom-64 md:-right-48 rotate-90">
        <img src={BGNeon} alt="bgneo" className="object-contain w-[400px] sm:w-[500px] md:w-[550px] lg:w-[620px]" />
      </div>
      <div className="absolute -bottom-24 -right-8 sm:-bottom-32 sm:-right-12 md:-bottom-36 md:-right-14 -rotate-45 z-10">
        <img src={Mascot} alt="mascot" className="object-contain w-[220px] sm:w-[290px] md:w-[310px] lg:w-[370px]" />
      </div>
      <div className="absolute -top-16 -right-6 sm:-top-18 sm:-right-8 md:-top-20 md:-right-10 -rotate-12">
        <img src={HexaBg} alt="hexa" className="object-contain w-[180px] sm:w-[220px] md:w-[250px]" />
      </div>
      <div className="absolute -bottom-8 -left-12 sm:-bottom-10 sm:-left-14 md:-bottom-10 md:-left-20 rotate-180">
        <img src={HexaBg} alt="hexablue" className="object-contain w-[180px] sm:w-[220px] md:w-[250px]" />
      </div>
      <div className="absolute mx-auto z-0">
        <img src={Blocks} alt="blocks" className="object-contain w-[800px] sm:w-[1000px] md:w-[1200px]" />
      </div>
    </div>
  );
}
