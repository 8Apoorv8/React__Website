import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import why from "../img/why.jpg";
import { BsFillChatFill } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { GiAlarmClock } from "react-icons/gi";
import { motion as m } from "framer-motion";
const Why__Us = () => {
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-52 py-24">
      <h1 className="text-4xl text-[#2a3855] font-bold text-center flex flex-col justify-center items-center mb-4 my-24">
        Why choose Elixir
        <AiOutlineLine size={60} />
      </h1>
      <div className="MAIN grid gap-16 lg:grid-cols-2">
        <div className="TOP__LEFT lg:grid place-content-center">
          <img src={why} alt="WhyUsLogo" className="rounded-lg  " />
        </div>
        <div className="BUTTOM__RIGHT grid gap-14 ">
          <div className="FIRST grid gap-3 ">
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="TOP flex items-center gap-2 text-xl text-[#2a3855] font-extrabold"
            >
              <BsFillChatFill /> We Are Professsional
            </m.div>
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="BUTTOM text-[#7d6c82]"
            >
              We resource, train, speak, mentor and encourage; marketplace
              leaders, business owners and career professionals to be effective
              in the workplace.
            </m.div>
          </div>
          <div className="SECOND grid gap-3">
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="TOP flex items-center gap-2 text-xl text-[#2a3855] font-extrabold"
            >
              <IoIosColorPalette /> We Are Creative
            </m.div>
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="BUTTOM text-[#7d6c82]"
            >
              With so many factors to consider when deciding how to characterize
              your company , wouldn’t it be great to have a group of
              forward-thinking, well-informed individuals on board who know what
              they’re doing?
            </m.div>
          </div>
          <div className="THIRD grid gap-3">
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="TOP flex items-center gap-2 text-xl text-[#2a3855] font-extrabold"
            >
              <GiAlarmClock /> 24/7 Great Support
            </m.div>
            <m.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="BUTTOM text-[#7d6c82]"
            >
              Design clever and compelling marketing strategies, improve product
              positioning, and drive conversion rates, Elixir is all time
              available to guide you.
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why__Us;
