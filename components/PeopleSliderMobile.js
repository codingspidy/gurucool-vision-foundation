import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper";
import Image from "next/image";
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

export default function PeopleSliderMobile() {
  return (
    <div id="peopleSlider-mobile">
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={person1}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person2}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person3}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person4}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person5}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person6}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person7}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person8}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={person9}
            alt=""
            width={240}
            height={320}
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
