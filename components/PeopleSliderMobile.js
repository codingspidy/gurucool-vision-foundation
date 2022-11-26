import Image from "next/image";
import { useEffect } from "react";
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

export default function PeopleSliderMobile() {
  useEffect(() => {
    const grids = document.querySelectorAll(".peopleSlider-grid");
    const headings = document.querySelectorAll(".heading .wrapper .text");
    const dots = document.querySelectorAll(
      ".heading .wrapper .dots ul li .dot"
    );
    const modalOverlaySignUp = document.querySelector(".modal-overlay");
    const footer = document.querySelector("footer");

    // const arrowScrollDown = arrowScrollDowns[0];

    const dotsColorsClasses = [
      "dot-blue",
      "dot-green-light",
      "dot-yellow",
      "dot-green-dark",
    ];

    function enterScreen(index) {
      const grid = grids[index];
      const heading = headings[index];
      const dot = dots[index];
      const gridColumns = grid.querySelectorAll(".column");

      grid.classList.add("active");

      gridColumns.forEach((element) => {
        element.classList.remove("animate-before", "animate-after");
      });

      heading.classList.remove("animate-before", "animate-after");

      dot.classList.add(dotsColorsClasses[index]);
    }

    function exitScreen(index, exitDelay) {
      const grid = grids[index];
      const heading = headings[index];
      const dot = dots[index];
      const gridColumns = grid.querySelectorAll(".column");

      gridColumns.forEach((element) => {
        element.classList.add("animate-after");
      });

      heading.classList.add("animate-after");

      dot.classList.remove(
        "dot-blue",
        "dot-green-light",
        "dot-yellow",
        "dot-green-dark"
      );

      setTimeout(() => {
        grid.classList.remove("active");

        heading.classList.add("animate-before");
        heading.classList.remove("animate-after");

        gridColumns.forEach((element) => {
          element.classList.add("animate-before");
          element.classList.remove("animate-after");
        });
      }, exitDelay);
    }

    function setupAnimationCycle({ timePerScreen, exitDelay }) {
      const cycleTime = timePerScreen + exitDelay;
      let nextIndex = 0;

      function nextCycle() {
        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
      }

      setTimeout(() => {
        nextCycle();
        setInterval(nextCycle, cycleTime);
      }, 500);
    }

    setupAnimationCycle({
      timePerScreen: 3000, // ms
      exitDelay: 300 * 7, // ms
    });

    function detectMouseWheelDirection(event) {
      let delta = null;
      let direction = false;

      if (!event) {
        event = window.event;
      }

      if (event.wheelDelta) {
        delta = event.wheelDelta / 60;
      } else if (event.detail) {
        delta = -event.detail / 2;
      }

      if (delta !== null) {
        direction = delta > 0 ? "up" : "down";
      }

      return direction;
    }

    let transformYActive = false;

    function moveTransform(direction) {
      if (direction === "up" && transformYActive) {
        transformYActive = false;
        document
          .getElementsByTagName("body")[0]
          .classList.remove("transform-body-bottom");

        pageScrollArrowDown.style.display = "flex";
        modalOverlaySignUp.style.display = "none";
        footer.style.display = "none";
      } else if (direction === "down" && !transformYActive) {
        transformYActive = true;
        document
          .getElementsByTagName("body")[0]
          .classList.add("transform-body-bottom");

        pageScrollArrowDown.style.display = "none";

        setTimeout(() => {
          modalOverlaySignUp.style.display = "block";
          footer.style.display = "block";
        }, 1100);
      }
    }

    // eslint-disable-next-line
    function mouseWheelEvent(event) {
      const direction = detectMouseWheelDirection(event);
      moveTransform(direction);
    }
  });

  return (
    <section className="pt-48" id="peopleSlider-mob">
      <div className="relative bg-white">
        <div className="heading">
          <span className="text">Get your next</span>
          <div className="wrapper">
            <div className="offset">
              <h2 className="text text-blue animate-before">
                chai snacks
              </h2>
            </div>
            <div className="offset">
              <h2 className="text text-green-light animate-before">
                home decor idea
              </h2>
            </div>
            <div className="offset">
              <h2 className="text text-yellow animate-before">outfit idea</h2>
            </div>
            <div className="offset">
              <h2 className="text text-green-dark animate-before">DIY idea</h2>
            </div>
            <div className="dots">
              <ul>
                <li>
                  <button className="dot" />
                </li>
                <li>
                  <button className="dot" />
                </li>
                <li>
                  <button className="dot" />
                </li>
                <li>
                  <button className="dot" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-container h-screen">
          <div className="peopleSlider-grid">
            <div className="column animate-before">
              <div className="itemDiff">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person1}
                  alt="Look 1"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Look 2"
                />
              </div>
            </div>
            <div className="column animate-before">
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person2}
                  alt="Look 5"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Look 6"
                />
                <div className="item">
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
          </div>
          <div className="peopleSlider-grid">
            <div className="column animate-before">
              <div className="itemDiff">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person8}
                  alt="Children 1"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Children 2"
                />
              </div>
            </div>

            <div className="column animate-before">
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Children 3"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person3}
                  alt="Children 6"
                />
              </div>
              <div className="item">
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
          <div className="peopleSlider-grid">
            <div className="column animate-before">
              <div className="itemDiff">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person6}
                  alt="Food 1"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Food 2"
                />
              </div>
            </div>
            <div className="column animate-before">
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person6}
                  alt="Food 5"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Food 6"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={person6}
                  alt="Food 9"
                />
              </div>
            </div>
          </div>
          <div className="peopleSlider-grid">
            <div className="column animate-before">
              <div className="itemDiff">
                <Image
                  className="object-cover"
                  width={236}
                  he
                  src={slide1}
                  alt="Home 1"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Home 2"
                />
              </div>
            </div>
            <div className="column animate-before">
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Home 5"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Home 6"
                />
              </div>
              <div className="item">
                <Image
                  className="object-cover"
                  width={236}
                  height={350}
                  src={slide1}
                  alt="Home 9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
