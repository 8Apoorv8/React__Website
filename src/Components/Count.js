import React from "react";
import NumberCounter from "number-counter";
import { FiCheckCircle } from "react-icons/fi";
import bg from "../img/bg.jpg";
const Count = () => {
  return (
    <div className=" relative bg-[#2a3b60] -z-30  ">
      <img
        src={bg}
        alt="Background"
        className="absolute -z-20  opacity-[0.35] bg-contain 
         h-full w-full"
      />
      <div className="px-10 md:px-28 lg:px-36 xl:px-52 py-12 flex gap-2 ">
        <div className="LEFT">
          <FiCheckCircle size={60} color="#fdd428" />
        </div>
        <div className="RIGHT flex flex-col gap-10">
          <div className="TOP text-4xl font-bold ">
            <div className="YELLOW text-[#fdd428]">Take the right step,</div>
            <div className="WHITE text-white">do the big things.</div>
          </div>
          <div className="BUTTOM text-white flex flex-col md:flex-row gap-6">
            <div className="TIMER ">
              <NumberCounter
                start={30}
                end={52}
                delay={4}
                className="text-4xl font-extrabold"
              />
              <h1 className="font-bold">Cases Solved</h1>
            </div>
            <div className="TIMER">
              <NumberCounter
                start={130}
                end={164}
                delay={4}
                className="text-4xl font-extrabold"
              />
              <h1 className="font-bold">Trained Experts</h1>
            </div>
            <div className="TIMER">
              <NumberCounter
                start={20}
                end={38}
                delay={4}
                className="text-4xl font-extrabold"
              />
              <h1 className="font-bold">Branches</h1>
            </div>
            <div className="TIMER">
              <NumberCounter
                start={67}
                end={100}
                delay={4}
                className="text-4xl font-extrabold"
              />
              <h1 className="font-bold">Satisfied Clients</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
