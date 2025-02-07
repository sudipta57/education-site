import React, { useState } from "react";

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
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="bg-white py-12">
        <div className=" px-4 sm:px-6 lg:px-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
            {/* Header */}
            <div>
              <h2 className="text-[48px] font-[600] text-gray-900">
                Our Pricing
              </h2>
            </div>
            <div className="max-w-[600px] text-gray-600">
              <p className="text-[#59595A] text-base md:text-[18px] font-[400] font-beVietnam leading-[27px]">
                Welcome to SkillBridge's Pricing Plan page, where we offer two
                comprehensive options to cater to your needs: Free and Pro. We
                believe in providing flexible and affordable pricing options for
                our services. Whether you're an individual looking to enhance
                your skills or a business seeking professional development
                solutions, we have a plan that suits you. Explore our pricing
                options below and choose the one that best fits your
                requirements.
              </p>
            </div>
          </div>
          <div className="h-4 bg-[#F7F7F8]"></div>
          {/* Toggle */}
          <div className="flex justify-center items-center my-10">
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
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
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

      <div className="bg-white mt-10 py-12">
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

export default Pricing;
