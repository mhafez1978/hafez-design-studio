// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     // <section className="w-full h-screen bg-white flex justify-center items-center mt-20 relative">
//     //   <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center border border-red-500">
//     //     {/* Content Section */}
//     //     <div className="relative w-full bg-gray-200 p-10 text-start z-20 lg:w-[53%] lg:top-[10px] lg:-right-[200px] ">
//     //       <h3 className="text-6xl font-semibold text-gray-800 mb-4">About</h3>
//     //       <p className="text-lg text-gray-600 mb-4">
//     //         At Hafez Design Studio, our commitment to excellence in interior
//     //         design is reflected in our accreditations and dedication to creating
//     //         impactful, sustainable spaces. Based in Toronto, we pride ourselves
//     //         on delivering personalized, functional, and elegant designs that
//     //         enhance both residential and commercial environments.
//     //       </p>
//     //       <a
//     //         href="/about"
//     //         className="inline-block bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
//     //       >
//     //         More About Us
//     //       </a>
//     //     </div>
//     //     {/* Image Section */}
//     //     <div className="w-full h-full flex items-center p-0 lg:w-[66%] overflow-visible">
//     //       <Image
//     //         src="https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/64efc829-83cb-4fdd-af4d-7dbbbf4f942a/Jude%2BKamal.jpeg"
//     //         alt="Founder of Sansa Interiors in Toronto"
//     //         className="h-full w-full rounded-lg shadow-lg object-cover"
//     //         width={1000}
//     //         height={600}
//     //       />
//     //     </div>
//     //   </div>
//     // </section>
//     <section
//       id="about"
//       className="w-screen min-h-[60vh] bg-[url('https://www.shutterstock.com/image-vector/architecture-design-blueprint-plans-vector-600nw-289628753.jpg')] bg-fixed bg-cover bg-no-repeat bg-bottom"
//     >
//       <div className="container min-h-[60vh] mx-auto flex justify-center items-center">
//         {/* Content Section */}
//         <div className="absolute right-1/2 max-w-3xl bg-white/80 rounded-xl z-40 px-10 py-10">
//           <h3 className="text-6xl font-semibold text-gray-800 mb-4">About</h3>
//           <p className="text-lg text-gray-600 mb-8">
//             We are a full-service interior design studio specializing in
//             creating timeless, sophisticated, modern interiors. Our expertise
//             includes transforming kitchens, bathrooms, and designing and
//             finishing basements for rental or personal use. We also excel in
//             custom millwork and fit-ins, creating designs that enhance
//             functionality, and suit your lifestyle while increasing storage and
//             property value. In addition, we offer design services to fellow
//             interior designers and general contractors, helping them save time,
//             reduce costs, and improve project efficiency
//           </p>
//           <a
//             href="/about"
//             className="inline-block bg-black text-white bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black"
//           >
//             Learn More
//           </a>
//         </div>
//         {/* Image Section */}

//         <Image
//           // src="https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg"
//           src="/kitchen-01.jpg"
//           alt="Founder of Sansa Interiors in Toronto"
//           className="hidden absolute right-1/4 rounded-lg shadow-lg object-cover drop-shadow-2xl md:block"
//           width={1000}
//           height={800}
//         />
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen min-h-[60vh] bg-[url('https://www.shutterstock.com/image-vector/architecture-design-blueprint-plans-vector-600nw-289628753.jpg')] bg-fixed bg-cover bg-no-repeat bg-bottom"
    >
      <div className="container min-h-[60vh] mx-auto flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
        {/* Content Section */}
        <div className="z-40 md:order-1 w-full md:w-1/2 bg-white/80 rounded-xl p-6 md:p-10 relative">
          <h3 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-4">
            About
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            We are a full-service interior design studio specializing in
            creating timeless, sophisticated, modern interiors. Our expertise
            includes transforming kitchens, bathrooms, and designing and
            finishing basements for rental or personal use. We also excel in
            custom millwork and fit-ins, creating designs that enhance
            functionality, and suit your lifestyle while increasing storage and
            property value. In addition, we offer design services to fellow
            interior designers and general contractors, helping them save time,
            reduce costs, and improve project efficiency
          </p>
          <a
            href="/about"
            className="inline-block bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Learn More
          </a>
        </div>
        <div className="relative min-h-[10vh]"></div>
        {/* Image Section */}
        <div className="md:order-2 w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full max-w-[1000px]">
            <Image
              src="/kitchen-01.jpg"
              alt="Founder of Sansa Interiors in Toronto"
              className="rounded-lg shadow-lg object-cover z-10 lg:absolute lg:left-[45vw] -mt-[15vh]"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
