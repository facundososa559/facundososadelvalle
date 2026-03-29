import { DM_Sans, Outfit, Inter, Sora, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Footer from "@/components/ui/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Facundo Sosa",
  description: "Hago música y escribo lo que pienso.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${dmSans.variable} ${outfit.variable} ${inter.variable} ${sora.variable} ${manrope.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}