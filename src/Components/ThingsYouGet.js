import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { SiCircle } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { GiSupersonicArrow } from "react-icons/gi";
import { SlGlobeAlt } from "react-icons/sl";
import { BsCash } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
const ThingsYouGet = () => {
  return (
    <div className=" px-10 md:px-28 lg:px-36 xl:px-52 py-14">
      <h1 className="text-3xl text-[#2a3855] font-bold text-center flex flex-col justify-center items-center mb-4">
        Things You Get
        <AiOutlineLine size={60} className="-mt-2" />
      </h1>
      <div className="ICON__AND__DATA grid gap-24 grid-cols-1 md:grid-cols-2 md:gap-16 lg:grid-cols-3  lg:place-content-center">
        <div className="FIRST flex flex-col justify-center text-center items-center gap-3">
          <SiCircle size={35} color="#2a3855" />

          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Creative Support
          </h1>
          <p className="text-[#7c819e]">
            We transform brands, grow businesses, and tell brand and product
            stories in a most creative way.
          </p>
        </div>
        <div className="SECOND flex flex-col justify-center text-center items-center gap-3">
          <CiMail size={35} color="#2a3855" />
          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Creating Experiences
          </h1>
          <p className="text-[#7c819e]">
            We cover a large range of creative platforms and digital projects
            with one purpose: to create experiences.
          </p>
        </div>
        <div className="THIRD flex flex-col justify-center text-center items-center gap-3">
          <GiSupersonicArrow size={35} color="#2a3855" />
          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Product Consulting
          </h1>
          <p className="text-[#7c819e]">
            We guide you through the pipelines that generate new products with
            higher potential and lower risk.
          </p>
        </div>
        <div className="FOURTH flex flex-col justify-center text-center items-center gap-3">
          <SlGlobeAlt size={35} color="#2a3855" />
          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Business Boosting
          </h1>
          <p className="text-[#7c819e]">
            We provide energy-efficient and environmentally conservative
            solutions to our clients to boost their business.
          </p>
        </div>
        <div className="FIVTH flex flex-col justify-center text-center items-center gap-3">
          <BsCash size={35} color="#2a3855" />
          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Strategic Approach
          </h1>
          <p className="text-[#7c819e]">
            Based on solid strategic framework and real, relevant research, we
            create prototypes, not presentations.
          </p>
        </div>
        <div className="SIXTH flex flex-col justify-center text-center items-center gap-3">
          <ImStatsBars size={35} color="#2a3855" />
          <h1 className="text-2xl font-extrabold text-[#2a3855]">
            Logistic Consulting
          </h1>
          <p className="text-[#7c819e]">
            We work buy side and sell side to give our clienrts hard hitting
            answers and focus hard on best opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThingsYouGet;
