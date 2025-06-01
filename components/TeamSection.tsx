"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPeopleCarry, FaUsers } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { MdRocketLaunch, MdWorkOutline } from "react-icons/md";

const TeamSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.1,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="py-12 px-6 mx-auto relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background shapes */}
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            strokeWidth="0.5"
            stroke={isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          className="rounded-3xl overflow-hidden relative"
          whileHover={{
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background:
                isClient && theme === "dark"
                  ? "linear-gradient(125deg, rgba(29, 78, 216, 0.15), rgba(109, 40, 217, 0.15))"
                  : "linear-gradient(125deg, rgba(219, 234, 254, 0.8), rgba(224, 231, 255, 0.8))",
            }}
            animate={{
              background: isHovered
                ? isClient && theme === "dark"
                  ? [
                      "linear-gradient(125deg, rgba(29, 78, 216, 0.15), rgba(109, 40, 217, 0.15))",
                      "linear-gradient(145deg, rgba(29, 78, 216, 0.2), rgba(109, 40, 217, 0.2))",
                      "linear-gradient(125deg, rgba(29, 78, 216, 0.15), rgba(109, 40, 217, 0.15))",
                    ]
                  : [
                      "linear-gradient(125deg, rgba(219, 234, 254, 0.8), rgba(224, 231, 255, 0.8))",
                      "linear-gradient(145deg, rgba(219, 234, 254, 0.9), rgba(224, 231, 255, 0.9))",
                      "linear-gradient(125deg, rgba(219, 234, 254, 0.8), rgba(224, 231, 255, 0.8))",
                    ]
                : {},
            }}
            transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl z-0"
            style={{
              border:
                isClient && theme === "dark"
                  ? "1px solid rgba(56, 189, 248, 0.3)"
                  : "1px solid rgba(59, 130, 246, 0.3)",
            }}
            animate={{
              boxShadow: isHovered
                ? isClient && theme === "dark"
                  ? "0 0 30px rgba(56, 189, 248, 0.3)"
                  : "0 0 30px rgba(59, 130, 246, 0.2)"
                : "none",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left section with text */}
            <motion.div
              className="w-full md:w-2/3 font-siliguri space-y-4"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                >
                  <FaUsers className="text-blue-600 dark:text-blue-400 text-lg" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-blue-600 dark:text-blue-400 font-medium"
                >
                  {language === "en"
                    ? "Career Opportunities"
                    : "ক্যারিয়ার সুযোগ"}
                </motion.span>
              </div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent"
              >
                {language === "en" ? "Join Our Team" : "আমাদের টিমে যোগ দিন"}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-slate-700 dark:text-slate-300 text-lg"
              >
                {language === "en"
                  ? "Join Future Dev and help shape the future of education with innovative solutions. Be part of a dynamic team dedicated to transforming how children learn technology."
                  : "ফিউচার ডেভ-এ যোগ দিন এবং উদ্ভাবনী সমাধানের মাধ্যমে শিক্ষার ভবিষ্যত গঠনে সাহায্য করুন। শিশুরা কীভাবে প্রযুক্তি শেখে তা পরিবর্তন করতে নিবেদিত একটি গতিশীল দলের অংশ হন।"}
              </motion.p>

              {/* Benefits */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mt-2"
              >
                <Benefit
                  icon={<MdWorkOutline />}
                  text={language === "en" ? "Flexible work" : "নমনীয় কাজ"}
                />
                <Benefit
                  icon={<MdRocketLaunch />}
                  text={
                    language === "en" ? "Growth opportunities" : "বৃদ্ধির সুযোগ"
                  }
                />
                <Benefit
                  icon={<FaPeopleCarry />}
                  text={
                    language === "en"
                      ? "Collaborative culture"
                      : "সহযোগিতামূলক সংস্কৃতি"
                  }
                />
              </motion.div>
            </motion.div>

            {/* Right section with button */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <Link href="/careers">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    color="primary"
                    size="lg"
                    variant="shadow"
                    className="font-siliguri font-medium px-6 py-6 relative overflow-hidden group"
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
                        ? "Explore Careers"
                        : "ক্যারিয়ার দেখুন"}
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-3 -right-3 w-20 h-20 opacity-20 dark:opacity-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? [0.1, 0.2, 0.1] : 0, scale: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <HiSparkles className="w-full h-full text-indigo-600 dark:text-indigo-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Benefit component for displaying perks
const Benefit = ({ icon, text }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
      style={{
        background:
          isClient && theme === "dark"
            ? "rgba(29, 78, 216, 0.1)"
            : "rgba(239, 246, 255, 0.7)",
        border:
          isClient && theme === "dark"
            ? "1px solid rgba(56, 189, 248, 0.2)"
            : "1px solid rgba(219, 234, 254, 0.8)",
      }}
      whileHover={{
        y: -3,
        boxShadow:
          isClient && theme === "dark"
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">
        {text}
      </span>
    </motion.div>
  );
};

export default TeamSection;
