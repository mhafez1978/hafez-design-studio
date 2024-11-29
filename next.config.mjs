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
      {
        protocol: "https",
        hostname: "i.ibb.co", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "api.hafezdesignstudio.com", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co", // Allow placeholder image domain
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com", // Allow placeholder image domain
        pathname: "*/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.hafezdesignstudio.com/wp-json/wp/v2/:path*", // Proxy to WordPress API
      },
    ];
  },
};

export default nextConfig;
