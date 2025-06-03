"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBrain, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { MdEmail, MdOutlineWavingHand, MdVerified } from "react-icons/md";
import { PiGraduationCapFill, PiMedalFill, PiStarFill } from "react-icons/pi";
import {
  RiLightbulbFlashLine,
  RiStarSmileFill,
  RiTeamFill,
} from "react-icons/ri";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import educatorsData from "../lib/educatorsData";

type Educator = {
  imageURL: string;
  name: string;
  email: string;
  designation: string;
  experience?: string;
  expertise?: string[];
  rating?: number;
  studentsCount?: number;
  linkedin?: string;
  twitter?: string;
  github?: string;
  bio?: string;
  achievements?: string[];
};

// Enhanced educators data with additional info (using deterministic values to prevent hydration mismatch)
const enhancedEducatorsData = educatorsData.map((educator, index) => ({
  ...educator,
  experience: ["5+ years", "3+ years", "7+ years", "4+ years"][index % 4],
  expertise: [
    ["Programming", "Web Development", "AI/ML"],
    ["Mobile Apps", "UI/UX", "React Native"],
    ["Game Development", "Unity", "C#"],
    ["Robotics", "IoT", "Hardware"],
  ][index % 4],
  rating: 4.8 + (index * 0.05) % 0.2, // Deterministic rating based on index
  studentsCount: 150 + (index * 73) % 350, // Deterministic student count
  bio: [
    "Passionate about teaching technology to young minds and creating innovative learning experiences.",
    "Dedicated educator with expertise in mobile app development and interactive learning methodologies.",
    "Game development specialist who loves bringing creativity and fun into the classroom.",
    "Hardware enthusiast focused on making complex robotics concepts accessible to children.",
  ][index % 4],
  achievements: [
    ["Google Certified Educator", "AWS Solutions Architect"],
    ["React Native Expert", "Design Thinking Certificate"],
    ["Unity Certified Developer", "Game Design Award Winner"],
    ["Arduino Specialist", "IoT Innovation Award"],
  ][index % 4],
}));

const Educators: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const safeTheme = isClient ? theme || "light" : "light";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

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
        staggerChildren: 0.1,
        duration: 0.5,
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

  return (
    <div className="py-24 relative overflow-hidden">      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              isClient && safeTheme === "dark"
                ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)"
                : "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.8) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Floating geometric shapes - only render on client to prevent hydration mismatch */}
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: (20 + (i * 7) % 40) + "px", // Deterministic size
                  height: (20 + (i * 7) % 40) + "px", // Deterministic size
                  top: (10 + (i * 13) % 80) + "%", // Deterministic position
                  left: (5 + (i * 17) % 90) + "%", // Deterministic position
                  background:
                    safeTheme === "dark"
                      ? `linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(139, 92, 246, 0.1))`
                      : `linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))`,
                  borderRadius: i % 2 === 0 ? "50%" : "20%", // Deterministic shape
                  filter: "blur(1px)",
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + (i % 4), // Deterministic duration
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: (i % 4) * 0.5, // Deterministic delay
                }}
              />
            ))}
          </div>
        )}

        {/* Large glowing orbs */}        <motion.div
          className="absolute w-[50rem] h-[50rem] rounded-full blur-[150px]"
          style={{
            background:
              isClient && safeTheme === "dark"
                ? "radial-gradient(circle, rgba(56, 189, 248, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.04), transparent 70%)",
            top: "-10%",
            right: "-20%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />        <motion.div
          className="absolute w-[45rem] h-[45rem] rounded-full blur-[140px]"
          style={{
            background:
              isClient && safeTheme === "dark"
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.04), transparent 70%)",
            bottom: "-10%",
            left: "-15%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Tech-inspired connecting lines */}
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M10,20 Q30,10 50,20 T90,20"
            stroke={isClient && safeTheme === "dark" ? "#38bdf8" : "#3b82f6"}
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M10,80 Q30,90 50,80 T90,80"
            stroke={isClient && safeTheme === "dark" ? "#a855f7" : "#8b5cf6"}
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl px-6 mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Enhanced Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 text-transparent bg-clip-text px-4 py-2 text-sm font-bold rounded-full border border-amber-200 dark:border-amber-700 flex items-center justify-center gap-2">
                <RiTeamFill className="text-amber-500 dark:text-amber-300" />
                {language === "en" ? "Meet The Team" : "টিমের সাথে পরিচিত হন"}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 font-extrabold text-4xl md:text-6xl bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent"
            >
              {language === "en"
                ? "Our Expert Educators"
                : "আমাদের দক্ষ শিক্ষকবৃন্দ"}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              {language === "en"
                ? "Meet our passionate team of educators who bring years of industry experience and innovative teaching methods to inspire the next generation of tech innovators."
                : "আমাদের উৎসাহী শিক্ষক দলের সাথে পরিচিত হন যারা পরবর্তী প্রজন্মের প্রযুক্তি উদ্ভাবকদের অনুপ্রাণিত করতে বছরের পর বছর শিল্প অভিজ্ঞতা এবং উদ্ভাবনী শিক্ষণ পদ্ধতি নিয়ে এসেছেন।"}
            </motion.p>

            {/* Team Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <TeamStat
                icon={<FaUserGraduate />}
                number="15+"
                label={language === "en" ? "Expert Educators" : "দক্ষ শিক্ষক"}
                color="blue"
              />
              <TeamStat
                icon={<PiStarFill />}
                number="4.9"
                label={language === "en" ? "Average Rating" : "গড় রেটিং"}
                color="amber"
              />
              <TeamStat
                icon={<FaChalkboardTeacher />}
                number="2000+"
                label={
                  language === "en" ? "Students Taught" : "শিক্ষার্থী শিক্ষা"
                }
                color="purple"
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Swiper Section */}
          <motion.div variants={itemVariants} className="relative">
            {/* Custom Navigation Dots */}
            <div className="flex justify-center mb-8">
              {enhancedEducatorsData.map((_, index) => (
                <motion.button
                  key={index}
                  className="mx-1 w-3 h-3 rounded-full transition-all duration-300"                  style={{
                    background:
                      activeSlide === index
                        ? isClient && safeTheme === "dark"
                          ? "linear-gradient(45deg, #38bdf8, #8b5cf6)"
                          : "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                        : isClient && safeTheme === "dark"
                          ? "rgba(255, 255, 255, 0.3)"
                          : "rgba(0, 0, 0, 0.2)",
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideTo(index);
                    }
                  }}
                />
              ))}
            </div>

            <Swiper
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="py-12"
            >
              {enhancedEducatorsData.map(
                (educator: Educator, index: number) => (
                  <SwiperSlide key={index}>
                    <EducatorCard educator={educator} index={index} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.div
              className="inline-block p-8 rounded-2xl"              style={{
                background:
                  isClient && safeTheme === "dark"
                    ? "rgba(15, 23, 42, 0.6)"
                    : "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border:
                  isClient && safeTheme === "dark"
                    ? "1px solid rgba(56, 189, 248, 0.2)"
                    : "1px solid rgba(219, 234, 254, 0.8)",
              }}
              whileHover={{
                y: -5,
                boxShadow:
                  isClient && safeTheme === "dark"
                    ? "0 25px 50px -12px rgba(56, 189, 248, 0.25)"
                    : "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <MdOutlineWavingHand className="text-3xl text-yellow-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {language === "en"
                    ? "Want to Join Our Team?"
                    : "আমাদের দলে যোগ দিতে চান?"}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto">
                {language === "en"
                  ? "We're always looking for passionate educators who want to make a difference in children's lives through technology education."
                  : "আমরা সর্বদা উৎসাহী শিক্ষকদের খুঁজছি যারা প্রযুক্তি শিক্ষার মাধ্যমে শিশুদের জীবনে পরিবর্তন আনতে চান।"}
              </p>
              <Link href="/careers">
                <motion.button
                  className="px-6 py-3 rounded-full font-medium text-white"                  style={{
                    background:
                      isClient && safeTheme === "dark"
                        ? "linear-gradient(45deg, #38bdf8, #8b5cf6)"
                        : "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {language === "en" ? "Apply Now" : "এখনই আবেদন করুন"}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Educator Card Component
const EducatorCard: React.FC<{ educator: Educator; index: number }> = ({ educator, index }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isClient = useIsClient();
  const safeTheme = isClient ? theme || "light" : "light";
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="relative group h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div
        className="rounded-3xl overflow-hidden h-full relative"        style={{
          background:
            isClient && safeTheme === "dark"
              ? "rgba(15, 23, 42, 0.7)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(15px)",
          border:
            isClient && safeTheme === "dark"
              ? "1px solid rgba(56, 189, 248, 0.3)"
              : "1px solid rgba(219, 234, 254, 0.8)",
          boxShadow: isHovered
            ? isClient && safeTheme === "dark"
              ? "0 25px 50px -12px rgba(56, 189, 248, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.1)"
              : "0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)"
            : "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Animated top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, 
              ${["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"][index % 4]}, 
              ${["#8b5cf6", "#f59e0b", "#ef4444", "#10b981"][index % 4]})`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />

        {/* Profile Image Section */}
        <div className="relative p-6 text-center">
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing ring around image */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, 
                  ${["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"][index % 4]}, 
                  ${["#8b5cf6", "#f59e0b", "#ef4444", "#10b981"][index % 4]}, 
                  ${["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"][index % 4]})`,
                padding: "3px",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    isClient && safeTheme === "dark" ? "#0f172a" : "#ffffff",
                }}
              />
            </motion.div>

            <Image
              src={educator.imageURL}
              alt={educator.name}
              width={120}
              height={120}
              className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
            />

            {/* Verified badge */}
            <motion.div
              className="absolute -bottom-1 -right-1 z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(45deg, 
                    ${["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"][index % 4]}, 
                    ${["#8b5cf6", "#f59e0b", "#ef4444", "#10b981"][index % 4]})`,
                }}
              >
                <MdVerified className="text-white text-sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Floating elements around the image */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              y: [0, -5, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiSparkles className="text-yellow-500 text-lg" />
          </motion.div>

          <motion.div
            className="absolute top-8 left-4"
            animate={{
              rotate: [0, 15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <FaBrain className="text-purple-500 text-sm" />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="px-6 pb-6">
          <motion.h3
            className="text-xl font-bold text-slate-800 dark:text-white mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {educator.name}
          </motion.h3>

          <motion.p
            className="text-sm text-slate-600 dark:text-slate-300 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {educator.designation}
          </motion.p>

          {/* Rating and Experience */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <PiStarFill className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {educator.rating?.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <PiGraduationCapFill className="text-blue-500 text-sm" />
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {educator.experience}
              </span>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {educator.expertise?.slice(0, 2).map((skill, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 text-xs rounded-full"                style={{
                  background:
                    isClient && safeTheme === "dark"
                      ? "rgba(56, 189, 248, 0.2)"
                      : "rgba(59, 130, 246, 0.1)",
                  color: isClient && safeTheme === "dark" ? "#38bdf8" : "#3b82f6",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="flex items-center justify-between">
            <Link href={`mailto:${educator.email}`}>
              <motion.button
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm"                style={{
                  background:
                    isClient && safeTheme === "dark"
                      ? "rgba(15, 23, 42, 0.8)"
                      : "rgba(255, 255, 255, 0.8)",
                  border:
                    isClient && safeTheme === "dark"
                      ? "1px solid rgba(56, 189, 248, 0.3)"
                      : "1px solid rgba(219, 234, 254, 0.8)",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdEmail className="text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300 text-xs">
                  {language === "en" ? "Contact" : "যোগাযোগ"}
                </span>
              </motion.button>
            </Link>

            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 rounded-full"
              style={{
                background: `linear-gradient(45deg, 
                  ${["#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"][index % 4]}, 
                  ${["#8b5cf6", "#f59e0b", "#ef4444", "#10b981"][index % 4]})`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RiLightbulbFlashLine className="text-white text-sm" />
            </motion.button>
          </div>

          {/* Expandable Details */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showDetails ? "auto" : 0,
              opacity: showDetails ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                {educator.bio}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RiStarSmileFill className="text-green-500 text-sm" />
                  <span className="text-xs text-slate-700 dark:text-slate-300">
                    {educator.studentsCount}+{" "}
                    {language === "en" ? "students" : "শিক্ষার্থী"}
                  </span>
                </div>

                {educator.achievements?.slice(0, 1).map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <PiMedalFill className="text-amber-500 text-sm" />
                    <span className="text-xs text-slate-700 dark:text-slate-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              ${["rgba(59, 130, 246, 0.1)", "rgba(139, 92, 246, 0.1)", "rgba(245, 158, 11, 0.1)", "rgba(239, 68, 68, 0.1)"][index % 4]}, 
              transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

// Team Statistics Component
interface TeamStatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: "blue" | "amber" | "purple";
}

const TeamStat: React.FC<TeamStatProps> = ({ icon, number, label, color }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();
  const safeTheme = isClient ? theme || "light" : "light";

  const getColorClasses = (color: string) => {
    switch (color) {      case "blue":
        return {
          iconBg:
            isClient && safeTheme === "dark"
              ? "rgba(59, 130, 246, 0.2)"
              : "rgba(59, 130, 246, 0.1)",
          iconColor: "#3b82f6",
          textColor: isClient && safeTheme === "dark" ? "#60a5fa" : "#2563eb",
        };
      case "amber":
        return {
          iconBg:
            isClient && safeTheme === "dark"
              ? "rgba(245, 158, 11, 0.2)"
              : "rgba(245, 158, 11, 0.1)",
          iconColor: "#f59e0b",
          textColor: isClient && safeTheme === "dark" ? "#fbbf24" : "#d97706",
        };
      case "purple":
        return {
          iconBg:
            isClient && safeTheme === "dark"
              ? "rgba(139, 92, 246, 0.2)"
              : "rgba(139, 92, 246, 0.1)",
          iconColor: "#8b5cf6",
          textColor: isClient && safeTheme === "dark" ? "#a78bfa" : "#7c3aed",
        };
      default:
        return {
          iconBg:
            isClient && safeTheme === "dark"
              ? "rgba(59, 130, 246, 0.2)"
              : "rgba(59, 130, 246, 0.1)",
          iconColor: "#3b82f6",
          textColor: isClient && safeTheme === "dark" ? "#60a5fa" : "#2563eb",
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3 rounded-xl"      style={{
        background:
          isClient && safeTheme === "dark"
            ? "rgba(15, 23, 42, 0.5)"
            : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border:
          isClient && safeTheme === "dark"
            ? "1px solid rgba(56, 189, 248, 0.2)"
            : "1px solid rgba(219, 234, 254, 0.8)",
      }}
      whileHover={{
        y: -3,
        boxShadow:
          isClient && safeTheme === "dark"
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="p-2 rounded-full" style={{ background: colors.iconBg }}>
        <span style={{ color: colors.iconColor }} className="text-lg">
          {icon}
        </span>
      </div>
      <div>
        <div className="text-lg font-bold" style={{ color: colors.textColor }}>
          {number}
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

export default Educators;
