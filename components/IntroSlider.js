import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function IntroSlider() {
  const swiperPagination = useRef(null);

  return (
    <section id="introSlider">
      <div className="">
        <div>
          <div className="">
            <Swiper
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
              modules={[Navigation, Pagination, Autoplay]}
              className="reviewsSlider"
            >
              <SwiperSlide>
                <div className="text-left relative">
                  <div className="overlay-gradient-b absolute inset-0 z-10" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover"
                    src={slide1}
                    alt=""
                  />
                  <div className="flex text-left flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <div className="">
                      <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                        SUPER GIRLS K INITIATIVE
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <p className="text-lg font-medium text-white">
                        aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x
                        eoje xekkeipo x rjporje eur riir1hrpt r1u2r
                      </p>
                      <Link
                        href=""
                        className="bg-primary font-medium text-white text-sm py-2 px-6 relatve"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left relative">
                  <div className="overlay-gradient-b absolute inset-0 z-10" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover"
                    src={slide2}
                    alt=""
                  />
                  <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <div className="">
                      <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                        SOMETHING ELSE
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <p className="text-lg font-medium text-white">
                        aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x
                        eoje xekkeipo x rjporje eur riir1hrpt r1u2r
                      </p>
                      <Link
                        href=""
                        className="bg-primary font-medium text-white text-sm py-2 px-6 relative"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left relative">
                  <div className="overlay-gradient-b absolute inset-0 z-10" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover"
                    src={slide3}
                    alt=""
                  />
                  <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <div className="">
                      <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                        SOMETHING ELSE ELSE
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <p className="text-lg font-medium text-white">
                        aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x
                        eoje xekkeipo x rjporje eur riir1hrpt r1u2r
                      </p>
                      <Link
                        href=""
                        className="bg-primary text-white font-medium text-sm py-2 px-6 relative"
                      >
                        READ MORE
                      </Link>
                    </div>
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
    </section>
  );
}
