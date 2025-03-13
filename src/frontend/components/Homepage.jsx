import React, { useEffect, useState } from "react";
import GroupPic from "../../assets/group_pic.png";
import Star from "../../assets/star.svg";
import HeroPic from "../../assets/hero.png";
import TopDesign from "../../layout/header/TopDesign";
import Circle from "./icons/circle";
import EmptyCircle from "./icons/empty_circle";
import { courses, tutor_guide } from "../utils/data";
import FaceShadow from "../../assets/face_shadow";
import Popup from "../../assets/popup.jpg";
// import arrowRight from "../../assets/arrowRight.svg";

export default function Homepage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-[#F3F1FC]">
        <div id="hero" className="flex flex-col md:max-w-[700px] mx-auto vlg:max-w-[1001px]">
          <div className="pt-[2rem] px-[1.5rem] md:pt-[3rem] md:text-center md:flex md:flex-col md:items-center ">
            <h1 className="text-darkBlue text-[2rem] leading-[44px] font-bold md:text-[2.5rem] vlg:text-[3.25rem] vlg:leading-[60.6px]">
            EDUCATION BEYOND THE FOUR WALLS 
            </h1>
            <p className="vlg:max-w-[700px] md:text-[1.125rem] text-lightBlue mt-[1rem]">
            Your Pathway to limitless career growth.
            </p>

            <div className="my-[1.2rem] py-[0.5rem] space-y-[5px] borde-black brder-[1px] md:my-[1.5rem]  md:flex md:flex-col md:items-center">
              <h3 className="text-lightBlue">
                Join 1,234+ students learning with us
              </h3>
              <div className="flex space-x-[4px]">
                <div>
                  <img src={GroupPic} alt="" />
                </div>
                <div className="flex items-center">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] max-w-[750px] mx-auto">
            <div className="relative z-[2]">
              <img
                className="w-[100%] md:rounded-[10px]"
                src={HeroPic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] mt-[-20px]">
        <TopDesign />
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-lg w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-darkBlue text-white w-8 h-8 flex items-center justify-center rounded-full"
            >
              &times;
            </button>
            <img src={Popup} alt="Popup Image" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
      {/* <div className="px-[1.5rem] py-[2rem] flex flex-col items-center space-y-[1rem] vlg:py-[3rem]">
        <h1 className="font-semibold flex flex-col items-center text-[1.5rem] text-darkBlue space-y-[3px] md:space-y-[10px] md:text-[2rem] vlg:text-[3rem]">
          <span className="block">
            <Circle />
          </span>
          <span>How to Start</span>
        </h1>

        <div className="relative">
          <div className="absolute top-[61px] left-[150px] hidden vlg:block h-[4px] w-[850px] bg-[#EFF3FC]"></div>
          <div className="space-y-[2rem] vlg:space-y-0 grid vlg:grid-cols-3 vlg:[grid-gap:2rem]">
            {list_data.map((data, i) => (
              <div
                key={i}
                className="py-[1rem] space-y-[1.5rem] flex flex-col items-center vlg:py-[2rem]"
              >
                <h1
                  className={`z-[3] w-[68px] flex items-center justify-center rounded-[8px] h-[35px] p-[8px] md:text-[1.5rem] bg-darkBlue font-semibold text-white md:w-[108px] md:h-[61px] ${
                    i === 1 ? "bg-[#6392D9]" : i === 2 ? "bg-[#BDD1EF]" : ""
                  }`}
                >
                  Step {i + 1}
                </h1>

                <div className="space-y-[2.5rem]">
                  {data.map((el) => (
                    <div key={el} className="space-y-[2.5rem] md:max-w-[368px]">
                      <div className="text-center text-[1rem] text-darkBlue flex flex-col items-center space-y-[5px] vlg:flex-row vlg:text-left vlg:space-x-[8px]">
                        <span className="block">
                          <EmptyCircle />
                        </span>
                        <p>{el}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* third screen */}
      <div className="bg-[#F3F1FC]">
        <TopDesign />
        <div id="courses" className="flex flex-col px-[1.5rem] py-[2rem] md:pb-[3rem] md:space-y-[3rem] space-y-[2rem]">
          <h1 className="space-y-[5px] flex flex-col items-center">
            <span className="md:*:h-[94px] md:*:w-[96px]">
              <FaceShadow />
            </span>
            <span className="font-bold text-darkBlue desktop-heading">
              Our Courses/Classes
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:mx-auto lg:max-w-[1050px]">
            {courses.map((data, i) => (
              <div
                key={i}
                className="flex flex-col justify-between w-full h-full p-[1.5rem] rounded-[1rem] bg-[#F1F4F9] border-[1px] border-[#D7E5FB]"
              >
                {/* Icon & Title */}
                <div className="flex space-x-[8px]">
                  <img src={data.path} className="w-[40px] h-[40px] rounded-full" alt="" />
                  <h1 className="text-darkBlue text-[1.2rem] md:text-[1.5rem] font-medium">
                    {data.title}
                  </h1>
                </div>

                {/* Description */}
                <p className="text-[1rem] text-darkBlue font-light mt-2 md:mt-0">{data.text}</p>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  {/* SubText (Hidden on Small Screens) */}
                  <div className="text-[#6D7D95] hidden md:block">{data.subText}</div>

                  {/* Button (Fixed Size & Positioning) */}
                  <button className="w-[170px] h-[31px] flex justify-center items-center space-x-[4px] px-4 py-2 rounded-[24px] bg-[#F5F8FD] text-[#8594AA] border-[1px] border-[#152f5680] text-[0.75rem] self-start md:self-auto mt-2 md:mt-0">
                    <span>Learn more</span>
                    {/* <span>
                      <img src={arrowRight} alt="" />
                    </span> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-8 flex flex-col items-center space-y-4 lg:py-12">
        <h1 className="font-bold flex flex-col items-center text-lg text-darkBlue space-y-1 md:space-y-2">
          <span className="block">
            <Circle />
          </span>
          <span className="desktop-heading py-5">How to get a Tutor</span>
        </h1>

        <div className="relative">
          {/* Line Connector (Only Visible on Large Screens) */}
          <div className="absolute top-[50px] left-[120px] hidden lg:block h-[3px] w-[750px] bg-[#EFF3FC]"></div>

          {/* Grid Layout */}
          <div className="space-y-6 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {tutor_guide.map((data, i) => (
              <div key={i} className="py-4 space-y-6 flex flex-col items-center md:py-6">
                {/* Step Number Box */}
                <h1
                  className={`z-10 w-14 flex items-center justify-center rounded-md h-9 text-base md:text-lg bg-darkBlue font-semibold text-white md:w-16 md:h-10 ${
                    i === 1 ? "bg-[#6392D9]" : i === 2 ? "bg-[#BDD1EF]" : ""
                  }`}
                >
                  Step {i + 1}
                </h1>

                {/* Step Details */}
                <div className="space-y-5">
                  {data.map((el) => (
                    <div key={el} className="space-y-5 md:max-w-[340px]">
                      <div className="text-center text-base text-darkBlue flex flex-col items-center space-y-2 md:flex-row md:text-left md:space-x-2">
                        <span className="block">
                          <EmptyCircle />
                        </span>
                        <p>{el}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
