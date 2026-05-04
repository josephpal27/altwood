import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const clashGroteskVariable = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "100 900",
});

export const metadata = {
  title: "Altwood - The Best Plywood Manufacturer in India",
  description: "Altwood's shuttering plywood is top-notch! Strong, durable, and built to last through countless uses. Perfect for anyone who values quality and reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${clashGroteskVariable.variable}`}>
      <body>

        <div className="sm:hidden">
          <ComingSoon />
        </div>

        <div className="hidden sm:block">
          {/* Global Effects */}
          <CustomCursor />
          <SmoothScroll />

          {/* Site Content */}
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
