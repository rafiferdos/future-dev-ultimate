"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import service from "@/public/home/service.webp";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineSupportAgent } from "react-icons/md";
import servicesData from "../../lib/servicesData";
import ServiceCard from "./ServiceCard";

// Define a type
type ServiceData = {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
};

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const cardsControls = useAnimation();
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isCardsInView) {
      cardsControls.start("visible");
    }
  }, [isCardsInView, cardsControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

        {/* Tech-inspired decorative paths */}
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 C30,10 70,90 100,70"
            stroke={isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"}
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,70 C30,90 70,10 100,30"
            stroke={isClient && theme === "dark" ? "#a855f7" : "#8b5cf6"}
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Glowing orbs */}
        <motion.div
          className="absolute w-[35rem] h-[35rem] rounded-full blur-[120px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(56, 189, 248, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%)",
            top: "0%",
            right: "-20%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-[30rem] h-[30rem] rounded-full blur-[100px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%)",
            bottom: "10%",
            left: "-15%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                background:
                  isClient && theme === "dark"
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(59, 130, 246, 0.6)",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl px-6 mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Section with Enhanced Image */}
          <motion.div
            variants={imageVariants}
            className="w-full h-full relative"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -left-6 -top-6 w-16 h-16 border-l-2 border-t-2 rounded-tl-lg z-20"
              style={{
                borderColor:
                  isClient && theme === "dark"
                    ? "rgba(56, 189, 248, 0.5)"
                    : "rgba(59, 130, 246, 0.5)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />

            <motion.div
              className="absolute -right-6 -bottom-6 w-16 h-16 border-r-2 border-b-2 rounded-br-lg z-20"
              style={{
                borderColor:
                  isClient && theme === "dark"
                    ? "rgba(139, 92, 246, 0.5)"
                    : "rgba(139, 92, 246, 0.5)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />

            {/* Glowing image wrapper */}
            <motion.div
              className="rounded-3xl overflow-hidden relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl z-10"
                animate={{
                  boxShadow:
                    isClient && theme === "dark"
                      ? [
                          "0 0 0 rgba(56, 189, 248, 0.3)",
                          "0 0 30px rgba(56, 189, 248, 0.5)",
                          "0 0 0 rgba(56, 189, 248, 0.3)",
                        ]
                      : [
                          "0 0 0 rgba(59, 130, 246, 0.2)",
                          "0 0 30px rgba(59, 130, 246, 0.3)",
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
                      : "1px solid rgba(59, 130, 246, 0.3)",
                }}
              />

              <Image
                className="rounded-3xl relative z-0"
                src={service}
                alt="Program Illustration"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNiODJmNiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4YjVjZjYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
              />

              {/* Highlight overlays */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />

              <motion.div
                className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-indigo-600/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>

            {/* Service highlights */}
            <motion.div
              className="absolute top-8 -right-10 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-lg z-30"
              style={{
                boxShadow:
                  isClient && theme === "dark"
                    ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(56, 189, 248, 0.2)"
                    : "1px solid rgba(219, 234, 254, 0.8)",
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <FaRegLightbulb className="text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900 dark:text-white">
                    {language === "en"
                      ? "Innovative Teaching"
                      : "উদ্ভাবনী শিক্ষাদান"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === "en"
                      ? "Modern methodologies"
                      : "আধুনিক পদ্ধতি"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 -left-10 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-lg z-30"
              style={{
                boxShadow:
                  isClient && theme === "dark"
                    ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(56, 189, 248, 0.2)"
                    : "1px solid rgba(219, 234, 254, 0.8)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <MdOutlineSupportAgent className="text-purple-500 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-sm text-slate-900 dark:text-white">
                    {language === "en"
                      ? "Dedicated Support"
                      : "নিবেদিত সহায়তা"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === "en"
                      ? "Always there for you"
                      : "সবসময় আপনার জন্য"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section with Enhanced Content */}
          <motion.div
            variants={containerVariants}
            className="flex gap-6 md:px-0 flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block mb-3 text-sm font-medium px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {language === "en" ? "Our Services" : "আমাদের সেবাসমূহ"}
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="font-bold text-3xl lg:text-5xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent"
              >
                {language === "en"
                  ? "Explore Our Services"
                  : "আমাদের সেবাসমূহ দেখুন"}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 lg:text-xl font-siliguri"
            >
              <p className="text-slate-700 dark:text-slate-300">
                {language === "en"
                  ? "Discover diverse educational services designed to guide learners toward academic excellence and personal growth. Our comprehensive approach ensures all-round development."
                  : "শিক্ষার্থীদের একাডেমিক শ্রেষ্ঠত্ব এবং ব্যক্তিগত বিকাশের দিকে নিয়ে যাওয়ার জন্য ডিজাইন করা বিভিন্ন শিক্ষামূলক সেবা আবিষ্কার করুন। আমাদের ব্যাপক পদ্ধতি সর্বাঙ্গীণ বিকাশ নিশ্চিত করে।"}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {language === "en"
                  ? "From personalized tutoring to immersive workshops, our services are tailored to meet the unique needs of each student. Expert educators use innovative teaching methods to make learning engaging and effective."
                  : "ব্যক্তিগতকৃত টিউটোরিং থেকে শুরু করে ইমারসিভ ওয়ার্কশপ পর্যন্ত, আমাদের সেবাগুলি প্রতিটি শিক্ষার্থীর অনন্য চাহিদা পূরণের জন্য তৈরি করা হয়েছে। বিশেষজ্ঞ শিক্ষকরা শেখাকে আকর্ষণীয় ও কার্যকর করার জন্য উদ্ভাবনী শিক্ষণ পদ্ধতি ব্যবহার করেন।"}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="primary"
                    variant="shadow"
                    className="relative overflow-hidden group"
                    startContent={
                      <MdOutlineRocketLaunch className="text-lg text-blue-200 group-hover:text-white" />
                    }
                  >
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-md"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="relative z-10 font-medium">
                      {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
                    </span>
                  </Button>
                </motion.div>
              </Link>

              <Link href="/services">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button
                    color="primary"
                    variant="light"
                    endContent={
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <FaArrowRight className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400" />
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

        {/* Enhanced Card Section */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsControls}
          className="mt-28"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
              {language === "en"
                ? "Our Comprehensive Services"
                : "আমাদের ব্যাপক সেবাসমূহ"}
            </motion.h3>

            <motion.p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              {language === "en"
                ? "Choose from our wide range of educational services designed to nurture talent and build skills for the future."
                : "ভবিষ্যতের জন্য প্রতিভা লালন-পালন এবং দক্ষতা গড়ে তোলার জন্য ডিজাইন করা আমাদের বিস্তৃত শিক্ষামূলক সেবাগুলি থেকে বেছে নিন।"}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData?.length > 0 &&
              servicesData.map((data: ServiceData, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  onHoverStart={() => setActiveService(data.id)}
                  onHoverEnd={() => setActiveService(null)}
                >
                  <ServiceCard
                    data={data}
                    isActive={activeService === data.id}
                    theme={theme}
                    isClient={isClient}
                  />
                </motion.div>
              ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mt-16"
          >
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  color="primary"
                  variant="shadow"
                  size="lg"
                  className="px-8 font-medium relative overflow-hidden group"
                  endContent={
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaArrowRight className="text-sm text-blue-200 group-hover:text-white" />
                    </motion.div>
                  }
                >
                  <motion.span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-md"
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
                    {language === "en"
                      ? "View All Services"
                      : "সমস্ত সেবা দেখুন"}
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
