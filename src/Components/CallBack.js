import React from "react";

const CallBack = () => {
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-52 py-24 bg-[#2a3855] flex flex-col gap-14 lg:flex-row w-full lg:items-center">
      <div className="TOP flex flex-col border-2 border-[#fdd428] p-8 text-white rounded-lg gap-4 lg:w-[40%] ">
        <h1 className="text-3xl font-extrabold  text-center">
          Request a call back
        </h1>
        <p className="text-center">
          Would you like to speak to one of our financial advisors over the
          phone? just submit your details and we'll be in touch shortly. You can
          also email us if you would prefer.
        </p>
      </div>
      <div className="BUTTOM flex flex-col gap-8 lg:w-[60%] ">
        <div className="text-white text-2xl font-extrabold">
          I would like to discuss:
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-8 pl-3 py-3 rounded focus:outline-none text-sm text-gray-600 "
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="px-8 pl-3 py-3 rounded focus:outline-none text-sm text-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-8 pl-3 py-3 rounded focus:outline-none text-sm text-gray-600"
          />
          <button className="px-8 py-3 text-xs font-extrabold rounded bg-[#fdd428]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
