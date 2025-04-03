import React from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const network = () => {
  return (
    <div className="relative text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main className="flex flex-col items-center">Network</main>
        <Footer />
      </div>
    </div>
  );
};

export default network;
