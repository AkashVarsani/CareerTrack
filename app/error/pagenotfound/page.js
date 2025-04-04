import React from "react";
import Background from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="relative  overflow-hidden text-white">
    <Background />
    <div
      id="viewport"
      className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
    >
      <span id="yref"></span>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Image
               width={300}
               height={300} className="w-[90vw] max-w-[500px]" src="https://cdni.iconscout.com/illustration/premium/thumb/page-not-found-7621872-6167026.png" alt="" />
      <Link href="/" className="py-3 w-[80vw] max-w-[500px] text-center text-xl max-sm:text-md bg-white text-black rounded-lg">Home</Link>
      </div>
      <Footer />
    </div>
  </div>
  );
};

export default PageNotFound;

export const metadata = {title: "Page not found",}
