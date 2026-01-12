import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Ayurveda Salud - Centro de Bienestar Ayurvédico",
  description:
    "Descubre el equilibrio perfecto entre cuerpo, mente y espíritu a través de la sabiduría ancestral del Ayurveda. Consultas personalizadas y tratamientos naturales.",
  keywords: [
    "ayurveda",
    "bienestar",
    "salud natural",
    "medicina tradicional",
    "madrid",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
