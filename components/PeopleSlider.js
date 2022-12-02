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

export default function PeopleSlider() {
  const [activeIndex, setActiveIndex] = useState(3);
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
        <div className="people-gridContainer h-screen relative">
          <h3 className="people-title text-2xl lg:text-[55px] font-semibold absolute left-1/2 -translate-x-1/2">
            Gurucool means
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            initialSlide={3}
            slidesPerView={1}
            slidesPerGroup={1}
            onRealIndexChange={indexChangeHandler}
            // onBeforeSlideChangeStart={handleChange}
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
            loop={true}
            speed={1}
            observer={true}
            observeParents={true}
            allowTouchMove={false}
          >
            <SwiperSlide className="relative">
              <h5
                className={`text-[55px] font-semibold text-[#30E3CA] ${
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
                  <div className="people-item">
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
                      src={person3}
                      alt="Look 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 4"
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
                      src={person4}
                      alt="Look 8"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 4"
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
                      src={person5}
                      alt="Look 3"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 4"
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
                      src={person6}
                      alt="Look 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Look 4"
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
                      src={person7}
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
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <h5
                className={`text-[55px] font-semibold text-[#FC5185] ${
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
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person8}
                      alt="Children 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 2"
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
                      src={person10}
                      alt="Children 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 7"
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
                      src={person3}
                      alt="Children 4"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 3"
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
                      src={person3}
                      alt="Children 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 7"
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
                      src={person3}
                      alt="Children 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 1"
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
                      src={person3}
                      alt="Children 4"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 3"
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
                      src={person3}
                      alt="Children 6"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Children 7"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <h5
                className={`text-[55px] font-semibold text-[#7D5A50] ${
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
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={person6}
                      alt="Food 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 2"
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
                      src={person6}
                      alt="Food 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 6"
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
                      src={person6}
                      alt="Food 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 4"
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
                      src={person6}
                      alt="Food 8"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 4"
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
                      src={person3}
                      alt="Food 3"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 4"
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
                      src={slide1}
                      alt="Food 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 4"
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
                      src={slide1}
                      alt="Food 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Food 6"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <h5
                className={`text-[55px] font-semibold text-[#FF9A00] ${
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
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 1"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 2"
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
                      src={slide1}
                      alt="Home 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 6"
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
                      src={slide1}
                      alt="Home 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 4"
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
                      src={slide1}
                      alt="Home 8"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 4"
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
                      src={slide1}
                      alt="Home 3"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 4"
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
                      src={slide1}
                      alt="Home 9"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 4"
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
                      src={slide1}
                      alt="Home 5"
                    />
                  </div>
                  <div className="people-item">
                    <Image
                      className="object-cover"
                      width={236}
                      height={350}
                      src={slide1}
                      alt="Home 6"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div id="swiperPagination" className="swiper-pagination" />
          </Swiper>

          <div className="absolute bottom-4 z-50 w-full h-20 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-0 z-50 w-full h-4 bg-white" />
        </div>
      </section>
    </>
  );
}
