import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header className="text-black w-full absolute top-0 z-[10000] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-1 lg:py-0 lg:px-5 max-w-6xl lg:mx-auto">
        <Link
          className="w-32 h-auto lg:w-56 -mb-1 cursor-pointer p-0 py-2 lg:py-0 "
          href="/"
        >
          <Image
            alt="logo"
            src="/logo.png"
            width={150}
            height={50}
            loading="eager"
            className="object-contain"
          />
        </Link>
        <div className="relative z-[10003] p-1 rounded-[3px] sm:ml-5 lg:hidden ">
          {navOpen ? (
            <button onClick={handleToggle}>
              <i className="fa-light fa-xmark fa-lg text-black" />
            </button>
          ) : (
            <button onClick={handleToggle}>
              <i className="fa-light fa-bars fa-lg text-white" />
            </button>
          )}
        </div>
        <nav
          className={
            "flex flex-col max-w-[100vw] items-start sm:items-center bg-white text-black lg:text-white lg:bg-transparent fixed inset-0 z-[10002] min-h-screen lg:min-h-0 pt-32 lg:p-0 lg:static lg:translate-x-0 transform transition-transform duration-500 ease-in-out " +
            (navOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <ul className="flex flex-col lg:flex-row lg:items-center pl-7 sm:pl-0 gap-7 lg:gap-14 text-sm">
            <li
              className={
                "py-3 lg:py-5 flex items-center gap-2 relative "
                // +
                // (router.pathname == "/"
                //   ? "border-b-2 border-primary"
                //   : "nonactive")
              }
            >
              <Link
                className="text-base font-medium hover:text-primary inline-block"
                onClick={handleToggle}
                href="/"
              >
                ABOUT US
              </Link>
              <Dropdown />
            </li>
            <li
              className={
                "py-3 lg:py-5 flex items-center gap-2 relative "
                // +
                // (router.pathname == "/work"
                //   ? "border-b-2 border-primary"
                //   : "nonactive")
              }
            >
              <Link
                className="text-base font-medium hover:text-primary inline-block"
                onClick={handleToggle}
                href="/work"
              >
                OUR WORK
              </Link>
              <Dropdown />
            </li>
            <li
              className={
                "py-3 lg:py-5 flex items-center gap-2 relative "
                // +
                // (router.pathname == "/partners"
                //   ? "border-b-2 border-primary"
                //   : "nonactive")
              }
            >
              <Link
                className="text-base font-medium hover:text-primary inline-block"
                onClick={handleToggle}
                href="/partners"
              >
                PARTNER WITH US
              </Link>
              <Dropdown />
            </li>
            <li
              className={
                "py-3 lg:py-5 "
                // +
                // (router.pathname == "/financials"
                //   ? "border-b-2 border-primary"
                //   : "nonactive")
              }
            >
              <Link
                className="text-base font-medium hover:text-primary inline-block"
                onClick={handleToggle}
                href="/financials"
              >
                FINANCIALS
              </Link>
            </li>
            <li
              className={
                "py-3 lg:py-5"
                // + (router.pathname == "/contact"
                //   ? "border-b-2 border-primary"
                //   : "nonactive")
              }
            >
              <Link
                className="text-base font-medium hover:text-primary inline-block"
                onClick={handleToggle}
                href="/contact"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
