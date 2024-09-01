import React from "react";
import ITMeetLogo from "@/assets/images/itmeetdark.png";

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-hidden p-6 sm:p-8 md:p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-[#171A23]">
          ABOUT IT MEET
        </h1>
        <div className="w-full rounded-full bg-[#14C58F] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-5 sm:mt-7 md:mt-9 lg:mt-12 gap-8 lg:gap-20">
        <div className="lg:hidden flex justify-center">
          <img
            src={ITMeetLogo}
            alt="itmeetlogodark"
            className="object-contain w-[200px] sm:w-[280px] md:w-[300px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-full">
          <p className="text-lg sm:text-xl md:text-2xl leading-8 text-justify font-normal text-gray-500">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
              IT MEET
            </span>{" "}
            is a non-profit, student-organized university-level tech meetup held
            annually at Kathmandu University, Dhulikhel. It is the collaborative
            effort of the Kathmandu University Computer Club (KUCC) and the
            Department of Computer Science and Engineering (DoCSE). With a
            strong focus on celebrating recent achievements in the field of
            information and technology, "IT MEET" has successfully established
            itself as a platform that offers opportunities for tech enthusiasts
            to share innovative ideas, compete with their peers, and gain first
            hand experience of the real world. Now, with the theme “Refresh,
            Reimagine, Innovate”, we are all set to embark on the journey of “IT
            MEET 2024”. Our vision is to provide future change-makers with a
            platform to delve deep into the insights of the tech world, emerging
            not only with technical skills and knowledge about hardware and
            computers but also with personal growth.
          </p>
        </div>
        <div className="hidden lg:flex w-full justify-center">
          <img
            src={ITMeetLogo}
            alt="itmeetlogodark"
            className="object-contain w-[650px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
