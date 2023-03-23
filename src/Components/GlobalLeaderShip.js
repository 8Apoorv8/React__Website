import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
const GlobalLeaderShip = () => {
  const DATA__API = [
    {
      id: Math.floor(Math.random() * 100),
      img: img1,
      name: "Scot Kumar",
      post: "Analayst",
      info: "Scott Kumar is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
    },
    {
      id: Math.floor(Math.random() * 100),
      img: img2,
      name: "Lily kapoor",
      post: "Consultant",
      info: "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.",
    },
    {
      id: Math.floor(Math.random() * 100),
      img: img3,
      name: "Thomas Choubey",
      post: "Mangament Advisor",
      info: "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.",
    },
    {
      id: Math.floor(Math.random() * 100),
      img: img4,
      name: "Legartha chauhan",
      post: "Business advisor/consultant",
      info: "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
    },
    {
      id: Math.floor(Math.random() * 100),
      img: img5,
      name: "John Anna",
      post: "Developer",
      info: "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
    },
    {
      id: Math.floor(Math.random() * 100),
      img: img6,
      name: "Ragner Sharma",
      post: "Sr.Developer/Advisor",
      info: "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.",
    },
  ];
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-52 py-24 bg-[#fafafa]">
      <h1 className="text-3xl text-[#2a3855] font-bold text-center flex flex-col justify-center items-center mb-4">
        Global Leadership
        <AiOutlineLine size={60} className="-mt-3" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {DATA__API.map((ele) => {
          return (
            <div className=" rounded-lg grid gap-4 bg-[#ffffff] ">
              <img
                src={ele.img}
                alt="IMG"
                className="rounded-tl-lg rounded-tr-lg w-full"
              />
              <div className="grid gap-4 p-6">
                <h1 className="text-center text-xl font-extrabold text-[#2a3855]">
                  {ele.name}
                </h1>
                <h2 className="text-center -mt-2 text-sm text-gray-500">
                  {ele.post}
                </h2>
                <p className="text-center text-[#6f78a4ba]">{ele.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalLeaderShip;
