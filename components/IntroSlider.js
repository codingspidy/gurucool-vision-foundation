import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper";
import slide1 from "../images/supergirls.jpg";
import slide2 from "../images/eidCampaign.jpg";
import slide3 from "../images/slide3.png";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function IntroSlider() {
  const swiperPagination = useRef(null);

  return (
    <section id="introSlider">
      <div className="relative">
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
                  <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                  <div className="overlay-gradient-t-intro absolute z-10 inset-0" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover object-top"
                    src={slide1}
                    alt=""
                  />
                  <div className="flex text-left flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <div className="">
                      <h2 className="text-4xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                        SUPERGIRLSK INITIATIVE
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <div>
                        <p className="text-base lg:text-lg text-white mb-2">
                          SuperGirlsK is an all-new initiative by Gurucool
                          aiming to provide free competitive coaching courses to
                          1k girls annually.
                        </p>
                        <ul className="text-sm lg:text-base text-white flex flex-wrap gap-x-4 gap-y-2">
                          <li className="flex items-center gap-1 px-1 bg-white text-black leading-snug">
                            <i class="fa-solid fa-circle text-black text-[4px]"></i>{" "}
                            <span className="">Competitive Coaching</span>
                          </li>
                          <li className="flex items-center gap-1 px-1 bg-white text-black leading-snug">
                            <i class="fa-solid fa-circle text-black text-[4px]"></i>{" "}
                            <span className="">Skill Based Program</span>
                          </li>
                          <li className="flex items-center gap-1 px-1 bg-white text-black leading-snug">
                            <i class="fa-solid fa-circle text-black text-[4px]"></i>{" "}
                            <span className="">Art for Education</span>
                          </li>
                        </ul>
                      </div>
                      <Link
                        target="_blank"
                        href="https://milaap.org/fundraisers/support-super-girls-k"
                        className="bg-primary  font-medium text-black text-sm py-2 px-6 rounded-sm relatve"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left relative">
                  <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                  <div className="overlay-gradient-t-intro absolute z-10 inset-0" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover"
                    src={slide2}
                    alt=""
                  />
                  <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <h2 className="text-4xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:w-full lg:max-w-md">
                      GHAR PE EID
                    </h2>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <p className="text-base lg:text-lg text-white">
                        Under this initiative, we provided `Eid Essentials` to
                        the ones financially affected by the pandemic.
                      </p>
                      <Link
                        href=""
                        className=" bg-primary text-black font-medium text-sm rounded-sm py-2 px-6 relative"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-left relative">
                  <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                  <div className="overlay-gradient-t-intro absolute z-10 inset-0" />
                  <Image
                    width={1200}
                    height={500}
                    className="w-full h-screen object-cover"
                    src={slide3}
                    alt=""
                  />
                  <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-20 bottom-[12vh] left-1/2 transform -translate-x-1/2">
                    <div className="">
                      <h2 className="text-4xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                        SOMETHING ELSE ELSE
                      </h2>
                    </div>
                    <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                      <p className="text-lg text-white">
                        aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x
                        eoje xekkeipo x rjporje eur riir1hrpt r1u2r
                      </p>
                      <Link
                        href=""
                        className=" bg-primary text-black font-medium rounded-sm text-sm py-2 px-6 relative"
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
