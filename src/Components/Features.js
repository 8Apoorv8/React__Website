import React from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { motion as m } from "framer-motion";
const Features = () => {
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-52 mt-28">
      <div className="IMG grid place-content-center h-[200px] md:h-[250px] lg:h-[380px] bg-[url('/public/Features.jpg')] bg-cover rounded-md">
        <div className="p-8 bg-white shadow-2xl shadow-primary-200 w-min rounded-full opacity-75">
          <BsFillPlayFill size={30} />
        </div>
      </div>
      <div className="FEATURES grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 p-2 mb-36">
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="FIRST flex flex-col gap-3"
        >
          <div className="text-[#2a3855] flex  items-center gap-3 text-2xl font-bold">
            <HiUserGroup /> <p>Awesome Team</p>
          </div>
          <div className="text-[#6f78a4] ">
            Before talking destination, we shine a spotlight across your
            organization to fully understand it.
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="SECOND flex flex-col gap-3"
        >
          <div className="text-[#2a3855] flex  items-center gap-3 text-2xl font-bold">
            <BsFillChatDotsFill /> <p>Excellent Support</p>
          </div>
          <div className="text-[#6f78a4]">
            If you face any trouble, you can always let our dedicated support
            team help you. They are ready for you 24/7.
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="THIRD flex flex-col gap-3"
        >
          <div className="text-[#2a3855] flex  items-center gap-3 text-2xl font-bold">
            <AiFillThunderbolt /> <p>Faster Performance</p>
          </div>
          <div className="text-[#6f78a4]">
            We develop a systematic well-ordered process of analysis, from
            concept through implementation.
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Features;
