import React from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  ellipse3,
  ellipse2,
  ellipse8,
  ellipse9,
} from "../../assets";
// import clsx from "clsx";

const HelpSection: React.FC = () => {
  const services = [
    {
      icon: Icon2, // Replace with actual icon path or image component
      bg: "#F1F7FF",
      title: "Proactive IT Management",
      description:
        "Ensure continuous system uptime with 24/7 monitoring and maintenance.",
    },

    {
      icon: Icon3,
      bg: "#FFF2F8",
      title: "Streamlined Operations",
      description:
        "Automate workflows to boost efficiency across all departments.",
    },{
      icon: Icon4,
      bg: "#FFF7E3",
      title: "Enhanced Security Solutions",
      description:
        "Protect your data and networks from evolving cyber threats.",
    },
    {
      icon: Icon1,
      bg: "#DEFFEE",
      title: "Scalable Cloud Services",
      description:
        "Support growth with flexible, secure cloud infrastructure and applications.",
    },
  ];

  return (
    <div className="flex flex-row md:flex-col">
      <div className="relative">
        <div className="hidden xl:block absolute rotate-180  left-[82px] xl:mt-80 ">
        <img src={ellipse2} alt="" />
        </div>
        <div className="absolute right-0 top-80 xl:top-0 xl:mt-36 w-[94vw] xl:w-[70vw] ">
        <img src={ellipse3} alt=""  className="  xl:w-full  h-[619px]   " />
        <img src={ellipse9} alt="" className=" hidden xl:block absolute -left-[263px] -bottom-8  -z-10" />
        <img src={ellipse8} alt=""  className=" hidden xl:block  absolute right-36 -bottom-16 -z-10" />
        </div>
      </div>
      <div className="md:relative flex flex-col xl:flex-row md:justify-center items-center xl:items-start xl:justify-between ">
        {/* Left Section */}
        <div className="flex flex-col w-full xl:w-1/3  text-center xl:text-left relative z-10 xl:mt-[379px] xl:ml-[120px]  ">
          <h2 className="md:text-[40px] md:leading-[50PX] text-2xl font-semibold text-black whitespace-nowrap">
            How can we help <br /> your Business?
          </h2>
          <p className="text-secondary font-normal leading-[22px] text-[16px] mt-2 xl:mt-[28px] mb-[28px] w-full  xl:w-2/3 md:text-center xl:text-start tracking-normal">
            We provide end-to-end IT management, robust security, and scalable
            solutions to drive your business forward effortlessly.
          </p>
        </div>

        {/* Right Section */}
        <div className=" flex gap-9 flex-col md:flex-row relative z-10 xl:mr-[183px] bottom-0 ">
  {/* Column 1 with 2 cards */}
  <div className="flex flex-col  space-y-8 pt-8">
    <div className="w-[310px] h-[379px] bg-white pt-[39px] rounded-[36px] border shadow-md text-center flex flex-col md:mt-16">
      <div className="size-[120px] rounded-2xl mx-[94px]" style={{ backgroundColor: services[0].bg }}>
        <img src={services[0].icon} alt={services[0].title} className="p-6" />
      </div>
      <h3 className="text-[24px] leading-[30px] font-semibold mt-[31px] mb-[27px] mx-[71px]">{services[0].title}</h3>
      <p className="text-base text-gray-600 mx-8">{services[0].description}</p>
    </div>

    <div className="w-[310px] h-[379px] bg-white pt-[39px] rounded-[36px] border shadow-md text-center flex flex-col ">
      <div className="size-[120px] rounded-2xl mx-[94px]" style={{ backgroundColor: services[1].bg }}>
        <img src={services[1].icon} alt={services[1].title} className="p-6" />
      </div>
      <h3 className="text-[24px] leading-[30px] font-semibold mt-[31px] mb-[27px] mx-[71px]">{services[1].title}</h3>
      <p className="text-base text-gray-600 mx-8">{services[1].description}</p>
    </div>
  </div>

  {/* Column 2 with 2 cards */}
  <div className="flex flex-col space-y-8 ">
    <div className="w-[310px] h-[379px] bg-white pt-[39px] rounded-[36px] border shadow-md text-center flex flex-col">
      <div className="size-[120px] rounded-2xl mx-[94px]" style={{ backgroundColor: services[2].bg }}>
        <img src={services[2].icon} alt={services[2].title} className="p-6" />
      </div>
      <h3 className="text-[24px] leading-[30px] font-semibold mt-[31px] mb-[27px] mx-5">{services[2].title}</h3>
      <p className="text-base text-gray-600 mx-8">{services[2].description}</p>
    </div>

    <div className="w-[310px] h-[379px] bg-white pt-[39px] rounded-[36px] border shadow-md text-center flex flex-col">
      <div className="size-[120px] rounded-2xl mx-[94px]" style={{ backgroundColor: services[3].bg }}>
        <img src={services[3].icon} alt={services[3].title} className="p-6" />
      </div>
      <h3 className="text-[24px] leading-[30px] font-semibold mt-[31px] mb-[27px] mx-5">{services[3].title}</h3>
      <p className="text-base text-gray-600 mx-8">{services[3].description}</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default HelpSection;
