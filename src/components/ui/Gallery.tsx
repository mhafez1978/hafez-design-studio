import Link from "next/link";
import React from "react";

const residentialData = [
  {
    projectName: "Kitchen Renovation",
    description:
      "The overall design creates a contemporary, inviting space that seamlessly blends aesthetics with practicality.",
    imageSrc: "/kitchen-reno.png",
    altText: "Gallery Image",
    link: "/kitchen-renovation",
    c2a: "Project Details",
    height: "500px",
    width: "600px",
  },
  {
    projectName: "E-Design Condo",
    description: "E-Design Apartment Renovation, Marseille France",
    imageSrc: "/e-design-condo-design.png",
    altText: "Gallery Image",
    link: "/condo-renovation",
    c2a: "Project Details",
    height: "500px",
    width: "450px",
  },
  {
    projectName: "E-Design Millwork Headboard",
    description: "E-design bedroom transformation, Singapore",
    imageSrc: "/e-design-bedroom.png",
    altText: "Gallery Image",
    link: "/proj3",
    c2a: "Project Details",
    height: "500px",
    width: "1350px",
  },
];
const commercialData = [
  {
    projectName: "Corporate Design",
    description:
      "The overall design creates a contemporary, inviting space that seamlessly blends aesthetics with practicality.",
    imageSrc: "/lobby-design.png",
    altText: "Office Design",
    link: "/office-design",
    c2a: "Project Details",
    height: "500px",
    width: "600px",
  },
  // {
  //   projectName: "E-Design Condo",
  //   description: "E-Design Apartment Renovation, Marseille France",
  //   imageSrc: "/e-design-condo-design.png",
  //   altText: "Gallery Image",
  //   link: "/condo-renovation",
  //   c2a: "Project Details",
  //   height: "500px",
  //   width: "450px",
  // },
  // {
  //   projectName: "E-Design Millwork Headboard",
  //   description: "E-design bedroom transformation, Singapore",
  //   imageSrc: "/e-design-bedroom.png",
  //   altText: "Gallery Image",
  //   link: "/proj3",
  //   c2a: "Project Details",
  //   height: "500px",
  //   width: "1350px",
  // },
];

export default function Gallery() {
  return (
    <section className="bg-white mb-[200px] dark:bg-dark">
      <div className="container">
        <div className="w-full">
          <h2 className="text-4xl font-semibold mb-8 italic">
            Ressidential Projects
          </h2>
          <div className="break-inside-avoid gap-4 md:columns-2 lg:columns-3">
            {residentialData.map((gallery, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl mb-4"
              >
                <Link href={gallery.link}>
                  <img
                    src={gallery.imageSrc}
                    alt={gallery.altText}
                    className={`w-full object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-105`}
                    style={{ height: gallery.height, width: gallery.width }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 rounded-xl">
                    {/* Centered Overlay Text */}
                    <div className="flex flex-col justify-center text-left h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="w-[80%] mx-auto pl-[5vw] text-white -ml-6 text-3xl font-bold text-left mb-4">
                        {gallery.projectName}
                      </h3>
                      <p className="w-[70%] mx-auto text-white text-md font-base mb-6">
                        {gallery.description}
                      </p>
                      <button className=" w-[70%] mx-auto text-sm text-white bg-black bg-opacity-70 px-4 py-2 rounded hover:bg-opacity-90">
                        {gallery.c2a}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-8">
          <h2 className="font-semibold text-4xl mb-8 italic">
            Commercial Projects
          </h2>
          <div className="break-inside-avoid gap-4 md:columns-2 lg:columns-3">
            {commercialData.map((gallery, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl mb-4"
              >
                <Link href={gallery.link}>
                  <img
                    src={gallery.imageSrc}
                    alt={gallery.altText}
                    className={`w-full object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-105`}
                    style={{ height: gallery.height, width: gallery.width }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 rounded-xl">
                    {/* Centered Overlay Text */}
                    <div className="flex flex-col justify-center text-left h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="w-[80%] mx-auto pl-[5vw] text-white -ml-6 text-3xl font-bold text-left mb-4">
                        {gallery.projectName}
                      </h3>
                      <p className="w-[70%] mx-auto text-white text-md font-base mb-6">
                        {gallery.description}
                      </p>
                      <button className=" w-[70%] mx-auto text-sm text-white bg-black bg-opacity-70 px-4 py-2 rounded hover:bg-opacity-90">
                        {gallery.c2a}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
