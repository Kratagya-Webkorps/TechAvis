import { useState } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  subject: string;
  message: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  contact?: string;
  subject?: string;
  message?: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors: FormErrors = {};

    const contactRegex = /^[0-9]{10}$/;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      if (formData[field].trim() === "") {
        hasError = true;
        newErrors[field] = "Please fill above field";
      }
    });

    // Validate contact with regex
    if (formData.contact && !contactRegex.test(formData.contact)) {
      hasError = true;
      newErrors.contact = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    if (!hasError) {
      // Submit form
      console.log("Form Submitted", formData);
    }
  };

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
                  +91 8458909134
                  </p>
                </div>
                <div className="text-white flex items-center">
                  <CiMail size={24} />
                  <p className="text-white whitespace-nowrap ml-[25px] ">
                  harsh.agrawal@techavis.com
                  </p>
                </div>
                <div className="text-white flex items-center">
                  <IoLocationOutline size={24} />
                  <p className="text-white  ml-[25px] ">
                    Trios Co-working, 3rd floor, Lalwani Icon, 
                    <br />off New Airport Road, Sakore Nagar, Viman Nagar,
                    <br /> Pune, Maharashtra 411014
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-4 xl:px-[50px] xl:pt-[60px] ">
            <div className="">
              <form
                className="flex flex-col space-y-[45px]"
                onSubmit={handleSubmit}
              >
                <div className="grid xl:grid-cols-2 gap-10">
                  <div className="relative w-full mb-5">
                    <label
                      htmlFor="first_name"
                      className="text-[#8D8D8D] font-medium text-base mt-2"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className={`block w-full py-2.5 text-lg mt-2 text-gray-900 bg-transparent border-b-2 ${
                        errors.first_name ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-600`}
                      placeholder=" "
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-base mt-2">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div className="relative w-full mb-5">
                    <label htmlFor="last_name" className="font-medium text-base mt-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className={`block w-full py-2.5 text-base mt-2 text-gray-900 bg-transparent border-b-2 ${
                        errors.last_name ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-600`}
                      placeholder=" "
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-base mt-2">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div className="grid xl:grid-cols-2 gap-10">
                  <div className="relative w-full mb-5">
                    <label
                      htmlFor="email"
                      className="text-[#8D8D8D] font-medium text-base mt-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full py-2.5 text-base mt-2 text-gray-900 bg-transparent border-b-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-600`}
                      placeholder=" "
                    />
                    {errors.email && (
                      <p className="text-red-500 text-base mt-2">{errors.email}</p>
                    )}
                  </div>
                  <div className="relative w-full mb-5">
                    <label htmlFor="contact" className="font-medium text-base mt-2">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="contact"
                      id="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className={`block w-full py-2.5 text-base mt-2 text-gray-900 bg-transparent border-b-2 ${
                        errors.contact ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-600`}
                      placeholder=" "
                    />
                    {errors.contact && (
                      <p className="text-red-500 text-base mt-2">{errors.contact}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600">Select Subject?</label>
                  <div className="flex space-x-4 mt-2">
                    {["General Inquiry", "Support", "Feedback"].map(
                      (option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="subject"
                            value={option}
                            checked={formData.subject === option}
                            onChange={handleInputChange}
                            className="form-radio"
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      )
                    )}
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-base mt-2">{errors.subject}</p>
                  )}
                </div>

                <div className="relative w-full mb-5">
                  <label
                    htmlFor="message"
                    className="text-[#8D8D8D] font-medium text-base mt-2"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`block w-full py-2.5 text-base mt-2 text-gray-900 bg-transparent border-b-2 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-blue-600`}
                    placeholder="Write your message.. "
                  />
                  {errors.message && (
                    <p className="text-red-500 text-base mt-2 ">{errors.message}</p>
                  )}
                </div>

                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="mt-4 px-2 py-3 xl:px-[48px] xl:py-[15px] bg-primary text-white rounded shadow-lg"
                  >
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
