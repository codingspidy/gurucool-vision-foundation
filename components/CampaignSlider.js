import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import Image from "next/image";
import Link from "next/link";

export default function CampaignSlider() {
  return (
    <section id="campaigns">
      <div className="py-32 sm:py-40 px-4 bg-[#F8F8F8]">
        <div className="relative max-w-screen-lg mx-auto campaign-slider">
          <div className="max-w-[950px] mx-auto">
            <h3 className="text-4xl text-black/80 font-semibold mb-8">
              Pyaare Campaigns
            </h3>
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
              autoplay={{
                delay: 2000,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className="px-1 w-fit">
                <div className="w-fit">
                  <div className="mb-[9px]">
                    <Image
                      className="object-cover lg:w-72 h-56 rounded-xl"
                      src={slide1}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                    India needs oxygen
                  </div>
                  <Link href="" className="text-primary text-lg lg:text-xl">
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-1 w-fit">
                <div className="w-fit">
                  <div className="mb-[9px]">
                    <Image
                      className="object-cover lg:w-72 h-56 rounded-xl"
                      src={slide2}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                    India needs oxygen
                  </div>
                  <Link href="" className="text-primary text-lg lg:text-xl">
                    {" "}
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                  </Link>{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-1 w-fit">
                <div className="w-fit">
                  <div className="mb-[9px]">
                    <Image
                      className="object-cover lg:w-72 h-56 rounded-xl"
                      src={slide3}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                    India needs oxygen
                  </div>
                  <Link href="" className="text-primary text-lg lg:text-xl">
                    {" "}
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                  </Link>{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-1 w-fit">
                <div className="w-fit">
                  <div className="mb-[9px]">
                    <Image
                      className="object-cover lg:w-72 h-56 rounded-xl"
                      src={slide1}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                    India needs oxygen
                  </div>
                  <Link href="" className="text-primary text-lg lg:text-xl">
                    {" "}
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                  </Link>{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-1 w-fit">
                <div className="w-fit">
                  <div className="mb-[9px]">
                    <Image
                      className="object-cover lg:w-72 h-56 rounded-xl"
                      src={slide1}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                    India needs oxygen
                  </div>
                  <Link href="" className="text-primary text-lg lg:text-xl">
                    {" "}
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                  </Link>{" "}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            className="swiper-button-prev sm:block hidden shadow-2xl"
            id="prev-slider"
          ></button>
          <button
            className="swiper-button-next sm:block hidden shadow-2xl"
            id="next-slider"
          ></button>
        </div>
      </div>
    </section>
  );
}
