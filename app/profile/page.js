import React from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const profile = () => {
  return (
    <div className="relative text-white">
    <Background />
    <div
      id="viewport"
      className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
    >
      <span id="yref"></span>
      <Navbar />
      <main className="flex flex-col items-center">Profile</main>
      <Footer />
    </div>
  </div>
  );
};

export default profile;
