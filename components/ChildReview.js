import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import person4 from "../images/draco.png";
import Image from "next/image";
import yellowBG from "../images/yellowBg.jpg";

export default function ChildReview() {
  const swiperPagination = useRef(null);
  return (
    <div className="py-20 px-4 relative">
      {/* <div className="absolute lg:hidden inset-0 z-50 bg-gradient-to-t from-black/100 to-black/50" /> */}
      <div className="">
        <Image
          className="absolute -z-10 -top-28 left-0 2xl:left-[10vw] w-full max-w-[1000px] h-full rotate-[50deg] 2xl:rotate-[57deg]"
          src={yellowBG}
          width={500}
          height={500}
          alt=""
        />
        <div className="relative z-[100]">
          <Swiper
            spaceBetween={30}
            // effect={"fade"}
            slidesPerView={1}
            navigation={true}
            pagination={{
              el:
                swiperPagination.current ||
                "#swiper-pagination.swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
            }}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            className="reviewsSlider"
            id="reviewsSlider"
          >
            <SwiperSlide>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-evenly">
                <Image
                  className="object-cover w-64 sm:w-80 lg:w-96"
                  width={300}
                  height={400}
                  src={person4}
                  alt=""
                />
                <div className="p-1">
                  <div className="flex flex-col gap-2 lg:mt-28 -mt-10 w-full max-w-md px-4 py-8 rounded-xl shadow-lg lg:shadow-none bg-white lg:bg-transparent">
                    <h5 className="swiper-no-swiping text-xl lg:text-2xl font-bold">
                      David Chea, Age 10
                    </h5>
                    <p className="swiper-no-swiping text-lg lg:text-xl font-semibold">
                      Proud WhiteHat Jr Alumni
                    </p>
                    <p className="swiper-no-swiping text-xs lg:text-sm max-w-xs lg:max-w-sm text-gray-600">
                      Created {"Safe zone"} App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area. App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-evenly">
                <Image
                  className="object-cover w-64 sm:w-80 lg:w-96"
                  width={300}
                  height={400}
                  src={person4}
                  alt=""
                />
                <div className="p-1">
                  <div className="flex flex-col gap-2 lg:mt-28 -mt-10 w-full max-w-md px-4 py-8 rounded-xl shadow-lg lg:shadow-none bg-white lg:bg-transparent">
                    <h5 className="swiper-no-swiping text-xl lg:text-2xl font-bold">
                      David Chea, Age 10
                    </h5>
                    <p className="swiper-no-swiping text-lg lg:text-xl font-semibold">
                      Proud WhiteHat Jr Alumni
                    </p>
                    <p className="swiper-no-swiping text-xs lg:text-sm max-w-xs lg:max-w-sm text-gray-600">
                      Created {"Safe zone"} App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area. App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-evenly">
                <Image
                  className="object-cover w-64 sm:w-80 lg:w-96"
                  width={300}
                  height={400}
                  src={person4}
                  alt=""
                />
                <div className="p-1">
                  <div className="flex flex-col gap-2 lg:mt-28 -mt-10 w-full max-w-md px-4 py-8 rounded-xl shadow-lg lg:shadow-none bg-white lg:bg-transparent">
                    <h5 className="swiper-no-swiping text-xl lg:text-2xl font-bold">
                      David Chea, Age 10
                    </h5>
                    <p className="swiper-no-swiping text-lg lg:text-xl font-semibold">
                      Proud WhiteHat Jr Alumni
                    </p>
                    <p className="swiper-no-swiping text-xs lg:text-sm max-w-xs lg:max-w-sm text-gray-600">
                      Created {"Safe zone"} App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area. App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-evenly">
                <Image
                  className="object-cover w-64 sm:w-80 lg:w-96"
                  width={300}
                  height={400}
                  src={person4}
                  alt=""
                />
                <div className="p-1">
                  <div className="flex flex-col gap-2 lg:mt-28 -mt-10 w-full max-w-md px-4 py-8 rounded-xl shadow-lg lg:shadow-none bg-white lg:bg-transparent">
                    <h5 className="swiper-no-swiping text-xl lg:text-2xl font-bold">
                      David Chea, Age 10
                    </h5>
                    <p className="swiper-no-swiping text-lg lg:text-xl font-semibold">
                      Proud WhiteHat Jr Alumni
                    </p>
                    <p className="swiper-no-swiping text-xs lg:text-sm max-w-xs lg:max-w-sm text-gray-600">
                      Created {"Safe zone"} App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area. App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-evenly">
                <Image
                  className="object-cover w-64 sm:w-80 lg:w-96"
                  width={300}
                  height={400}
                  src={person4}
                  alt=""
                />
                <div className="p-1">
                  <div className="flex flex-col gap-2 lg:mt-28 -mt-10 w-full max-w-md px-4 py-8 rounded-xl shadow-lg lg:shadow-none bg-white lg:bg-transparent">
                    <h5 className="swiper-no-swiping text-xl lg:text-2xl font-bold">
                      David Chea, Age 10
                    </h5>
                    <p className="swiper-no-swiping text-lg lg:text-xl font-semibold">
                      Proud WhiteHat Jr Alumni
                    </p>
                    <p className="swiper-no-swiping text-xs lg:text-sm max-w-xs lg:max-w-sm text-gray-600">
                      Created {"Safe zone"} App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area. App that marks zones which are not
                      safe for children and provides alerts if someone is
                      entering this area.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
            <div
              ref={swiperPagination}
              id="swiper-pagination"
              className="swiper-pagination"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
