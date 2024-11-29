import Link from "next/link";
import React from "react";

const galleriesData = [
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
    height: "600px",
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
  //   {
  //     projectName: "Project 4",
  //     description: "some description",
  //     imageSrc: "/kitchen-reno.png",
  //     altText: "Gallery Image",
  //     link: "/proj4",
  //     c2a: "Project Details",
  //     height: 900,
  //   },
  //   {
  //     projectName: "Project 5",
  //     description: "some description",
  //     imageSrc: "https://i.ibb.co/mhWGgxw/image-5.jpg",
  //     altText: "Gallery Image",
  //     link: "/proj5",
  //     c2a: "Project Details",
  //     height: 1200,
  //   },
  //   {
  //     projectName: "Project 6",
  //     description: "some description",
  //     imageSrc: "https://i.ibb.co/njyBV8y/image-8.jpg",
  //     altText: "Gallery Image",
  //     link: "/proj6",
  //     c2a: "Project Details",
  //     height: 800,
  //   },
  //   {
  //     projectName: "Project 7",
  //     description: "some description",
  //     imageSrc: "https://i.ibb.co/ssbFsXB/image-3.jpg",
  //     altText: "Gallery Image",
  //     link: "/proj7",
  //     c2a: "Project Details",
  //     height: 400,
  //   },
  //   {
  //     projectName: "Project 8",
  //     description: "some description",
  //     imageSrc: "https://i.ibb.co/H4zC1j4/image-8.jpg",
  //     altText: "Gallery Image",
  //     link: "/proj8",
  //     c2a: "Project Details",
  //     height: 1200,
  //   },
  //   {
  //     projectName: "Project 9",
  //     description: "some description",
  //     imageSrc: "https://i.ibb.co/VWbtHkp/image-9.jpg",
  //     altText: "Gallery Image",
  //     link: "/proj9",
  //     c2a: "Project Details",
  //     height: 600,
  //   },
];

export default function Gallery() {
  return (
    <section className="bg-white mb-[200px] dark:bg-dark">
      <div className="container">
        <div className="break-inside-avoid gap-4 md:columns-2 lg:columns-3">
          {galleriesData.map((gallery, i) => (
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
    </section>
  );
}
