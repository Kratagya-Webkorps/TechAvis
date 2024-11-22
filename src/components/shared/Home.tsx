import React, { useEffect, useState } from "react";
import {
  home2,
  home3,
  home4,
  ellipse2,
  dot_Ornament,
  airbnb,
  amazon,
  google,
  uberEats,
  ellipse4,
  ellipse5,
  home3_1,
  ellipse6,
} from "../../assets";
import Slider from "react-slick";
import HelpSection from "./HelpSection";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [placeholder, setPlaceholder] = useState("Enter your email address...");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 768) {
        setPlaceholder("Enter email...");
      } else {
        setPlaceholder("Enter your email address...");
      }
    };

    // Initial call to set the placeholder based on the current screen size
    updatePlaceholder();

    // Add event listener to handle screen resizing
    window.addEventListener("resize", updatePlaceholder);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);
  const testimonials = [
    {
      name: "Matthew Paul",
      comment:
        "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      name: "Sarah Johnson",
      comment:
        "Exceptional service and quality! The team delivered beyond expectations, and I'm thrilled with the results. Will definitely work with them again.",
    },
    {
      name: "James Lee",
      comment:
        "Amazing experience from start to finish! Professional, attentive, and detail-oriented. They brought my vision to life beautifully.",
    },
    // Add more testimonials as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter a valid email.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      // Form submission logic here
      try {
        const response = await fetch("https://formspree.io/f/mbljkpnr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email}),
        });
        console.log(response)
      } catch (error) {
        console.log(error)
        
      }
      console.log("Email submitted:", email);
    }
  };
  return (
    <>
      <div>
        <div className="w-full ">
          <div className="w-full ">
            <div className="flex  flex-col xl:flex-row-reverse xl:items-start xl:justify-between xl:h-[33vw]  ">
              {/* Right Section (Image) */}
              <div>
                <img src={home4} alt="" className="w-[100vw]" />
              </div>
              {/* Left Section (Text Content) */}
              <div className=" w-[100%] xl:w-[43.5%]  xl:pt-0 xl:ml-[120px]">
                <div className="mt-6 text-center xl:text-left xl:mt-24 lg:mt-[40px] xl:w-4/5 xl:p-12 xl:pl-0 xl:pb-0 ">
                  <p className=" text-2xl md:text-[3vw] font-bold whitespace-nowrap ">
                    Optimize. Secure. Simplify IT.
                  </p>
                  <p className="flex justify-center text-sm xl:text-lg text-secondary xl:pt-[2vw]  tracking-wide font-light p-2 ">
                    Techavis Services Pvt. Ltd. offers end-to-end IT management
                    solutions powered by ManageEngine, helping businesses
                    enhance efficiency, security, and control over their IT
                    infrastructure. Let us simplify your IT landscape for better
                    productivity and peace of mind.
                  </p>
                </div>

                <div className="flex flex-col xl:flex-col lg:flex-row items-center xl:items-start justify-center xl:justify-start mt-12 sm:flex-col">
                  <div className="relative flex justify-start items-start ">
                    {/* Image positioned in the background */}
                    <img
                      src={dot_Ornament}
                      alt=""
                      className="w-full xl:w-[90%] h-full object-cover"
                    />
                    {/* Button positioned on top of the image */}
                    <Link to="/contact">
                      <button className="bg-primary xl:ml-12 absolute xl:top-4 top-1/2 left-1/2 xl:left-0 -translate-x-1/2 -translate-y-1/2 xl:-translate-x-0 xl:-translate-y-0  text-white font-semibold py-3 px-6 xl:py-5 xl:px-10 rounded-full whitespace-nowrap">
                        Contact Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row mt-12 xl:mt-28 justify-center items-center  xl:px-[120px]">
          <div className="mt-6 text-center xl:text-left w-1/3 ">
            <span className=" text-4xl md:text-[3vw] font-bold whitespace-nowrap">
              Our Client
            </span>
            <span className="flex  text-base sm:text-lg text-tertiary tracking-wide font-light py-2 ">
              Several selected clients, who already believe in our service.
            </span>
          </div>
          <div className="flex gap-[59px]">
            <img
              src={google}
              alt=""
              className=" xl:w-[10rem] xl:size-32 object-contain "
            />
            <img
              src={airbnb}
              alt=""
              className=" xl:w-[9rem] xl:size-32 object-contain"
            />
            <img
              src={uberEats}
              alt=""
              className=" xl:w-[9rem] xl:size-32 object-contain"
            />
            <img
              src={amazon}
              alt=""
              className=" xl:w-[10rem] xl:size-32 object-contain mt-2"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-16  md:mb-24">
        <HelpSection />
      </div>
      {/* next */}
      <div className="xl:px-[120px] xl:pl-[95px] mt-12 xl:mt-12 flex flex-col xl:flex-row justify-around">
        <div className=" w-full xl:w-1/2 flex justify-center xl:justify-start">
          <div className="relative ">
            <img
              src={ellipse4}
              alt="Ellipse 4"
              className="absolute bottom-0 left-[36rem] transform -translate-x-1/2 z-10 "
            />
            <img src={home2} alt="Home 2" className="relative z-20" />
          </div>
        </div>

        <div className="w-full xl:w-1/2 flex items-center relative">
          {/* Ellipse 5 positioned absolutely in the background */}
          <img
            src={ellipse5}
            alt="Ellipse 5"
            className="hidden xl:block absolute  -left-8  xl:left-12 transform -translate-x-1/2 z-0 opacity-50"
          />

          {/* Text Content */}
          <div className=" text-center xl:text-left relative z-10">
            <p className="text-2xl xl:text-[3vw] font-bold xl:px-3 leading-none">
              Great Managed IT Solutions since 2016
            </p>
            <p className="flex justify-center xl:justify-start text-sm xl:text-lg text-secondary p-4 tracking-wide font-light">
              Our business plan is a detailed document outlining the core
              activities of our managed IT solutions, our objectives, and the
              strategies we will implement to achieve them. Our goal is to
              provide clients with high-quality, reliable IT solutions, tailored
              to their specific needs, budgets, and business requirements.
            </p>
          </div>
        </div>
      </div>
      {/* next */}

      <div className="text-center xl:px-24 xl:mt-24 mt-12 flex flex-col justify-around">
        <p className="text-2xl xl:text-[3vw] font-bold xl:px-3 leading-none">
          What our happy client say
        </p>
        <span className="mt-4 text-base sm:text-[1vw] text-tertiary tracking-wide font-light">
          Several selected clients, who already believe in our service.
        </span>
      </div>
      {/* next */}
      <div className="xl:px-24 xl:mt-24 flex flex-col xl:flex-row justify-between items-center">
        {/* First Column */}
        <div className="w-full xl:w-1/3 flex justify-center xl:justify-start">
          <img src={home3} alt="Home 3" className="max-w-full h-auto" />
        </div>

        {/* Second Column */}
        <div className="w-full xl:w-1/3 px-4 xl:px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center xl:text-left">
                <span className="block font-semibold text-lg mb-2">
                  {testimonial.name}
                </span>
                <span className="text-secondary text-sm xl:text-base leading-relaxed font-light">
                  {testimonial.comment}
                </span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Third Column */}
        <div className="w-full xl:w-1/3 flex justify-center xl:justify-end">
          <img src={home3_1} alt="Home 3_1" className="max-w-full h-auto" />
        </div>
      </div>

      {/* next */}
      <div className="relative flex justify-center items-center xl:px-24 mt-12 xl:my-24 p-6 mb-12">
        <div className="z-10 flex flex-col xl:flex-row items-center justify-between xl:h-64 bg-[#f0f7ff] rounded-[2rem] p-4 xl:p-0 xl:rounded-[5rem] shadow-lg w-full xl:space-x-6">
          <div className="flex justify-center items-center flex-col xl:w-1/2 text-center xl:text-left px-4">
            <h2 className="text-xl xl:text-[3vw] font-bold leading-none whitespace-nowrap">
              Subscribe Newsletter
            </h2>
            <p className="mt-4 text-base sm:text-[1vw] text-tertiary tracking-wide font-light">
              I will update good news and promotion service not spam
            </p>
          </div>

          <div className="xl:relative flex items-center justify-center mt-4 xl:mt-0 xl:bg-primary xl:rounded-r-[200rem] xl:rounded-bl-[450rem] xl:rounded-tl-[200rem]  w-full xl:w-[40%] xl:h-full xl:px-4">
            <form
              className="relative w-full md:flex flex-col md:items-center"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center w-full max-w-lg relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className={`w-full h-16 pl-6 pr-32 py-3 text-gray-600 bg-white outline-none focus:ring-0 placeholder-gray-400 rounded-full shadow-md ${
                    error ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-primary text-white font-semibold rounded-full"
                >
                  Contact Now
                </button>
              </div>
              {error && (
                <p className="text-red-500 bg-white w-fit p-1 rounded-xl text-lg mt-1 ml-4 md:ml-8">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="hidden xl:block absolute bottom-2 xl:left-8 xl:top-28 -z-10 ml-12 mt-12 rotate-90">
          <img src={ellipse2} alt="" className="" />
        </div>
        <div className="hidden xl:block absolute xl:top-0 xl:right-8 -z-10 ml-12 rotate-90">
          <img src={ellipse6} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Home;
