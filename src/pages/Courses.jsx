import React from "react";

export default function Courses() {
  return (
    <>
      <div className="h-4 bg-[#F7F7F8]"></div>
      <div className="bg-[#E4E4E7] max-w-[1500px] mx-auto">
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <h1 className="text-3xl md:text-[48px] text-[#262626] font-[600] font-beVietnam md:w-1/2 leading-[72px]">
              Online Courses on <br className="hidden md:inline" /> Design and
              Development
            </h1>
            <p className="text-[#59595A] font-[400] font-beVietnam text-base md:text-[18px] leading-[27px] max-w-2xl md:w-1/2">
              Welcome to our online course page, where you can enhance your
              skills in design and development. Choose from our carefully
              curated selection of 10 courses designed to provide you with
              comprehensive knowledge and practical experience. Explore the
              courses below and find the perfect fit for your learning journey.
            </p>
          </div>
        </div>
        <div className="h-4 bg-[#F7F7F8]"></div>

        {/* Fundamental section */}
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex justify-between items-start flex-wrap">
            <div className="md:w-4/5">
              <h1 className="text-2xl md:text-[30px] font-[600] font-beVietnam text-[#262626]">
                Web Design Fundamentals
              </h1>
              <p className="text-[#59595A] text-[18px] font-[400] font-beVietnam my-3 leading-[27px]">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
            </div>
            <button className="bg-[#FCFCFD] border border-[#F1F1F3] text-[#262626] px-5 py-2 rounded-lg text-[18px] font-[500] font-beVietnam">
              View Course
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              className="rounded-lg shadow-md"
              src="/course/fund1.png"
              alt="Design Process"
            />
            <img
              className="rounded-lg shadow-md"
              src="/course/fund2.png"
              alt="Wireframing"
            />
            <img
              className="rounded-lg shadow-md"
              src="/course/fund3.png"
              alt="Web Design"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-5 my-2">
            <div className="flex space-x-2 w-3/5">
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                4 Weeks
              </span>
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                Beginner
              </span>
            </div>
            <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
              By John Smith
            </span>
          </div>

          <div className="mt-8 rounded-lg border border-[#F1F1F3]">
            <h2 className="text-[#262626] text-[24px] font-[600] font-beVietnam border-b border-[#F1F1F3]  p-6">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
              {[
                { id: "01", title: "Introduction to HTML" },
                { id: "02", title: "Styling with CSS" },
                { id: "03", title: "Introduction to Responsive Design" },
                { id: "04", title: "Design Principles for Web" },
                { id: "05", title: "Building a Basic Website" },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 ${
                    index <= 3 && " border-r border-[#F1F1F3]"
                  }`}
                >
                  <h3 className="text-[56px] font-[800] font-beVietnam text-[#262626]">
                    {item.id}
                  </h3>
                  <p className="text-[#333333] text-[20px] font-[500] font-beVietnam mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4 bg-[#F7F7F8]"></div>

        {/* UX/UI section */}
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex justify-between items-start flex-wrap">
            <div className="md:w-4/5">
              <h1 className="text-2xl md:text-[30px] font-[600] font-beVietnam text-[#262626]">
                UI/UX Design{" "}
              </h1>
              <p className="text-[#59595A] text-[18px] font-[400] font-beVietnam my-3 leading-[27px]">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles,
                wireframing, prototyping, and usability testing techniques.
              </p>
            </div>
            <button className="bg-[#FCFCFD] border border-[#F1F1F3] text-[#262626] px-5 py-2 rounded-lg text-[18px] font-[500] font-beVietnam">
              View Course
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              className="rounded-lg shadow-md"
              src="ux/ux1.png"
              alt="UI/UX Process"
            />
            <img
              className="rounded-lg shadow-md"
              src="ux/ux2.png"
              alt="Wireframing"
            />
            <img
              className="rounded-lg shadow-md"
              src="ux/ux3.png"
              alt="Prototyping"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-5 my-2">
            <div className="flex space-x-2 w-3/5">
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                6 Weeks
              </span>
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                Intermediate
              </span>
            </div>
            <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
              By Emily Johnson
            </span>
          </div>

          <div className="mt-8 rounded-lg border border-[#F1F1F3]">
            <h2 className="text-[#262626] text-[24px] font-[600] font-beVietnam border-b border-[#F1F1F3]  p-6">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
              {[
                { id: "01", title: "Introduction to UI/UX Design" },
                { id: "02", title: "User Research and Personas" },
                { id: "03", title: "Wireframing and Prototyping" },
                { id: "04", title: "Visual Design and Branding" },
                { id: "05", title: "Usability Testing and Iteration" },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 ${
                    index <= 3 && " border-r border-[#F1F1F3]"
                  }`}
                >
                  <h3 className="text-[56px] font-[800] font-beVietnam text-[#262626]">
                    {item.id}
                  </h3>
                  <p className="text-[#333333] text-[20px] font-[500] font-beVietnam mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4 bg-[#F7F7F8]"></div>

        {/* mobile app section */}
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex justify-between items-start flex-wrap">
            <div className="md:w-4/5">
              <h1 className="text-2xl md:text-[30px] font-[600] font-beVietnam text-[#262626]">
                Mobile App Development
              </h1>
              <p className="text-[#59595A] text-[18px] font-[400] font-beVietnam my-3 leading-[27px]">
                Dive into the world of mobile app development. Learn to build
                native iOS and Android applications using industry-leading
                frameworks like Swift and Kotlin.
              </p>
            </div>
            <button className="bg-[#FCFCFD] border border-[#F1F1F3] text-[#262626] px-5 py-2 rounded-lg text-[18px] font-[500] font-beVietnam">
              View Course
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              className="rounded-lg shadow-md"
              src="/mobile/m1.png"
              alt="UI/UX Process"
            />
            <img
              className="rounded-lg shadow-md"
              src="/mobile/m2.png"
              alt="Wireframing"
            />
            <img
              className="rounded-lg shadow-md"
              src="/mobile/m3.png"
              alt="Prototyping"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-5 my-2">
            <div className="flex space-x-2 w-3/5">
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                8 Weeks
              </span>
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                Intermediate
              </span>
            </div>
            <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
              By David Brown{" "}
            </span>
          </div>
          <div className="mt-8 rounded-lg border border-[#F1F1F3]">
            <h2 className="text-[#262626] text-[24px] font-[600] font-beVietnam border-b border-[#F1F1F3]  p-6">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
              {[
                { id: "01", title: "Introduction to Mobile App Development" },
                { id: "02", title: "Fundamentals of Swift Programming (iOS)" },
                {
                  id: "03",
                  title: "Fundamentals of Kotlin Programming (Android)",
                },
                { id: "04", title: "Building User Interfaces" },
                { id: "05", title: "App Deployment and Testing" },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 ${
                    index <= 3 && " border-r border-[#F1F1F3]"
                  }`}
                >
                  <h3 className="text-[56px] font-[800] font-beVietnam text-[#262626]">
                    {item.id}
                  </h3>
                  <p className="text-[#333333] text-[20px] font-[500] font-beVietnam mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4 bg-[#F7F7F8]"></div>

        {/* Graphics design section */}
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex justify-between items-start flex-wrap">
            <div className="md:w-4/5">
              <h1 className="text-2xl md:text-[30px] font-[600] font-beVietnam text-[#262626]">
                Graphic Design for Beginners
              </h1>
              <p className="text-[#59595A] text-[18px] font-[400] font-beVietnam my-3 leading-[27px]">
                Discover the fundamentals of graphic design, including
                typography, color theory, layout design, and image manipulation
                techniques. Create visually stunning designs for print and
                digital media.
              </p>
            </div>
            <button className="bg-[#FCFCFD] border border-[#F1F1F3] text-[#262626] px-5 py-2 rounded-lg text-[18px] font-[500] font-beVietnam">
              View Course
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              className="rounded-lg shadow-md"
              src="graphics/g1.png"
              alt="UI/UX Process"
            />
            <img
              className="rounded-lg shadow-md"
              src="graphics/g2.png"
              alt="Wireframing"
            />
            <img
              className="rounded-lg shadow-md"
              src="graphics/g3.png"
              alt="Prototyping"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-5 my-2">
            <div className="flex space-x-2 w-3/5">
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                10 Weeks
              </span>
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                Beginner
              </span>
            </div>
            <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
              By Sarah Thompson
            </span>
          </div>
          <div className="mt-8 rounded-lg border border-[#F1F1F3]">
            <h2 className="text-[#262626] text-[24px] font-[600] font-beVietnam border-b border-[#F1F1F3]  p-6">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
              {[
                { id: "01", title: "Introduction to Graphic Design" },
                { id: "02", title: "Typography and Color Theory" },
                { id: "03", title: "Layout Design and Composition" },
                { id: "04", title: "Image Editing and Manipulation" },
                { id: "05", title: "Designing for Print and Digital Media" },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 ${
                    index <= 3 && " border-r border-[#F1F1F3]"
                  }`}
                >
                  <h3 className="text-[56px] font-[800] font-beVietnam text-[#262626]">
                    {item.id}
                  </h3>
                  <p className="text-[#333333] text-[20px] font-[500] font-beVietnam mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-4 bg-[#F7F7F8]"></div>

        {/* Frontend section */}
        <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
          <div className="flex justify-between items-start flex-wrap">
            <div className="md:w-4/5">
              <h1 className="text-2xl md:text-[30px] font-[600] font-beVietnam text-[#262626]">
                Front-End Web Development
              </h1>
              <p className="text-[#59595A] text-[18px] font-[400] font-beVietnam my-3 leading-[27px]">
                Become proficient in front-end web development. Learn HTML, CSS,
                JavaScript, and popular frameworks like Bootstrap and React.
                Build interactive and responsive websites.
              </p>
            </div>
            <button className="bg-[#FCFCFD] border border-[#F1F1F3] text-[#262626] px-5 py-2 rounded-lg text-[18px] font-[500] font-beVietnam">
              View Course
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              className="rounded-lg shadow-md"
              src="frontent/f1.png"
              alt="UI/UX Process"
            />
            <img
              className="rounded-lg shadow-md"
              src="frontent/f2.png"
              alt="Wireframing"
            />
            <img
              className="rounded-lg shadow-md"
              src="frontent/f3.png"
              alt="Prototyping"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-5 my-2">
            <div className="flex space-x-2 w-3/5">
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                10 Weeks
              </span>
              <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                Intermediate
              </span>
            </div>
            <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
              By Michael Adams
            </span>
          </div>

          <div className="mt-8 rounded-lg border border-[#F1F1F3]">
            <h2 className="text-[#262626] text-[24px] font-[600] font-beVietnam border-b border-[#F1F1F3]  p-6">
              Curriculum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
              {[
                { id: "01", title: "HTML Fundamentals" },
                { id: "02", title: "CSS Styling and Layouts" },
                { id: "03", title: "JavaScript Basics" },
                { id: "04", title: "Building Responsive Websites" },
                { id: "05", title: "Introduction to Bootstrap and React" },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 ${
                    index <= 3 && " border-r border-[#F1F1F3]"
                  }`}
                >
                  <h3 className="text-[56px] font-[800] font-beVietnam text-[#262626]">
                    {item.id}
                  </h3>
                  <p className="text-[#333333] text-[20px] font-[500] font-beVietnam mt-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
