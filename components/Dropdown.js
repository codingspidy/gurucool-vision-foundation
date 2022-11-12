import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div>
      <div className="">
        <button onClick={handleToggle}>
          <i className="fa-solid fa-caret-down text-lg"></i>
        </button>
        <div
          className={
            (showDropdown ? "block " : "hidden ") +
            "bg-white absolute top-16 left-0 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "12rem" }}
        >
          <a
            href="#pablo"
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Action
          </a>
          <a
            href="#pablo"
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Another action
          </a>
          <a
            href="#pablo"
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Something else here
          </a>
        </div>
      </div>
    </div>
  );
}
