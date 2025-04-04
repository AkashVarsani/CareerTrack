"use client";

import {useEffect,React} from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCircle, FaCompass, FaTimes } from "react-icons/fa";
import { careerGuidanceData } from "../components/trackData";
import { higherSecondary } from "../components/trackData";
import darkColors from "../components/Colors";

const Tracks = () => {
  const [ten, setTen] = useState(false);
  const [twelve, setTwelve] = useState(false);

  const [tenMain, setTenMain] = useState(null);
  const [tenSub, setTenSub] = useState(null);

  const [twelveMain, setTwelveMain] = useState(null);
  const [twelveSub, setTwelveSub] = useState(null);

  useEffect(() => {
    document.title = "Tracks - CareerTrack";
  }, []);

  const ontenclick = () => {
    if (!ten) scrollToElementWithOffset("section11", 100);
    setTen(!ten);
    setTenMain(null);
    setTenSub(null);
  };
  const ontwelveclick = () => {
    if (!twelve) scrollToElementWithOffset("section21", 100);
    setTwelve(!twelve);
    setTwelveMain(null);
    setTwelveSub(null);
  };

  function scrollToElementWithOffset(elementId, offset = 100, top = true) {
    let elementTop = 0;
    if (top) {
      elementTop =
        document.getElementById(elementId).getBoundingClientRect().top -
        document.getElementById("yref").getBoundingClientRect().top -
        offset;
    } else {
      elementTop =
        document.getElementById(elementId).getBoundingClientRect().bottom -
        document.getElementById("yref").getBoundingClientRect().top +
        offset -
        document.body.scrollHeight +
        30;
    }
    document
      .getElementById("viewport")
      .scrollTo({ top: elementTop, behavior: "smooth" });
  }

  // setInterval(()=>{
  //   console.log(document.body.scrollHeight);
  // },1000);

  return (
    <div className="relative overflow-hidden">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main>
          <div className="flex flex-col items-center justify-center mx-[5%]">
            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl text-center font-bold text-p0 mt-[50px] mb-3"
            >
              Shape Your Future: Choose Your Career Path!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold w-[50vw] h-1 bg-p0 box-border text-p0 rounded-xl mb-1"
            ></motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold w-[25vw] h-1 bg-p0 box-border text-p0 rounded-xl"
            ></motion.p>
            {/* ////////////////////////////// 10th Section Starts Here */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4 justify-around w-[80%] h-full mb-[3%] mt-[4vh] bg-p4-trans text-white p-8 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl"
            >
              <div className="xl:w-1/2 p-[5%]">
                <h2 className="text-6xl max-sm:text-3xl font-semibold mb-2">After 10th</h2>
                <p className="text-2xl max-sm:text-lg">
                  Discover streams, courses, and career paths for your bright
                  future!
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => ontenclick()}
                    className="mt-4 bg-white text-xl text-p4 px-6 py-3 rounded-lg font-medium hover:bg-blue-200"
                  >
                    {!ten && (
                      <div className="flex max-sm:text-lg justify-center items-center gap-3">
                        <FaCompass className="text-3xl text-blue-500" /> Explore
                        Paths
                      </div>
                    )}
                    {ten && (
                      <div className="flex max-sm:text-lg justify-center items-center gap-3">
                        <FaTimes className="text-2xl text-black" /> Close Paths
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="max-xl:hidden xl:w-1/2 flex justify-center items-center">
                <Image
                  src="https://wittysparks.com/wp-content/uploads/2020/10/tips-to-choose-the-right-college.jpg"
                  alt="After 10th"
                  width={1500}
                  height={1500}
                  className="rounded-2xl shadow-lg w-[90%] h-[90%]"
                ></Image>
              </div>
            </motion.div>

            {/* Section 1 */}
            <div id="section11">
              {ten && (
                <div>
                  <div className="grid xl:grid-cols-4 gap-6 max-sm:gap-2">
                    {careerGuidanceData.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-p1 p-4 rounded-2xl flex flex-col gap-3 max-sm:gap-1 cursor-pointer text-3xl max-sm:text-lg  text-p4 font-bold"
                        onClick={() => {
                          setTenMain(item);
                          setTenSub(null);
                          scrollToElementWithOffset("section12", 100);
                        }}
                      >
                        {item.logo}
                        {item.title}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 3 */}

            <div id="section13">
              {ten && tenSub && (
                <div
                  style={{ backgroundColor: tenSub.color }}
                  className="bg-gray-200 text-white p-6 rounded-lg mt-6"
                >
                  <div className="text-3xl max-sm:text-lg font-bold text-white flex items-center gap-4">
                    {tenSub.logo} {tenSub.title}
                  </div>
                  <div className="mt-4 text-lg max-sm:text-xs">{tenSub.description}</div>
                </div>
              )}
            </div>

            {/* Section 2 */}

            <div id="section12">
              {ten && tenMain && (
                <div className="bg-p4-trans p-6 rounded-lg mt-2">
                  <div className="text-3xl max-xl:text-xl font-bold text-p1 flex items-center gap-4">
                    {tenMain.logo} {tenMain.title}
                  </div>
                  <div className="flex max-xl:flex-col mt-4 gap-10">
                    <div className="xl:w-1/4 text-lg max-sm:text-sm">
                      {tenMain.description.split(". ").map((point, index) =>
                        point.trim() ? (
                          <div
                            key={index}
                            className="flex text-white items-start gap-2"
                          >
                            <span>
                              <FaCircle size={10} className="mt-2 max-sm:w-2" />
                            </span>
                            <span>{point.trim()}.</span>
                          </div>
                        ) : null
                      )}
                    </div>

                    <div className="xl:w-3/4 grid xl:grid-cols-2 gap-4">
                      {tenMain.subType.map((sub, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="text-white p-4 rounded-lg cursor-pointer shadow-md"
                          style={{
                            backgroundColor:
                              darkColors[index % darkColors.length],
                          }}
                          onClick={() => {
                            setTenSub({
                              ...sub,
                              color: darkColors[index % darkColors.length],
                            });
                            scrollToElementWithOffset("section13", 100);
                          }}
                        >
                          <div className="text-xl max-sm:text-sm flex items-center gap-3 font-semibold mt-2">
                            <span className="w-10 text-3xl max-sm:text-lg">{sub.logo}</span>
                            {sub.title}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ////////////////////////////// 10th Section Ends Here */}

            {/* ////////////////////////////// 12th Section Starts Here */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4 justify-around w-[80%] h-full my-[3%] bg-p4-trans text-white p-8 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl"
            >
              <div className="max-xl:hidden w-1/2 flex justify-center items-center">
                <Image
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1724e7118581997.608bd2dada4de.jpg"
                  alt="After 10th"
                  width={1500}
                  height={1500}
                  className="rounded-2xl shadow-lg w-[90%] h-[90%]"
                ></Image>
              </div>
              <div className="xl:w-1/2 p-[5%]">
                <h2 className="text-6xl max-sm:text-3xl font-semibold mb-2">After 12th</h2>
                <p className="text-2xl max-sm:text-lg ">
                  Choose the right degree, professional courses, and career
                  opportunities!
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => ontwelveclick()}
                    className="mt-4 bg-white text-xl max-sm:text-lg text-p4 px-6 py-3 rounded-lg font-medium hover:bg-blue-200"
                  >
                    {!twelve && (
                      <div className="flex justify-center items-center gap-3">
                        <FaCompass className="text-3xl text-blue-500" />
                        Explore Careers
                      </div>
                    )}
                    {twelve && (
                      <div className="flex justify-center items-center gap-3">
                        <FaTimes className="text-2xl text-black" /> Close Paths
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Section 21 */}
            <div id="section21">
              {twelve && (
                <div>
                  <div className="grid xl:grid-cols-4 gap-6 max-sm:gap-3">
                    {higherSecondary.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-p1 p-4 max-sm:p-2 rounded-2xl max-sm:rounded-xl flex flex-col gap-3 max-sm:gap-1 cursor-pointer text-3xl max-sm:text-lg text-p4 font-bold"
                        onClick={() => {
                          setTwelveMain(item);
                          setTwelveSub(null);
                          scrollToElementWithOffset("section22", 100);
                        }}
                      >
                        {item.logo}
                        {item.title}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 23 */}

            <div id="section23">
              {twelve && twelveSub && (
                <div
                  style={{ backgroundColor: twelveSub?.color }}
                  className="bg-gray-200 text-white p-6 rounded-lg mt-6"
                >
                  <div className="text-3xl  max-sm:text-lg font-bold text-white flex items-center gap-4">
                    {twelveSub.logo} {twelveSub.title}
                  </div>
                  <div className="mt-4 text-lg  max-sm:text-sm">{twelveSub.description}</div>
                </div>
              )}
            </div>

            {/* Section 22 */}

            <div id="section22">
              {twelve && twelveMain && (
                <div className="bg-p4-trans p-6 rounded-lg mt-2">
                  <div className="text-3xl max-sm:text-lg font-bold text-p1 flex items-center gap-4">
                    {twelveMain.logo} {twelveMain.title}
                  </div>
                  <div className="flex max-sm:flex-col mt-4 gap-10">
                    <div className="xl:w-1/4 text-lg  max-sm:text-sm">
                      {twelveMain.description.split(". ").map((point, index) =>
                        point.trim() ? (
                          <div
                            key={index}
                            className="flex text-white items-start gap-2"
                          >
                            <span>
                              <FaCircle size={10} className="mt-2  max-sm:w-2" />
                            </span>
                            <span>{point.trim()}.</span>
                          </div>
                        ) : null
                      )}
                    </div>

                    <div className="xl:w-3/4 grid xl:grid-cols-2 gap-4 max-sm:gap-1">
                      {twelveMain.subType.map((sub, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="text-white p-4 rounded-lg cursor-pointer shadow-md"
                          style={{
                            backgroundColor:
                              darkColors[index % darkColors.length],
                          }}
                          onClick={() => {
                            setTwelveSub({
                              ...sub,
                              color: darkColors[index % darkColors.length],
                            });
                            scrollToElementWithOffset("section23", 100);
                          }}
                        >
                          <div className="text-xl max-sm:text-sm flex items-center gap-3 max-sm:gap-1 font-semibold mt-2">
                            <span className="w-10 text-3xl max-sm:text-lg">{sub.logo}</span>
                            {sub.title}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ////////////////////////////// 12th Section Ends Here */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Tracks;
