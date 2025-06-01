"use client";

import BlogSection from "@/components/BlogSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import Educators from "@/components/Educators";
import JoinOurTeamSection from "@/components/JoinOurTeamSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import PlatformSection from "@/components/PlatformSection";
import ProgramSection from "@/components/ProgramSection";
import ServicesSection from "@/components/Services/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Icons
import { FaPython, FaRocket } from "react-icons/fa";

// Images
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Link from "next/link";

// Updating the Hero Section

// First, add these imports at the top of the file
import {
  FaCode,
  FaGraduationCap,
  FaLightbulb,
  FaRobot,
  FaStar,
} from "react-icons/fa";
import { IoColorWandOutline, IoRocketSharp } from "react-icons/io5";
import { getBackgroundStyles, getPathColors } from "./page-utils";

export default function Home() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setShowScrollIndicator] = useState(true);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Mouse follower animation for hero section
  const MouseFollower = () => {
    return (
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-2xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    );
  };

  // Section transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <MouseFollower />

      {/* Redesigned Hero Section with Gradient Animations */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Layer with animated gradients */}
        <div className="absolute inset-0 z-0">
          {/* Base background gradient that works with both themes */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-950 opacity-100" />
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-40 dark:opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.4) 0%, transparent 35%)",
                "radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.4) 0%, transparent 35%)",
                "radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.4) 0%, transparent 35%)",
                "radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.4) 0%, transparent 35%)",
                "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.4) 0%, transparent 35%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />{" "}
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0"
            style={getBackgroundStyles(theme || "light").gridBackground}
          />{" "}
          {/* Animated Flow Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,100 Q250,200 500,100 T1000,100 T1500,100"
              stroke={getPathColors(theme || "light").primary}
              strokeWidth={2}
              fill="none"
              animate={{
                d: [
                  "M0,100 Q250,200 500,100 T1000,100 T1500,100",
                  "M0,150 Q250,80 500,150 T1000,140 T1500,150",
                  "M0,100 Q250,200 500,100 T1000,100 T1500,100",
                ],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,250 Q250,150 500,250 T1000,250 T1500,250"
              stroke={getPathColors(theme || "light").secondary}
              strokeWidth={2}
              fill="none"
              animate={{
                d: [
                  "M0,250 Q250,150 500,250 T1000,250 T1500,250",
                  "M0,200 Q250,300 500,200 T1000,220 T1500,200",
                  "M0,250 Q250,150 500,250 T1000,250 T1500,250",
                ],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          {/* Moving gradient accents */}
          <div className="absolute inset-0 overflow-hidden">
            {" "}
            {/* Top-right accent */}
            <motion.div
              className="absolute w-[40%] h-[40%] rounded-full blur-3xl"
              style={getBackgroundStyles(theme || "light").topRightAccent}
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />{" "}
            {/* Bottom-left accent */}
            <motion.div
              className="absolute w-[45%] h-[45%] rounded-full blur-3xl"
              style={getBackgroundStyles(theme || "light").bottomLeftAccent}
              animate={{
                scale: [1, 1.15, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 2,
              }}
            />{" "}
            {/* Middle accent */}
            <motion.div
              className="absolute w-[50%] h-[50%] rounded-full blur-3xl"
              style={getBackgroundStyles(theme || "light").middleAccent}
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 5,
              }}
            />
          </div>
          {/* Subtle stars in dark mode only */}
          {theme === "dark" && (
            <div className="absolute inset-0">
              {[...Array(25)].map((_, i) => {
                const size = 1 + (i % 3);
                const positionX = (i * 123) % 100;
                const positionY = (i * 127) % 100;

                return (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: size,
                      height: size,
                      left: `${positionX}%`,
                      top: `${positionY}%`,
                      boxShadow: `0 0 ${size + 1}px ${size / 2}px rgba(255, 255, 255, 0.8)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + (i % 4),
                      repeat: Infinity,
                      delay: (i % 5) * 0.3,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Content Container - remains the same */}
        <div className="container mx-auto relative z-10 px-4">
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content Area - Text Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                {/* Animated Badge */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <motion.div
                    className="backdrop-blur-md px-4 py-2 rounded-full border overflow-hidden relative"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(59, 130, 246, 0.15)"
                          : "rgba(255, 255, 255, 0.7)",
                      borderColor:
                        theme === "dark"
                          ? "rgba(147, 197, 253, 0.2)"
                          : "rgba(59, 130, 246, 0.2)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {/* Animated Decoration Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #60a5fa, transparent)",
                      }}
                      animate={{
                        left: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <FaPython className="text-yellow-500 text-lg" />
                      </motion.div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-blue-200" : "text-blue-700"
                        }`}
                      >
                        {language === "en"
                          ? "Python for Kids"
                          : "শিশুদের জন্য পাইথন"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Main Heading with Animated Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-center lg:text-left mb-6"
                >
                  <h1
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } text-4xl md:text-5xl lg:text-6xl leading-tight`}
                  >
                    <div className="relative inline-block">
                      <span className="relative z-10">
                        {language === "en" ? "Learn Coding" : "কোডিং শিখুন"}
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-4 w-full rounded-md -z-0 opacity-70"
                        style={{
                          background:
                            theme === "dark"
                              ? "linear-gradient(90deg, #60a5fa, #818cf8, #c084fc)"
                              : "linear-gradient(90deg, #93c5fd, #a5b4fc, #c4b5fd)",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className={
                        theme === "dark" ? "text-blue-100" : "text-blue-700"
                      }
                    >
                      {language === "en"
                        ? "With Fun Projects"
                        : "মজার প্রজেক্টের মাধ্যমে"}
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={`text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 ${
                    theme === "dark" ? "text-blue-100" : "text-blue-900"
                  }`}
                >
                  {language === "en"
                    ? "An interactive learning platform where children discover the magic of programming through creative games and challenges."
                    : "একটি ইন্টারেক্টিভ শিখার প্ল্যাটফর্ম যেখানে শিশুরা সৃজনশীল গেম এবং চ্যালেঞ্জের মাধ্যমে প্রোগ্রামিংয়ের জাদু আবিষ্কার করে।"}
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
                >
                  {/* Start Journey Button with Hover Effect */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as={Link}
                      href="/auth/register"
                      className={`backdrop-blur-md px-8 py-6 rounded-full text-white shadow-lg ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-900/20"
                          : "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-indigo-300/30"
                      }`}
                      startContent={
                        <div className="relative">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full"
                            style={{
                              background:
                                "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 70%)",
                            }}
                          />
                          <IoRocketSharp className="text-xl z-10 relative" />
                        </div>
                      }
                      size="lg"
                    >
                      {language === "en"
                        ? "Start Your Adventure"
                        : "আপনার অভিযান শুরু করুন"}
                    </Button>
                  </motion.div>

                  {/* Explore Button with Hover Effect */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: [1, -1, 1, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as={Link}
                      href="#explore"
                      variant="bordered"
                      className={`backdrop-blur-md px-8 py-6 rounded-full border ${
                        theme === "dark"
                          ? "bg-white/10 border-white/20 text-white hover:bg-white/15"
                          : "bg-blue-500/10 border-blue-300/30 text-blue-600 hover:bg-blue-500/15"
                      }`}
                      startContent={
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <IoColorWandOutline className="text-xl" />
                        </motion.div>
                      }
                      size="lg"
                    >
                      {language === "en"
                        ? "Explore Courses"
                        : "কোর্স অন্বেষণ করুন"}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                >
                  <motion.div
                    className="max-w-md mx-auto lg:mx-0"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className="relative p-6 rounded-2xl overflow-hidden"
                      style={{
                        background:
                          theme === "dark"
                            ? "rgba(30, 58, 138, 0.2)"
                            : "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(10px)",
                        border:
                          theme === "dark"
                            ? "1px solid rgba(147, 197, 253, 0.1)"
                            : "1px solid rgba(147, 197, 253, 0.5)",
                        boxShadow:
                          theme === "dark"
                            ? "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                            : "0 10px 30px -10px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      {/* Animated decorative elements */}
                      <motion.div
                        className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
                            style={{
                              background:
                                theme === "dark"
                                  ? "linear-gradient(135deg, #ec4899, #8b5cf6)"
                                  : "linear-gradient(135deg, #f472b6, #a78bfa)",
                            }}
                            whileHover={{ rotate: 10 }}
                          >
                            <span className="text-white font-bold text-lg">
                              S
                            </span>
                            <motion.div
                              className="absolute inset-0 opacity-30"
                              animate={{
                                background: [
                                  "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                                  "radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                                  "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>

                        <div>
                          <h3
                            className={`text-base font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {language === "en"
                              ? "Sarah's Parent"
                              : "সারার অভিভাবক"}
                          </h3>
                          <p
                            className={`text-sm mt-1 ${
                              theme === "dark"
                                ? "text-blue-100"
                                : "text-blue-700"
                            }`}
                          >
                            {language === "en"
                              ? '"My daughter loves the interactive lessons! She built her first game in just two weeks."'
                              : '"আমার মেয়ে ইন্টারেক্টিভ পাঠগুলি পছন্দ করে! সে মাত্র দুই সপ্তাহে তার প্রথম গেম তৈরি করেছে।"'}
                          </p>

                          <div className="flex items-center mt-3">
                            <motion.div
                              className="flex"
                              initial="hidden"
                              animate="visible"
                            >
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: { opacity: 1, scale: 1 },
                                  }}
                                  transition={{
                                    duration: 0.2,
                                    delay: 1.2 + i * 0.1,
                                  }}
                                >
                                  <FaStar className="text-yellow-400 mr-1 text-sm" />
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Animated decorative corner circles */}
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full"
                        style={{
                          background:
                            theme === "dark"
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(255, 255, 255, 0.7)",
                          border:
                            theme === "dark"
                              ? "1px solid rgba(255, 255, 255, 0.1)"
                              : "1px solid rgba(59, 130, 246, 0.3)",
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />

                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                        style={{
                          background:
                            theme === "dark"
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(255, 255, 255, 0.7)",
                          border:
                            theme === "dark"
                              ? "1px solid rgba(255, 255, 255, 0.1)"
                              : "1px solid rgba(59, 130, 246, 0.3)",
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content Area - Code Editor */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="order-1 lg:order-2"
              >
                {/* Interactive Code Editor Mockup */}
                <div className="relative">
                  {/* Main editor container with glassmorphism */}
                  <motion.div
                    className="backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
                    style={{
                      background:
                        theme === "dark"
                          ? "rgba(15, 23, 42, 0.7)"
                          : "rgba(255, 255, 255, 0.85)",
                      border:
                        theme === "dark"
                          ? "1px solid rgba(79, 70, 229, 0.2)"
                          : "1px solid rgba(147, 197, 253, 0.5)",
                      boxShadow:
                        theme === "dark"
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(79, 70, 229, 0.1)"
                          : "0 25px 50px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(147, 197, 253, 0.2)",
                    }}
                    whileHover={{
                      boxShadow:
                        theme === "dark"
                          ? "0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(79, 70, 229, 0.2)"
                          : "0 30px 60px -15px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(147, 197, 253, 0.3)",
                    }}
                  >
                    {/* Editor header */}
                    <div
                      className="flex items-center justify-between p-4"
                      style={{
                        background:
                          theme === "dark"
                            ? "rgba(15, 23, 42, 0.9)"
                            : "rgba(243, 244, 246, 0.8)",
                        borderBottom:
                          theme === "dark"
                            ? "1px solid rgba(71, 85, 105, 0.5)"
                            : "1px solid rgba(209, 213, 219, 0.8)",
                      }}
                    >
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-red-500"
                          whileHover={{ scale: 1.2 }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full bg-yellow-500"
                          whileHover={{ scale: 1.2 }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full bg-green-500"
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>
                      <div
                        className={`text-xs font-mono ${
                          theme === "dark" ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        <motion.div
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          main.py
                        </motion.div>
                      </div>
                      <div className="flex space-x-2">
                        <FaCode
                          className={
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }
                        />
                      </div>
                    </div>

                    {/* Code content */}
                    <div
                      className="font-mono text-sm md:text-base p-4 pt-6"
                      style={{
                        background:
                          theme === "dark"
                            ? "rgba(15, 23, 42, 0.7)"
                            : "rgba(249, 250, 251, 0.7)",
                      }}
                    >
                      {/* Comment */}
                      <motion.div
                        className={
                          theme === "dark" ? "text-green-400" : "text-green-600"
                        }
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        #{" "}
                        {language === "en"
                          ? "My First Python Game"
                          : "আমার প্রথম পাইথন গেম"}
                      </motion.div>

                      {/* Import statement */}
                      <motion.div
                        className={`mt-2 ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        import pygame
                      </motion.div>

                      <motion.div
                        className={`mt-2 ${
                          theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >
                        import random
                      </motion.div>

                      {/* Blank line */}
                      <div className="h-3"></div>

                      {/* Function definition */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.4 }}
                      >
                        <span
                          className={
                            theme === "dark"
                              ? "text-yellow-300"
                              : "text-yellow-600"
                          }
                        >
                          def
                        </span>{" "}
                        <span
                          className={
                            theme === "dark" ? "text-cyan-300" : "text-cyan-600"
                          }
                        >
                          start_game
                        </span>
                        ():
                      </motion.div>

                      <AnimatePresence>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={`codeline-${i}`}
                            className={
                              theme === "dark"
                                ? "text-blue-100"
                                : "text-blue-900"
                            }
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.7 + i * 0.2 }}
                          >
                            {i === 0 && (
                              <>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-blue-300"
                                      : "text-blue-700"
                                  }
                                >
                                  screen
                                </span>{" "}
                                = pygame.display.set_mode((800, 600))
                              </>
                            )}
                            {i === 1 && (
                              <>
                                &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.set_caption(
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-green-300"
                                      : "text-green-600"
                                  }
                                >
                                  {language === "en"
                                    ? '"My Awesome Game"'
                                    : '"আমার দারুণ গেম"'}
                                </span>
                                )
                              </>
                            )}
                            {i === 2 && (
                              <>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-blue-300"
                                      : "text-blue-700"
                                  }
                                >
                                  player
                                </span>{" "}
                                = pygame.image.load(
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-green-300"
                                      : "text-green-600"
                                  }
                                >
                                  &quot;player.png&quot;
                                </span>
                                )
                              </>
                            )}
                            {i === 3 && (
                              <>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-yellow-300"
                                      : "text-yellow-600"
                                  }
                                >
                                  while
                                </span>{" "}
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-cyan-300"
                                      : "text-cyan-600"
                                  }
                                >
                                  True
                                </span>
                                :
                              </>
                            )}
                            {i === 4 && (
                              <>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-blue-300"
                                      : "text-blue-700"
                                  }
                                >
                                  screen
                                </span>
                                .fill((
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-orange-300"
                                      : "text-orange-600"
                                  }
                                >
                                  0
                                </span>
                                ,
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-orange-300"
                                      : "text-orange-600"
                                  }
                                >
                                  0
                                </span>
                                ,
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-orange-300"
                                      : "text-orange-600"
                                  }
                                >
                                  0
                                </span>
                                ))
                              </>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Blinking cursor with typing animation */}
                      <div className="flex items-center mt-2">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.7 }}
                          className={
                            theme === "dark" ? "text-blue-100" : "text-blue-900"
                          }
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {language === "en" ? "# Game loop" : "# গেম লুপ"}
                        </motion.span>
                        <motion.div
                          className="inline-block w-2 h-5 ml-1"
                          style={{
                            backgroundColor:
                              theme === "dark" ? "#f0f8ff" : "#1e3a8a",
                          }}
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating badges with glassmorphism */}
                  <motion.div
                    className="absolute -top-8 -right-5 z-10"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -5, rotate: 5, scale: 1.1 }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(135deg, rgba(6, 182, 212, 0.7), rgba(59, 130, 246, 0.7))"
                            : "linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))",
                        backdropFilter: "blur(10px)",
                        border:
                          theme === "dark"
                            ? "1px solid rgba(103, 232, 249, 0.2)"
                            : "1px solid rgba(103, 232, 249, 0.4)",
                      }}
                    >
                      <FaRobot className="text-white text-2xl" />
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(6, 182, 212, 0)",
                            "0 0 0 10px rgba(6, 182, 212, 0.2)",
                            "0 0 0 0 rgba(6, 182, 212, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/4 -left-5 z-10"
                    initial={{ scale: 0, rotate: 20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -5, rotate: -5, scale: 1.1 }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(135deg, rgba(192, 132, 252, 0.7), rgba(139, 92, 246, 0.7))"
                            : "linear-gradient(135deg, rgba(192, 132, 252, 0.9), rgba(139, 92, 246, 0.9))",
                        backdropFilter: "blur(10px)",
                        border:
                          theme === "dark"
                            ? "1px solid rgba(192, 132, 252, 0.2)"
                            : "1px solid rgba(192, 132, 252, 0.4)",
                      }}
                    >
                      <FaLightbulb className="text-white text-2xl" />
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(139, 92, 246, 0)",
                            "0 0 0 10px rgba(139, 92, 246, 0.2)",
                            "0 0 0 0 rgba(139, 92, 246, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-10 -right-5 z-10"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -5, rotate: 5, scale: 1.1 }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(135deg, rgba(52, 211, 153, 0.7), rgba(16, 185, 129, 0.7))"
                            : "linear-gradient(135deg, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9))",
                        backdropFilter: "blur(10px)",
                        border:
                          theme === "dark"
                            ? "1px solid rgba(52, 211, 153, 0.2)"
                            : "1px solid rgba(52, 211, 153, 0.4)",
                      }}
                    >
                      <FaGraduationCap className="text-white text-2xl" />
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(16, 185, 129, 0)",
                            "0 0 0 10px rgba(16, 185, 129, 0.2)",
                            "0 0 0 0 rgba(16, 185, 129, 0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Decorative code lines */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-0 w-[80%] h-20 opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    <div
                      className="h-1 w-full rounded-full mb-3"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.7), transparent)"
                            : "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.7), transparent)",
                      }}
                    />
                    <div
                      className="h-1 w-[60%] mx-auto rounded-full mb-3"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.7), transparent)"
                            : "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.7), transparent)",
                      }}
                    />
                    <div
                      className="h-1 w-[40%] mx-auto rounded-full"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.7), transparent)"
                            : "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.7), transparent)",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <motion.div
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
              href="#explore"
              className={`flex flex-col items-center ${
                theme === "dark" ? "text-blue-200" : "text-blue-600"
              } hover:${
                theme === "dark" ? "text-white" : "text-blue-800"
              } transition-colors`}
            >
              <span className="text-sm mb-2">
                {language === "en" ? "Scroll Down" : "নিচে স্ক্রল করুন"}
              </span>
              <motion.div
                className={`w-8 h-14 rounded-full flex justify-center items-start p-1 ${
                  theme === "dark"
                    ? "border-2 border-blue-200"
                    : "border-2 border-blue-400"
                }`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-blue-200" : "bg-blue-500"
                  }`}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced curved divider with animated wave */}
      <div className="w-full relative overflow-hidden">
        <div
          className={`w-full h-24 ${
            theme === "dark"
              ? "bg-gradient-to-b from-indigo-900 to-blue-900/20"
              : "bg-gradient-to-b from-indigo-100 to-blue-50"
          }`}
        />
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 50H1440V100H0V50Z"
            className={theme === "dark" ? "fill-blue-900/20" : "fill-blue-50"}
          />
          <motion.path
            d="M0 50C240 16.6667 480 0 720 0C960 0 1200 16.6667 1440 50V100H0V50Z"
            className={theme === "dark" ? "fill-indigo-900" : "fill-indigo-100"}
            animate={{
              d: [
                "M0 50C240 16.6667 480 0 720 0C960 0 1200 16.6667 1440 50V100H0V50Z",
                "M0 50C240 30 480 10 720 20C960 30 1200 40 1440 50V100H0V50Z",
                "M0 50C240 16.6667 480 0 720 0C960 0 1200 16.6667 1440 50V100H0V50Z",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* First content section with ID for scroll target */}
      <motion.section
        id="explore"
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-b from-blue-900/20 to-blue-950"
            : "bg-gradient-to-b from-blue-50 to-white"
        }`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="mb-12">
            <ProgramSection />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-24">
            <ChooseUsSection />
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <motion.section
        className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-950"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="mb-12">
            <ProgramSection />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-24">
            <ChooseUsSection />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900/30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <OfferSection />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-950"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <PlatformSection />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900/30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <WorkProcessSection />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-950"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <ServicesSection />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900/30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <TeamSection />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="container mx-auto px-4 mt-16"
        >
          <Educators />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-950"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <Testimonials />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="container mx-auto px-4 mt-16"
        >
          <BlogSection />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900/30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <JoinOurTeamSection />
        </motion.div>
      </motion.section>

      {/* Quick Navigation Back to Top */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full shadow-lg text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaRocket className="text-xl" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
