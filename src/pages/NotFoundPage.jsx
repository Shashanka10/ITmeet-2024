import React from "react";
import { Link } from "react-router-dom";
import ErrImg from "@/assets/images/OOPS.png";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-between bg-gray-950 h-screen text-white">
      <div className="flex flex-col w-1/2 ml-24 space-y-16">
        <h1 className="text-7xl font-semibold gap-2 flex flex-col">
          <span className="text-red-500">Oops!</span>Page Not Found
        </h1>
        <div className="flex items-center gap-5 text-xl">
          <span>Go back to</span>
          <Link to="/" className="text-green-300 hover:text-gray-400 font-bold">
            Home
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <img src={ErrImg} alt="errorimg" width={1000} height={1000} className="w-[500px] object-contain"/>
      </div>
    </div>
  );
};

export default NotFoundPage;
