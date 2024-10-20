// "use client";
// import React, { useState, useEffect } from "react";

// // Testimonial data (can be fetched from an API as well)
// const testimonials = [
//   {
//     details: "1",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
//     name: "Sabo Masties",
//     position: "Founder @ Rolex",
//   },
//   {
//     details: "2",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png",
//     name: "Musharof Chowdhury",
//     position: "Founder @ Ayro UI",
//   },
//   {
//     details: "3",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png",
//     name: "William Smith",
//     position: "Founder @ Trorex",
//   },
//   {
//     details: "4",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
//     name: "John Doe",
//     position: "CEO @ Example",
//   },
//   {
//     details: "5",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
//     name: "John Doe",
//     position: "CEO @ Example",
//   },
//   {
//     details: "6",
//     image:
//       "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
//     name: "John Doe",
//     position: "CEO @ Example",
//   },
// ];

// const CustomCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
//   const [slidesToShow, setSlidesToShow] = useState(2); // Track number of slides to show

//   // Adjust slidesToShow based on screen width
//   useEffect(() => {
//     const updateSlidesToShow = () => {
//       if (window.innerWidth < 768) {
//         setSlidesToShow(1); // 1 slide on small screens
//       } else {
//         setSlidesToShow(2); // 2 slides on large screens
//       }
//     };
//     updateSlidesToShow(); // Set on initial render
//     window.addEventListener("resize", updateSlidesToShow); // Update on window resize

//     return () => window.removeEventListener("resize", updateSlidesToShow);
//   }, []);

//   // Calculate the next index in the carousel
//   const nextIndex = (currentIndex + 1) % testimonials.length;

//   // Move to the next set of slides
//   const handleNext = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + slidesToShow) % testimonials.length
//     );
//   };

//   // Move to the previous set of slides
//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - slidesToShow + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section className="pb-10 pt-20 bg-gray-200 lg:pb-20 lg:pt-[120px]">
//       <div className="max-w-4xl mx-auto overflow-hidden">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap justify-center">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                 <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
//                   What our Clients Say
//                 </h2>
//                 <p className="text-base text-body-color dark:text-dark-6">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration in some
//                   form.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {/* Slide container */}
//             <div
//               className="w-full flex flex-row gap-4 justify-center items-center transition-transform duration-500"
//               style={{
//                 transform: `translateX(-${
//                   (currentIndex / testimonials.length) * 100
//                 }%)`,
//                 width: `${(testimonials.length / slidesToShow) * 100}%`,
//               }}
//             >
//               {/* Display two testimonials */}
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="w-1/2"
//                   style={{
//                     width: `${50 / slidesToShow}%`, // Adjust width based on number of slides to show
//                     minHeight: "300px", // Ensure equal height
//                   }}
//                 >
//                   <SingleTestimonial {...testimonial} />
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3">
//               <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
//                 <button className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-btn-3 transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
//                   &lt;
//                 </button>
//               </div>
//               <div className="next-arrow cursor-pointer" onClick={handleNext}>
//                 <button className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-btn-3 transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
//                   &gt;
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomCarousel;

// interface TestimonialProps {
//   image: string;
//   details: string;
//   name: string;
//   position: string;
// }

// // SingleTestimonial component
// const SingleTestimonial: React.FC<TestimonialProps> = ({
//   image,
//   details,
//   name,
//   position,
// }) => {
//   const starIcon = (
//     <svg
//       width="18"
//       height="16"
//       viewBox="0 0 18 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
//         fill="#FBB040"
//       />
//     </svg>
//   );
//   return (
//     <div className="w-full relative flex justify-center">
//       <div className="relative w-full pb-16">
//         <div className="mb-10 bg-white p-8 shadow-testimonial-5 dark:bg-dark-2 dark:shadow-box-dark lg:px-6 lg:py-8 xl:p-8">
//           <div className="mb-5 flex items-center">
//             <span className="mr-1">{starIcon}</span>
//             <span className="mr-1">{starIcon}</span>
//             <span className="mr-1">{starIcon}</span>
//             <span className="mr-1">{starIcon}</span>
//             <span className="mr-1">{starIcon}</span>
//           </div>
//           <p className="mb-6 text-base text-body-color dark:text-dark-6">
//             {details}
//           </p>
//           <div className="flex items-center">
//             <div className="mr-4 h-[50px] w-full max-w-[50px]">
//               <img src={image} alt={name} className="w-full" />
//             </div>
//             <div className="w-full">
//               <h5 className="mb-0.5 text-sm font-semibold text-dark dark:text-white">
//                 {name}
//               </h5>
//               <p className="text-xs text-secondary-color dark:text-dark-6">
//                 {position}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    details: "1",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
    name: "Sabo Masties",
    position: "Founder @ Rolex",
  },
  {
    details: "2",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png",
    name: "Musharof Chowdhury",
    position: "Founder @ Ayro UI",
  },
  {
    details: "3",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png",
    name: "William Smith",
    position: "Founder @ Trorex",
  },
  {
    details: "4",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
    name: "John Doe",
    position: "CEO @ Example",
  },
  {
    details: "5",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png",
    name: "William Smith",
    position: "Founder @ Trorex",
  },
  {
    details: "6",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
    name: "John Doe",
    position: "CEO @ Example",
  },
];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const [slidesToShow, setSlidesToShow] = useState(2); // Track number of slides to show

  // Adjust slidesToShow based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // 1 slide on small screens
      } else {
        setSlidesToShow(2); // 2 slides on large screens
      }
    };
    updateSlidesToShow(); // Set on initial render
    window.addEventListener("resize", updateSlidesToShow); // Update on window resize

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Move to the next set of slides
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + slidesToShow) % testimonials.length
    );
  };

  // Move to the previous set of slides
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - slidesToShow + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="pb-10 pt-20 drop-shadow-2xl lg:pb-20 lg:pt-[120px]">
      <div className="max-w-4xl mx-auto overflow-hidden">
        {/* Ensure overflow hidden */}
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What our Clients Say
                </h2>
                {/* <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p> */}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Slide container */}
            <div
              className="w-full flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (currentIndex / testimonials.length) * 100
                }%)`,
                width: `${(testimonials.length / slidesToShow) * 100}%`,
              }}
            >
              {/* Display the testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/2 mr-2 ml-2"
                  style={{
                    width: `${100 / slidesToShow}%`, // Each slide takes 50% for 2 slides
                    minHeight: "300px", // Ensure equal height
                    boxSizing: "border-box", // Ensure padding and borders don't affect size
                  }}
                >
                  <SingleTestimonial {...testimonial} />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-btn-3 transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
                  &lt;
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-btn-3 transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white dark:shadow-none">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;

interface TestimonialProps {
  image: string;
  details: string;
  name: string;
  position: string;
}

// SingleTestimonial component
const SingleTestimonial: React.FC<TestimonialProps> = ({
  image,
  details,
  name,
  position,
}) => {
  const starIcon = (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
        fill="#FBB040"
      />
    </svg>
  );
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16">
        <div className="mb-10 bg-white p-8 shadow-testimonial-5 dark:bg-dark-2 dark:shadow-box-dark lg:px-6 lg:py-8 xl:p-8">
          <div className="mb-5 flex items-center">
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
            <span className="mr-1">{starIcon}</span>
          </div>
          <p className="mb-6 text-base text-body-color dark:text-dark-6">
            {details}
          </p>
          <div className="flex items-center">
            <div className="mr-4 h-[50px] w-full max-w-[50px]">
              <Image
                width={64}
                height={64}
                src={image}
                alt={name}
                className="w-full"
              />
            </div>
            <div className="w-full">
              <h5 className="mb-0.5 text-sm font-semibold text-dark dark:text-white">
                {name}
              </h5>
              <p className="text-xs text-secondary-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
