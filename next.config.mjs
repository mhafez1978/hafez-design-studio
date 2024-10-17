/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com", // Allow placeholder image domain
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
