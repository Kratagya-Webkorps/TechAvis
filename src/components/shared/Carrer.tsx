import React from "react";
import Services_wellness from "./Services_wellness";
import { Carrer_carousel } from "../../assets";
import Carrer_roles from "./Carrer_roles";

const Carrer: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-end md:ml-[195px] md:mr-[160px] text-center pt-16 px-4 mb-12">
            <button className=" absolute left-[60%]  bg-primary text-white px-3 py-2 md:px-12 md:py-3 rounded-full rounded-bl-lg font-semibold hover:bg-primary shadow-2xl ">
              Get Started
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-center">
              <p className=" text-xl md:text-5xl">
                Discover Your <span className="text-4xl md:text-9xl ">Potential</span> at
                Techavis
              </p>
            </div>
            <div className="flex flex-col items-center p-4 md:p-0 ">
              <p className="text-[#272727] text-lg leading-relaxed mb-8 text-center md:text-start w-full md:w-1/3 my-8">
                We are passionate about Web Development. We are looking for
                talented and motivated individuals who share our vision and want
                to be part of a dynamic and innovative team.
                <br />
                We are passionate about Web Development. We are looking for
                talented and motivated individuals who share our vision and want
                to be part of a dynamic and innovative team.
              </p>
            </div>
            <a
              href="/careers"
              className="font-semibold flex gap-1 md:justify-start"
            >
              <span className="text-[#5C25F9] border-b border-[#5C25F9]">
                See Positions
              </span>
              <span className="text-[#5C25F9] text-xl">↗</span>
            </a>
          </div>
        </div>
        <div className="md:mx-[160px] md:mt-[100px] ">
          <Services_wellness />
        </div>
        <div className="md:mx-[160px] md:mt-[100px]">
          <div className="flex justify-center md:justify-start md:ml-20">
            <p className="font-medium text-[44px]">Interview process</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={Carrer_carousel} alt="" />
          </div>
        </div>
        <div className="md:mx-[160px] md:mt-[100px]">
        <Carrer_roles/>

        </div>
      </div>
    </div>
  );
};

export default Carrer;
