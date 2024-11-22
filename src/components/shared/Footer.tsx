import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className=" px-4 xl:px-[120px]">
      <div className="flex flex-col xl:flex-row justify-between items-center space-y-8 xl:space-y-0 border-t-2 pt-11">
        {/* Logo and Description */}
        <div className="xl:w-1/3 ">
          <div className="flex items-center justify-center xl:justify-start space-x-3">
            <img src={logo} alt="Techavis Logo" className="h-11" />
            <span className="text-Logo font-normal leading-6 tracking-[.15rem]">
              Tech<span className="text-black">avis</span>
            </span>
          </div>
          <p className="mt-4 text-secondary text-center xl:text-start">
            A leading managed IT solutions provider with extensive expertise in
            design and development. We offer ready-made websites, mobile
            applications, and robust online business services tailored to manage
            and optimize IT infrastructure.
          </p>
          {/* Social Icons */}
          {/* <div className="flex space-x-4 mt-4 justify-center xl:justify-start">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            
            </div> */}
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-12 xl:ml-20 text-center xl:text-start">
          <div className="">
            <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
              What We Do
            </h3>
            <ul className="mt-4 text-sm space-y-2 font-normal ">
              <li>
                <Link to="/services"> IT Infrastructure Management</Link>
              </li>
              <li>
                <Link to="/services"> Cloud Solutions & Management</Link>
              </li>
              <li>
                <Link to="/services"> Cybersecurity Services</Link>
              </li>
              <li>
                <Link to="/services"> IT Support & Maintenance</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 text-sm space-y-2 font-normal whitespace-nowrap ">
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/career"> Career</Link>
              </li>
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
              <li>
                <Link to="/contact">Connect Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 py-8 text-center">
        <p className="text-gray-500 ">Copyright © 2024 Techavis</p>
      </div>
    </footer>
  );
};

export default Footer;
