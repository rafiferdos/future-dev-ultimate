"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import program from "@/public/home/program.webp";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaGamepad, FaRobot, FaRocket } from "react-icons/fa";

const ProgramSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const programs = [
    {
      id: "coding",
      icon: <FaCode className="text-cyan-400 text-xl" />,
      name: language === "en" ? "Programming" : "প্রোগ্রামিং",
    },
    {
      id: "robotics",
      icon: <FaRobot className="text-purple-400 text-xl" />,
      name: language === "en" ? "Robotics" : "রোবোটিক্স",
    },
    {
      id: "gamedev",
      icon: <FaGamepad className="text-green-400 text-xl" />,
      name: language === "en" ? "Game Development" : "গেম ডেভেলপমেন্ট",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl px-6 mx-auto py-20 relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-3xl opacity-20"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(6, 182, 212, 0.5), transparent 70%)"
                : "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
            top: "10%",
            right: "5%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)"
                : "radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)",
            bottom: "10%",
            left: "15%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Left Section with Image */}
      <motion.div className="w-full h-full relative" variants={imageVariants}>
        <div className="relative">
          {/* Tech lines animation around the image */}
          <div className="absolute inset-0 -m-4 rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0 border-2 border-dashed rounded-3xl"
              style={{
                borderColor:
                  isClient && theme === "dark"
                    ? "rgba(59, 130, 246, 0.3)"
                    : "rgba(59, 130, 246, 0.2)",
                scale: 1.05,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating tech elements */}
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg z-10"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "rgba(15, 23, 42, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(59, 130, 246, 0.5)"
                    : "1px solid rgba(59, 130, 246, 0.3)",
                top: `${30 + index * 20}%`,
                left: index % 2 === 0 ? "-5%" : "95%",
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              whileHover={{ scale: 1.2 }}
            >
              {program.icon}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              className="rounded-3xl shadow-xl object-cover"
              style={{
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(59, 130, 246, 0.3)"
                    : "1px solid rgba(219, 234, 254, 1)",
              }}
              src={program}
              alt="Program Illustration"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section with Text and Buttons */}
      <motion.div className="flex pl-6 space-y-8 md:px-0 col-span-1 flex-col justify-center z-10">
        {/* FIXED: Changed from motion.h2 containing h2 to just motion.h2 */}
        <motion.h2
          className="font-bold text-3xl lg:text-5xl bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {language === "en" ? "Our Programs" : "আমাদের প্রোগ্রামসমূহ"}
        </motion.h2>

        <motion.div
          className="space-y-4 font-siliguri lg:text-xl"
          variants={itemVariants}
        >
          <p className="dark:text-blue-50 text-slate-700">
            {language === "en"
              ? "Join us in shaping the next generation of innovators! Our carefully crafted courses provide hands-on learning in programming, robotics, and game development, making learning both fun and effective."
              : "আমাদের সাথে পরবর্তী প্রজন্মের উদ্ভাবকদের গড়ে তুলতে যোগ দিন! আমাদের যত্নসহকারে তৈরি করা কোর্সগুলো প্রোগ্রামিং, রোবোটিক্স এবং গেম ডেভেলপমেন্টে হাতে-কলমে শেখার সুযোগ দেয়, যা শেখাকে মজার ও কার্যকরী করে তোলে।"}
          </p>
          <p className="dark:text-blue-100 text-slate-600">
            {language === "en"
              ? "Click the link below to learn more about our programs."
              : "আমাদের প্রোগ্রাম সম্পর্কে আরো জানতে নিচের লিঙ্কটি দেখুন।"}
          </p>
        </motion.div>

        {/* Program cards */}
        <motion.div
          className="grid grid-cols-3 gap-3 my-6"
          variants={itemVariants}
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="flex flex-col items-center justify-center p-3 rounded-xl"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "rgba(15, 23, 42, 0.5)"
                    : "rgba(241, 245, 249, 0.7)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(59, 130, 246, 0.3)"
                    : "1px solid rgba(219, 234, 254, 0.8)",
                boxShadow:
                  hovered === program.id
                    ? isClient && theme === "dark"
                      ? "0 0 20px rgba(59, 130, 246, 0.5)"
                      : "0 0 20px rgba(59, 130, 246, 0.3)"
                    : "none",
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              onMouseEnter={() => setHovered(program.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="mb-2">{program.icon}</div>
              <span className="text-sm font-medium text-center">
                {program.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 items-center mt-6"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              color="primary"
              variant="shadow"
              className="relative overflow-hidden group"
              startContent={
                <FaRocket className="text-yellow-300 group-hover:animate-pulse" />
              }
            >
              <motion.span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10">
                {language === "en"
                  ? "Book a Free Class!"
                  : "বিনামূল্যে একটি ক্লাস বুক করুন!"}
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button color="primary" variant="light">
              {language === "en" ? "Learn More" : "আরো জানুন"}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProgramSection;
