import React from "react";
import { HomeBg, Icon1, Icon2, Icon3, Icon4 } from "../../assets";
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
    <div className="relative flex">
      <div className="w-[100vw]">
        <img src={HomeBg} alt="" className="w-full" />
      </div>
      <div className="absolute flex">
        {/* Left Section */}
        <div className="flex flex-col w-1/3 space-y-4 text-left relative z-10 md:mt-[360px] md:ml-[120px] ">
          <h2 className="text-5xl font-semibold leading-tight text-black">
            How can we help <br className="hidden md:block " /> your Business?
          </h2>
          <p className="text-secondary font-normal text-base mt-4 md:w-2/3">
            We provide end-to-end IT management, robust security, and scalable
            solutions to drive your business forward effortlessly.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-2/3 grid grid-cols-2 gap-4 items-center justify-items-center relative z-10 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "w-[300px] h-[379px] bg-white p-6 rounded-3xl border shadow-md text-center space-y-4 flex flex-col"
              )}
            >
              <div
                className={clsx(
                  "size-[100px] mx-auto rounded-2xl",
                  `bg-[${service.bg}]`
                )}
              >
                <img src={service.icon} alt={service.title} className="p-4" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
