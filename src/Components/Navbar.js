import React, { useState } from "react";
import ElementDrop from "./NavDropDown/ElementDrop";
import HomeDrop from "./NavDropDown/HomeDrop";
import NewsDrop from "./NavDropDown/NewsDrop";
import PagesDrop from "./NavDropDown/PagesDrop";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [clicked, setClicked] = useState(false);

  return (
    <div className=" bg-white opacity-90 sticky top-0 z-50">
      <div className="px-10 md:px-28 lg:px-36 xl:px-52 flex justify-between items-center z-50 ">
        <div className="LEFT relative  gap-3 font-semibold items-center cursor-pointer flex py-4 lg:py-0">
          <img
            src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-dark.png"
            alt="Logo"
            className="h-[30px] "
          />
          <div className="hidden lg:flex">
            <HomeDrop />
            <PagesDrop />
            <NewsDrop />
            <ElementDrop />
          </div>
        </div>
        <div className="RIGHT flex items-center gap-2  ">
          <button className="border-2 hover:bg-[#2a3855] hover:text-white transition-all border-[#2a3855] px-6 py-1 rounded-[26px] font-bold text-sm">
            Purchase
          </button>
          <div className="lg:hidden text-[#2a3855] cursor-pointer">
            {!clicked ? (
              <RxHamburgerMenu
                size={25}
                onClick={() => setClicked(!clicked)}
                className="transition-all duration-300"
              />
            ) : (
              <RxCross1
                size={25}
                onClick={() => setClicked(!clicked)}
                className="transition-all duration-300"
              />
            )}
          </div>

          {clicked ? (
            <div className="fixed top-12 md:top-28 w-[200px] md:w-auto md:right-28 right-11 lg:hidden  transition-all shadow-xl rounded-md p-2 opacity-100 duration-300 px-0 md:px-28 lg:px-36 xl:px-52">
              <HomeDrop />
              <PagesDrop />
              <NewsDrop />
              <ElementDrop />
            </div>
          ) : (
            <div className="fixed top-8 md:top-20 -right-28 lg:hidden  transition-all shadow-xl rounded-md p-2 opacity-0 duration-300">
              <HomeDrop />
              <PagesDrop />
              <NewsDrop />
              <ElementDrop />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
