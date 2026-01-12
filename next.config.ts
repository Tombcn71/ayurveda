import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tienda",
        destination: "https://martinaalejandrag12.sg-host.com/tienda/",
      },
      {
        source: "/tienda/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/tienda/:path*",
      },
      {
        source: "/producto/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/producto/:path*",
      },
      {
        source: "/producto-categoria/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/producto-categoria/:path*",
      },
      {
        source: "/carrito",
        destination: "https://martinaalejandrag12.sg-host.com/carrito/",
      },
      {
        source: "/finalizar-compra",
        destination:
          "https://martinaalejandrag12.sg-host.com/finalizar-compra/",
      },
      {
        source: "/finalizar-compra/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/finalizar-compra/:path*",
      },
      {
        source: "/mi-cuenta",
        destination: "https://martinaalejandrag12.sg-host.com/mi-cuenta/",
      },
      {
        source: "/mi-cuenta/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/mi-cuenta/:path*",
      },
      {
        source: "/wp-content/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/wp-content/:path*",
      },
      {
        source: "/wp-includes/:path*",
        destination:
          "https://martinaalejandrag12.sg-host.com/wp-includes/:path*",
      },
      {
        source: "/wp-json/:path*",
        destination: "https://martinaalejandrag12.sg-host.com/wp-json/:path*",
      },
      {
        source: "/wp-admin/admin-ajax.php",
        destination:
          "https://martinaalejandrag12.sg-host.com/wp-admin/admin-ajax.php",
      },
    ];
  },
};

export default nextConfig;
