import React from "react";
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img8,
  Quotation,
} from "../../assets";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const About: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse xl:flex-row justify-around items-center xl:items-start xl:space-x-8 bg-[#FAFAFA] p-6 pt-0 xl:p-12">
          {/* Left Text Section */}
          <div className="mt-6 text-center xl:text-left xl:p-8 xl:pb-0 xl:pl-0 xl:w-1/2">
            <p className=" text-2xl xl:text-[2.9rem] font-bold mb-4 xl:mb-0 leading-tight">
              We wanted to build a company that you will love to work with and
              connect to
            </p>
            <p className="flex justify-center text-lg xl:text-lg xl:pt-[2vw] xl:pr-12 tracking-wide font-light ">
              We’re doing things bigly, I mean really quite big. The way we
              operate is different from other companies because we disrupt. We
              break the code, we crack the code as well.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="mt-6 xl:mt-0 flex justify-center ">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-around items-center xl:items-start p-6 xl:p-12 xl:pt-24 ">
          {/* Left Text Section */}
          <div className="text-center xl:text-left xl:pb-0 w-full xl:w-1/2 flex flex-col justify-between">
            {/* Start of Text Content */}
            <div className="space-y-4">
              <p className="text-2xl xl:text-[2.9rem] font-bold leading-tight">
                When we get to work we <br className="hidden xl:block" /> really
                make things happen <br className="hidden xl:block" /> fast and
                powerfully
              </p>
              <p className="text-lg xl:text-lg  pr-0 xl:pr-12 tracking-wide font-light">
                We’re doing things bigly, I mean really quite big. The way we
                operate is different from other companies because we disrupt. We
                break the code, we crack the code as well.
              </p>
            </div>

            {/* End of Content with Button */}
            <div className="xl:mt-16 my-4">
              <Link to="/contact">
                {" "}
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                  Join Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="grid grid-cols-2 gap-20 text-gray-200  pr-12">
            <div className="flex flex-col gap-8">
              <p className="text-6xl font-bold text-about_num">32</p>
              <div className="flex flex-col gap-3">
                <p className="text-about_num font-bold">Cups of coffee</p>
                <p className="text-about_num font-normal">
                  Designing this section
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-6xl font-bold text-about_num">300</p>
              <div className="flex flex-col gap-3">
                <p className="text-about_num font-bold">Team members</p>
                <p className="text-about_num font-normal">Working right now</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-6xl font-bold text-about_num">17</p>
              <div className="flex flex-col gap-3">
                <p className="text-about_num font-bold">Languages spoken</p>
                <p className="text-about_num font-normal">
                  On our table in the pub
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-6xl font-bold text-about_num">2,143</p>
              <div className="flex flex-col gap-3">
                <p className="text-about_num font-bold">Dollars spent today</p>
                <p className="text-about_num font-normal">On Pizza’s</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-around items-center xl:items-start  p-6 xl:p-12 xl:pt-24 ">
          {/* Left Text Section */}
          <div className="text-center xl:text-left xl:pb-0 xl:px-24 w-full xl:w-1/2 flex flex-col justify-between">
            {/* Start of Text Content */}
            <div className="flex flex-col space-y-4">
              <p className="text-xl  xl:text-lg xl:pr-12  tracking-wide font-bold text-[#20484F]">
                Not your typical startup story
              </p>
              <p className="text-2xl xl:text-[2.9rem] my-4 font-bold leading-tight">
                Our story isn’t usual <br className="hidden xl:block" /> but it
                is extra ordinary <br className="hidden xl:block" /> learn about
                it.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="xl:w-2/3 xl:px-12 mt-4 xl:mt-0 ">
            <p className="mb-8 text-center xl:text-start text-lg">
              We’re making a massive impact—doing things on a whole new level.
              Our approach to managed IT solutions is unlike any other, because
              we disrupt the norm. We don’t just follow the rules; we redefine
              them.
            </p>
            <p className="text-center xl:text-start text-lg">
              Explore how we operate, who we are, and what we stand for on this
              carefully crafted webpage. With a fresh perspective on IT
              infrastructure management, cybersecurity, cloud solutions, and
              support services, we’ve transformed the managed IT landscape and
              created something truly exceptional—if you understand the
              difference we make.
            </p>
          </div>
        </div>
        {/* next */}
        <div className="flex flex-col justify-center xl:p-12 xl:pt-12">
          <div className="text-center w-full flex flex-col justify-center items-center">
            {/* Start of Text Content */}
            <div className="">
              <p className="text-2xl xl:text-[2.9rem] font-bold leading-tight mb-4">
                Work shouldn’t be boring
              </p>
              <p className="text-lg xl:text-lg xl:pt-5 tracking-wide font-light ">
                I want to fly like an angel flare on a ten feet snare I want to
                dance <br className="hidden xl:block" /> until the sun comes I
                want to fight your cousin.
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row mt-6 justify-around xl:items-start items-center gap-8">
            <img src={Img2} alt="" />

            <img src={Img3} alt="" className="xl:mt-32" />

            <img src={Img4} alt="" />

            <img src={Img5} alt="" className="xl:mt-32" />
          </div>
        </div>

        <div className="xl:pt-12 py-12">
          <Slider {...sliderSettings}>
            <div className="flex flex-col justify-center items-center xl:p-12 xl:pt-12">
              <div className="flex flex-col justify-center items-center mb-16">
                <img
                  src={Quotation}
                  alt="Quotation"
                  className="size-12 mb-12"
                />
                <p className="text-2xl xl:text-[50px] font-bold leading-tight text-center">
                  Imagine the best product you’ve{" "}
                  <br className="hidden xl:block" />
                  used, times it by ten, and you’ll{" "}
                  <br className="hidden xl:block" /> have something similar
                </p>
              </div>
              <div className="flex justify-center gap-5 items-center">
                <img src={Img6} alt="Person" />
                <div>
                  <p className="mb-2 text-about_num font-bold text-lg">
                    Elliot Rosenberg
                  </p>
                  <p className="text-about_heading font-normal">Product Lead</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center xl:p-12 xl:pt-12">
              <div className="flex flex-col justify-center items-center mb-16">
                <img
                  src={Quotation}
                  alt="Quotation"
                  className="size-12 mb-12"
                />
                <p className="text-2xl xl:text-[50px] font-bold leading-tight text-center">
                  Think of brilliance, but brighter, sharper,{" "}
                  <br className="hidden xl:block" />
                  and endlessly more impactful—that’s what we aim for.
                </p>
              </div>
              <div className="flex justify-center gap-5 items-center">
                <img src={Img6} alt="Person" />
                <div>
                  <p className="mb-2 text-about_num font-bold text-lg">
                    Jane Doe
                  </p>
                  <p className="text-about_heading font-normal">CEO</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex flex-col justify-center items-center p-4 xl:p-12 xl:pt-24">
          <div>
            <p className="text-custom_blue font-medium text-2xl xl:text-[59px] text-center">
              Get matched to your dream opportunity
            </p>
            <p className="text-[#94A2B3] font-normal text-center mt-6 ">
              Save time and Focus your energy in getting one step closer to your
              next best
              <br className="hidden xl:block" />
              opportunity. Join our talent network now!
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/career">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                  APPLY AS A TALENT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full size-full mt-4 ">
          <img src={Img8} alt="" className="object-contain w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
