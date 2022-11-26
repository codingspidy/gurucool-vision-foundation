import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
import testimonialsBG from "../images/testimonialsBg.png";
import bacha from "../images/bacha.png";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import ImpactHighlights from "../components/ImpactHighlights";
import Contact from "../components/ContactForm";
import IntroSlider from "../components/IntroSlider";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const modal1 = useRef(null);
  const modal1Handler = (e) => {
    if (modal1.current !== e.target) return;
    setShowModal1(false);
  };

  let screenLg = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div>
        <section id="intro">
          <div className="w-full relative">
            <IntroSlider />
          </div>
        </section>
        <section id="description">
          <div className="py-32 px-4 max-w-screen-lg mx-auto">
            <div className="mb-8 lg:mb-10">
              <div className="text-light-gray text-2xl lg:text-4xl max-w-[800px]">
                Feeding India by Zomato is a{" "}
                <span className="font-semibold text-black">
                  not for profit organization
                </span>
                , designing interventions to{" "}
                <span className="font-semibold text-black">reduce hunger</span>{" "}
                among underserved communities in India
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-6 lg:mb-8">
              <div className="text-lg lg:text-2xl max-w-lg text-gray-600">
                <p className="mb-4 lg:mb-6">
                  In January 2019, Zomato and Feeding India (registered as
                  Hunger Heroes) collaborated to eradicate hunger and
                  malnutrition in India.
                </p>
                <p>
                  All efforts are concerted towards providing better food to
                  more people. Through our targeted interventions for child and
                  maternal malnutrition, we are working towards bringing
                  large-scale systemic transformation in the nutrition landscape
                  of India.
                </p>
              </div>
              <div>
                <Image
                  className="rounded-lg min-w-[300px] max-w-[410px] h-72 w-full object-cover"
                  width={500}
                  height={300}
                  src={slide2}
                  alt=""
                />
              </div>
            </div>
            <Link href="" className="text-primary text-lg lg:text-xl">
              <span>Know more</span>
              <i className="fa-solid fa-chevron-right text-base ml-2"></i>
            </Link>
          </div>
        </section>

        <Statistics />

        <section id="sairaVideo">
          <div className={`py-40 px-4 bg-[#FFC900] relative min-h-[500px]`}>
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
                  className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none"
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
              <div className="text-center md:text-left space-y-4 md:space-y-8 absolute z-50 md:right-[18vw] top-28">
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
              <div className="bg-gradient-to-b lg:bg-gradient-to-b to-[#FFC900] from-transparent absolute inset-0 z-20" />

              <div className="absolute md:left-[18vw] bottom-0 w-full rounded-full ">
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

        <ImpactHighlights />
        <Achievements />
        <ChildReview />

        {screenLg ? (
          <div className="hidden lg:block">
            <PeopleSlider />
          </div>
        ) : (
          <div className="block lg:hidden px-4 pt-32 pb-16 bg-white">
            <PeopleSliderMobile />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
