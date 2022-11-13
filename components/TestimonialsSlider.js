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

import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.png";
import person5 from "../images/person5.jpg";
import person6 from "../images/person6.jpg";
import person7 from "../images/person7.jpg";
import person8 from "../images/person8.jpg";
import person9 from "../images/person9.jpg";
import person10 from "../images/person10.jpg";

export default function TestimonialsSlider() {
  return (
    <section id="testimonialsSlider">
      <div className="py-32 md:px-12">
        <div>
          <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
            <h3 className="text-4xl text-center lg:text-left text-black/80 font-semibold mb-8">
              Students Ki Zubaani
            </h3>
            <Swiper
              slidesPerView={1}
              modules={[Autoplay]}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1.9,
                },
                640: {
                  slidesPerView: 2,
                },
                700: {
                  slidesPerView: 2.2,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1000: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide className="flex justify-center sm:justify-start">
                <div className="max-w-[280px]">
                  <div>
                    <Image
                      className="object-cover w-full h-60 rounded-3xl"
                      src={person7}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#D6D2C4] px-4 py-6 rounded-3xl -mt-10 relative z-10">
                    <div className="flex gap-2 text-xl">
                      <i className="fa-solid fa-quote-left"></i>
                      <div>
                        <p className="text-[15px] leading-snug text-gray-600 line-clamp-5 mb-4">
                          I got placed within 2 days after graduation! I’m happy
                          I am part of the Masai family, not because they helped
                          me but because of they guided me in the best way
                          possible kdopdjflfnn
                        </p>
                        <div className="text-[17px]">Aayushi Shah, 12th</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center sm:justify-start">
                <div className="max-w-[280px]">
                  <div>
                    <Image
                      className="object-cover w-full h-60 rounded-3xl"
                      src={person2}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#DDFFBC] px-4 py-6 rounded-3xl -mt-10 relative z-10">
                    <div className="flex gap-2 text-xl">
                      <i className="fa-solid fa-quote-left"></i>
                      <div>
                        <p className="text-[15px] leading-snug text-gray-600 line-clamp-5 mb-4">
                          I got placed within 2 days after graduation! I’m happy
                          I am part of the Masai family, not because they helped
                          me but because of they guided me in the best way
                          possible kdopdjflfnn
                        </p>
                        <div className="text-[17px]">Aayushi Shah, 9th</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center sm:justify-start">
                <div className="max-w-[280px]">
                  <div>
                    <Image
                      className="object-cover w-full h-60 rounded-3xl"
                      src={person8}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#F6EDE7] px-4 py-6 rounded-3xl -mt-10 relative z-10">
                    <div className="flex gap-2 text-xl">
                      <i className="fa-solid fa-quote-left"></i>
                      <div>
                        <p className="text-[15px] leading-snug text-gray-600 line-clamp-5 mb-4">
                          I got placed within 2 days after graduation! I’m happy
                          I am part of the Masai family, not because they helped
                          me but because of they guided me in the best way
                          possible kdopdjflfnn
                        </p>
                        <div className="text-[17px]">Aayushi Shah, BTech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center sm:justify-start">
                <div className="max-w-[280px]">
                  <div>
                    <Image
                      className="object-cover w-full h-60 rounded-3xl"
                      src={person3}
                      width={333}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#DCD6F7] px-4 py-6 rounded-3xl -mt-10 relative z-10">
                    <div className="flex gap-2 text-xl">
                      <i className="fa-solid fa-quote-left"></i>
                      <div>
                        <p className="text-[15px] leading-snug text-gray-600 line-clamp-5 mb-4">
                          I got placed within 2 days after graduation! I’m happy
                          I am part of the Masai family, not because they helped
                          me but because of they guided me in the best way
                          possible kdopdjflfnn
                        </p>
                        <div className="text-[17px]">Aayushi Shah, B.sc</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
