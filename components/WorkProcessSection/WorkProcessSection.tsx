"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaBrain,
  FaChartLine,
  FaGraduationCap,
  FaLightbulb,
  FaMedal,
  FaRegLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import {
  MdOutlineMenuBook,
  MdOutlineRocketLaunch,
  MdOutlineSchool,
  MdTouchApp,
} from "react-icons/md";
import {
  RiComputerLine,
  RiLightbulbFlashLine,
  RiRobot2Line,
} from "react-icons/ri";

// Define a type
type StrengthsData = {
  id: string;
  image: string;
  title: string;
  description: string;
};

// Enhanced process step data with more detailed information
const processSteps = [
  {
    id: "discover",
    number: "01",
    title: "Discover & Assess",
    subtitle: "Finding the right learning path",
    description:
      "We begin by understanding each student's unique abilities, interests, and learning style through interactive assessments and consultations with parents.",
    detailedDescription:
      "Our expert educators utilize adaptive technology and personalized assessments to identify your child's strengths, areas for improvement, and learning preferences. This crucial first step helps us create a tailored educational journey.",
    benefits: [
      "Personalized skill assessment",
      "Interest-based learning paths",
      "Age-appropriate goal setting",
    ],
    icon: <LuBrainCircuit className="text-white text-2xl" />,
    bgColor: "from-pink-500 to-rose-500",
    shadowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    id: "learn",
    number: "02",
    title: "Interactive Learning",
    subtitle: "Engaging with technology",
    description:
      "Students engage with our interactive curriculum featuring coding challenges, robotics projects, and game development exercises guided by expert instructors.",
    detailedDescription:
      "Through hands-on projects and collaborative activities, students learn by doing. Our curriculum combines visual, auditory, and kinesthetic learning methods to ensure concepts are understood deeply and retained longer.",
    benefits: [
      "Project-based learning approach",
      "Real-time feedback systems",
      "Collaborative problem-solving",
    ],
    icon: <RiComputerLine className="text-white text-2xl" />,
    bgColor: "from-blue-500 to-indigo-500",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "practice",
    number: "03",
    title: "Practical Application",
    subtitle: "Building real-world skills",
    description:
      "Theory transforms into practice as students apply their knowledge to create functional projects, reinforcing concepts and building confidence.",
    detailedDescription:
      "Students work on real-world challenges and develop tangible solutions. This approach bridges the gap between theoretical knowledge and practical skills, preparing them for future academic and career success.",
    benefits: [
      "Industry-relevant projects",
      "Creative problem solving",
      "Portfolio development",
    ],
    icon: <MdTouchApp className="text-white text-2xl" />,
    bgColor: "from-amber-500 to-orange-500",
    shadowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    id: "master",
    number: "04",
    title: "Master & Innovate",
    subtitle: "Becoming a creator",
    description:
      "Students progress from following instructions to creating their own innovations, developing critical thinking and creative problem-solving abilities.",
    detailedDescription:
      "The final stage focuses on mastery and innovation. Students independently conceptualize, develop, and present their own tech creations. This cultivates entrepreneurial thinking, innovation skills, and confidence in their abilities.",
    benefits: [
      "Independent project creation",
      "Advanced concept mastery",
      "Innovation and entrepreneurship",
    ],
    icon: <RiRobot2Line className="text-white text-2xl" />,
    bgColor: "from-purple-500 to-violet-500",
    shadowColor: "rgba(139, 92, 246, 0.4)",
  },
];

// Enhanced key strengths data
const keyStrengths = [
  {
    id: "curriculum",
    icon: <MdOutlineMenuBook className="text-3xl" />,
    title: "Modern Curriculum",
    description:
      "Regularly updated content aligned with industry trends and educational standards",
    detailedPoints: [
      "Technology-focused learning material",
      "Real-world application examples",
      "Age-appropriate progression paths",
    ],
    color: "blue",
  },
  {
    id: "instructors",
    icon: <FaUsers className="text-3xl" />,
    title: "Expert Instructors",
    description:
      "Passionate educators with industry experience and teaching expertise",
    detailedPoints: [
      "Certified educational professionals",
      "Industry practitioners and specialists",
      "Continuous professional development",
    ],
    color: "purple",
  },
  {
    id: "approach",
    icon: <FaBrain className="text-3xl" />,
    title: "Personalized Approach",
    description:
      "Tailored learning experiences based on individual student needs and progress",
    detailedPoints: [
      "Adaptive learning technologies",
      "Custom pacing for each student",
      "Regular progress assessments",
    ],
    color: "pink",
  },
  {
    id: "results",
    icon: <FaChartLine className="text-3xl" />,
    title: "Proven Results",
    description:
      "Measurable improvement in technical skills, problem-solving, and creativity",
    detailedPoints: [
      "Skill-based achievement tracking",
      "Project portfolio development",
      "Long-term success stories",
    ],
    color: "amber",
  },
];

// Student journey milestones
const studentJourney = [
  {
    stage: "Beginner",
    achievements: [
      "Foundation in basic programming concepts",
      "Introduction to computational thinking",
      "Simple project completion",
    ],
    icon: <MdOutlineSchool />,
  },
  {
    stage: "Intermediate",
    achievements: [
      "Complex problem-solving skills",
      "Independent project work",
      "Collaborative team activities",
    ],
    icon: <FaGraduationCap />,
  },
  {
    stage: "Advanced",
    achievements: [
      "Specialized skill development",
      "Innovation and original creation",
      "Leadership in team projects",
    ],
    icon: <MdOutlineRocketLaunch />,
  },
];

const WorkProcessSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const strengthsRef = useRef(null);
  const journeyRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const isStrengthsInView = useInView(strengthsRef, {
    once: false,
    amount: 0.1,
  });
  const isJourneyInView = useInView(journeyRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const strengthsControls = useAnimation();
  const journeyControls = useAnimation();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isStrengthsInView) {
      strengthsControls.start("visible");
    }
  }, [isStrengthsInView, strengthsControls]);

  useEffect(() => {
    if (isJourneyInView) {
      journeyControls.start("visible");
    }
  }, [isJourneyInView, journeyControls]);

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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
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

        {/* Animated tech circuit paths */}
        <svg
          className="absolute w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,50 C150,20 350,150 500,0"
            stroke={isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"}
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
            d="M500,100 C350,150 150,50 0,150"
            stroke={isClient && theme === "dark" ? "#a855f7" : "#8b5cf6"}
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

        {/* Glowing orbs */}
        <motion.div
          className="absolute w-[40rem] h-[40rem] rounded-full blur-[120px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(56, 189, 248, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%)",
            top: "5%",
            right: "-15%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-[35rem] h-[35rem] rounded-full blur-[150px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%)",
            bottom: "5%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
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
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                background:
                  isClient && theme === "dark"
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(59, 130, 246, 0.5)",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
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
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3"
            >
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text px-4 py-1 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 flex items-center justify-center gap-2">
                <FaRegLightbulb className="text-blue-500 dark:text-blue-300" />
                {language === "en" ? "Our Methodology" : "আমাদের পদ্ধতি"}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-center mb-5 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent"
            >
              {language === "en"
                ? "Our Learning Process"
                : "আমাদের শেখার প্রক্রিয়া"}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-6"
            >
              {language === "en"
                ? "We've developed a comprehensive learning framework that guides students from basic understanding to mastery and innovation. Our process ensures steady growth and measurable outcomes."
                : "আমরা একটি ব্যাপক শিক্ষা কাঠামো তৈরি করেছি যা শিক্ষার্থীদের মৌলিক বোঝাপড়া থেকে দক্ষতা এবং উদ্ভাবন পর্যন্ত নিয়ে যায়। আমাদের প্রক্রিয়া ধীর স্থিতিশীল বৃদ্ধি এবং পরিমাপযোগ্য ফলাফল নিশ্চিত করে।"}
            </motion.p>

            <motion.div
              variants={fadeInVariants}
              className="flex justify-center gap-2 items-center text-sm text-slate-500 dark:text-slate-400 mb-12"
            >
              <FaStar className="text-amber-400" />
              {language === "en"
                ? "Trusted by 500+ parents and students across Bangladesh"
                : "বাংলাদেশ জুড়ে ৫০০+ অভিভাবক এবং শিক্ষার্থীদের বিশ্বাস"}
              <FaStar className="text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Enhanced Process Steps */}
          <div className="space-y-24 md:space-y-32 mb-32">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeCard === step.id}
                onMouseEnter={() => setActiveCard(step.id)}
                onMouseLeave={() => setActiveCard(null)}
                itemVariants={itemVariants}
                isEven={index % 2 === 1}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center mt-8 mb-32"
          >
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-center mb-6 text-slate-600 dark:text-slate-300"
            >
              {language === "en"
                ? "Ready to start your child's learning journey with us? Explore our programs or schedule a free consultation with our education specialists."
                : "আপনার সন্তানের শেখার যাত্রা আমাদের সাথে শুরু করতে প্রস্তুত? আমাদের প্রোগ্রামগুলি অন্বেষণ করুন বা আমাদের শিক্ষা বিশেষজ্ঞদের সাথে একটি বিনামূল্যের পরামর্শ সেশন নির্ধারণ করুন।"}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/programs">
                  <Button
                    color="primary"
                    variant="shadow"
                    className="px-6 font-medium relative overflow-hidden group"
                    startContent={
                      <RiLightbulbFlashLine className="text-lg text-yellow-200 group-hover:text-white" />
                    }
                  >
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-md"
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
                        ? "Explore Our Programs"
                        : "আমাদের প্রোগ্রাম দেখুন"}
                    </span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/contact">
                  <Button
                    color="primary"
                    variant="flat"
                    className="px-6 font-medium"
                  >
                    {language === "en"
                      ? "Schedule a Consultation"
                      : "একটি পরামর্শ নির্ধারণ করুন"}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Key Strengths Section with Enhanced Design */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3"
            >
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text px-4 py-1 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 flex items-center justify-center gap-2">
                <FaLightbulb className="text-cyan-500 dark:text-cyan-300" />
                {language === "en"
                  ? "Why Choose Us"
                  : "আমাদের বেছে নেওয়ার কারণ"}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-center mb-5 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            >
              {language === "en" ? "Our Key Strengths" : "আমাদের মূল শক্তি"}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-16"
            >
              {language === "en"
                ? "Discover what sets our educational approach apart and why hundreds of parents trust us with their children's technological education."
                : "জানুন কি আমাদের শিক্ষামূলক পদ্ধতিকে আলাদা করে তোলে এবং কেন শত শত অভিভাবক তাদের সন্তানদের প্রযুক্তিগত শিক্ষার জন্য আমাদের উপর আস্থা রাখেন।"}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Key Strengths Cards with New Design */}
        <motion.div
          ref={strengthsRef}
          variants={containerVariants}
          initial="hidden"
          animate={strengthsControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-32"
        >
          {keyStrengths.map((strength, index) => (
            <StrengthCard
              key={strength.id}
              strength={strength}
              index={index}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Student Journey Section */}
        <motion.div
          ref={journeyRef}
          variants={containerVariants}
          initial="hidden"
          animate={journeyControls}
          className="relative z-10 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h3 className="text-center mb-5 font-bold text-2xl md:text-3xl text-slate-800 dark:text-white">
              {language === "en"
                ? "The Student Journey"
                : "শিক্ষার্থীর যাত্রাপথ"}
            </motion.h3>

            <motion.p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              {language === "en"
                ? "Watch your child progress through these key milestones in their tech education journey with us."
                : "আমাদের সাথে প্রযুক্তি শিক্ষার যাত্রায় আপনার সন্তানের এই মূল মাইলফলকগুলির মাধ্যমে অগ্রগতি দেখুন।"}
            </motion.p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {studentJourney.map((stage, index) => (
              <motion.div
                key={stage.stage}
                variants={itemVariants}
                custom={index}
                className="relative flex flex-col items-center max-w-sm"
              >
                {/* Stage connecting line */}
                {index < studentJourney.length - 1 && (
                  <motion.div
                    className="absolute hidden md:block h-[3px] bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-500 dark:to-indigo-500"
                    style={{
                      top: "2.5rem",
                      left: "50%",
                      width: "100%",
                    }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                )}

                {/* Stage circle */}
                <div className="mb-6 relative">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 flex items-center justify-center text-white text-2xl z-10 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 + index * 0.2,
                    }}
                  >
                    {stage.icon}
                  </motion.div>

                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-500"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.3,
                    }}
                  />
                </div>

                <motion.h4
                  className="text-xl font-bold text-slate-800 dark:text-white mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {stage.stage}
                </motion.h4>

                <motion.ul
                  className="space-y-2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  {stage.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-slate-600 dark:text-slate-300 text-sm"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                    >
                      • {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Process Card Component
const ProcessCard = ({
  step,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  itemVariants,
  isEven,
}) => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  return (
    <motion.div
      variants={itemVariants}
      className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 relative`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Step Number Circle with Icon */}
      <motion.div
        className="relative z-20 shrink-0"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.div
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.bgColor} flex items-center justify-center relative z-10`}
          initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          animate={{
            boxShadow: isActive
              ? `0 0 30px ${step.shadowColor}`
              : "0 10px 25px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {step.icon}
          <span className="absolute top-1 right-1 bg-white dark:bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
            {step.number}
          </span>
        </motion.div>

        {/* Animated ripple effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgColor}`}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="flex-1 w-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background:
              isClient && theme === "dark"
                ? "rgba(15, 23, 42, 0.7)"
                : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border:
              isClient && theme === "dark"
                ? "1px solid rgba(56, 189, 248, 0.2)"
                : "1px solid rgba(219, 234, 254, 0.8)",
            boxShadow: isActive
              ? isClient && theme === "dark"
                ? "0 25px 50px -12px rgba(56, 189, 248, 0.25)"
                : "0 25px 50px -12px rgba(59, 130, 246, 0.15)"
              : "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">
                  {step.subtitle}
                </p>
              </div>

              {isActive && (
                <motion.div
                  className="hidden md:flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-300 text-sm ml-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaMedal className="text-amber-500" />
                  <span>Key Stage</span>
                </motion.div>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-200">
                {step.description}
              </p>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4"
                >
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {step.detailedDescription}
                  </p>

                  <div className="bg-blue-50/50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {step.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <FaStar className="text-amber-500 shrink-0 text-xs" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Strength Card Component
const StrengthCard = ({ strength, index, itemVariants }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();
  const [isHovered, setIsHovered] = useState(false);

  const getGradient = (color) => {
    switch (color) {
      case "blue":
        return isClient && theme === "dark"
          ? "from-blue-500/20 to-cyan-500/20"
          : "from-blue-50 to-cyan-50";
      case "purple":
        return isClient && theme === "dark"
          ? "from-purple-500/20 to-violet-500/20"
          : "from-purple-50 to-violet-50";
      case "pink":
        return isClient && theme === "dark"
          ? "from-pink-500/20 to-rose-500/20"
          : "from-pink-50 to-rose-50";
      case "amber":
        return isClient && theme === "dark"
          ? "from-amber-500/20 to-orange-500/20"
          : "from-amber-50 to-orange-50";
      default:
        return isClient && theme === "dark"
          ? "from-blue-500/20 to-cyan-500/20"
          : "from-blue-50 to-cyan-50";
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-500 dark:text-blue-400";
      case "purple":
        return "text-purple-500 dark:text-purple-400";
      case "pink":
        return "text-pink-500 dark:text-pink-400";
      case "amber":
        return "text-amber-500 dark:text-amber-400";
      default:
        return "text-blue-500 dark:text-blue-400";
    }
  };

  const getBorderColor = (color) => {
    switch (color) {
      case "blue":
        return isClient && theme === "dark"
          ? "rgba(59, 130, 246, 0.3)"
          : "rgba(219, 234, 254, 0.8)";
      case "purple":
        return isClient && theme === "dark"
          ? "rgba(139, 92, 246, 0.3)"
          : "rgba(237, 233, 254, 0.8)";
      case "pink":
        return isClient && theme === "dark"
          ? "rgba(236, 72, 153, 0.3)"
          : "rgba(252, 231, 243, 0.8)";
      case "amber":
        return isClient && theme === "dark"
          ? "rgba(245, 158, 11, 0.3)"
          : "rgba(254, 243, 199, 0.8)";
      default:
        return isClient && theme === "dark"
          ? "rgba(59, 130, 246, 0.3)"
          : "rgba(219, 234, 254, 0.8)";
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="rounded-2xl overflow-hidden h-full"
      style={{
        background:
          isClient && theme === "dark"
            ? "rgba(15, 23, 42, 0.6)"
            : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${getBorderColor(strength.color)}`,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow:
          isClient && theme === "dark"
            ? "0 25px 50px -12px rgba(56, 189, 248, 0.25)"
            : "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
      }}
    >
      <div className={`h-2 bg-gradient-to-r ${getGradient(strength.color)}`} />

      <div className="p-6 space-y-4">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(strength.color)} flex items-center justify-center ${getIconColor(strength.color)}`}
        >
          {strength.icon}
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          {strength.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {strength.description}
        </p>

        {isHovered && (
          <motion.ul
            className="pt-2 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {strength.detailedPoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <span
                  className={`inline-block w-2 h-2 mt-1 rounded-full ${getIconColor(strength.color)}`}
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default WorkProcessSection;
