import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F8] flex items-center justify-center px-4 sm:px-6 lg:px-8 md:py-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* Left: Testimonials Section */}
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-[40px] font-[500] text-[#262626] font-beVietnam">
            Students Testimonials
          </h2>
          <p className="text-[#59595A] text-[20px] font-[400] font-beVietnam">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>

          {/* Swiper Component */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="swiper-container"
            loop={true}
          >
            {/* Testimonial Card 1 */}
            <SwiperSlide>
              <div className="bg-white py-6 rounded-lg">
                <p className="text-[#4C4C4D] text-[20px] font-[400] font-beVietnam mb-4 px-6">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
                <div className="flex items-center justify-between border-t mt-10 pt-7 px-6 bg-[#FCFCFD]">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/signUp.png"
                      alt="Student"
                      className="w-[63px] h-[63px] rounded-lg"
                    />
                    <span className="text-[#333333] text-[20px] font-[600] font-beVietnam">
                      Sarah L
                    </span>
                  </div>
                  <button className="text-[#262626] text-[20px] font-[500] font-beVietnam rounded-lg bg-[#F7F7F8] border-[1.2px] border-[#F1F1F3] w-[156px] h-[68px]">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial Card 2 */}
            <SwiperSlide>
              <div className="bg-white py-6 rounded-lg">
                <p className="text-[#4C4C4D] text-[20px] font-[400] font-beVietnam mb-4 px-6">
                  The course helped me land my first job in web design! The
                  projects and real-world applications taught during the course
                  were invaluable.
                </p>
                <div className="flex items-center justify-between border-t mt-10 pt-7 px-6 bg-[#FCFCFD]">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/signUp.png"
                      alt="Student"
                      className="w-[63px] h-[63px] rounded-lg"
                    />
                    <span className="text-[#333333] text-[20px] font-[600] font-beVietnam">
                      John D
                    </span>
                  </div>
                  <button className="text-[#262626] text-[20px] font-[500] font-beVietnam rounded-lg bg-[#F7F7F8] border-[1.2px] border-[#F1F1F3] w-[156px] h-[68px]">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-end space-x-2">
            <img
              src="/prev.png"
              alt="Previous"
              className="cursor-pointer custom-prev"
            />
            <img
              src="/next.png"
              alt="Next"
              className="cursor-pointer custom-next"
            />
          </div>
        </div>
        {/* Right: Sign-Up Form */}
        <div className="bg-white p-8 rounded-lg md:col-span-2">
          <h2 className="text-[50px] font-[600] font-beVietnam text-center text-[#262626] mb-4">
            Login
          </h2>
          <p className="text-[#4C4C4D] text-[20px] font-[400] font-beVietnam mb-6 text-center">
            Welcome back! Please log in to access your account.
          </p>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[20px] font-[500] font-beVietnam text-[#262626]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="mt-3 h-[78px] bg-[#FCFCFD] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Password with Show/Hide Option */}
            <div className="relative">
              <label className="block text-[20px] font-[500] font-beVietnam text-[#262626]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="mt-3 h-[78px] bg-[#FCFCFD] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 pr-12"
              />
              {/* Toggle Button */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-16 cursor-pointer text-gray-600 text-[20px]"
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <div className="text-[#4C4C4D] text-[18px] font-[400] font-beVietnam text-right">
              <a href="#">Forgot Password?</a>
            </div>

            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full bg-[#FF782D] text-white py-3 rounded-md text-[20px] font-[500] font-beVietnam"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
