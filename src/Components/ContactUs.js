import React from "react";

const Contact__Us = () => {
  return (
    <div className="bg-[#2a3855] px-10 md:px-28 lg:px-36 xl:px-52 py-14 flex lg:items-center flex-col lg:flex-row gap-8">
      <div className="text-3xl text-white font-extrabold text-center">
        <span className="block lg:inline-block">
          If you have any query related
        </span>{" "}
        <span className="block md:inline-block">investment...</span>{" "}
        <span className="lg:inline-block block">we are available 24/7</span>
      </div>

      <button
        className="text-sm font-extrabold md:px-10 px-6 py-4
      md:w-[200px] w-[150px] bg-white text-[#2a3855] rounded-3xl mx-auto "
      >
        Contact Us
      </button>
    </div>
  );
};

export default Contact__Us;
