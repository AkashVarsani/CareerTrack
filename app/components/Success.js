"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import Image from "next/image";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      profession: "Software Engineer at Google",
      image: "https://i.pravatar.cc/150?img=1",
      message:
        "CareerTrack helped me pivot into software engineering with confidence!",
      rating: 5,
    },
    {
      name: "Michael Lee",
      profession: "Data Scientist at Meta",
      image: "https://i.pravatar.cc/150?img=2",
      message:
        "The resources and guidance were invaluable in my career growth.",
      rating: 4.8,
    },
    {
      name: "Samantha Carter",
      profession: "Cloud Architect at AWS",
      image: "https://i.pravatar.cc/150?img=3",
      message: "The upskill courses gave me an edge in the cloud industry!",
      rating: 4.9,
    },
    {
      name: "David Kim",
      profession: "AI Researcher at OpenAI",
      image: "https://i.pravatar.cc/150?img=4",
      message: "The platform’s AI career roadmap was a game-changer for me!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      profession: "Frontend Developer at Shopify",
      image: "https://i.pravatar.cc/150?img=5",
      message: "Amazing mentorship and structured learning paths!",
      rating: 4.7,
    },
    {
      name: "James Williams",
      profession: "Cybersecurity Analyst at Microsoft",
      image: "https://i.pravatar.cc/150?img=6",
      message: "The security career track helped me land my dream job!",
      rating: 4.9,
    },
    {
      name: "Olivia Brown",
      profession: "DevOps Engineer at IBM",
      image: "https://i.pravatar.cc/150?img=7",
      message: "The networking section connected me to amazing professionals!",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      profession: "Full-Stack Developer at Netflix",
      image: "https://i.pravatar.cc/150?img=8",
      message: "CareerTrack guided me through modern full-stack technologies!",
      rating: 4.8,
    },
    {
      name: "Sophia Martinez",
      profession: "Machine Learning Engineer at Tesla",
      image: "https://i.pravatar.cc/150?img=9",
      message: "The ML track was spot-on and led to my success!",
      rating: 4.9,
    },
    {
      name: "Daniel Scott",
      profession: "Game Developer at Unity",
      image: "https://i.pravatar.cc/150?img=10",
      message: "Helped me transition from traditional development to gaming!",
      rating: 4.7,
    },
  ];

  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const [skipNextInterval, setSkipNextInterval] = useState(false); // New state to track skipping

  useEffect(() => {
    if (skipNextInterval) {
      setSkipNextInterval(false); // Reset the flag so auto-slide resumes
      return;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, total, skipNextInterval]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
    setSkipNextInterval(true);
  };
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
    setSkipNextInterval(true);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 bg-p5-trans overflow-hidden">
      <div className="relative w-screen max-w-4xl h-96 flex items-center justify-center">
        {/* Map through testimonials and arrange them in a chain */}
        {testimonials.map((testimonial, i) => {
          let offset = i - index;

          if (offset > 0) {
            if (offset > total / 2) offset -= total;
          } else if (offset * -1 > (total - 1) / 2) offset += total;

          let xOffset = offset * 300; // Positioning
          let scale = offset === 0 ? 1.2 : 0.9; // Active story is larger
          let opacity = offset === 0 ? 1 : 0.4; // Non-active stories have less opacity
          let z = offset === 0 ? 1 : 0; // Non-active stories have less z

          return (
            <AnimatePresence custom={index} key={i} mode="popLayout">
              <motion.div
                key={i}
                className="absolute w-[250px] flex flex-col items-center bg-p4 text-center h-80 rounded-xl shadow-lg p-6 transition-all"
                initial={{ opacity: 0 }}
                animate={{
                  x: `${xOffset}px`,
                  scale: scale,
                  opacity: opacity,
                  zIndex: z,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-white mb-4"
                />
                <h3 className="text-lg font-bold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonial.profession}
                </p>
                <p className="text-white text-sm mt-2">&quot;{testimonial.message}&quot;</p>
                <p className="mt-2 text-yellow-400">
                  ⭐ {testimonial.rating.toFixed(1)}
                </p>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-white text-black rounded-xl"
          onClick={prevSlide}
        >
          ⬅ Previous
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-xl"
          onClick={nextSlide}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
