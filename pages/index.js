import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import TestimonialsSlider from "../components/TestimonialsSlider";
import CampaignSlider from "../components/CampaignSlider";
import { useRef, useState } from "react";
import Statistics from "../components/Statistics";
import PeopleSliderMobile from "../components/PeopleSliderMobile";
import PeopleSlider from "../components/PeopleSlider";
import ChildReview from "../components/ChildReview";
import testimonialsBG from "../images/testimonials-bg.jpg";
import bacha from "../images/bacha.png";

export default function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const modal1 = useRef(null);
  const modal1Handler = (e) => {
    if (modal1.current !== e.target) return;
    setShowModal1(false);
  };

  return (
    <div>
      <section id="intro">
        <div className="w-full relative">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
          >
            <div>
              <Image
                width={1200}
                height={500}
                className="w-full h-screen object-cover"
                src={slide1}
                alt=""
              />
              <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/50 to-black/30" />

              <div className="flex text-left flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute z-[1000] bottom-[10vh] left-1/2 transform -translate-x-1/2">
                <div className="">
                  <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                    SUPER GIRLS K INITIATIVE
                  </h2>
                </div>
                <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                  <p className="text-lg font-medium text-white">
                    aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x eoje
                    xekkeipo x rjporje eur riir1hrpt r1u2r
                  </p>
                  <Link
                    href=""
                    className="bg-primary font-medium text-white text-sm py-2 px-6 relatve z-[1000]"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Image
                width={1200}
                height={500}
                className="w-full h-screen object-cover"
                src={slide2}
                alt=""
              />
              <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute bottom-[10vh] left-1/2 transform -translate-x-1/2">
                <div className="">
                  <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                    SOMETHING ELSE
                  </h2>
                </div>
                <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                  <p className="text-lg font-medium text-white">
                    aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x eoje
                    xekkeipo x rjporje eur riir1hrpt r1u2r
                  </p>
                  <Link
                    href=""
                    className="bg-primary font-medium text-white text-sm py-2 px-6 relative z-[1000]"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Image
                width={1200}
                height={500}
                className="w-full h-screen object-cover"
                src={slide3}
                alt=""
              />
              <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row max-w-5xl px-4 mx-auto w-full absolute bottom-[10vh] left-1/2 transform -translate-x-1/2">
                <div className="">
                  <h2 className="text-5xl lg:text-6xl px-6 text-white text-shadow-md font-black max-w-sm lg:max-w-3xl">
                    SOMETHING ELSE ELSE
                  </h2>
                </div>
                <div className="flex flex-col gap-7 items-start px-6 border-l-8 border-primary">
                  <p className="text-lg font-medium text-white">
                    aolendkwnere;sjfm kwoemfmg jrwflm j i3ndfm ednf epoj x eoje
                    xekkeipo x rjporje eur riir1hrpt r1u2r
                  </p>
                  <Link
                    href=""
                    className="bg-primary text-white font-medium text-sm py-2 px-6 relative z-[1000]"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </Carousel>
          <div className="overlay-gradient-b absolute inset-0 z-50" />
        </div>
      </section>
      <section id="description">
        <div className="py-32 px-4 max-w-screen-lg mx-auto">
          <div className="mb-10">
            <div className="text-light-gray text-3xl lg:text-4xl max-w-[800px] leading-normal">
              Feeding India by Zomato is a{" "}
              <span className="font-semibold text-black">
                not for profit organization
              </span>
              , designing interventions to{" "}
              <span className="font-semibold text-black">reduce hunger</span>{" "}
              among underserved communities in India
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-8">
            <div className="text-xl lg:text-2xl max-w-lg text-gray-600">
              <p className="mb-6">
                In January 2019, Zomato and Feeding India (registered as Hunger
                Heroes) collaborated to eradicate hunger and malnutrition in
                India.
              </p>
              <p>
                All efforts are concerted towards providing better food to more
                people. Through our targeted interventions for child and
                maternal malnutrition, we are working towards bringing
                large-scale systemic transformation in the nutrition landscape
                of India.
              </p>
            </div>
            <div>
              <Image
                className="rounded-lg max-w-[410px] h-72 w-full object-cover"
                width={500}
                height={300}
                src={slide2}
                alt=""
              />
            </div>
          </div>
          <Link href="" className="text-primary text-xl lg:text-2xl">
            <span>Know more</span>
            <i className="fa-solid fa-chevron-right text-base ml-2"></i>
          </Link>
        </div>
      </section>

      <section id="sairaVideo">
        <div
          className={`py-40 px-4 bg-[url('/testimonials-bg.jpg')] bg-no-repeat bg-center bg-cover relative min-h-[500px]`}
        >
          <div
            onClick={() => setShowModal1(true)}
            className="text hidden lg:block absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="play">
              <button
                id="playBtn"
                className="group-hover:border-2 group-hover:border-primary group-hover:text-primary"
              >
                <i className="fas fa-play text-xl"></i>
              </button>
            </div>
          </div>
          {showModal1 ? (
            <>
              <div
                onClick={modal1Handler}
                ref={modal1}
                className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="relative flex-auto">
                      <video
                        className="rounded-lg"
                        loop
                        controls
                        autoPlay
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src="post2-funding.mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 bg-black"></div>
            </>
          ) : null}
          <div className="flex flex-col md:block md:text-left px-4 items-center gap-7 text-white">
            <div className="text-center md:text-left space-y-4 md:space-y-8 absolute z-50 md:right-[15vw] top-28">
              <div>
                <h4 className="text-xl lg:text-4xl font-bold">
                  Ankit video, Age 9,
                </h4>
                <h4 className="text-xl lg:text-4xl font-bold">
                  WhiteHat Jr Coder
                </h4>
              </div>
              <p className="text-sm lg:text-base max-w-xs text-center md:text-left">
                Watch how coding with WhiteHat Jr helped Saira get better at
                Math.
              </p>
              <div
                onClick={() => setShowModal1(true)}
                className="text lg:hidden"
              >
                <div className="play">
                  <button
                    id="playBtn"
                    className="group-hover:border-2 group-hover:border-primary group-hover:text-primary"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b lg:bg-gradient-to-l from-[#FFB200] to-transparent absolute inset-0 z-20" />

            <div className="absolute md:left-[15vw] bottom-0 w-full rounded-full ">
              <Image
                className="object-cover"
                src={bacha}
                height={450}
                width={300}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <CampaignSlider />
      <Statistics />
      <TestimonialsSlider />
      {/* <ChildReview /> */}
      <div className="block lg:hidden px-4 py-32">
        <PeopleSliderMobile />
      </div>

      <div className="hidden lg:block">
        <PeopleSlider />
      </div>
    </div>
  );
}
