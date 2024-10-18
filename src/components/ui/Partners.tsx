import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-black text-xl text-gray-600 text-center">
          We curate your spaces to perfection
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {/* LOGO 1 */}
            <li>
              <Image
                src="https://logos-world.net/wp-content/uploads/2022/04/Crate-Barrel-Logo.png"
                alt="Crate & Barrel"
                className="w-28"
                width={65}
                height={65}
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src="https://seeklogo.com/images/I/IKEA-logo-647286450F-seeklogo.com.png"
                alt="Ikea"
                className="w-28"
                width={65}
                height={65}
              />
            </li>

            {/* LOGO 3 */}
            <li>
              <Image
                src="https://torontotours.ca/wp-content/uploads/2016/05/restoration-hardware.png"
                alt="Restoration Hardware"
                className="w-28"
                width={65}
                height={65}
              />
            </li>

            {/* LOGO 4 */}
            <li>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6511dee3a3dc1b02621415f5/c2ff98d4-60ad-4bad-abe8-1848d5a6aa88/ArhausLogo.png"
                alt="Arhaus"
                className="w-28"
                width={65}
                height={65}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
