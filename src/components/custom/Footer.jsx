import React from 'react'
import ItmeetLogo from "../../assets/images/itmeetlogo.png";
import data from "./footerdata.json"
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaLocationDot,
  FaEnvelope
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className='bg-gray-900 h-full p-5 text-xs sm:text-sm md:text-base'>


      <div className="flex flex-col  md:flex-row max-w-7xl mx-auto justify-around items-center font-semibold text-gray-400 py-5 px-4 ">
        {/*left side */}
        <div className='flex-col space-y-10 w-1/3'>
          {/* Logo */}
          <a href="#">
            <img src={ItmeetLogo}
              alt="itmeetlogo"
              className='object-contain w-[200px]'
            />
          </a>

          {/* Follow us */}
          <div>
            <h1 className='text-[#12dc9f] font-bold text-base max-[356px]:text-[0.8rem] sm:text-xl md:text-2xl' >Follow us on</h1>
            <div className='flex space-x-4  text-xl max-[400px]:text-base sm:text-2xl md:text-3xl p-2 pl-0 text-primary-foreground '>
              <a href={data.facebookLink} target='_blank'>
                <FaFacebook className='hover:scale-90 ' />
              </a>
              <a href={data.instagramLink} target='_blank'>
                <FaSquareInstagram className='hover:scale-90 ' />
              </a>
              <a href={data.twitterLink} target='_blank'>
                <FaSquareXTwitter className='hover:scale-90' />
              </a>
              <a href={data.linkedinLink} target='_blank'>
                <FaLinkedin className='hover:scale-90' />
              </a>
            </div>
          </div>
        </div>

        {/*responsive Split */}
        <div className='flex max-[450px]:space-y-14 max-[450px]:flex-col max-[400px]:justify-center  justify-around  align-middle items-center md:w-2/3 w-full mt-12'>
          {/* Middle part */}
          <div className='flex-col  space-y-7 md:space-y-11 '>
            <h1 className='text-[#12dc9f] font-extrabold text-base max-[356px]:text-[0.8rem] sm:text-xl md:text-3xl'>Contact Us</h1>
            {/* Coordinator and general sec */}
            <div className='flex space-x-7'>
              <span className='text-primary-foreground'>
                <h1 className='text-[#369fff] pb-2 text-medium sm:text-base md:text-lg'>Ranjan Lamsal</h1>
                <p>Coordinator,</p>
                <p>IT Meet</p>
                <p>{data.itMeetCoordinator}</p>
              </span>

              <span className='text-primary-foreground'>
                <h1 className='text-[#369fff] pb-2 text-medium sm:text-base md:text-lg'>Jenisha Khulal</h1>
                <p>General Secretary,</p>
                <p>KUCC</p>
                <p>{data.generalSec}</p>
              </span>
            </div>

            {/* Location */}
            <div className='flex text-left align-middle  text-primary-foreground '>
              <FaLocationDot className='w-5 h-6 mt-2' />
              <span>
                <p>&nbsp;&nbsp;&nbsp;Kathmandu University</p>
                <p>&nbsp;&nbsp;&nbsp;Dhulikhel, Kavre</p>
              </span>
            </div>

            {/* Email */}
            <span className='flex space-x-3 text-primary-foreground'>
              <a href="mailto:itmeet@ku.edu.np">
                <FaEnvelope className='w-5 h-6' />
              </a>
              <p>itmeet@ku.edu.np</p>
            </span>
          </div>

          {/* Right part */}
          <div className='space-x-4 '>
            <span>
              <h1 className='text-white'>Brand Guidelines</h1>
            </span>
            <span>
              <h1 className='text-white'>Brand Assest</h1>
            </span>

            <span className='text-gradient'>
              <p>#geekoutinstyle</p>
            </span>
          </div>
        </div>
      </div>

      <p className='text-gray-500 text-sm flex justify-center items-center align-middle mt-14 max-sm:text-xs'>Copyright © 2024 IT Meet. All rights reserved.
      </p>
    </footer >
  )
}
