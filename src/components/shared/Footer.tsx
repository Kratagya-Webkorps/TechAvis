import React from "react";
import { facebook, linkedin, logo, twitter } from "../../assets";

const Footer:React.FC = () => {
  return (
    <footer className=" px-16">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 border-t-2 pt-11">
          
          {/* Logo and Description */}
          <div className="md:w-1/3 ">
            <div className="flex items-center justify-center md:justify-start space-x-3">
            <img src={logo} alt="Techavis Logo" className="h-11" />
            <span className="text-Logo font-normal leading-6 tracking-[.15rem]">
            Tech<span className="text-black">avis</span>
          </span>

            </div>
            <p className="mt-4 text-secondary text-center md:text-start">
              A leading managed IT solutions provider with extensive expertise in design and development. We offer ready-made websites, mobile applications, and robust online business services tailored to manage and optimize IT infrastructure.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12  md:ml-20">
            <div className="">
              <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap">What We Do</h3>
              <ul className="mt-4 text-sm space-y-2 font-normal md:whitespace-nowrap">
                <li>IT Infrastructure Management</li>
                <li>Cloud Solutions & Management</li>
                <li>Cybersecurity Services</li>
                <li>IT Support & Maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 text-sm space-y-2 font-normal whitespace-nowrap ">
                <li>About Us</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Support</h3>
              <ul className="mt-4 text-sm space-y-2 font-normal whitespace-nowrap ">
                <li>T&C</li>
                <li>Policy</li>
                <li>Business</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              <ul className="mt-4 text-sm space-y-2 font-normal whitespace-nowrap ">
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 py-8 text-center">
          <p className="text-gray-500 ">Copyright © 2016 Techavis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
