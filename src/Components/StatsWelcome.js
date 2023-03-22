import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { BsAlarm } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion as m } from "framer-motion";
const Stats__Welcome = () => {
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-52 w-full mt-16">
      <m.div className="TOP flex flex-col gap-3 w-full text-center justify-center items-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2a3855]">
          Welcome to the Elixir
        </h1>
        <p className="text-[#2a3855]">
          Get expert consultancy and support with Elixir, an <br></br> advisory
          firm that stand by your side always.
        </p>
        <AiOutlineLine size={60} />
      </m.div>
      <div className="DOWN w-full grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="FIRST w-full flex flex-col justify-center items-center gap-4"
        >
          <div className="border p-8 rounded-full w-min bg-[#fafafa] text-[#2a3855]">
            <IoMdStats size={30} />
          </div>
          <h1 className="text-center text-2xl text-[#2a3855] font-bold">
            Business Consulting
          </h1>
          <p className="text-sm text-center text-[#6f716f]">
            Solution for every business related problems, readily and
            skillfully.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="SECOND flex flex-col justify-center items-center gap-4"
        >
          <div className="border p-8 rounded-full w-min bg-[#fafafa] text-[#2a3855]">
            <BsAlarm size={30} />
          </div>
          <h1 className="text-center text-2xl text-[#2a3855] font-bold">
            Risk Management
          </h1>
          <p className="text-sm text-center text-[#6f716f]">
            Calculate every possible risk in your business, take control over
            them.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="THIRD flex flex-col justify-center items-center gap-4"
        >
          <div className="border p-8 rounded-full w-min bg-[#fafafa] text-[#2a3855]">
            <FaRegLightbulb size={30} />
          </div>
          <h1 className="text-center text-2xl text-[#2a3855] font-bold">
            Market Research
          </h1>
          <p className="text-sm text-center text-[#6f716f]">
            Know the market before taking any step, reduce risks before you go.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
          className="FOURTH flex flex-col justify-center items-center gap-4"
        >
          <div className="border p-8 rounded-full w-min bg-[#fafafa] text-[#2a3855]">
            <RiCustomerService2Fill size={30} />
          </div>
          <h1 className="text-center text-2xl text-[#2a3855] font-bold">
            Quality Services
          </h1>
          <p className="text-sm text-center text-[#6f716f]">
            Experience unparalleled service, from beginning to final
            construction.
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default Stats__Welcome;
