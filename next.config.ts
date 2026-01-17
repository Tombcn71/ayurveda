/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ayurvedasalud.com",
      },
      {
        protocol: "https",
        hostname: "**.sg-host.com", // Voor het geval je nog de tijdelijke SiteGround URL gebruikt
      },
    ],
  },
};

export default nextConfig;
