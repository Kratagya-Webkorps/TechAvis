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
        <div className="flex mx-[132px] justify-between bg-white shadow-xl mb-[62px] p-[10px]">
          <div className="p-[10px] bg-primary w-2/5 rounded-xl">
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
                <div className="flex space-x-4 mt-4 justify-center md:justify-start">
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
          <div>
            <div className="">
              <form className="flex flex-col  space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-600">First Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-600">Last Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="+1 012 3456 789"
                  />
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
                <div>
                  <label className="block text-gray-600">Message</label>
                  <textarea
                    className="w-full mt-1 p-2 border rounded"
                    rows={4}
                    placeholder="Write your message.."
                  ></textarea>
                </div>
                <button className="w-full mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
