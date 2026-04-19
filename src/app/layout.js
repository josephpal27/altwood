// import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Altwood - The Best Plywood Manufacturer in India",
  description: "Altwood's shuttering plywood is top-notch! Strong, durable, and built to last through countless uses. Perfect for anyone who values quality and reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
