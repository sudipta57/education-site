import React from "react";

export default function About() {
  return (
    <div className="bg-[#E4E4E7] max-w-[1500px] mx-auto">
      <div className="h-4 bg-[#F7F7F8]"></div>

      <div className="px-6 md:px-16 py-12 bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <h1 className="text-3xl md:text-[48px] text-[#262626] font-[600] font-beVietnam md:w-1/2 leading-[72px]">
            About EduWeb
          </h1>
          <p className="text-[#59595A] font-[400] font-beVietnam text-base md:text-[18px] leading-[27px] max-w-2xl md:w-1/2">
            Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape.
          </p>
        </div>
      </div>

      <div className="h-4 bg-[#F7F7F8]"></div>

      {/* Achievement Section */}
      <section className="bg-[#FFFFFF] py-12">
        <div className="px-6">
          <h2 className="text-[30px] font-[600] font-beVietnam text-[#262626]">
            Achievements
          </h2>
          <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-[#F7F7F8] p-6">
              <div>
                <img src="/about/icon1.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Trusted by Thousands
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon2.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Award-Winning Courses
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                Our courses have received recognition and accolades in the
                industry for their quality, depth of content, and effective
                teaching methodologies.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon3.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Positive Student Feedback
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We take pride in the positive feedback we receive from our
                students, who appreciate the practicality and relevance of our
                course materials.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon4.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Industry Partnerships
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We have established strong partnerships with industry leaders,
                enabling us to provide our students with access to the latest
                tools and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4 bg-[#F7F7F8]"></div>

      {/* Goal section */}
      <section className="bg-[#FFFFFF] py-12">
        <div className="px-6">
          {/* Title */}
          <h2 className="text-[30px] font-[600] font-beVietnam text-[#262626]">
            Our Goals
          </h2>
          <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact.
          </p>
          <p className=" text-[#59595A] text-[18px] font-[400] font-beVietnam">
            Through our carefully crafted courses, we aim to:
          </p>

          {/* Goals Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-[#F7F7F8] p-6">
              <div>
                <img src="/about/icon5.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Provide Practical Skills
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We focus on delivering practical skills that are relevant to the
                current industry demands. Our courses are designed to equip
                learners with the knowledge and tools needed to excel in their
                chosen field.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon6.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Foster Creative Problem-Solving{" "}
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We encourage creative thinking and problem-solving abilities,
                allowing our students to tackle real-world challenges with
                confidence and innovation.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon7.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Promote Collaboration and Community
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                We believe in the power of collaboration and peer learning. Our
                platform fosters a supportive and inclusive community where
                learners can connect, share insights, and grow together.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <img src="/about/icon8.png" alt="icon" />
                <h3 className="mt-3 text-[26px] font-[500] font-beVietnam text-[#262626]">
                  Stay Ahead of the Curve
                </h3>
              </div>
              <p className="mt-4 text-[#59595A] text-[18px] font-[400] font-beVietnam">
                The digital landscape is constantly evolving, and we strive to
                stay at the forefront of industry trends. We regularly update
                our course content to ensure our students receive the latest
                knowledge and skills.
              </p>
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="mt-12 bg-[#F7F7F8] py-6 px-8 rounded-lg flex flex-col lg:flex-row items-center justify-between bg-cover bg-center bg-[url('/about/bg_banner.png')] ">
            <div className="md:w-4/5">
              <h3 className="text-[48px] font-[600] font-beVietnam text-[#262626]">
                <span className="text-[#FF9500]">Together,</span> let's shape
                the future of digital innovation
              </h3>
              <p className="mt-2 text-[#4C4C4D] text-[18px] font-[400] font-beVietnam">
                Join us on this exciting learning journey and unlock your
                potential in design and development.
              </p>
            </div>
            <button className="mt-4 lg:mt-0 bg-[#FF782D] text-white px-6 py-3 rounded-lg shadow">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
