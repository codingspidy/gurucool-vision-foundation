import { useState } from "react";

export default function ImpactHighlights() {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  const [item6, setItem6] = useState(false);
  const [item7, setItem7] = useState(false);

  const handleMouse1 = () => {
    setItem1(true);
    setItem2(false);
    setItem3(false);
    setItem4(false);
    setItem5(false);
    setItem6(false);
    setItem7(false);
  };
  const handleMouse2 = () => {
    setItem1(false);
    setItem2(true);
    setItem3(false);
    setItem4(false);
    setItem5(false);
    setItem6(false);
    setItem7(false);
  };
  const handleMouse3 = () => {
    setItem1(false);
    setItem2(false);
    setItem3(true);
    setItem4(false);
    setItem5(false);
    setItem6(false);
    setItem7(false);
  };
  const handleMouse4 = () => {
    setItem1(false);
    setItem2(false);
    setItem3(false);
    setItem4(true);
    setItem5(false);
    setItem6(false);
    setItem7(false);
  };
  const handleMouse5 = () => {
    setItem1(false);
    setItem2(false);
    setItem3(false);
    setItem4(false);
    setItem5(true);
    setItem6(false);
    setItem7(false);
  };
  const handleMouse6 = () => {
    setItem1(false);
    setItem2(false);
    setItem3(false);
    setItem4(false);
    setItem5(false);
    setItem6(true);
    setItem7(false);
  };
  const handleMouse7 = () => {
    setItem1(false);
    setItem2(false);
    setItem3(false);
    setItem4(false);
    setItem5(false);
    setItem6(false);
    setItem7(true);
  };

  return (
    <div className="bg-light-primary relative bg-no-repeat bg-center bg-cover py-20 px-6 lg:px-16">
      {/* <div className="absolute inset-0 z-10 bg-black/25" /> */}
      <div className="relative z-50">
        <h3 className="text-5xl font-bold mb-10">
          <span className="text-primary">IMPACT</span>{" "}
          <span className="text-[#0D0D0D]">HIGHLIGHTS</span>
        </h3>
        <div className="impact-grid transition-all">
          <div
            onMouseEnter={handleMouse1}
            className={`child-1 group flex justify-center items-center transition-all duration-200 ${
              item1
                ? "bg-[#F2B90C] text-black w-[255px] h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black max-h-full max-w-full ${item1 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse2}
            className={`child-2 group flex justify-center items-center transition-all duration-200 ${
              item2
                ? "bg-[#F2B90C] text-black w-[255px] h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item2 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse3}
            className={`child-3 group flex justify-center items-center transition-all duration-200 ${
              item3
                ? "bg-[#F2B90C] w-[255px] text-black h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item3 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse4}
            className={`child-4 group flex justify-center items-center transition-all duration-200 ${
              item4
                ? "bg-[#F2B90C] w-[255px] text-black h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item4 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse5}
            className={`child-5 group flex justify-center items-center transition-all duration-200 ${
              item5
                ? "bg-[#F2B90C] text-black w-[255px] h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item5 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse6}
            className={`child-6 group flex justify-center items-center transition-all duration-500 ${
              item6
                ? "bg-[#F2B90C] text-black w-[255px] h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item6 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handleMouse7}
            className={`child-7 group flex justify-center items-center transition-all duration-500 ${
              item7
                ? "bg-[#F2B90C] text-black w-[255px] h-[255px] col-span-2 row-span-2"
                : "w-[120px] h-[120px] text-white bg-[#0D0D0D]"
            }`}
          >
            <div className="w-full h-full p-4">
              <h4 className="text-2xl font-bold">23 Cities</h4>
              <p className={`text-black ${item7 ? "block" : "hidden"}`}>
                With a wide footprint and reach, we impact children at risk from
                almost all corners of India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
