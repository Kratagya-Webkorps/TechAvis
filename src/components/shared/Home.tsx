import React from "react";
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

const Home: React.FC = () => {
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
  return (
    <>
      <div>
        <div className="w-full ">
          <div className="w-full ">
            <div className="flex  flex-col md:flex-row-reverse items-start md:items-start md:space-x-8 md:h-[33vw]">
              {/* Right Section (Image) */}
              <div className="relative w-[100%]">
                <img src={home4} alt="" />
              </div>
              {/* Left Section (Text Content) */}
              <div className=" w-[100%] md:w-[47.5%]  md:pt-0">
                <div className="mt-6 text-center md:text-left md:mt-25 lg:mt-20 md:w-4/5 md:p-12 md:pb-0 ">
                  <p className=" text-2xl md:text-[3vw] font-semibold whitespace-nowrap md:px-2 ">
                    Optimize. Secure. Simplify IT.
                  </p>
                  <p className="flex justify-center text-sm md:text-lg text-secondary md:pt-[2vw] p-4 tracking-wide font-light ">
                    Techavis Services Pvt. Ltd. offers end-to-end IT management
                    solutions powered by ManageEngine, helping businesses
                    enhance efficiency, security, and control over their IT
                    infrastructure. Let us simplify your IT landscape for better
                    productivity and peace of mind.
                  </p>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center md:justify-start mt-4 sm:flex-col">
                  <div className="relative flex justify-start items-start pl-5">
                    {/* Image positioned in the background */}
                    <img
                      src={dot_Ornament}
                      alt=""
                      className="w-full md:w-[90%] h-full object-cover"
                    />
                    {/* Button positioned on top of the image */}
                    <button className="bg-primary md:ml-16 absolute md:top-4 top-1/2 left-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0  text-white font-semibold py-3 px-6 md:py-5 md:px-10 rounded-full whitespace-nowrap">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-12 md:mt-28 justify-center items-center md:justify-between md:px-20">
          <div className="mt-6 text-center md:text-left ">
            <span className=" text-4xl md:text-[3vw] font-bold whitespace-nowrap md:px-3">
              Our Client
            </span>
            <span className="flex md:pr-[10vw] text-base sm:text-lg text-tertiary tracking-wide font-light p-4 ">
              Several selected clients, who already believe in our service.
            </span>
          </div>
          <div className="flex gap-[4vw]">
            <img
              src={google}
              alt=""
              className="size-16 md:size-32 object-contain "
            />
            <img
              src={airbnb}
              alt=""
              className="size-16 md:size-32 object-contain"
            />
            <img
              src={uberEats}
              alt=""
              className="size-16 md:size-32 object-contain"
            />
            <img
              src={amazon}
              alt=""
              className="size-16 md:size-32 object-contain mt-2"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <HelpSection/>
      </div>
      {/* next */}
      <div className="md:pr-20 md:pl-12 mt-12 md:mt-12 flex flex-col md:flex-row justify-around">
        <div className="relative w-full md:w-1/2 flex justify-center ">
          <div className="relative">
            <img
              src={ellipse4}
              alt="Ellipse 4"
              className="absolute bottom-0 left-[36rem] transform -translate-x-1/2 z-10 "
            />
            <img src={home2} alt="Home 2" className="relative z-20" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center relative">
          {/* Ellipse 5 positioned absolutely in the background */}
          <img
            src={ellipse5}
            alt="Ellipse 5"
            className="hidden md:block absolute -top-4 -left-8 md:top-20 md:left-12 transform -translate-x-1/2 z-0 opacity-50"
          />

          {/* Text Content */}
          <div className=" text-center md:text-left relative z-10">
            <p className="text-2xl md:text-[3vw] font-bold md:px-3 leading-none">
              Great Managed IT Solutions since 2016
            </p>
            <p className="flex justify-center md:justify-start text-sm md:text-lg text-secondary p-4 tracking-wide font-light">
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

      <div className="text-center md:px-24 md:mt-12 mt-12 flex flex-col justify-around">
        <p className="text-2xl md:text-[3vw] font-bold md:px-3 leading-none">
          What our happy client say
        </p>
        <span className="mt-4 text-base sm:text-[1vw] text-tertiary tracking-wide font-light">
          Several selected clients, who already believe in our service.
        </span>
      </div>
      {/* next */}
      <div className="md:px-24 md:mt-12 flex flex-col md:flex-row justify-between items-center">
        {/* First Column */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img src={home3} alt="Home 3" className="max-w-full h-auto" />
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 px-4 md:px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center md:text-left">
                <span className="block font-semibold text-lg mb-2">
                  {testimonial.name}
                </span>
                <span className="text-secondary text-sm md:text-base leading-relaxed font-light">
                  {testimonial.comment}
                </span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img src={home3_1} alt="Home 3_1" className="max-w-full h-auto" />
        </div>
      </div>

      {/* next */}
      <div className="relative flex justify-center items-center md:px-24 mt-12 p-6 mb-12">
        <div className="z-10 flex flex-col md:flex-row items-center justify-between md:h-64 bg-[#f0f7ff] rounded-[2rem] p-4 md:p-0 md:rounded-[5rem] shadow-lg w-full md:space-x-6">
          <div className="flex justify-center items-center flex-col md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-xl md:text-[3vw] font-bold leading-none whitespace-nowrap">
              Subscribe Newsletter
            </h2>
            <p className="mt-4 text-base sm:text-[1vw] text-tertiary tracking-wide font-light">
              I will update good news and promotion service not spam
            </p>
          </div>

          <div className="md:relative flex items-center justify-center mt-4 md:mt-0 md:bg-primary md:rounded-r-[200rem] md:rounded-bl-[450rem] md:rounded-tl-[200rem]  w-full md:w-[40%] md:h-full md:px-4">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="md:relative -left-24 px-6 py-3 md:ml-8 md:w-full h-16 text-gray-600 bg-white outline-none focus:ring-0 placeholder-gray-400 rounded-full shadow-md pr-28"
              />
              <button className="absolute right-2 top-2 md:right-[4.5rem] md:top-1/2 md:transform md:-translate-y-1/2 px-6 py-3 md:px-6 md:py-3 bg-primary text-white font-semibold rounded-full">
                Contact Now
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-2 md:left-8 md:top-28 -z-10 ml-12 mt-12 rotate-90">
          <img src={ellipse2} alt="" className="" />
        </div>
        <div className="hidden md:block absolute md:top-0 md:right-8 -z-10 ml-12 rotate-90">
          <img src={ellipse6} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Home;
