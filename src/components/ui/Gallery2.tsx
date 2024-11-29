import React from "react";

const galleriesData = [
  {
    imageSrc: "https://i.ibb.co/RN970Hg/image-1.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/LNc3hRp/image-2.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/DRsz74R/image-3.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/rmKBwhc/image-4.jpg",
    altText: "Gallery Image",
  },
];

export default function Gallery2() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {galleriesData.map((gallery, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={gallery?.imageSrc}
                alt={gallery?.altText}
                className="w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
