"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import learning from "@/public/home/learning.webp";
import { Button } from "@heroui/button";
import {
  animate,
  motion,
  useAnimation,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaChalkboardTeacher,
  FaCode,
  FaGamepad,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaUserGraduate,
} from "react-icons/fa";
import { IoRocketOutline, IoSchoolOutline } from "react-icons/io5";
import data from "../lib/data";

type Data = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const PlatformSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const statsControls = useAnimation();
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [hoverTab, setHoverTab] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    }
  }, [isStatsInView, statsControls]);

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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.9, opacity: 0 },
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

  const tabVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 0,
      boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
    },
    active: {
      scale: 1,
      opacity: 1,
      y: -5,
      boxShadow:
        isClient && theme === "dark"
          ? "0 10px 20px -10px rgba(56, 189, 248, 0.3)"
          : "0 10px 20px -10px rgba(59, 130, 246, 0.2)",
    },
    hover: {
      scale: 1.02,
      opacity: 1,
      y: -8,
      boxShadow:
        isClient && theme === "dark"
          ? "0 15px 30px -15px rgba(56, 189, 248, 0.4)"
          : "0 15px 30px -15px rgba(59, 130, 246, 0.3)",
    },
  };

  const statCounterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      id: "interactive",
      icon: <FaLaptopCode className="text-cyan-500 text-xl" />,
      title:
        language === "en" ? "Interactive Learning" : "ইন্টারেক্টিভ লার্নিং",
      description:
        language === "en"
          ? "Our platform features interactive lessons and coding challenges that make learning engaging and effective."
          : "আমাদের প্ল্যাটফর্মে ইন্টারেক্টিভ পাঠ এবং কোডিং চ্যালেঞ্জ রয়েছে যা শেখার প্রক্রিয়াকে আকর্ষণীয় ও কার্যকর করে তোলে।",
    },
    {
      id: "personalized",
      icon: <FaUserGraduate className="text-purple-500 text-xl" />,
      title:
        language === "en"
          ? "Personalized Learning Path"
          : "ব্যক্তিগতকৃত শিক্ষা পথ",
      description:
        language === "en"
          ? "Every student gets a customized learning path based on their skills, progress, and learning pace."
          : "প্রতিটি শিক্ষার্থী তাদের দক্ষতা, অগ্রগতি এবং শেখার গতির উপর ভিত্তি করে একটি কাস্টমাইজড শিক্ষা পথ পায়।",
    },
    {
      id: "expert",
      icon: <FaChalkboardTeacher className="text-indigo-500 text-xl" />,
      title: language === "en" ? "Expert Instructors" : "বিশেষজ্ঞ প্রশিক্ষক",
      description:
        language === "en"
          ? "Learn from industry professionals with years of experience in programming, robotics, and game development."
          : "প্রোগ্রামিং, রোবোটিক্স এবং গেম ডেভেলপমেন্টে বছরের অভিজ্ঞতা সম্পন্ন শিল্প পেশাদারদের কাছ থেকে শিখুন।",
    },
  ];

  const tabs = [
    {
      id: 1,
      icon: <FaCode />,
      title: language === "en" ? "Coding" : "কোডিং",
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: language === "en" ? "Robotics" : "রোবোটিক্স",
    },
    {
      id: 3,
      icon: <FaGamepad />,
      title: language === "en" ? "Game Dev" : "গেম ডেভ",
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Tech circuit lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 Q25,0 50,30 T100,30"
            stroke={isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"}
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M0,70 Q25,40 50,70 T100,70"
            stroke={isClient && theme === "dark" ? "#818cf8" : "#6366f1"}
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
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
          className="absolute w-[40rem] h-[40rem] rounded-full blur-[120px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(14, 165, 233, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(14, 165, 233, 0.05), transparent 70%)",
            top: "0%",
            right: "-20%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-[35rem] h-[35rem] rounded-full blur-[100px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(168, 85, 247, 0.05), transparent 70%)",
            bottom: "0%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl px-6 mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 items-center md:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Section with Image */}
          <motion.div
            variants={imageVariants}
            className="w-full h-full relative"
          >
            <div className="relative">
              {/* Animated decorative elements */}
              <motion.div
                className="absolute -left-5 -top-5 w-16 h-16 z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path
                    d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z"
                    fill="none"
                    stroke={
                      isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"
                    }
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 1,
                    }}
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -right-5 -bottom-5 w-20 h-20 z-10"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={
                      isClient && theme === "dark" ? "#a78bfa" : "#8b5cf6"
                    }
                    strokeWidth="2"
                    strokeDasharray="50 100 50 100"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 0.5,
                    }}
                  />
                </svg>
              </motion.div>

              {/* Image with glow effect */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow:
                      isClient && theme === "dark"
                        ? [
                            "0 0 0 rgba(56, 189, 248, 0.3)",
                            "0 0 20px rgba(56, 189, 248, 0.5)",
                            "0 0 0 rgba(56, 189, 248, 0.3)",
                          ]
                        : [
                            "0 0 0 rgba(59, 130, 246, 0.2)",
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 0 rgba(59, 130, 246, 0.2)",
                          ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    border:
                      isClient && theme === "dark"
                        ? "1px solid rgba(56, 189, 248, 0.3)"
                        : "1px solid rgba(219, 234, 254, 1)",
                    zIndex: 1,
                  }}
                />

                <Image
                  className="rounded-3xl relative z-0 object-cover"
                  src={learning}
                  alt="Learning Platform Illustration"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNiODJmNiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4YjVjZjYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
                />
              </motion.div>

              {/* Feature callouts */}
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="absolute flex items-center p-3 rounded-xl shadow-lg z-20"
                  style={{
                    background:
                      isClient && theme === "dark"
                        ? "rgba(15, 23, 42, 0.8)"
                        : "rgba(255, 255, 255, 0.95)",
                    border:
                      isClient && theme === "dark"
                        ? "1px solid rgba(56, 189, 248, 0.3)"
                        : "1px solid rgba(219, 234, 254, 0.8)",
                    backdropFilter: "blur(8px)",
                    top: `${20 + index * 30}%`,
                    [index % 2 === 0 ? "left" : "right"]: "-20px",
                    maxWidth: "220px",
                  }}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    boxShadow:
                      activeFeature === feature.id
                        ? isClient && theme === "dark"
                          ? "0 0 25px rgba(56, 189, 248, 0.5)"
                          : "0 0 25px rgba(59, 130, 246, 0.3)"
                        : "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      isClient && theme === "dark"
                        ? "0 0 30px rgba(56, 189, 248, 0.5)"
                        : "0 0 30px rgba(59, 130, 246, 0.3)",
                  }}
                  onHoverStart={() => setActiveFeature(feature.id)}
                  onHoverEnd={() => setActiveFeature(null)}
                >
                  <div
                    className="mr-3 p-2 rounded-full"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "rgba(56, 189, 248, 0.2)"
                          : "rgba(219, 234, 254, 0.6)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1 text-slate-900 dark:text-white">
                      {feature.title}
                    </h4>
                    {activeFeature === feature.id && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="text-xs text-slate-600 dark:text-slate-300"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section with Text */}
          <motion.div
            variants={containerVariants}
            className="flex pl-6 space-y-6 md:px-0 col-span-1 flex-col justify-between"
          >
            <motion.div variants={itemVariants}>
              <motion.span
                className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 inline-block mb-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {language === "en" ? "Explore More" : "আরো দেখুন"}
              </motion.span>

              <motion.h2
                className="mb-5 mt-2 font-extrabold font-siliguri text-3xl lg:text-5xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                {language === "en"
                  ? "About Our Educational Platform"
                  : "আমাদের শিক্ষামূলক প্ল্যাটফর্ম সম্পর্কে"}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 font-siliguri lg:text-xl"
            >
              <p className="text-slate-700 dark:text-slate-300">
                {language === "en"
                  ? "Our platform is a modern and innovative education system specially designed to enhance children's skills. We believe that the learning process should be fun, practical, and inspiring. Through hands-on education in subjects like programming, robotics, and game development, we help children build both technical and creative skills."
                  : "আমাদের প্ল্যাটফর্ম একটি আধুনিক ও উদ্ভাবনী শিক্ষা ব্যবস্থা যা শিশুদের দক্ষতা বৃদ্ধির জন্য বিশেষভাবে ডিজাইন করা হয়েছে। আমরা বিশ্বাস করি, শেখার প্রক্রিয়া হওয়া উচিত মজার, বাস্তবভিত্তিক এবং অনুপ্রেরণাদায়ক। প্রোগ্রামিং, রোবোটিক্স, এবং গেম ডেভেলপমেন্টের মতো বিষয়ে হাতে-কলমে শিক্ষার মাধ্যমে আমরা শিশুদের প্রযুক্তিগত এবং সৃজনশীল দক্ষতা গড়ে তুলতে সাহায্য করি।"}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {language === "en"
                  ? "Our goal is to create a learning environment where children can use their curiosity and imagination to learn and innovate. Our curricula are designed to teach solutions to real-life problems, which makes them confident in facing future challenges. Join us on this learning journey and make your child's learning experience unique and effective."
                  : "আমাদের লক্ষ্য হলো একটি এমন শিক্ষার পরিবেশ তৈরি করা যেখানে শিশুরা তাদের কৌতূহল এবং কল্পনাশক্তিকে কাজে লাগিয়ে নতুন কিছু শিখতে এবং উদ্ভাবন করতে পারে। আমাদের পাঠ্যক্রমগুলো বাস্তব জীবনের সমস্যার সমাধান করতে শেখার জন্য তৈরি, যা ভবিষ্যতের চ্যালেঞ্জ মোকাবিলায় তাদের আত্মবিশ্বাসী করে তোলে। আমাদের সাথে এই শিখন-যাত্রায় যোগ দিন এবং আপনার শিশুর শেখার অভিজ্ঞতাকে অনন্য ও কার্যকরী করে তুলুন।"}
              </p>
            </motion.div>

            {/* Course Tabs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mt-4"
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  className="flex-1 min-w-[120px] p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer"
                  style={{
                    background:
                      isClient && theme === "dark"
                        ? "rgba(15, 23, 42, 0.5)"
                        : "rgba(241, 245, 249, 0.7)",
                    border:
                      isClient && theme === "dark"
                        ? "1px solid rgba(56, 189, 248, 0.3)"
                        : "1px solid rgba(219, 234, 254, 0.8)",
                  }}
                  variants={tabVariants}
                  initial="inactive"
                  animate={hoverTab === tab.id ? "hover" : "active"}
                  whileHover="hover"
                  onHoverStart={() => setHoverTab(tab.id)}
                  onHoverEnd={() => setHoverTab(null)}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.div
                    className="text-2xl mb-2"
                    animate={{
                      color:
                        hoverTab === tab.id
                          ? isClient && theme === "dark"
                            ? "#38bdf8"
                            : "#3b82f6"
                          : isClient && theme === "dark"
                            ? "#94a3b8"
                            : "#64748b",
                    }}
                  >
                    {tab.icon}
                  </motion.div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {tab.title}
                  </span>

                  {hoverTab === tab.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-2"
                    >
                      <span className="text-xs text-blue-600 dark:text-blue-300 flex items-center gap-1">
                        {language === "en" ? "Learn more" : "আরো জানুন"}
                        <FaArrowRight className="text-[10px]" />
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-6 items-center"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="font-siliguri font-bold relative overflow-hidden group"
                    color="primary"
                    variant="shadow"
                    size="lg"
                    startContent={
                      <IoRocketOutline className="text-xl text-cyan-200 group-hover:text-white" />
                    }
                  >
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-md"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="relative z-10">
                      {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
                    </span>
                  </Button>
                </motion.div>
              </Link>

              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="font-siliguri"
                    color="primary"
                    variant="light"
                    size="lg"
                    endContent={
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <FaArrowRight className="text-sm" />
                      </motion.div>
                    }
                  >
                    {language === "en" ? "Learn More" : "আরো জানুন"}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-28"
        >
          {data?.length > 0 &&
            data.map((value: Data, index: number) => (
              <motion.div
                key={index}
                variants={statCounterVariants}
                className="bg-gradient-to-br from-white/5 to-white/10 dark:from-slate-800/30 dark:to-slate-800/10 p-6 rounded-2xl relative overflow-hidden group"
                style={{
                  border:
                    isClient && theme === "dark"
                      ? "1px solid rgba(56, 189, 248, 0.2)"
                      : "1px solid rgba(219, 234, 254, 0.8)",
                  boxShadow:
                    isClient && theme === "dark"
                      ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                      : "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    isClient && theme === "dark"
                      ? "0 10px 30px rgba(0, 0, 0, 0.3)"
                      : "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div
                    className="absolute transform -rotate-45 translate-x-[-30%] translate-y-[-30%] w-16 h-4 rounded"
                    style={{
                      background: getGradientByIndex(
                        index,
                        isClient && theme === "dark"
                      ),
                    }}
                  />
                </div>

                {/* Stats content */}
                <div className="space-y-3 relative z-10">
                  <motion.div
                    className="flex items-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {getIconByIndex(index)}
                  </motion.div>

                  <motion.h4
                    className="font-extrabold text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    <CountUp value={parseInt(value.number)} />
                    <span className="text-xl align-top">+</span>
                  </motion.h4>

                  <motion.h5
                    className="font-bold text-lg text-slate-700 dark:text-slate-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {value.title}
                  </motion.h5>

                  <motion.p
                    className="text-sm text-slate-600 dark:text-slate-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {value.description}
                  </motion.p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100"
                  style={{
                    background: getGradientByIndex(
                      index,
                      isClient && theme === "dark"
                    ),
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
        </motion.div>

        {/* Learning Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span className="inline-block mb-3 text-sm font-medium px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
              {language === "en" ? "How It Works" : "কিভাবে কাজ করে"}
            </motion.span>

            <motion.h2 className="text-center mb-5 font-extrabold font-siliguri text-4xl md:text-5xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent">
              {language === "en"
                ? "Our Learning Process"
                : "আমাদের শেখার প্রক্রিয়া"}
            </motion.h2>

            <motion.p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              {language === "en"
                ? "Discover how our step-by-step learning process helps students master technical skills while having fun."
                : "আবিষ্কার করুন কিভাবে আমাদের ধাপে ধাপে শেখার প্রক্রিয়া শিক্ষার্থীদের মজা করে প্রযুক্তিগত দক্ষতা অর্জন করতে সাহায্য করে।"}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: (
                  <IoSchoolOutline className="text-3xl text-cyan-500 dark:text-cyan-400" />
                ),
                title:
                  language === "en"
                    ? "Interactive Learning"
                    : "ইন্টারেক্টিভ লার্নিং",
                description:
                  language === "en"
                    ? "Begin with engaging, interactive lessons that make complex concepts easy to understand."
                    : "জটিল ধারণাগুলিকে সহজেই বোঝার জন্য আকর্ষণীয়, ইন্টারেক্টিভ পাঠ দিয়ে শুরু করুন।",
              },
              {
                step: "02",
                icon: (
                  <FaBrain className="text-3xl text-purple-500 dark:text-purple-400" />
                ),
                title:
                  language === "en" ? "Hands-on Practice" : "হাতে-কলমে অনুশীলন",
                description:
                  language === "en"
                    ? "Apply what you've learned through practical projects and real-world challenges."
                    : "ব্যবহারিক প্রজেক্ট এবং বাস্তব জগতের চ্যালেঞ্জগুলির মাধ্যমে আপনি যা শিখেছেন তা প্রয়োগ করুন।",
              },
              {
                step: "03",
                icon: (
                  <FaGraduationCap className="text-3xl text-indigo-500 dark:text-indigo-400" />
                ),
                title:
                  language === "en"
                    ? "Mentorship & Growth"
                    : "মেন্টরশিপ এবং বৃদ্ধি",
                description:
                  language === "en"
                    ? "Receive personalized feedback and guidance to help you improve and advance your skills."
                    : "আপনার দক্ষতা উন্নত ও বিকশিত করতে সাহায্য করার জন্য ব্যক্তিগতকৃত ফিডব্যাক এবং নির্দেশনা পান।",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? "rgba(15, 23, 42, 0.5)"
                      : "rgba(241, 245, 249, 0.7)",
                  border:
                    isClient && theme === "dark"
                      ? "1px solid rgba(56, 189, 248, 0.2)"
                      : "1px solid rgba(219, 234, 254, 0.8)",
                }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    isClient && theme === "dark"
                      ? "0 15px 30px -10px rgba(0, 0, 0, 0.3)"
                      : "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Step indicator */}
                <div className="absolute -top-5 -right-5 w-20 h-20 flex items-center justify-center">
                  <motion.div
                    className="text-5xl font-black opacity-10 dark:opacity-20"
                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3,
                    }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div className="mb-4">{step.icon}</div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                    style={{
                      backgroundImage:
                        index === 0
                          ? "linear-gradient(to right, #0ea5e9, #38bdf8)"
                          : index === 1
                            ? "linear-gradient(to right, #a855f7, #c084fc)"
                            : "linear-gradient(to right, #6366f1, #818cf8)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper Component for Counting Animation
const CountUp = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useMotionTemplate`${rounded}`;

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  return <motion.span>{displayValue}</motion.span>;
};

// Helper function to get gradient by index
const getGradientByIndex = (index: number, isDark: boolean) => {
  switch (index % 4) {
    case 0:
      return isDark
        ? "linear-gradient(135deg, #0ea5e9, #38bdf8)"
        : "linear-gradient(135deg, #0ea5e9, #7dd3fc)";
    case 1:
      return isDark
        ? "linear-gradient(135deg, #8b5cf6, #a78bfa)"
        : "linear-gradient(135deg, #8b5cf6, #c4b5fd)";
    case 2:
      return isDark
        ? "linear-gradient(135deg, #06b6d4, #22d3ee)"
        : "linear-gradient(135deg, #06b6d4, #67e8f9)";
    case 3:
      return isDark
        ? "linear-gradient(135deg, #2563eb, #3b82f6)"
        : "linear-gradient(135deg, #2563eb, #93c5fd)";
    default:
      return isDark
        ? "linear-gradient(135deg, #0ea5e9, #38bdf8)"
        : "linear-gradient(135deg, #0ea5e9, #7dd3fc)";
  }
};

// Helper function to get icon by index
const getIconByIndex = (index: number) => {
  switch (index % 4) {
    case 0:
      return (
        <FaUserGraduate className="text-2xl text-cyan-500 dark:text-cyan-400" />
      );
    case 1:
      return (
        <FaLaptopCode className="text-2xl text-purple-500 dark:text-purple-400" />
      );
    case 2:
      return (
        <FaMobileAlt className="text-2xl text-teal-500 dark:text-teal-400" />
      );
    case 3:
      return (
        <IoRocketOutline className="text-2xl text-blue-500 dark:text-blue-400" />
      );
    default:
      return (
        <FaUserGraduate className="text-2xl text-cyan-500 dark:text-cyan-400" />
      );
  }
};

export default PlatformSection;
