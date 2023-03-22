import React from "react";
import h1 from "../img/h-1.jpg";
import h2 from "../img/h-2.jpg";
import h3 from "../img/h-3.jpg";
import * as te from "tw-elements";
import { motion as m } from "framer-motion";

const Home__Carosuel = () => {
  return (
    // <div
    //   id="carouselDarkVariant"
    //   className="relative -top-16 -z-10 h-[100vh] md:h-auto"
    //   bg-contain
    //   data-te-carousel-init
    //   data-te-carousel-slide
    //   //   className="bg-cover"
    // >
    //   {/* <!-- Indicators --> */}
    //   <div
    //     className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    //     data-te-carousel-indicators
    //   >
    //     <button
    //       data-te-target="#carouselDarkVariant"
    //       data-te-slide-to="0"
    //       data-te-carousel-active
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       data-te-target="#carouselDarkVariant"
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       data-te-slide-to="1"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       data-te-target="#carouselDarkVariant"
    //       className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    //       data-te-slide-to="2"
    //       aria-label="Slide 1"
    //     ></button>
    //   </div>
    //   {/* <!-- Inner --> */}
    //   <div className="relative w-full overflow- after:clear-both after:block after:content-[''] ">
    //     {/* <!-- Single item --> */}
    //     <div
    //       className="relative  float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none "
    //       data-te-carousel-fade
    //       data-te-carousel-item
    //       data-te-carousel-active
    //     >
    //       <img
    //         src={h1}
    //         className="block w-full h-[100vh] md:h-auto"
    //         bg-contain
    //         alt="Motorbike Smoke"
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
    //         <div className="absolute text-3xl -top-96 left-0 flex flex-col gap-6 md:gap-8">
    //           <h1 className="text-6xl md:text-7xl text-[#2a3855] font-bold">
    //             Growth Partners
    //           </h1>
    //           <h2 className="font-light text-2xl  text-[#2a3855] ">
    //             Connect with top consultants hand-picked by<br></br> Elixir
    //             consulting and finance.
    //           </h2>
    //           <div className="BUTTON text-sm font-semibold flex gap-4">
    //             <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
    //               Read More
    //             </button>
    //             <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#fed42d] rounded ">
    //               Contact Us
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <!-- Single item --> */}
    //     <div
    //       className="relative float-left -mr-[100%]  w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-te-carousel-fade
    //       data-te-carousel-item
    //     >
    //       <img
    //         src={h2}
    //         className="block w-full h-[100vh] md:h-auto"
    //         bg-contain
    //         alt="Mountaintop"
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
    //         <div className="absolute text-3xl -top-96 left-0 flex flex-col gap-6 md:gap-8">
    //           <h1 className="text-6xl md:text-7xl text-[#2a3855] font-bold">
    //             Expert Consultants
    //           </h1>
    //           <h2 className="font-light text-2xl  text-[#2a3855] ">
    //             Over 10 years of experience in helping clients<br></br> finding
    //             comprehensive solutions.
    //           </h2>
    //           <div className="BUTTON text-sm font-semibold flex gap-4">
    //             <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
    //               Read More
    //             </button>
    //             <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#fdd428] rounded">
    //               Contact Us
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <!-- Single item --> */}
    //     <div
    //       className="relative float-left -mr-[100%]  w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-te-carousel-fade
    //       data-te-carousel-item
    //     >
    //       <img
    //         src={h3}
    //         className="block w-full h-[100vh] md:h-auto bg-contain "
    //         alt="Woman Reading a Book"
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
    //         <div className="absolute text-3xl -top-96 left-0 flex flex-col gap-6 md:gap-8">
    //           <h1 className="text-6xl md:text-7xl text-[#2a3855] font-bold">
    //             Helping Leaders
    //           </h1>
    //           <h2 className="font-light text-2xl  text-[#2a3855] ">
    //             We look forward to help you in taking your<br></br> company to
    //             new height.
    //           </h2>
    //           <div className="BUTTON text-sm font-semibold flex gap-4">
    //             <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
    //               Read More
    //             </button>
    //             <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#ffcf0f] rounded">
    //               Contact Us
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- Inner -->
    // <!-- Controls --> */}
    //   <button
    //     className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //     type="button"
    //     data-te-target="#carouselDarkVariant"
    //     data-te-slide="prev"
    //   >
    //     <span className="inline-block h-8 w-8 dark:grayscale dark:invert">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke-width="1.5"
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M15.75 19.5L8.25 12l7.5-7.5"
    //         />
    //       </svg>
    //     </span>
    //     <span className="!absolute !-m-px !h-px !w-px !overflow- !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Previous
    //     </span>
    //   </button>
    //   <button
    //     className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    //     type="button"
    //     data-te-target="#carouselDarkVariant"
    //     data-te-slide="next"
    //   >
    //     <span className="inline-block h-8 w-8 dark:grayscale dark:invert">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke-width="1.5"
    //         stroke="currentColor"
    //         className="h-6 w-6"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //         />
    //       </svg>
    //     </span>
    //     <span className="!absolute !-m-px !h-px !w-px !overflow- !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Next
    //     </span>
    //   </button>
    // </div>

    <div
      key={te}
      id="carouselDarkVariant"
      class="relative -top-16 "
      data-te-carousel-init
      data-te-carousel-slide
    >
      {/* <!-- Indicators --> */}
      <div
        class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          data-te-target="#carouselDarkVariant"
          data-te-slide-to="0"
          data-te-carousel-active
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-te-target="#carouselDarkVariant"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-te-target="#carouselDarkVariant"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>
      {/* <!-- Inner --> */}
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* <!-- Single item --> */}
        <div
          class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
          data-te-carousel-active
        >
          <img
            src={h1}
            class="block  w-full h-[100vh] md:h-auto"
            alt="Motorbike Smoke"
          />
          <div class="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
            <m.div className="absolute text-3xl -top-[480px] left-0 flex flex-col gap-6 md:gap-8 ">
              <div className="overflow-hidden">
                <m.h1
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65 }}
                  className="text-6xl md:text-7xl text-[#2a3855] font-bold"
                >
                  Growth Partners
                </m.h1>
              </div>

              <div className="overflow-hidden">
                <m.h2
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.3 }}
                  className="font-light text-2xl  text-[#2a3855] "
                >
                  Connect with top consultants hand-picked by<br></br> Elixir
                  consulting and finance.
                </m.h2>
              </div>
              <div className="overflow-hidden">
                <m.div
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.5 }}
                  className="BUTTON text-sm font-semibold flex gap-4"
                >
                  <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
                    Read More
                  </button>
                  <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#fed42d] rounded ">
                    Contact Us
                  </button>
                </m.div>
              </div>
            </m.div>
          </div>
        </div>
        {/* <!-- Single item --> */}
        <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src={h2}
            class="block w-full h-[100vh] md:h-auto "
            alt="Mountaintop"
          />
          <div class="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
            <div className="absolute text-3xl -top-[480px] left-0 flex flex-col gap-6 md:gap-8">
              <div className="overflow-hidden">
                <m.h1
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65 }}
                  className="text-6xl md:text-7xl text-[#2a3855] font-bold"
                >
                  Expert Consultants
                </m.h1>
              </div>
              <div className="overflow-hidden">
                <m.h2
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.3 }}
                  className="font-light text-2xl  text-[#2a3855] "
                >
                  Over 10 years of experience in helping<br></br> clients
                  finding comprehensive solutions.
                </m.h2>
              </div>
              <div className="overflow-hidden">
                <m.div
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.5 }}
                  className="BUTTON text-sm font-semibold flex gap-4"
                >
                  <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
                    Read More
                  </button>
                  <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#fed42d] rounded ">
                    Contact Us
                  </button>
                </m.div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Single item --> */}
        <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src={h3}
            class="block w-full md:h-auto h-[100vh]"
            alt="Woman Reading a Book"
          />
          <div class="absolute inset-x-[15%] bottom-5  py-5  text-black md:block">
            <div className="absolute text-3xl -top-[480px] left-0 flex flex-col gap-6 md:gap-8">
              <div className="overflow-hidden">
                <m.h1
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65 }}
                  className="text-6xl md:text-7xl text-[#2a3855] font-bold"
                >
                  Helping Leaders
                </m.h1>
              </div>
              <div className="overflow-hidden">
                <m.h2
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.3 }}
                  className="font-light text-2xl  text-[#2a3855] "
                >
                  We look forward to help you in taking<br></br> your company to
                  new height.
                </m.h2>
              </div>
              <div className="overflow-hidden">
                <m.div
                  whileInView={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ duration: 0.65, delay: 0.5 }}
                  className="BUTTON text-sm font-semibold flex gap-4"
                >
                  <button className="px-10 py-3 bg-[#2a3855] hover:bg-[#2a3855e9] text-white rounded">
                    Read More
                  </button>
                  <button className="px-10 py-3 bg-[#fdd428] hover:bg-[#fed42d] rounded ">
                    Contact Us
                  </button>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Inner -->
    <!-- Controls --> */}
      <button
        class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
      >
        <span class="inline-block h-8 w-8 dark:grayscale dark:invert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
      >
        <span class="inline-block h-8 w-8 dark:grayscale dark:invert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Home__Carosuel;
