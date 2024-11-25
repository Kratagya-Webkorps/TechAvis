import React, { useState } from "react";
import { ellipse10, ellipse11, ellipse7, Services_01, Services_02, Services_03 } from "../../assets";
import { FaCloud, FaNetworkWired, FaShieldAlt, FaTools } from "react-icons/fa";
import WhyChooseUs from "./WhyChooseUs";
import { Link } from "react-router-dom";
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
      description:
        "IT Infrastructure Management is vital for ensuring the reliability, security, and efficiency of an organization's technology systems, encompassing hardware, software, networks, and data centers.",
      details:
        "IT Infrastructure Management involves overseeing and optimizing an organization's entire IT ecosystem to support business operations effectively. This includes network management, which ensures connectivity and performance; server and hardware management, focusing on maintenance and scalability; and cloud infrastructure management, which optimizes cloud resources. By implementing proactive monitoring and maintenance practices, organizations can minimize downtime and enhance system performance. Additionally, robust security measures are essential to protect against cyber threats, ensuring data integrity and compliance with regulations. Effective IT infrastructure management not only boosts productivity but also drives business growth by aligning IT resources with organizational goals.",
    },
    "Cloud Solutions & Management": {
      title: "Cloud Solutions & Management",
      description:
        "Cloud Solutions & Management are essential for optimizing cloud resources, enabling organizations to leverage cloud technologies for improved performance and scalability.",
      details:
        "Cloud Solutions & Management encompass a range of services designed to facilitate the efficient use of cloud computing resources. These solutions provide centralized management, allowing IT teams to monitor, provision, and configure cloud services from a single interface, which simplifies operations across public, private, and hybrid cloud environments, Automation is a key feature, enabling organizations to streamline routine tasks such as resource allocation and scaling, thereby reducing human error and improving efficiency, Additionally, effective cloud management ensures compliance with regulatory requirements and enhances security by automating policies and monitoring for potential threats, By implementing robust cloud management strategies, businesses can optimize costs, improve resource utilization, and maintain high performance levels across their cloud infrastructure.",
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
      description:
        "IT Support & Maintenance is essential for ensuring the smooth operation and reliability of an organization's IT systems, providing both proactive and reactive solutions.",
      details:
        "IT Support & Maintenance involves a comprehensive suite of services aimed at keeping IT systems running efficiently. This includes preventive maintenance, which anticipates issues before they arise, and reactive support, which addresses problems as they occur. Support is typically categorized into three levels: Level 1 for basic troubleshooting, Level 2 for in-depth analysis, and Level 3 for advanced system administration. By implementing these services, organizations can minimize downtime, enhance productivity, and ensure that their IT infrastructure remains secure and up-to-date. Effective IT support not only improves operational efficiency but also fosters trust with clients by ensuring reliable service delivery.",
    },
  };
  return (
    <div className="mt-12">
      <div>
        <div className="relative flex flex-col items-center mb-4 xl:mb-0 ">
        <div className="absolute right-0"><img src={ellipse10} alt="" /></div>

          <div className="absolute left-[4vw] top-[20%] md:top-[12%]">
            <img src={ellipse7} alt="" />
          </div>
          <p className="font-extrabold text-services_heading text-3xl xl:text-6xl text-center">
            Positioning the company <br className="hidden xl:block" /> as a
            trusted partner
          </p>
          <span className="font-normal opacity-[60%] text-xl text-center p-9 text-services_span">
            Trusted technology partner delivering custom software, data
            analytics, and IT management. <br className="hidden xl:block" />
            Optimizing operations, unlocking insights, and accelerating business
            growth.
          </span>
          <Link to="/contact">
            <button className="bg-primary text-white px-12 py-3 rounded-full font-semibold hover:bg-primary shadow-lg ">
              Connect with us
            </button>
          </Link>
        </div>

        <div className="flex justify-center pb-4 xl:pb-0 ">
          <div className="absolute right-[9vw] bottom-1/2 xl:bottom-0 xl:top-[23vw] -z-10">
            <img src={ellipse7} alt="" />
          </div>
          <img src={Services_01} alt="" />

        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-around p-4 xl:p-12 xl:space-y-0 xl:space-x-8 bg-[#F4F9FF] ">
        {/* Left Section with Title and Description */}
        <div className="w-full xl:w-1/2 text-center xl:text-left xl:mt-20 space-y-6 p-4 xl:px-16">
          <h3 className="text-primary text-2xl font-semibold">Our Services</h3>
          <h2 className="text-4xl xl:text-6xl font-bold text-services_heading">
            Perfect and Fast Movement
          </h2>
          <p className="text-services_span text-lg xl:text-xl leading-relaxed">
            We develop creative strategies to help achieve your business goals
            and enhance your income through our services. Our focus is on making
            your content engaging and attracting attention to your business.
          </p>
        </div>

        {/* Right Section with Service Cards */}
        <div className="grid xl:grid-cols-2 gap-8 p-4  w-full xl:w-1/2 xl:pr-20">
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
      <div className="flex flex-col pt-8 xl:pt-24 xl:mx-[110px]  space-y-8 xl:space-y-0 ">
        {/* Left Section: Service List */}
        <h2 className="text-2xl xl:text-4xl font-bold text-[#334756] text-center xl:text-start ">
          Tailored IT Solutions Designed To <br className="hidden xl:block" />
          Empower Your Business Success.
        </h2>
        <div className="flex flex-col xl:flex-row p-4 xl:p-[25px] ">
          <div className="flex xl:flex-row justify-center xl:justify-start mb-4">
            <div className="space-y-2 xl:mt-4">
              {services.map((service) => (
                <div className="">
                  <div
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`cursor-pointer p-2 text-xl xl:text-[25px] text-center xl:text-start  font-semibold whitespace-nowrap  ${
                      selectedService === service
                        ? "text-white bg-primary w-fit xl:py-3 xl:px-5"
                        : "text-gray-600 xl:py-3 xl:px-5"
                    }`}
                  >
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Selected Service Content */}
          <div className="relative bg-[#EEF2FE] p-8 rounded-lg shadow-lg xl:ml-[207px] xl:min-h-[440px] justify-items-center xl:justify-items-start md:mx-20 xl:mx-0  justify-center items-center">
            <div className="absolute -bottom-12 -right-20 -z-10">
              <img src={ellipse11} alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center xl:text-start">
              {serviceContent[selectedService].title}
            </h3>
            <div className="mt-2 h-3 bg-gradient-to-r from-primary to-transparent w-1/2 "></div>

            <p className="text-gray-600 mt-4 font-bold text-center xl:text-start">
              {serviceContent[selectedService].description}
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed text-center xl:text-start">
              {serviceContent[selectedService].details}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-around p-6 xl:p-12 xl:ml-[83px] xl:pt-24 space-y-8 xl:space-y-0 xl:space-x-8">
        <div className="mt-12 flex justify-center xl:justify-start">
          <WhyChooseUs />
        </div>
        <div className="flex justify-center xl:justify-start xl:pr-9 2xl:pr-3 ">
          <img src={Services_02} alt="" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-around items-center xl:pt-24 xl:items-start p-6 xl:p-12 xl:mx-[60px] ">
        {/* Left Text Section */}
        <div className="text-center xl:text-left xl:pb-0 w-full xl:w-1/2 flex flex-col justify-between">
          {/* Start of Text Content */}
          <div className="space-y-4">
            <p className="text-2xl xl:text-6xl font-bold leading-tight">
              Interesting <br className="hidden xl:block" /> Collaboration{" "}
              <br className="hidden xl:block" /> With Us?
            </p>
            <p className="text-lg xl:text-xl text-[#464646] xl:pt-[2vw] pr-0 xl:pr-12 tracking-wide font-light">
              Help you to reach your business goal
            </p>
          </div>

          {/* End of Content with Button */}
          <div className="xl:mt-6 my-4">
            <Link to="/contact">
              <button className="bg-primary text-white px-12 py-3 rounded-full font-semibold hover:bg-primary shadow-2xl ">
                Get Started
              </button>
            </Link>
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
