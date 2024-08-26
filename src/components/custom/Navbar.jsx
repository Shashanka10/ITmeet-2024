import React from "react";
import ItmeetLogo from "../../assets/images/itmeetlogo.png";

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
  return (
    <nav className="sticky bg-[#171A23] top-0 z-50 backdrop-filter backdrop-blur-lg border-b border-gray-900 w-full">
      <div className="flex max-w-7xl mx-auto justify-between items-center font-semibold text-gray-400 py-5 px-4">
      <a href="#">
          <img
            src={ItmeetLogo}
            alt="itmeetlogo"
            className="object-contain w-[100px] cursor-pointer"
          />
        </a>
        <nav className="flex items-center justify-between space-x-6">
          {navItems.map((item)=> (
            <a key={item.id} href={item.url} className="hover:text-slate-300 uppercase text-sm">
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
}
