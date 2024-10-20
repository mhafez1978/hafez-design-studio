import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 h-[100px] bg-gray-950">
        <div className="container h-full mx-auto flex flex-col justify-end items-center">
          <div className="w-full min-h-1/2 text-center">
            <h6 className="text-white font-semibold text-sm">
              Hafez Design Studio &copy; 2024 - 2025 All Rights Reserved
            </h6>
            <Link href="https://blooming-brands.com" className="text-sm">
              Built &amp; Managed By{" "}
              <span className="underline underline-offset-4">
                Blooming Brands LLC
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
