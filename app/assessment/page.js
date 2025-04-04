"use client";

import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import quizCategories from "../components/quizData";
import QuizResult from "../components/Result";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import "chart.js/auto";
import darkColors from "../components/Colors";

const QuizApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [visited, setVisited] = useState(Array(10).fill(false));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setAnswers(Array(10).fill(null));
    setVisited(Array(10).fill(false));
    setTimeLeft(600); // 10 minutes timer
    setSubmitted(false);
  };

  useEffect(() => {
    if (selectedCategory) {
      setQuestions(selectedCategory.array);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setQuestions(category.array);
    setVisited(Array(10).fill(false));
    setAnswers(Array(10).fill(null));
  };

  const handleAnswer = (option) => {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const handleVisited = (index) => {
    setVisited((prevVisited) => {
      const newVisited = [...prevVisited];
      newVisited[index] = true;
      console.log(newVisited);
      return newVisited;
    });
  };

  useEffect(() => {
    handleVisited(currentQuestion);
  }, [currentQuestion, selectedCategory]);

  const getStatus = (index) => {
    if (answers[index] !== null) return "answered";
    if (visited[index]) return "visited";
    return "not-visited";
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
        <main>
          {/* //////// */}
          {/* //////// */}
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl text-center font-bold text-p0 mt-[50px] mb-3"
            >
              Choose a Quiz Category & Start Your Test!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl font-bold w-[50vw] h-1 bg-p0 box-border text-p0 rounded-xl mb-1"
            ></motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-5xl font-bold w-[25vw] h-1 bg-p0 box-border text-p0 rounded-xl mb-[50px]"
            ></motion.p>
          </div>
          <div className="p-4 max-w-4xl mx-auto">
            {!selectedCategory ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {quizCategories.map((category, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: darkColors[idx % darkColors.length],
                    }}
                    className="p-4 text-white trans border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleSelectCategory(category)}
                  >
                    <span className="text-3xl mr-4">{category.logo}</span>
                    <div>
                      <h2 className="font-semibold text-lg">
                        {category.title}
                      </h2>
                      <p className="text-sm ">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : submitted ? (
              <QuizResult
                answers={answers}
                questions={questions}
                timeLeft={timeLeft}
                submitted={submitted}
                reset={reset}
              />
            ) : (
              <div>
                <div className="flex justify-between mb-4 ">
                  <h2 className="font-bold text-2xl">
                    {selectedCategory.title} Quiz
                  </h2>
                  <div className="flex items-center">
                    <FaClock className="mr-2" /> {Math.floor(timeLeft / 60)}:
                    {timeLeft % 60}
                  </div>
                </div>
                <div className="h-1 rounded-2xl bg-p1"></div>
                {/* {handleVisited()} */}
                <p className="text-lg mt-5 font-semibold min-h-20">
                  {currentQuestion + 1}. {questions[currentQuestion]?.que}
                </p>
                <div className="mt-2 space-y-2 text-black">
                  {[1, 2, 3, 4].map((opt) => (
                    <button
                      key={opt}
                      className={`block w-full py-2 px-4 border rounded-lg text-start ${
                        answers[currentQuestion] === opt
                          ? "bg-indigo-700 text-white"
                          : "bg-white"
                      }`}
                      onClick={() => handleAnswer(opt)}
                    >
                      {questions[currentQuestion]?.[`opt${opt}`]}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-blue-400 text-black w-30 py-2 rounded-xl"
                    onClick={() =>
                      setCurrentQuestion(Math.max(currentQuestion - 1, 0))
                    }
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-400 text-black w-30 py-2 rounded-xl"
                    onClick={() =>
                      setCurrentQuestion(Math.min(currentQuestion + 1, 9))
                    }
                  >
                    Next
                  </button>
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-4 p-2 bg-green-500 text-white rounded-lg w-full"
                >
                  Submit Test
                </button>
                <button
                  onClick={() => reset()}
                  className="bg-red-200 text-black mt-4 w-full text-center px-4 py-2 rounded-lg"
                >
                  Close Result
                </button>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {Array(10)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className={`p-2 text-center border rounded-md ${
                          getStatus(index) === "answered"
                            ? "bg-green-500"
                            : getStatus(index) === "visited"
                            ? "bg-yellow-300"
                            : "bg-p3-trans"
                        }`}
                        onClick={() => setCurrentQuestion(index)}
                      >
                        {index + 1}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* //////// */}
          {/* //////// */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default QuizApp;
