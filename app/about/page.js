"use client";

import React from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const About = () => {
  const router = useRouter();
  return (
    <div className="relative text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="container px-6 pt-16 w-[90%]">
            <div className="">
              <h1 className="text-5xl max-sm:text-3xl font-bold text-p1 mb-6">
                About CareerTrack
              </h1>
              <p className="text-xl max-sm:text-lg mx-auto leading-relaxed">
                At{" "}
                <span className="font-semibold text-blue-300">CareerTrack</span>
                , we believe that choosing the right career should be an
                informed and empowering journey. Whether you are a student
                exploring options, a graduate preparing for the job market, or a
                professional seeking growth, we provide the roadmap to success.
              </p>
            </div>

            <div className="bg-p2 max-sm:py-6 py-12 mt-8 rounded-xl">
              <div className="container mx-auto px-6 max-sm:px-3 text-center">
                <h2 className="text-4xl max-sm:text-xl font-extrabold text-p4 mb-4">
                  Why Choose CareerTrack?
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-lg">
                  <motion.div
                   whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.1 }}
                  className="p-6 bg-p4 rounded-lg shadow-lg">
                    <h3 className="text-xl max-sm:text-sm font-semibold text-blue-400">
                      Personalized Career Paths
                    </h3>
                    <p className="mt-2 max-sm:text-xs">
                      We provide step-by-step career guidance tailored to your
                      interests, skills, and market trends.
                    </p>
                  </motion.div>
                  <motion.div
                   whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.1 }}
                  className="p-6 bg-p4 rounded-lg shadow-lg">
                    <h3 className="text-xl max-sm:text-sm font-semibold text-blue-400">
                      Expert-Curated Resources
                    </h3>
                    <p className="mt-2 max-sm:text-xs">
                      Access top-quality articles, videos, and courses to
                      upskill and stay ahead in your chosen field.
                    </p>
                  </motion.div>
                  <motion.div
                   whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.1 }}
                  className="p-6 bg-p4 rounded-lg shadow-lg">
                    <h3 className="text-xl max-sm:text-sm font-semibold text-blue-400">
                      Community & Networking
                    </h3>
                    <p className="mt-2 max-sm:text-xs">
                      Connect with like-minded individuals, mentors, and
                      professionals to expand your career opportunities.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-6 py-10">
              <h2 className="text-4xl max-sm:text-lg font-semibold text-blue-300">
                Our Mission
              </h2>
              <ul className="list-inside list-disc">
                <li className="text-xl max-sm:text-sm mx-auto leading-relaxed mt-4">
                  To empower students and professionals with the right guidance,
                  skills, and networks needed to build a successful and
                  fulfilling career.
                </li>
                <li className="text-xl max-sm:text-sm mx-auto leading-relaxed mt-4">
                  We are dedicated to bridging the gap between ambition and
                  achievement. Our goal is to equip individuals with the
                  knowledge, tools, and support they need to make informed
                  career decisions and thrive in the ever-changing job market.
                </li>
              </ul>
            </div>
            <div className="h-1 bg-p2 rounded-2xl"></div>
            <div className="container mx-auto px-6 py-10">
              <h2 className="text-4xl max-sm:text-lg font-semibold text-blue-300">
                Join the CareerTrack Movement
              </h2>
              <ul className="list-inside list-disc">
                <li className="text-xl max-sm:text-sm mx-auto leading-relaxed mt-4">
                  Your career journey is unique, and we’re here to support you
                  every step of the way. Explore opportunities, enhance your
                  skills, and connect with a vibrant community of learners and
                  achievers.
                </li>
                <li className="text-xl max-sm:text-sm mx-auto leading-relaxed mt-4">
                  Ready to take charge of your future? Start your journey with
                  CareerTrack today!
                </li>
              </ul>
            </div>

            <div className="h-1 bg-p2 rounded-2xl"></div>
            <div className="sm:flex gap-3 justify-center">
              <div className="text-center py-12 max-sm:py-4">
                <button
                  onClick={() => router.push("/tracks")}
                  className="bg-p2 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-p5 transition"
                >
                  Explore Career Paths
                </button>
              </div>
              <div className="text-center py-12 max-sm:py-4">
                <button
                  onClick={() => router.push("/upskill")}
                  className="bg-p2 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-p5 transition"
                >
                  Upskill Today!
                </button>
              </div>
              <div className="text-center py-12 max-sm:py-4">
                <button
                  onClick={() => router.push("/network")}
                  className="bg-p2 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-p5 transition"
                >
                  Connect with Community
                </button>
              </div>
            </div>
            <div className="h-1 bg-p2 rounded-2xl"></div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
