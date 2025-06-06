"use client";

import {useEffect,React} from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import darkColors from "../components/Colors";
import { motion } from "framer-motion";
import arrayNames from "../components/SkillsData";

const Upskill = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSection, setActiveSection] = useState("beginner");
  
    useEffect(() => {
      document.title = "Upskill - CareerTrack";
    } , []);

  const capitalize = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="relative overflow-hidden text-white">
      <Background />
      <div
        id="viewport"
        className="overflow-x-hidden overflow-y-scroll no-scrollbar h-screen w-screen"
      >
        <span id="yref"></span>
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="p-4 max-sm:w-[90vw] w-[80vw] flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl text-center font-bold text-p0 mt-[50px] mb-3"
            >
              Boost Your Expertise! Choose a Skill Today!
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
            {!selectedSkill ? (
              <div>
                {arrayNames.map((item, idx) => (
                  <div key={idx}>
                    <h2 className="text-3xl  max-sm:text-xl font-bold text-p0 mt-8">
                      {item.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4 mt-2">
                      {item.array.map((skill, index) => (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.1 }}
                          key={index}
                          style={{
                            backgroundColor:
                              darkColors[(index + idx * 8) % darkColors.length],
                          }}
                          className="p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100"
                          onClick={() => {setSelectedSkill(skill);document.getElementById("yref").scrollIntoView({ behavior: "smooth" });}} 
                        >
                          {skill.skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 max-sm:w-[90vw]">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Back
                </button>
                <h1 className="text-4xl max-md:text-xl font-bold">{selectedSkill.skill}</h1>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 border max-md:text-sm rounded shadow bg-p4-trans">
                    <h2 className="text-xl max-md:text-sm font-semibold">Description</h2>
                    <p>{selectedSkill.description}</p>
                  </div>
                  <div className="p-4 border rounded  max-md:text-sm  shadow bg-p4-trans">
                    <h2 className="text-xl max-md:text-sm font-semibold">Prerequisites</h2>
                    <ul className="list-disc pl-5">
                      {selectedSkill.prerequisites.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h2 className="text-3xl  max-md:text-lg font-bold">Learning Path</h2>
                <div>
                  <div className="grid grid-cols-3 gap-6  max-md:gap-2">
                    {["beginner", "intermediate", "advanced"].map(
                      (level, index) =>
                        level === activeSection ? (
                          <button
                            key={level}
                            className="px-4 py-6 max-sm:px-1 scale-105 bg-p2 font-semibold text-2xl  max-md:text-sm rounded border shadow p-4"
                            onClick={() =>
                              setActiveSection(
                                level === activeSection ? null : level
                              )
                            }
                          >
                            {capitalize(level)}
                          </button>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.1 }}
                            key={level}
                            className="px-4 py-6 max-sm:px-1 bg-p4 hover:bg-p2 font-semibold text-2xl  max-md:text-sm rounded border shadow p-4"
                            onClick={() =>
                              setActiveSection(
                                level === activeSection ? null : level
                              )
                            }
                          >
                            {capitalize(level)}
                          </motion.button>
                        )
                    )}
                  </div>
                  {activeSection && (
                    <div className="mt-4 p-4 border rounded bg-p4-trans">
                      <div className="mb-4">
                        <h3 className="text-2xl  max-md:text-lg  font-semibold">
                          {" "}
                          {capitalize(activeSection)} Topics
                        </h3>
                        <ul className="list-disc grid md:grid-cols-2 gap-2 mt-4 mx-4">
                          {selectedSkill.learningPath[
                            activeSection
                          ]?.topics.map((topic, idx) => (
                            <li
                              className="p-4 border border-p2 rounded shadow block bg-p3 font-semibold"
                              key={idx}
                            >
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl  max-md:text-lg   font-semibold">Resources</h3>
                        <div className="grid gap-4 mx-4">
                          {Object.entries(
                            selectedSkill.learningPath[activeSection]
                              ?.resources || {}
                          ).map(([key, resources]) => (
                            <div key={key}>
                              <h3 className="text-lg  max-md:text-sm mt-4 mb-2 font-semibold">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </h3>
                              <div className="grid md:grid-cols-2">
                                {resources.map((resource, idx) => {
                                  if (key === "videos") {
                                    const videoId = new URL(
                                      resource.url
                                    ).searchParams.get("v"); // Extract Video ID
                                    return (
                                      <div key={idx}>
                                      <iframe
                                        key="11"
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${videoId}`} 
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        className="max-sm:hidden text-sm"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        ></iframe>
                                         <iframe
                                        key="12"
                                        width="260"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        className="sm:hidden"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                      ></iframe>
                                        </div>
                                    );
                                  } else {
                                    return (
                                      <motion.a
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.1 }}
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 border border-p2 rounded shadow block bg-p1 text-black font-semibold hover:bg-p2"
                                      >
                                        {resource.title}
                                      </motion.a>
                                    );
                                  }
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-3xl  max-md:text-lg   font-bold">Practice</h2>
                <div className="border rounded shadow">
                  <div className="grid md:grid-cols-2 gap-4 px-4">
                    {["problems", "miniProjects"].map((key) => (
                      <div key={key} className="py-4">
                        <h3 className="text-lg  max-md:text-sm font-semibold">
                          {capitalize(key.replace(/([A-Z])/g, " $1").trim())}
                        </h3>
                        {selectedSkill.practice[key].map((item, idx) => (
                          <motion.a
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.1 }}
                            key={idx}
                            href={item.url}
                            target="_blank"
                            className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                          >
                            {item.title}
                          </motion.a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <h2 className="text-3xl  max-md:text-lg font-bold">Community</h2>

                <div className="grid md:grid-cols-2 gap-4 px-4">
                  {["discussionForum", "discord"].map((key) => (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.1 }}
                      key={key}
                      href={selectedSkill.community[key]}
                      target="_blank"
                      className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                    >
                      {capitalize(key.replace(/([A-Z])/g, " $1").trim())}
                    </motion.a>
                  ))}
                </div>
                <h2 className="text-3xl  max-md:text-lg   font-bold">Career</h2>
                <div className="border rounded shadow p-4">
                  <div className="mb-4">
                    <h3 className="text-lg  max-md:text-sm font-semibold">Roles</h3>
                    <ul className="list-disc grid md:grid-cols-2 gap-2 mt-4 mx-4">
                      {selectedSkill.career.roles.map((role, idx) => (
                        <li
                          className="p-4 border border-p2 rounded shadow block bg-p3 font-semibold"
                          key={idx}
                        >
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg  max-md:text-sm font-semibold">Job Portals</h3>
                  <div className="grid md:grid-cols-2 gap-4 px-4">
                    {["jobPortals", "freelancing"].map((key) =>
                      selectedSkill.career[key].map((item, idx) => (
                        <motion.a
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.1 }}
                          key={idx}
                          href={item.url}
                          target="_blank"
                          className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                        >
                          {item.name}
                        </motion.a>
                      ))
                    )}
                  </div>
                </div>
                <h2 className="text-3xl  max-md:text-lg  font-bold">Progress Tracking</h2>
                <div className="border rounded shadow p-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.1 }}
                      href={selectedSkill.progressTracking.roadmap}
                      target="_blank"
                      className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                    >
                      Roadmap
                    </motion.a>
                    {selectedSkill.progressTracking.quizzes.map((quiz, idx) => (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.1 }}
                        key={idx}
                        href={quiz.url}
                        target="_blank"
                        className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                      >
                        {quiz.title}
                      </motion.a>
                    ))}
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.1 }}
                      href={selectedSkill.progressTracking.certification.url}
                      target="_blank"
                      className="block border bg-p2 hover:bg-p5-trans border-white my-2 rounded shadow p-4"
                    >
                      {selectedSkill.progressTracking.certification.title}
                    </motion.a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Upskill;
