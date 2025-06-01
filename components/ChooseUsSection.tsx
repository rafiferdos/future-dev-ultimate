"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import chooseUs from "../lib/chooseUs";
import ChooseUsSlider from "./slider/ChooseUsSlider";

interface ChooseUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ChooseUsSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

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
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative mt-24 py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              isClient && theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated glow spots */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(14, 165, 233, 0.15), transparent 70%)"
                : "radial-gradient(circle, rgba(14, 165, 233, 0.1), transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)",
            bottom: "5%",
            left: "-5%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl px-6 mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text px-4 py-1 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700">
              {language === "en" ? "Why Choose Us" : "আমাদের বেছে নেওয়ার কারণ"}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-center mb-5 font-extrabold font-siliguri text-4xl md:text-5xl bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent"
          >
            {language === "en" ? "Why Choose Us?" : "কেন আমাদের বেছে নেবেন?"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300"
          >
            {language === "en"
              ? "Discover why we stand out from the crowd and what makes our approach to teaching and learning truly exceptional."
              : "আবিষ্কার করুন কেন আমরা ভিড় থেকে আলাদা এবং শেখানো ও শেখার ক্ষেত্রে আমাদের পদ্ধতি কেন সত্যিই অসাধারণ।"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Left Section */}
          <motion.div
            variants={itemVariants}
            className="flex lg:col-span-3 pl-6 space-y-8 md:px-0 col-span-1 flex-col justify-between"
          >
            <div className="space-y-6">
              {chooseUs?.length > 0 &&
                chooseUs.map((data: ChooseUsItem, index) => (
                  <motion.div
                    key={data.id}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    onHoverStart={() => setActiveItem(data.id)}
                    onHoverEnd={() => setActiveItem(null)}
                    className={`flex items-start gap-5 p-4 rounded-xl transition-all duration-300 ${
                      activeItem === data.id
                        ? isClient && theme === "dark"
                          ? "bg-slate-800/40 shadow-lg"
                          : "bg-blue-50/80 shadow-md"
                        : ""
                    }`}
                    style={{
                      border:
                        activeItem === data.id
                          ? isClient && theme === "dark"
                            ? "1px solid rgba(59, 130, 246, 0.3)"
                            : "1px solid rgba(219, 234, 254, 0.8)"
                          : "1px solid transparent",
                    }}
                  >
                    <div className="mt-1">
                      <div
                        className={`relative p-3 rounded-full ${
                          activeItem === data.id
                            ? "bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"
                            : "bg-blue-100 dark:bg-blue-900/40"
                        }`}
                      >
                        <img
                          className={`h-6 w-6 ${
                            activeItem === data.id
                              ? "filter brightness-0 invert"
                              : ""
                          }`}
                          src={data.icon}
                          alt={`${data.title} Icon`}
                        />

                        {activeItem === data.id && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                              boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3)",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center">
                        <h3
                          className={`font-bold font-siliguri text-lg ${
                            activeItem === data.id
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-slate-800 dark:text-white"
                          }`}
                        >
                          {data.title}
                        </h3>

                        {activeItem === data.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="ml-2"
                          >
                            <FaStar className="text-yellow-400 text-sm" />
                          </motion.div>
                        )}
                      </div>

                      <p className="sm:text-sm text-medium lg:text-base font-siliguri text-slate-600 dark:text-slate-300">
                        {data.description}
                      </p>

                      {activeItem === data.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2"
                        >
                          <Button
                            size="sm"
                            variant="light"
                            color="primary"
                            className="px-0 font-medium"
                            endContent={
                              <FaArrowRight className="text-xs ml-1" />
                            }
                          >
                            {language === "en" ? "Learn More" : "আরো জানুন"}
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-2 relative"
          >
            <motion.div
              className="absolute inset-0 -m-3 rounded-2xl"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "linear-gradient(45deg, rgba(30, 64, 175, 0.05), rgba(125, 85, 220, 0.05))"
                    : "linear-gradient(45deg, rgba(219, 234, 254, 0.8), rgba(238, 242, 255, 0.8))",
                zIndex: -1,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative z-10 p-2 rounded-xl overflow-hidden shadow-xl"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "rgba(15, 23, 42, 0.3)"
                    : "rgba(255, 255, 255, 0.9)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(59, 130, 246, 0.3)"
                    : "1px solid rgba(219, 234, 254, 1)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Animated glowing border */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-70"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? "linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0))"
                      : "linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />

              <div className="relative z-10">
                <ChooseUsSlider />
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                    : "linear-gradient(45deg, #60a5fa, #a78bfa)",
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <span className="text-white text-xl font-bold">+</span>
            </motion.div>

            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                    : "linear-gradient(45deg, #60a5fa, #a78bfa)",
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {language === "en"
                ? "See Why We're Different"
                : "দেখুন কেন আমরা আলাদা"}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to action button */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              color="primary"
              size="lg"
              className="px-8 font-medium relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-md"
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
                  ? "Start Your Journey With Us"
                  : "আমাদের সাথে আপনার যাত্রা শুরু করুন"}
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChooseUsSection;
