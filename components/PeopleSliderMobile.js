import Image from "next/image";
import slide1 from "../images/slide1.png";
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

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";

export default function PeopleSliderMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperPagination = useRef();

  useEffect(() => {
    let i = setTimeout(() => {
      setActiveIndex(10);
    }, 4500);

    return () => clearTimeout(i);
  }, [activeIndex]);

  const indexChangeHandler = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <section id="peopleSlider-container">
        <div className="people-gridContainer h-screen relative z-50">
          <h3 className="people-title w-full text-center text-3xl md:text-5xl font-semibold absolute z-50 left-1/2 -translate-x-1/2">
            Gurucool means
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            initialSlide={0}
            slidesPerView={1}
            slidesPerGroup={1}
            onRealIndexChange={indexChangeHandler}
            // onSlideChangeTransitionStart={handleChange}
            direction="vertical"
            spaceBetween={50}
            pagination={{
              el:
                swiperPagination.current ||
                "#swiperPagination.swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 6200,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={1}
            loop={true}
            allowTouchMove={false}
            observer={true}
            observeParents={true}
          >
            <div id="swiperPagination" className="swiper-pagination" />

            <SwiperSlide className="relative">
              <h5
                className={`text-3xl md:text-5xl font-semibold text-[#30E3CA] ${
                  activeIndex === 0 ? "text-after" : "text-before"
                }`}
              >
                coolfluencing the world
              </h5>
              <div className="people-grid">
                <div
                  className={`people-column ${
                    activeIndex === 0 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item item-diff">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person1}
                      alt="Look 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 2"
                    />
                  </div>
                </div>
                <div
                  className={`people-column ${
                    activeIndex === 0 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person2}
                      alt="Look 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person3}
                      alt="Look 9"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <h5
                className={`text-3xl md:text-5xl font-semibold text-[#FC5185] ${
                  activeIndex === 1 ? "text-after" : "text-before"
                }`}
              >
                spreading love
              </h5>
              <div className="people-grid">
                <div
                  className={`people-column ${
                    activeIndex === 1 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item item-diff">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person1}
                      alt="Look 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 2"
                    />
                  </div>
                </div>
                <div
                  className={`people-column ${
                    activeIndex === 1 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person2}
                      alt="Look 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person3}
                      alt="Look 9"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h5
                className={`text-3xl md:text-5xl font-semibold text-[#7D5A50] ${
                  activeIndex === 2 ? "text-after" : "text-before"
                }`}
              >
                Beautiful smiles
              </h5>
              <div className="people-grid">
                <div
                  className={`people-column ${
                    activeIndex === 2 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item item-diff">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person1}
                      alt="Look 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 2"
                    />
                  </div>
                </div>
                <div
                  className={`people-column ${
                    activeIndex === 2 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person2}
                      alt="Look 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person3}
                      alt="Look 9"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h5
                className={`text-3xl md:text-5xl font-semibold text-[#FF9A00] ${
                  activeIndex === 3 ? "text-after" : "text-before"
                }`}
              >
                Education for all
              </h5>
              <div className="people-grid">
                <div
                  className={`people-column ${
                    activeIndex === 3 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item item-diff">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person1}
                      alt="Look 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 2"
                    />
                  </div>
                </div>
                <div
                  className={`people-column ${
                    activeIndex === 3 ? "after-anim" : "before-anim"
                  }`}
                >
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person2}
                      alt="Look 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person3}
                      alt="Look 9"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
