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

import person1 from "../images/harry.jpeg";
import person2 from "../images/luna.jpeg";
import person3 from "../images/hermione.jpeg";
import person4 from "../images/draco.jpeg";
import person5 from "../images/ron.jpeg";
import Image from "next/image";

export default function ChildReview() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
        <Image className="object-cover" width={300} height={400} src={person1} />
<div>
<div>


    <h5>David Chea, Age 10</h5>
    <p>Proud WhiteHat Jr Alumni</p>
    <p>Created {'Safe zone'} App that marks zones which are not safe for children and provides alerts if someone is entering this area.</p>
</div>
<div>
    
</div>
</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="object-cover" width={300} height={400} src={person2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="object-cover" width={300} height={400} src={person3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="object-cover" width={300} height={400} src={person4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="object-cover" width={300} height={400} src={person5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
