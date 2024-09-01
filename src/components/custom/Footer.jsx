import React from "react";
import ItmeetLogo from "../../assets/images/itmeetlogo.png";
import data from "./footerdata.json";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 h-full p-5">
      <div className="flex flex-col space-y-12 md:flex-row justify-between items-center text-gray-400 py-3 sm:py-4 md:py-3 md:px-10 lg:px-14">
        {/*left side */}
        <div className="space-y-6 md:space-y-8 lg:space-y-12 md">
          <div className="md:flex md:justify-center">
            <a href="#">
              <img
                src={ItmeetLogo}
                alt="itmeetlogo"
                className="object-contain w-[140px] sm:w-[160px] md:w-[130px] lg:w-[180px]"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-5">
            <h1 className="text-[#12dc9f] text-center font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
              Follow us on
            </h1>
            <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-4 lg:space-x-8 text-2xl lg:text-3xl text-primary-foreground ">
              <a href={data.facebookLink} target="_blank">
                <FaFacebook className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.instagramLink} target="_blank">
                <FaSquareInstagram className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.twitterLink} target="_blank">
                <FaSquareXTwitter className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.linkedinLink} target="_blank">
                <FaLinkedin className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle part */}
        <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-10">
          <h1 className="text-[#12dc9f] text-center font-semibold text-2xl md:text-3xl lg:text-4xl">
            Contact Us
          </h1>
          {/* Coordinator and president */}
          <div className="flex space-x-6 lg:space-x-12 xl:space-x-24 text-center">
            <span className="text-primary-foreground">
              <h1 className="text-[#369fff] font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
                Ranjan Lamsal
              </h1>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">Coordinator,</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">IT Meet</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">{data.itMeetCoordinator}</p>
            </span>

            <span className="text-primary-foreground">
              <h1 className="text-[#369fff] font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
                Nirjal Bhurtel
              </h1>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">President,</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">KUCC</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">{data.kuccPresident}</p>
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-3 md:space-y-6 text-white">
            <div className="flex items-center space-x-4">
              <FaLocationDot className="w-5 h-6" />
              <span className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">
                <p>Kathmandu University</p>
                <p>Dhulikhel, Kavre</p>
              </span>
            </div>
            <div>
              {/* Email */}
              <span className="flex items-center space-x-4 text-lg sm:text-xl md:text-lg lg:text-2xl text-primary-foreground">
                <a href="mailto:itmeet@ku.edu.np">
                  <FaEnvelope className="w-5 h-6" />
                </a>
                <p>itmeet@ku.edu.np</p>
              </span>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="flex flex-col items-center space-y-3 md:space-y-6">
          <h1 className="text-white text-lg md:text-lg sm:text-xl lg:text-2xl">Brand Guidelines</h1>
          <h1 className="text-white text-lg md:text-lg sm:text-xl lg:text-2xl">Brand Assest</h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
            #geekoutinstyle
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-sm md:text-base lg:text-lg flex font-semibold justify-center items-center mt-10">
        Copyright © 2024 IT Meet. All rights reserved.
      </p>
    </footer>
  );
}
