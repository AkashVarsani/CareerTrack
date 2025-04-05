import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"], // Specify the required font weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerTrack",
  description: "CareerTrack - Your Career Companion",
  icons: "/logo.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        property="og:title"
        content="CareerTrack - Your Pathway to a Bright Future"
      />
      <meta
        property="og:description"
        content="Discover the best career options, resources, skill assessments, and community to guide you from 10th grade to graduation."
      />
      <meta
        property="og:image"
        content="https://career-track-psi.vercel.app/logo.ico"
      />
      <meta property="og:url" content="https://career-track-psi.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CareerTrack" />
      <meta property="og:locale" content="en_US" />
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-poppins antialiased`}
      >
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
