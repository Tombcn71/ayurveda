import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // 1. De hoofdpagina van de winkel
        source: "/tienda",
        destination: "https://martinaalejandrag12.sg-host.com/tienda/",
      },
      {
        // 2. Vangt alle subpagina's op (producten, categorieën)
        source: "/tienda/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/:path*",
      },
      {
        // 3. Vangt specifieke WooCommerce paden op zoals /producto/ of /carrito/
        source: "/producto/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/producto/:path*",
      },
      {
        source: "/carrito/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/carrito/:path*",
      },
      {
        source: "/finalizar-compra/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/finalizar-compra/:path*",
      },
    ];
  },
};

export default nextConfig;
