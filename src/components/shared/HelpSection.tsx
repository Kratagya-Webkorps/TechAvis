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
import clsx from "clsx";

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
      icon: Icon4,
      bg: "#FFF7E3",
      title: "Enhanced Security Solutions",
      description:
        "Protect your data and networks from evolving cyber threats.",
    },
    {
      icon: Icon3,
      bg: "#FFF2F8",
      title: "Streamlined Operations",
      description:
        "Automate workflows to boost efficiency across all departments.",
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
    <div className="flex flex-col">
      <div className="relative">
        <div className="absolute rotate-180  left-[82px] xl:mt-80 ">
        <img src={ellipse2} alt="" />
        </div>
        <div className="absolute right-0 mt-36 w-[70vw] ">
        <img src={ellipse3} alt=""  className="w-full    " />
        <img src={ellipse9} alt="" className="absolute -left-[263px] -bottom-8  -z-10" />
        <img src={ellipse8} alt=""  className=" absolute right-20 -bottom-16" />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row ">
        {/* Left Section */}
        <div className="flex flex-col w-1/3 space-y-4 text-left relative z-10 xl:mt-[360px] xl:ml-[120px] ">
          <h2 className="text-5xl font-semibold leading-tight text-black">
            How can we help <br className="hidden xl:block " /> your Business?
          </h2>
          <p className="text-secondary font-normal text-base mt-4 xl:w-2/3">
            We provide end-to-end IT management, robust security, and scalable
            solutions to drive your business forward effortlessly.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-2/3 grid grid-cols-2 gap-4 items-center justify-items-center relative z-10 mt-24 xl:mr-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "w-[300px] h-[379px] bg-white pt-[39px] rounded-3xl border shadow-md text-center flex flex-col"
              )}
            >
              <div
                className={clsx(
                  "size-[100px] rounded-2xl mx-[94px]",
                  `bg-[${service.bg}]`
                )}
              >
                <img src={service.icon} alt={service.title} className="p-4" />
              </div>
              <h3 className="text-xl font-semibold mt-[31px] mb-[27px] mx-[71px]">{service.title}</h3>
              <p className="text-base text-gray-600 mx-8">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
