import React from "react";
import ItmeetLogo from "../../assets/images/itmeetlogo.png";
import { FaBars, FaX } from "react-icons/fa6"
import { useState } from "react";

const navItems = [
  {
    id: 1,
    title: "About",
    url: "#about",
  },
  {
    id: 2,
    title: "Pre-events",
    url: "#pre-events",
  },
  {
    id: 3,
    title: "Main-events",
    url: "#main-events",
  },
  {
    id: 4,
    title: "Sponsors",
    url: "#sponsors",
  },
  {
    id: 5,
    title: "FAQ",
    url: "#faq",
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
  },
]

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState(false);

  const setters = () => {

    setOpen(!open);
    setTilt(true);

    setTimeout(() => {
      setTilt(false)
    }, 100);
  };

  const items = (classes) => {
    return (
      <div className={`${classes} items-center`}>
        {navItems.map((item) => (
          <a key={item.id} href={item.url} className="hover:text-slate-300 uppercase text-sm">
            {item.title}
          </a>
        ))}
      </div>
    )
  }
  return (
    <>
      <nav className="sticky bg-[#171A23] top-0 z-50 backdrop-filter backdrop-blur-lg border-b border-gray-900 w-full">

        <div className="flex max-w-7xl mx-auto justify-between items-center font-semibold text-gray-400 py-5 px-4">
          <a href="#">
            <img
              src={ItmeetLogo}
              alt="itmeetlogo"
              className="object-contain w-[100px] cursor-pointer"
            />
          </a>

          {items(" justify-between space-x-6 md:flex hidden")}

          <div
            className=" mr-3 md:hidden  font-extrabold text-3xl rounded-full p-3 hover:bg-slate-900 bg-opacity-5 text-primary-foreground "
          >
            {open ?
              <FaX
                onClick={() => setters()}
                className={`transform transition-transform duration-250 ease-in-out ${tilt ? "rotate-0 scale-[1.2]" : "-rotate-90 scale-100"}`}
              />
              :
              <FaBars
                onClick={() => setters()}
                className={`transform transition-transform duration-250 ease-in-out ${tilt ? "rotate-90 scale-[1.2]" : "rotate-0 scale-100"}`}
              />
            }

          </div>
        </div>
      </nav>

      {open &&
        <div className={`w-full h-auto bg-[#171A23] text-white  fixed  z-50`}>
          {items("flex flex-col justify-center  space-y-5 p-5 font-semibold text-gray-400")}
        </div >
      }
    </>
  );
}
