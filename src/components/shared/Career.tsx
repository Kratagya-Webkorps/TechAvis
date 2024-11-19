import React from "react";
import Services_wellness from "./Services_wellness";
import Career_roles from "./Career_roles";
import Slider from "react-slick";


const Career: React.FC = () => {
  const data = [
    {
      number: 1,
      title: "Initial screening",
      description:
        "The first step in the interview process is usually a screening call or email to assess the candidate's qualifications and fit for the role.",
    },
    {
      number: 2,
      title: "Second screening",
      description:
        "The first step in the interview process is usually a screening call or email to assess the candidate's qualifications and fit for the role.",
    },
    // Add more items as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Default no autoplay
    arrows: true,    // Show arrows by default
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile screens below 768px
        settings: {
          autoplay: true,      // Enable autoplay on mobile
          autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
          arrows: false,       // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex justify-end xl:ml-[195px] xl:mr-[160px] text-center pt-16 px-4 mb-12">
            <button className=" absolute left-[60%]  bg-primary text-white px-3 py-2 xl:px-12 xl:py-3 rounded-full rounded-bl-lg font-semibold hover:bg-primary shadow-2xl ">
              Get Started
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-center">
              <p className=" text-xl xl:text-5xl">
                Discover Your{" "}
                <span className="text-4xl xl:text-9xl ">Potential</span> at
                Techavis
              </p>
            </div>
            <div className="flex flex-col items-center p-4 xl:p-0 ">
              <p className="text-[#272727] text-lg leading-relaxed mb-8 text-center xl:text-start w-full xl:w-1/3 my-8">
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
              className="font-semibold flex gap-1 xl:justify-start"
            >
              <span className="text-[#5C25F9] border-b border-[#5C25F9]">
                See Positions
              </span>
              <span className="text-[#5C25F9] text-xl">↗</span>
            </a>
          </div>
        </div>
        <div className="xl:mx-[160px] xl:mt-[100px] ">
          <Services_wellness />
        </div>
        <div className="xl:mx-[160px] xl:mt-[100px]">
          <div className="flex justify-center xl:justify-start xl:ml-20">
            <p className="font-medium text-[44px]">Interview process</p>
          </div>
          <div className="xl:w-1/2 mx-auto">
            <Slider {...settings} className="relative">
              {data.map((item, index) => (
                <div key={index} className="relative  ">
                  <div className="p-4">
                    <div className="card-content h-[340px] p-6 bg-white border rounded-lg shadow-md relative z-10">
                      <div className="flex justify-center mb-4">
                        <span className="bg-primary text-white px-4 py-3 rounded-md font-bold text-lg">
                          {item.number}
                        </span>
                      </div>
                      <h3 className="text-3xl font-medium mb-2 text-center mt-8">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center font-normal text-xl mt-6">
                        {item.description}
                      </p>
                    </div>
                   
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="xl:mx-[160px] xl:mt-[100px]">
          <Career_roles />
        </div>
      </div>
    </div>
  );
};
const NextArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-2xl"
  >
    ❯
  </button>
);

const PrevArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-2xl"
  >
    ❮
  </button>
);

export default Career;
