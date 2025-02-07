import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#E4E4E7]">
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="px-6 md:px-16 lg:px-32 py-12 bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2">
          <h2 className="text-[48px] font-[600] text-gray-900">Contact Us</h2>
          <p className="text-[#59595A] text-base md:text-[18px] font-[400] font-beVietnam leading-[27px] max-w-2xl md:w-1/2">
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
      </div>
      <div className="h-4 bg-[#F7F7F8]"></div>

      {/* Contact Section */}
      <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="bg-[#FFFFFF] p-8 border-r-2 border-[#FAFAFB] col-span-3">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[72px]"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[72px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[72px]"
                  />
                </div>

                <div>
                  <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[72px]"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter your Subject"
                  className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[72px]"
                />
              </div>

              <div>
                <label className="block mb-3 text-[18px] font-[500] font-beVietnam text-[#262626]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your Message here..."
                  className="mt-1 block mb-3 w-full px-4 py-2 border border-[#F1F1F3] placeholder:text-[#656567] rounded-md shadow-sm outline-none bg-[#FCFCFD] text-[#656567] h-[178px]"
                ></textarea>
              </div>

              {/* Centered Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FF782D] text-white py-2 px-2 rounded-md h-[66px] w-[232px]"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 col-span-2 flex flex-col items-center">
            <div className="w-[379px] h-[163px] bg-[#FCFCFD] p-6 border-[1.2px] border-[#F1F1F3] rounded-lg flex flex-col items-center justify-center text-center">
              <span className="text-blue-500 text-xl">
                <img src="/email.png" className="w-10 h-10" alt="Email Icon" />
              </span>
              <p className="mt-4 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                support@skillbridge.com
              </p>
            </div>

            <div className="w-[379px] h-[163px] bg-[#FCFCFD] p-6 border-[1.2px] border-[#F1F1F3] rounded-lg flex flex-col items-center justify-center text-center">
              <span className="text-blue-500 text-xl">
                <img src="/phone.png" className="w-10 h-10" alt="Phone Icon" />
              </span>
              <p className="mt-4 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                +91 00000 00000
              </p>
            </div>

            <div className="w-[379px] h-[163px] bg-[#FCFCFD] p-6 border-[1.2px] border-[#F1F1F3] rounded-lg flex flex-col items-center justify-center text-center">
              <span className="text-blue-500 text-xl">
                <img
                  src="/location.png"
                  className="w-10 h-10"
                  alt="Location Icon"
                />
              </span>
              <p className="mt-4 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                Somewhere in the World
              </p>
            </div>

            <div className="w-[379px] h-[163px] bg-[#FCFCFD] p-6 border-[1.2px] border-[#F1F1F3] rounded-lg flex flex-col items-center justify-center text-center">
              <span className="text-blue-500 text-xl">
                <i className="fas fa-share-alt"></i>
              </span>
              <div className="flex space-x-4">
                <img src="/fb2.png" className="w-10 h-10" alt="Facebook Icon" />
                <img
                  src="/twiter.png"
                  className="w-10 h-10"
                  alt="Twitter Icon"
                />
                <img
                  src="/link.png"
                  className="w-10 h-10"
                  alt="LinkedIn Icon"
                />
              </div>
              <p className="mt-4 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                Social Profiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
