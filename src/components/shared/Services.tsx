import React, { useState } from "react";
import { Services_01, Services_02, Services_03 } from "../../assets";
import { FaCloud, FaNetworkWired, FaShieldAlt, FaTools } from "react-icons/fa";
import WhyChooseUs from "./WhyChooseUs";
type ServiceKey =
  | "IT Infrastructure Management"
  | "Cloud Solutions & Management"
  | "Cybersecurity Services"
  | "IT Support & Maintenance";
interface ServiceContent {
  title: string;
  description: string;
  details: string;
}
const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceKey>(
    "Cybersecurity Services"
  );

  const services: ServiceKey[] = [
    "IT Infrastructure Management",
    "Cloud Solutions & Management",
    "Cybersecurity Services",
    "IT Support & Maintenance",
  ];
  const serviceContent: Record<ServiceKey, ServiceContent> = {
    "IT Infrastructure Management": {
      title: "IT Infrastructure Management",
      description: "Description for IT Infrastructure Management.",
      details: "Details about IT Infrastructure Management.",
    },
    "Cloud Solutions & Management": {
      title: "Cloud Solutions & Management",
      description: "Description for Cloud Solutions & Management.",
      details: "Details about Cloud Solutions & Management.",
    },
    "Cybersecurity Services": {
      title: "Cybersecurity Services",
      description:
        "Cybersecurity services are essential for protecting organizations from cyber threats by offering a comprehensive suite of strategies and tools tailored to safeguard digital assets.",
      details:
        "Cybersecurity services encompass a variety of offerings designed to help businesses defend against cyber threats and attacks. These services include security assessments, which identify vulnerabilities; incident response planning, which prepares organizations for potential breaches; and managed security services, providing 24/7 monitoring and threat detection. By leveraging these services, companies can enhance their security posture, ensure compliance with regulations, and maintain customer trust while focusing on their core operations. Engaging with cybersecurity service providers allows organizations to access specialized expertise and advanced technologies that may not be feasible to maintain in-house.",
    },
    "IT Support & Maintenance": {
      title: "IT Support & Maintenance",
      description: "Description for IT Support & Maintenance.",
      details: "Details about IT Support & Maintenance.",
    },
  };
  return (
    <div className="mt-12">
      <div>
        <div className="flex flex-col items-center ">
          <p className="font-extrabold text-services_heading text-6xl text-center">
            Positioning the company <br className="hidden md:block" /> as a
            trusted partner
          </p>
          <span className="font-normal opacity-[60%] text-xl text-center p-9 text-services_span">
            Trusted technology partner delivering custom software, data
            analytics, and IT management. <br className="hidden md:block" />
            Optimizing operations, unlocking insights, and accelerating business
            growth.
          </span>
          <button className="bg-primary text-white px-12 py-3 rounded-full font-semibold hover:bg-primary shadow-lg ">
            Connect with us
          </button>
        </div>
        <div className="flex justify-center ">
          <img src={Services_01} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around md:p-12 space-y-8 md:space-y-0 md:space-x-8 bg-[#F4F9FF] ">
        {/* Left Section with Title and Description */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-20 space-y-6 p-4 md:px-24">
          <h3 className="text-primary text-2xl font-semibold">Our Services</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-services_heading">
            Perfect and Fast Movement
          </h2>
          <p className="text-services_span text-lg md:text-xl leading-relaxed">
            We develop creative strategies to help achieve your business goals
            and enhance your income through our services. Our focus is on making
            your content engaging and attracting attention to your business.
          </p>
        </div>

        {/* Right Section with Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 p-4  w-full md:w-1/2 md:pr-20">
          {/* Service 1 */}
          <div className="flex flex-col items-center p-6 bg-white text-center rounded-3xl  shadow-lg h-72 justify-center ">
            <div className="text-white text-4xl mb-4 bg-blue-500 p-4 rounded-full ">
              <FaNetworkWired />
            </div>
            <h4 className="text-black font-semibold text-2xl">
              IT Infrastructure Management
            </h4>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center p-2 bg-transparent text-center rounded-3xl border h-72 justify-center ">
            <div className="text-white text-4xl mb-4 bg-red-500 p-4 rounded-full">
              <FaCloud />
            </div>
            <h4 className="text-black font-semibold text-2xl">
              Cloud Solutions & Management
            </h4>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center p-2 bg-transparent text-center rounded-3xl border h-72 justify-center ">
            <div className="text-white text-4xl mb-4 bg-green-500 p-4 rounded-full">
              <FaShieldAlt />
            </div>
            <h4 className="text-black font-semibold text-2xl">
              Cybersecurity Services
            </h4>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center p-2 bg-transparent text-center rounded-3xl border h-72 justify-center ">
            <div className="text-white text-4xl mb-4 bg-yellow-500 p-4 rounded-full">
              <FaTools />
            </div>
            <h4 className="text-black font-semibold text-2xl">
              IT Support & Maintenance
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pt-[70px] md:mx-[100px] space-y-8 md:space-y-0 ">
        {/* Left Section: Service List */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#334756] text-center md:text-start ">
          Tailored IT Solutions Designed To <br className="hidden md:block" />
          Empower Your Business Success.
        </h2>
        <div className="flex flex-col md:flex-row md:p-[25px] ">
          <div className="flex md:flex-row justify-center md:justify-start mb-4">
            <div className="space-y-2 mt-4">
              {services.map((service) => (
                <div className="">
                  <div
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`cursor-pointer p-2 text-[25px]  font-semibold whitespace-nowrap  ${
                      selectedService === service
                        ? "text-white bg-blue-600 rounded-md"
                        : "text-gray-600"
                    }`}
                  >
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Selected Service Content */}
          <div className=" bg-[#EEF2FE] p-8 rounded-lg shadow-lg md:ml-[207px] md:min-h-[440px]  justify-center items-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              {serviceContent[selectedService].title}
            </h3>
            <div className="mt-2 h-3 bg-gradient-to-r from-blue-600 to-transparent w-1/2"></div>

            <p className="text-gray-600 mt-4 font-bold">
              {serviceContent[selectedService].description}
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              {serviceContent[selectedService].details}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around p-6 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="mt-12 ">
          <WhyChooseUs />
        </div>
        <div>
          <img src={Services_02} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start p-6 md:p-12 md:mx-24 ">
        {/* Left Text Section */}
        <div className="text-center md:text-left md:pb-0 w-full md:w-1/2 flex flex-col justify-between">
          {/* Start of Text Content */}
          <div className="space-y-4">
            <p className="text-2xl md:text-6xl font-bold leading-tight">
              Interesting <br className="hidden md:block" /> Collaboration{" "}
              <br className="hidden md:block" /> With Us?
            </p>
            <p className="text-lg md:text-xl text-[#464646] md:pt-[2vw] pr-0 md:pr-12 tracking-wide font-light">
              Help you to reach your business goal
            </p>
          </div>

          {/* End of Content with Button */}
          <div className="md:mt-6 my-4">
            <button className="bg-primary text-white px-12 py-3 rounded-full font-semibold hover:bg-primary shadow-2xl ">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div>
          <img src={Services_03} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
