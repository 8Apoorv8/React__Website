import React from "react";
import { MdLocationOn, MdCall } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
const Tagline = () => {
  return (
    <div className=" bg-[#2a3855] text-white px-10 md:px-28 lg:px-36 xl:px-52 py-5 justify-between text-xs font-semibold hidden md:flex">
      <div className="flex gap-4">
        <h1 className="flex items-center gap-2">
          <MdLocationOn size={18} color="yellow" />
          102, MuzaffarNagar, BhopaRoad
        </h1>
        <h1 className="flex items-center gap-2">
          <MdCall size={18} color="yellow" />
          8979407144,9412867766
        </h1>
      </div>
      <div className=" hidden lg:flex items-center gap-2">
        <BsFillClockFill size={18} color="yellow" /> Mon-Sat, 8:00-18:00 Sunday
        CLOSED
      </div>
    </div>
  );
};

export default Tagline;
