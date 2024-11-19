import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Discord, Hand, Instagram, YTwitter } from "../../assets";

const Contact = () => {
  return (
    <div className="mt-[83px] bg-backg">
      <div>
        <div className="flex flex-col text-center mb-[54px]">
          <p className="text-[40px] font-bold text-[#6748E8] ">Contact Us</p>
          <p className="text-[#717171] text-lg font-medium mt-5  ">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="flex flex-col xl:flex-row mx-4 xl:mx-[132px] xl:justify-between bg-white shadow-xl mb-[62px] p-[10px]">
          <div className="p-[10px] xl:w-1/2 bg-primary rounded-xl">
            <div className="p-10 ">
              <p className="font-semibold text-[28px] text-white">
                {" "}
                Contact Information
              </p>
              <p className="mt-[13px] text-[#C9C9C9] text-lg font-normal ">
                Say something to start a live chat!
              </p>
              <div className="mt-[115px] space-y-[50px]">
                <div className="flex items-center text-white ">
                  <BsFillTelephoneOutboundFill size={24} />
                  <p className=" whitespace-nowrap ml-[25px] ">
                    +1012 3456 789
                  </p>
                </div>
                <div className="text-white flex items-center">
                  <CiMail size={24} />
                  <p className="text-white whitespace-nowrap ml-[25px] ">
                    demo@gmail.com
                  </p>
                </div>
                <div className="text-white flex items-center">
                  <IoLocationOutline size={24} />
                  <p className="text-white whitespace-nowrap ml-[25px] ">
                    132 Dartmouth Street Boston,
                    <br /> Massachusetts 02156 United States
                  </p>
                </div>
              </div>
              <div className="mt-[159px]">
                <div className="flex space-x-4 mt-4 justify-center xl:justify-start">
                  <img src={YTwitter} alt="Twitter" />

                  <div className="relative">
                    <img src={Instagram} alt="Instagram" />
                    <img
                      src={Hand}
                      alt="Hand"
                      className="absolute top-6 left-1/2 "
                    />
                  </div>

                  <img src={Discord} alt="Discord" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-4 xl:px-[50px] xl:pt-[60px] ">
            <div className="">
              <form className="flex flex-col  space-y-[45px] ">
                <div className="grid xl:grid-cols-2 gap-10">
                  <div className="relative w-full mb-5">
                    <label htmlFor="first_name" className="text-[#8D8D8D] font-medium text-xs">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="block w-full  py-2.5 text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="relative w-full mb-5">
                    <label htmlFor="last_name" className=" font-medium text-xs">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="block w-full py-2.5 text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                      placeholder=" "
                      required
                    />
                  </div>
                </div>
                <div className="grid xl:grid-cols-2 gap-10">
                  <div className="relative w-full mb-5">
                    <label htmlFor="email" className="text-[#8D8D8D] font-medium text-xs">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full py-2.5 text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="relative w-full mb-5">
                    <label htmlFor="contact" className=" font-medium text-xs">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="contact"
                      id="contact"
                      className="block w-full py-2.5 text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                      placeholder=" "
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600">Select Subject?</label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="subject"
                        className="form-radio"
                      />
                      <span className="ml-2">General Inquiry</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="subject"
                        className="form-radio"
                      />
                      <span className="ml-2">Support</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="subject"
                        className="form-radio"
                      />
                      <span className="ml-2">Feedback</span>
                    </label>
                  </div>
                </div>
                <div className="relative w-full mb-5">
                  <label htmlFor="message" className="text-[#8D8D8D] font-medium text-xs">
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    className="block w-full py-2.5 text-xs text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                    placeholder="Write your message.. "
                    required
                  />
                </div>
                <div className="w-full flex justify-end ">
                <button className=" mt-4 px-2 py-3 xl:px-[48px] xl:py-[15px] bg-primary text-white rounded shadow-lg">
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
