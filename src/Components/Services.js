import React from "react";
import { AiOutlineLine } from "react-icons/ai";

import advisory from "../img/advisory.jpg";
import {
  BsArrowRight,
  BsFillChatRightFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import { motion as m } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-[#fafafa] px-10 md:px-28 lg:px-36 xl:px-52 py-24">
      <h1 className="text-4xl text-[#2a3855] font-bold text-center flex flex-col justify-center items-center mb-4">
        Our Services
        <AiOutlineLine size={60} />
      </h1>
      <div className="IMG__AND__DATA flex flex-col gap-8 lg:gap-0">
        <div className="FIRST flex flex-col lg:flex-row  h-full w-full bg-[#ffffff]  rounded-lg lg:rounded-none lg:rounded-tr-lg lg:rounded-tl-lg ">
          <img
            src="https://blog.hubspot.com/hubfs/how-to-become-a-consultant.jpg"
            alt="consulting"
            className="w-full rounded-tr-lg rounded-tl-lg lg:rounded-tr-none lg:w-1/2"
          />
          <div className="p-6 flex flex-col  gap-4 lg:w-1/2 lg:px-8 lg:py-14 ">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-2xl font-bold text-[#2a3855]"
            >
              Business Consulting
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-[#485b82]"
            >
              As one of the world’s largest accountancy networks, elixir helps a
              diverse range of clients with a diverse range of needs.This is
              especially true of our Advisory Practice, which provides corporate
              finance and transaction services, business restructuring.
            </m.p>
            <m.a
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="font-bold text-[#2a3855] flex items-center gap-2"
            >
              Learn More <BsArrowRight size={20} />
            </m.a>
          </div>
        </div>
        <div className="SECOND flex  lg:flex-row  h-full w-full flex-col-reverse bg-[#ffffff] rounded-lg lg:rounded-none  ">
          <div className="p-6 flex flex-col  gap-4 lg:w-1/2 lg:px-8 lg:py-14 ">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-2xl font-bold text-[#2a3855]"
            >
              Tax consulting
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-[#485b82]"
            >
              Elixir serves clients across the country and around the world as
              they navigate an increasingly complex tax landscape. Our tax
              professionals draw on deep experience and industry-specific
              knowledge to deliver clients the insights and innovation they
              need.
            </m.p>
            <m.a
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="font-bold text-[#2a3855] flex items-center gap-2"
            >
              Learn More <BsArrowRight size={20} />
            </m.a>
          </div>
          <img
            src="https://industrytoday.com/wp-content/uploads/2018/12/business-3224643_1920.jpg"
            alt="consulting"
            className="w-full lg:w-1/2 rounded-tl-lg rounded-tr-lg lg:rounded-none"
          />
        </div>
        <div className="THIRD flex flex-col lg:flex-row  h-full w-full bg-[#ffffff] rounded-bl-md rounded-br-md rounded-lg lg:rounded-none lg:rounded-br-lg lg:rounded-bl-lg ">
          <img
            src={advisory}
            alt="consulting"
            className="w-full  lg:w-1/2 rounded-tr-lg rounded-tl-lg lg:rounded-none lg:rounded-bl-lg"
          />
          <div className="p-6 flex flex-col  gap-4 lg:w-1/2 lg:px-8 lg:py-14 ">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-2xl font-bold text-[#2a3855]"
            >
              Advisory
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="text-[#485b82]"
            >
              To help you understand what this road looks like, we surveyed 1165
              digital marketers across Europe and North America to explore
              current trends and priorities in digital marketing.
            </m.p>
            <m.a
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
              className="font-bold text-[#2a3855] flex items-center gap-2"
            >
              Learn More <BsArrowRight size={20} />
            </m.a>
          </div>
        </div>
      </div>
      <div className="grid mt-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="FIRST flex flex-col gap-3">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="flex items-center gap-3 text-[#2a3855] text-2xl font-extrabold"
          >
            <CiMoneyCheck1 size={30} /> Special financing
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="text-[#485b82]"
          >
            Apply for special financial support and earn exclusive rewards.
          </m.p>
        </div>
        <div className="SECOND flex flex-col gap-3">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="flex items-center gap-3 text-[#2a3855] text-2xl font-extrabold"
          >
            <BsFillChatRightFill size={20} /> Chat with team
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="text-[#485b82] flex flex-wrap"
          >
            Have a question? Chat online with an expert.
            <span className="text-[#2a3855] font-bold flex items-center gap-2">
              Start chatting <BiLinkExternal />
            </span>
          </m.p>
        </div>

        <div className="THIRD flex flex-col gap-3">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="flex items-center gap-3 text-[#2a3855] text-2xl font-extrabold"
          >
            <BsFillTelephoneFill size={20} /> Call a specialist
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45, bounce: 1 }}
            className="text-[#485b82]"
          >
            Our 24/7 support team is ready for you at 1-800-MY-Elixir.
          </m.p>
        </div>
      </div>
    </div>
  );
};

export default Services;
