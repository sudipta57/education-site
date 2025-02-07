import React, { useState } from "react";

const categories = [
  { title: "Art & Design", courses: 38, icon: "/home/icon1.png" },
  { title: "Development", courses: 38, icon: "/home/icon2.png" },
  { title: "Communication", courses: 38, icon: "/home/icon3.png" },
  { title: "Videography", courses: 38, icon: "/home/icon4.png" },
  { title: "Photography", courses: 38, icon: "/home/icon5.png" },
  { title: "Marketing", courses: 38, icon: "/home/icon6.png" },
  { title: "Content Writing", courses: 38, icon: "/home/icon7.png" },
  { title: "Finance", courses: 38, icon: "/home/icon8.png" },
  { title: "Science", courses: 38, icon: "/home/icon9.png" },
  { title: "Network", courses: 38, icon: "/home/icon10.png" },
];
const courses = [
  {
    title: "Web Design Fundamentals",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    image: "/home/course1.png", // Replace with actual image URL
  },
  {
    title: "UI/UX Design",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    image: "/home/course2.png", // Replace with actual image URL
  },
  {
    title: "Mobile App Development",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    image: "/home/course3.png", // Replace with actual image URL
  },
  {
    title: "Graphic Design for Beginners",
    duration: "10 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    image: "/home/course4.png", // Replace with actual image URL
  },
  {
    title: "Front-End Web Development",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Adams",
    description:
      "Dive into the world of front-end development. Learn HTML, CSS, JavaScript, and frameworks to build responsive, user-friendly websites and applications.",
    image: "/home/course5.png", // Replace with actual image URL
  },
  {
    title: "Advanced UI/UX Design",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    description:
      "Take your UI/UX skills to the next level. Learn advanced concepts like motion design, interaction design, and tools to create professional prototypes.",
    image: "/home/course6.png", // Replace with actual image URL
  },
];
const feedbacks = [
  {
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    role: "Designer",
  },
  {
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    role: "Designer",
  },
  {
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    role: "Designer",
  },
  {
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    role: "Designer",
  },
];
const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    link: "Enrollment Process for Different Courses",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer: "Our instructors provide personalized guidance and support.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer: "Most courses are self-paced, but some may have fixed schedules.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Some courses may have prerequisites, which will be mentioned in the course description.",
  },
  {
    question: "Can I download the course materials for offline access?",
    answer: "Yes, most course materials are available for offline download.",
  },
];
const Home = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1600px] mx-auto bg-[#F7F7F8]">
      {/* banner section */}
      <div className="relative h-[80vh] bg-[url('/home/bg_1.png')] bg-cover bg-center flex items-center px-14">
        <div className="flex justify-between w-full items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-md flex items-center relative shadow-lg">
              <img src="/home/unlock.png" alt="unlock" className="mr-4" />
              <h2 className="text-[35px] font-[600] font-beVietnam">
                <span className="text-[#FF9500]">Unlock </span> Your Creative
                Potential
              </h2>
              <img
                src="/home/AbstractLine.png"
                alt="decorative"
                className="absolute top-[-20px] left-[-20px]"
              />
            </div>

            <h2 className="text-[#262626] text-[25px] font-[500] mt-6 mb-4 font-beVietnam">
              with Online Design and Development Courses.
            </h2>

            {/* Centered Paragraph */}
            <p className="text-[18px] font-[400] font-beVietnam text-[#262626] text-center">
              Learn from Industry Experts and Enhance Your Skills.
            </p>

            {/* Centered Buttons */}
            <div className="flex space-x-8 mt-10 justify-center">
              <button className="bg-[#FF9500] rounded-md w-[195px] h-[63px] text-white text-[18px] font-[600] font-beVietnam">
                Explore Courses
              </button>
              <button className="bg-white w-[159px] h-[63px] text-[#262626] text-[18px] font-[500] font-beVietnam rounded-md shadow-md">
                View Pricing
              </button>
            </div>
          </div>

          <div className="">
            {/* Right Section */}
            <img
              src="/home/img1.png"
              alt="Illustration"
              className="w-[558px] h-[400px] object-contain absolute bottom-[-40px] right-4"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FCFCFD] h-[100px] border border-[#F1F1F3] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 px-10 items-center  mt-20 mx-24 mb-10 rounded-md">
        {[
          "/home/logo.png",
          "/home/logo2.png",
          "/home/logo3.png",
          "/home/logo4.png",
          "/home/logo5.png",
          "/home/logo6.png",
          "/home/logo7.png",
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className={index != 6 && "border-r"}
          />
        ))}
      </div>

      <div className="bg-white py-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header Section */}
          <div className="mb-8 flex justify-between">
            <div>
              <h2 className="text-[48px] font-[600] font-beVietnam text-[#FF9500]">
                Top <span className="text-[#1A1A1A]">Categories</span>
              </h2>
              <p className="text-[#555555] mt-2 text-[20px] font-[400] font-beVietnam">
                Explore our Popular Categories
              </p>
            </div>
            {/* All Categories Button */}
            <div className="text-center">
              <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                All categories
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border rounded-[26px] flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer w-[230px] h-[250px] justify-center"
              >
                {/* Icon */}
                <div className="text-4xl text-orange-500 mb-3">
                  <img src={category.icon} alt="icon" />
                </div>
                {/* Title */}
                <h3 className="text-[26px] font-semibold font-beVietnam text-[#1C1C1C] hover:text-[#FF782D]">
                  {category.title}
                </h3>
                {/* Courses Count */}
                <p className="text-[#555555] text-[22px] font-[400] font-beVietnam">
                  {category.courses} Courses
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white py-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div className="md:w-4/5">
              <h2 className="text-[48px] font-[600] font-beVietnam text-[#FF9500]">
                Our <span className="text-[#1A1A1A]">Courses</span>
              </h2>
              <p className="text-[#555555] mt-2 text-[20px] font-[400] font-beVietnam">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            {/* All Categories Button */}
            <div className="text-center">
              <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                All categories
              </button>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg p-10 overflow-hidden bg-white"
              >
                {/* Image */}
                <img src={course.image} alt={course.title} />
                {/* Content */}
                <div className="pt-8">
                  {/* Course Meta */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <div className="flex space-x-2 w-3/5">
                      <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                        {course.duration}
                      </span>
                      <span className="border border-[#F1F1F3] rounded text-gray-600 w-[109px] h-[44px] flex items-center justify-center">
                        {course.level}
                      </span>
                    </div>
                    <span className="text-[#262626] text-[20px] font-[500] font-beVietnam">
                      By {course.instructor}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[26px] font-semibold text-[#262626] font-beVietnam mb-2 mt-10">
                    {course.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[#4C4C4D] text-[18px] font-[400] font-beVietnam leading-[27px] mb-4">
                    {course.description}
                  </p>
                  {/* Button */}
                  <button className="w-full bg-[#F7F7F8] text-[#262626] text-[18px] font-[500] font-beVietnam py-2 rounded mt-5">
                    Get it Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white px-4 p-4">
        <div
          className="relative flex max-w-[1280px] mx-auto items-center py-16 px-14 mb-4 rounded-lg bg-cover object-cover bg-center text-left"
          style={{ backgroundImage: "url('/home/bg_2.png')" }} // Background image
        >
          <div className="max-w-[450px] text-white">
            <h3 className="text-[#555555] text-[20px] font-[600] font-beVietnam">
              GET MORE POWER FROM
            </h3>
            <h2 className="text-black text-[42px] font-[600] font-beVietnam">
              LearnPress Add-Ons
            </h2>
            <p className="text-[#555555] text-[20px] font-[400] font-Jost mt-5">
              The next level of LearnPress - LMS WordPress Plugin. More
              Powerful, Flexible, and Magical Inside.
            </p>
            <button className="bg-[#FF782D] w-[192px] h-[72px] text-white rounded-lg mt-6 text-[20px] p-2 font-[500] font-beVietnam">
              Explore Course
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-10 items-center gap-10">
        <img src="/home/img2.png" alt="img" />
        <div>
          <h2 className="text-[#000000] text-[40px] font-[600] font-beVietnam leading-[48px]">
            Grow us your skill <br /> with LearnPress LMS
          </h2>
          <p className="text-[#555555] text-[24px] font-[400] font-beVietnam mt-5">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <ul className="text-[#000000] font-Jost">
            <li className="flex items-center space-x-2 mt-4">
              <img src="/home/tick_icon.png" alt="check" />
              <p className="text-[24px] font-[400]">Certification</p>
            </li>
            <li className="flex items-center space-x-2 mt-4">
              <img src="/home/tick_icon.png" alt="check" />
              <p className=" text-[24px] font-[400]">Certification </p>
            </li>
            <li className="flex items-center space-x-2 mt-4">
              <img src="/home/tick_icon.png" alt="check" />
              <p className="text-[24px] font-[400]">Certification </p>
            </li>
          </ul>
          <button className="bg-[#FF782D] w-[230px] h-[72px] text-white rounded-lg mt-6 text-[24px] font-[500] font-beVietnam">
            Explorer course
          </button>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white mx-auto p-2">
        <div
          className="relative py-20 max-w-[1280px] mx-auto  rounded-lg flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/home/bg_3.png')" }} // Background image
        >
          <div>
            <h3 className="text-[#000000] text-[20px] font-[600] font-beVietnam">
              PROVIDING AMAZING
            </h3>
            <h2 className="text-black text-[40px] font-[600] font-beVietnam">
              Education WordPress Theme
            </h2>
            <p className="text-[#555555] text-[20px] font-[400] font-beVietnam mt-5">
              The next level of LMS WordPress Theme. Learn anytime and anywhere.
            </p>
            <button className="bg-[#FF782D] w-[230px] h-[72px] text-white rounded-lg mt-6 text-[24px] font-[500] font-beVietnam">
              Explore Course
            </button>
          </div>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-[40px] font-[600] font-beVietnam text-[#000000]">
              Student Feedbacks
            </h2>
            <p className="text-[#555555] text-[24px] font-[400] font-beVietnam mt-4">
              What Students Say About Academy LMS
            </p>
          </div>

          {/* Feedback Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feedbacks.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                {/* Feedback Text */}
                <div className="flex flex-col items-start mb-4">
                  <span className="text-7xl text-gray-300 mr-2">&ldquo;</span>
                  <p className="text-[#000000] text-[24px] font-[400] font-beVietnam">
                    {item.feedback}
                  </p>
                </div>
                {/* Author Info */}
                <div>
                  <h4 className="text-[#000000] text-[26px] font-[600] font-beVietnam">
                    {item.name}
                  </h4>
                  <p className="text-[#555555] text-[24px] font-[400] font-beVietnam">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white">
        <div className="relative  py-4 mx-14">
          <img src="/home/bg_4.png" alt="bg" />
          <div className="absolute md:top-20 left-0 right-0 flex justify-between items-center px-10">
            <div className="flex space-x-3 items-center">
              <img src="/home/img3.png" alt="img3" />
              <h2 className="text-[#000000] text-[26px] font-[600] font-beVietnam">
                Let’s Start With Academy LMS
              </h2>
            </div>
            <div className="flex space-x-3 items-center">
              <button className="text-[#FF782D] text-[24px] font-[500] font-Jost border border-[#FF782D] bg-transparent rounded-md w-[202px] h-[62px]">
                I’m a student
              </button>

              <button className="text-white text-[24px] w-[285px] h-[62px] font-[500] font-Jost bg-[#FF782D]  rounded-md">
                Become an Instructor{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            {/* Header */}
            <div>
              <h2 className="text-[48px] font-[600] text-[#1A1A1A] font-beVietnam">
                <span className="text-[#FF9500]">Our</span> Pricing
              </h2>
              <p className="text-[#555555] md:w-4/5 text-[20px] font-[400] font-beVietnam">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-between items-center">
              <div className="flex items-center p-1">
                <button
                  className={`px-4 py-2 rounded-[8px] ${
                    isMonthly ? "bg-[#FF782D] text-white" : "text-gray-900"
                  }`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-[8px] ${
                    !isMonthly ? "bg-[#FF782D] text-white" : "text-gray-900"
                  }`}
                  onClick={() => setIsMonthly(false)}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <div className="bg-[#FCFCFD] border rounded-lg p-6">
              <h3 className="text-[24px] font-[500] font-beVietnam text-[#262626] text-center mb-2 bg-[#FFF9F0] border border-[#FFEACC]">
                Free Plan
              </h3>
              <p className="text-center text-[84px] font-[600] font-beVietnam text-[#262626]">
                ₹0
                <span className="text-[#4C4C4D] font-beVietnam text-[20px] font-medium">
                  /month
                </span>
              </p>
              <div className="mt-6 border  rounded-lg">
                <div className=" bg-white p-6 pb-0">
                  <h4 className="text-gray-900 text-[20px] font-[500] font-beVietnam mb-4 text-center">
                    Available Features
                  </h4>
                  <ul className="space-y-2 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Unlimited access to all courses.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Unlimited course materials and resources.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Priority support from instructors.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Course completion certificates.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Ad-free experience.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img src="/home/x.png" alt="tick" className="me-3" />
                      Access to exclusive Pro Plan community forums.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img src="/home/x.png" alt="tick" className="me-3" />
                      Early access to new courses and updates.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-center w-full">
                  <button className="bg-orange-500 w-full text-white h-[72px] rounded-b-lg text-[20px] font-[600] font-beVietnam">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#FCFCFD] border rounded-lg p-6">
              <h3 className="text-[24px] font-[500] font-beVietnam text-gray-900 text-center mb-2 bg-[#FFF9F0] border border-[#FFEACC]">
                Pro Plan
              </h3>
              <p className="text-center text-[84px] font-[600] font-beVietnam text-[#262626]">
                ₹6,840
                <span className="text-[#4C4C4D] font-beVietnam text-[20px] font-medium">
                  /month
                </span>
              </p>
              <div className="mt-6 border  rounded-lg">
                <div className=" bg-white p-6 pb-0">
                  <h4 className="text-gray-900 text-[20px] font-[500] font-beVietnam mb-4 text-center">
                    Available Features
                  </h4>
                  <ul className="space-y-2 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Unlimited access to all courses.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Unlimited course materials and resources.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Priority support from instructors.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Course completion certificates.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Ad-free experience.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Access to exclusive Pro Plan community forums.
                    </li>
                    <li className="flex items-center border py-2 px-1">
                      <img
                        src="/home/tick_icon2.png"
                        alt="tick"
                        className="me-3"
                      />
                      Early access to new courses and updates.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-center w-full">
                  <button className="bg-orange-500 w-full text-white h-[72px] rounded-b-lg text-[20px] font-[600] font-beVietnam">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h2 className="font-[600] text-[50px] text-[#262626] mb-4 font-beVietnam leading-[60px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#333333] font-[400] text-[18px] font-beVietnam  mb-6">
              Still have any questions? Contact our Team via{" "}
              <a href="mailto:support@skillbridge.com">
                support@skillbridge.com
              </a>
            </p>
            <button className="bg-white border border-[#F1F1F3] text-[#262626] font-[500] text-[18px] font-beVietnam py-2 px-6 rounded-lg shadow-sm">
              See All FAQ's
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg bg-white shadow-sm"
                >
                  {/* FAQ Question */}
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#262626] text-[20px] font-medium font-beVietnam">
                      {faq.question}
                    </span>
                    <span className="text-gray-500">
                      {openIndex === index ? (
                        <img src="/home/close-icon.png" alt="x" />
                      ) : (
                        <img src="/home/plus-icon.png" alt="plus" />
                      )}
                    </span>
                  </button>

                  {/* FAQ Answer */}
                  {openIndex === index && (
                    <div className="p-4 border-t text-gray-600">
                      <p className="text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <button className="mt-4 flex items-center justify-between px-6 font-medium bg-[#F7F7F8] h-[100px] w-full">
                          <p className="text-[#333333] text-[19px] font-[500] font-beVietnam">
                            {faq.link}
                          </p>
                          <img src="/home/rightArrow.png" alt="img" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
