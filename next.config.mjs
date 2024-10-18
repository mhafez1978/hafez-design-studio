/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com", // Allow placeholder image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tailgrids.com", // Allow placeholder image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.architonic.com", // Allow placeholder image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.architonic.com", // Allow placeholder image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "torontotours.ca", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "logos-world.net", // Allow placeholder image domain
        pathname: "*/**",
      },
    ],
  },
};

export default nextConfig;
