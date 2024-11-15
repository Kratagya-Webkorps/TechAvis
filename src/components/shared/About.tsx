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
const About: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center md:items-start md:space-x-8 bg-[#FAFAFA] p-6 pt-0 md:p-12">
          {/* Left Text Section */}
          <div className="mt-6 text-center md:text-left md:p-8 md:pb-0 md:pl-0 md:w-1/2">
            <p className=" text-2xl md:text-[2.9rem] font-bold mb-4 md:mb-0 leading-tight">
              We wanted to build a company that you will love to work with and
              connect to
            </p>
            <p className="flex justify-center text-lg md:text-lg md:pt-[2vw] md:pr-12 tracking-wide font-light ">
              We’re doing things bigly, I mean really quite big. The way we
              operate is different from other companies because we disrupt. We
              break the code, we crack the code as well.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="mt-6 md:mt-0 flex justify-center ">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start p-6 md:p-12 ">
          {/* Left Text Section */}
          <div className="text-center md:text-left md:pb-0 w-full md:w-1/2 flex flex-col justify-between">
            {/* Start of Text Content */}
            <div className="space-y-4">
              <p className="text-2xl md:text-[2.9rem] font-bold leading-tight">
                When we get to work we <br className="hidden md:block" /> really
                make things happen <br className="hidden md:block" /> fast and
                powerfully
              </p>
              <p className="text-lg md:text-lg  pr-0 md:pr-12 tracking-wide font-light">
                We’re doing things bigly, I mean really quite big. The way we
                operate is different from other companies because we disrupt. We
                break the code, we crack the code as well.
              </p>
            </div>

            {/* End of Content with Button */}
            <div className="md:mt-16 my-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                Join Us
              </button>
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
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start  p-6 md:p-12 ">
          {/* Left Text Section */}
          <div className="text-center md:text-left md:pb-0 md:px-24 w-full md:w-1/2 flex flex-col justify-between">
            {/* Start of Text Content */}
            <div className="flex flex-col space-y-4">
              <p className="text-xl  md:text-lg md:pr-12  tracking-wide font-bold text-[#20484F]">
                Not your typical startup story
              </p>
              <p className="text-2xl md:text-[2.9rem] my-4 font-bold leading-tight">
                Our story isn’t usual <br className="hidden md:block" /> but it
                is extra ordinary <br className="hidden md:block" /> learn about
                it.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-2/3 md:px-12 mt-4 md:mt-0 ">
            <p className="mb-8 text-center md:text-start text-lg">
              We’re making a massive impact—doing things on a whole new level.
              Our approach to managed IT solutions is unlike any other, because
              we disrupt the norm. We don’t just follow the rules; we redefine
              them.
            </p>
            <p className="text-center md:text-start text-lg">
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
        <div className="flex flex-col justify-center md:p-12">
          <div className="text-center w-full flex flex-col justify-center items-center">
            {/* Start of Text Content */}
            <div className="">
              <p className="text-2xl md:text-[2.9rem] font-bold leading-tight mb-4">
                Work shouldn’t be boring
              </p>
              <p className="text-lg md:text-lg md:pt-5 tracking-wide font-light ">
                I want to fly like an angel flare on a ten feet snare I want to
                dance <br className="hidden md:block" /> until the sun comes I
                want to fight your cousin.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-6 justify-around md:items-start items-center gap-8">
            <img src={Img2} alt="" />

            <img src={Img3} alt="" className="md:mt-32" />

            <img src={Img4} alt="" />

            <img src={Img5} alt="" className="md:mt-32" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:p-12">
          <div className="flex flex-col justify-center items-center mb-16">
            <img src={Quotation} alt="" className="size-12 mb-12" />
            <p className="text-2xl md:text-[50px] font-bold leading-tight text-center">
              Imagine the best product you’ve <br className="hidden md:block" />{" "}
              used, times it by ten, and you’ll{" "}
              <br className="hidden md:block" /> have something similar
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={Img6} alt="" />
            <div>
              <p className="mb-2 text-about_num font-bold text-lg">
                Elliot Rosenberg
              </p>
              <p className="text-about_heading font-normal">Product Lead</p>
            </div>
          </div>
          <div className="flex space-x-2 mt-12">
            {/* First dot with different color */}
            <div className="w-4 h-4 bg-[#B8E4DA] rounded-full"></div>
            {/* Remaining dots with the same color */}
            <div className="w-4 h-4 bg-about_num rounded-full"></div>
            <div className="w-4 h-4 bg-about_num rounded-full"></div>
            <div className="w-4 h-4 bg-about_num rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 md:p-12">
          <div>
            <p className="text-custom_blue font-medium text-2xl md:text-[59px] text-center">
              Get matched to your dream opportunity
            </p>
            <p className="text-[#94A2B3] font-normal text-center mt-6 ">
              Save time and Focus your energy in getting one step closer to your
              next best
              <br className="hidden md:block" />
              opportunity. Join our talent network now!
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                APPLY AS A TALENT
              </button>
            </div>
          </div>
        </div>
        <div className="w-full size-full mt-4">
          <img src={Img8} alt="" className="object-contain w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
