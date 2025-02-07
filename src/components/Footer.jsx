import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <img src="logo.png" alt="logo" />
          <p className="text-[#555555] text-[18px] font-[400] font-beVietnam mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-[20px] font-semibold font-beVietnam mb-4">
            GET HELP
          </h3>
          <ul className="space-y-4 text-[#555555] text-[18px] font-[500] font-beVietnam">
            <li>
              <a href="#" className="hover:text-orange-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Latest Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="text-[20px] font-semibold font-beVietnam mb-4">
            PROGRAMS
          </h3>
          <ul className="space-y-4 text-[#555555] text-[18px] font-[500] font-beVietnam">
            <li>
              <a href="#" className="hover:text-orange-500">
                Art & Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                IT & Software
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Languages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Programming
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-[20px] font-semibold font-beVietnam mb-4">
            CONTACT US
          </h3>
          <ul className="space-y-4 text-[#555555] text-[18px] font-[500] font-beVietnam">
            <li>
              Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
            </li>
            <li>Tel: + (123) 2500-567-8988</li>
            <li>
              Mail:{" "}
              <a
                href="mailto:supportlms@gmail.com"
                className="hover:text-orange-500"
              >
                supportlms@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {/* Replace with actual social media icons */}
            <img
              src="/fb.png"
              alt="fb"
              // className="hover:text-[#FF782D] cursor-pointer"
            />
            <img
              src="/p.png"
              alt="fb"
              // className="hover:text-[#FF782D] cursor-pointer"
            />
            <img
              src="/x.png"
              alt="fb"
              // className="hover:text-[#FF782D] cursor-pointer"
            />
            <img
              src="/insta.png"
              alt="fb"
              // className="hover:text-[#FF782D] cursor-pointer"
            />
            <img
              src="/yt.png"
              alt="fb"
              // className="hover:text-[#FF782D] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-[#555555] text-[18px] font-[400] font-beVietnam text-sm">
        <p>© 2024 EduWeb. All rights reserved | Powered by secwebxperts</p>
      </div>
    </footer>
  );
};

export default Footer;
