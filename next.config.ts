import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // De bezoeker gaat naar jouw-site.vercel.app/tienda
        source: "/tienda",
        destination: "https://martinaalejandrag12.sg-host.com/tienda/",
      },
      {
        source: "/tienda/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/:path*",
      },
      {
        // Voor de afbeeldingen, CSS en JS van de nieuwe shop
        source: "/wp-content/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/wp-content/:path*",
      },
      {
        source: "/wp-includes/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/wp-includes/:path*",
      },
    ];
  },
};

export default nextConfig;
