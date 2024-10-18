"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

interface HeaderProps {
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0); // Use useRef to persist the value across renders

  const listenScrollEvent = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      if (currentScrollY > 50) {
        setIsShrunk(true);
      }
      if (currentScrollY > 100) {
        setIsHidden(true); // Hide the header completely if scrolling far enough down
      }
    } else {
      setIsHidden(false); // Show the header again
      if (currentScrollY < 50) {
        setIsShrunk(false); // Unshrink the header
      }
    }
    lastScrollY.current = currentScrollY; // Update the ref value
  }, []); // Empty dependency array to memoize the function

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [listenScrollEvent]);

  return (
    <header
      className={`fixed w-screen top-0 left-0 w-full transition-all duration-500 ease-in-out flex flex-col justify-center items-center z-50 ${
        isHidden ? "h-0 opacity-0" : isShrunk ? "h-12" : "h-[20vh]"
      } bg-white px-4`}
    >
      <div
        className={`w-full  flex flex-row justify-between items-center transition-opacity duration-500 ease-in-out ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Center (logo or h1) */}
        <div className="flex-grow flex justify-start lg:justify-center lg:items-center">
          {logo ? (
            <Image
              width={360}
              height={100}
              src={logo}
              alt="logo"
              className={`transition-all duration-500 ease-in-out ${
                isShrunk ? "h-8 w-24" : "h-16 w-36"
              }`}
            />
          ) : (
            <h1
              className={`bg-sky-100 text-3xl font-black uppercase text-center text-slate-800 py-2 rounded-r-md px-4 transition-all duration-500 ${
                isShrunk ? "text-sm" : "text-3xl"
              }`}
            >
              Hafez<span className="font-thin"> Design Studio</span>
            </h1>
          )}
        </div>
        {/* Left side (mobile menu) */}
        <div className="lg:hidden">
          <MobileMenu iconColor="black" size={36} />
        </div>
        {/* Right side (empty for centering purposes) */}
        <div className="lg:hidden" style={{ width: "36px" }}></div>
      </div>

      {/* Desktop menu */}
      <nav
        className={`w-desktopMenu hidden lg:flex flex-row justify-center items-center lowercase text-slate-800 lg:pb-4 lg:text-xl transition-all duration-500 ${
          isShrunk ? "text-sm" : "text-md"
        }`}
      >
        <DesktopMenu linkColor="text-slate-800" />
      </nav>
    </header>
  );
};

export default Header;
