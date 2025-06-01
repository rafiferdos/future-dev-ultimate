"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaLightbulb,
  FaPaperPlane,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { HiLightningBolt, HiMail, HiSparkles } from "react-icons/hi";
import {
  MdAutoAwesome,
  MdEmail,
  MdTrendingUp,
  MdWorkOutline,
} from "react-icons/md";
import { RiRocketFill, RiStarSmileFill, RiTeamFill } from "react-icons/ri";

const JoinOurTeamSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Recruitment-themed background pattern */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                width: Math.random() * 40 + 20 + "px",
                height: Math.random() * 40 + 20 + "px",
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? `linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))`
                      : `linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.05))`,
                  filter: "blur(1px)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Career opportunity icons */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {i % 4 === 0 && <FaRocket className="text-emerald-400 text-xl" />}
              {i % 4 === 1 && (
                <FaLightbulb className="text-yellow-400 text-lg" />
              )}
              {i % 4 === 2 && <FaCode className="text-blue-400 text-lg" />}
              {i % 4 === 3 && (
                <RiStarSmileFill className="text-purple-400 text-lg" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Large gradient orbs */}
        <motion.div
          className="absolute w-[50rem] h-[50rem] rounded-full blur-[120px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(34, 197, 94, 0.05), transparent 70%)",
            top: "-15%",
            right: "-20%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-[45rem] h-[45rem] rounded-full blur-[100px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%)",
            bottom: "-15%",
            left: "-15%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
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
          className="relative"
          onMouseMove={handleMouseMove}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Main container with advanced glass morphism */}
          <motion.div
            className="relative rounded-[2rem] overflow-hidden p-12 md:p-16"
            style={{
              background:
                isClient && theme === "dark"
                  ? "rgba(15, 23, 42, 0.8)"
                  : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(25px)",
              border:
                isClient && theme === "dark"
                  ? "1px solid rgba(34, 197, 94, 0.3)"
                  : "1px solid rgba(34, 197, 94, 0.2)",
              boxShadow: isHovered
                ? isClient && theme === "dark"
                  ? "0 25px 50px -12px rgba(34, 197, 94, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)"
                  : "0 25px 50px -12px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)"
                : "0 10px 40px -5px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            whileHover={{ y: -5 }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] pointer-events-none"
              style={{
                background: `conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  rgba(34, 197, 94, 0.3) 90deg, 
                  rgba(59, 130, 246, 0.3) 180deg, 
                  rgba(168, 85, 247, 0.3) 270deg, 
                  transparent 360deg)`,
                padding: "2px",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Interactive mouse follower */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "200px",
                height: "200px",
                background:
                  isClient && theme === "dark"
                    ? "radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent 70%)"
                    : "radial-gradient(circle, rgba(34, 197, 94, 0.05), transparent 70%)",
                left: mousePosition.x - 100,
                top: mousePosition.y - 100,
              }}
              animate={{
                scale: isHovered ? 1.5 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content Section */}
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-blue-400 text-transparent bg-clip-text px-4 py-2 text-sm font-bold rounded-full border border-emerald-200 dark:border-emerald-700 flex items-center gap-2 w-fit">
                    <RiTeamFill className="text-emerald-500 dark:text-emerald-300" />
                    {language === "en"
                      ? "Career Opportunity"
                      : "ক্যারিয়ার সুযোগ"}
                  </span>
                </motion.div>

                {/* Main heading with gradient text */}
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 via-blue-500 to-purple-500 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
                >
                  {language === "en"
                    ? "Join Our Dream Team"
                    : "আমাদের স্বপ্নের দলে যোগ দিন"}
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {language === "en"
                    ? "Join Future Dev and help shape the future of education with innovative solutions. Be part of a dynamic team dedicated to transforming how children learn technology and prepare for tomorrow's world."
                    : "ফিউচার ডেভ-এ যোগ দিন এবং উদ্ভাবনী সমাধানের মাধ্যমে শিক্ষার ভবিষ্যৎ গঠনে সাহায্য করুন। শিশুরা কীভাবে প্রযুক্তি শেখে এবং আগামীর বিশ্বের জন্য প্রস্তুত হয় তা পরিবর্তন করতে নিবেদিত একটি গতিশীল দলের অংশ হন।"}
                </motion.p>

                {/* Benefits showcase */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <BenefitBadge
                    icon={<MdWorkOutline />}
                    text={
                      language === "en" ? "Remote Friendly" : "রিমোট ফ্রেন্ডলি"
                    }
                    color="emerald"
                  />
                  <BenefitBadge
                    icon={<MdTrendingUp />}
                    text={
                      language === "en"
                        ? "Growth Opportunities"
                        : "বৃদ্ধির সুযোগ"
                    }
                    color="blue"
                  />
                  <BenefitBadge
                    icon={<FaGraduationCap />}
                    text={
                      language === "en" ? "Learning Culture" : "শেখার সংস্কৃতি"
                    }
                    color="purple"
                  />
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                  <Link href="/careers">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button
                        color="primary"
                        variant="shadow"
                        size="lg"
                        className="px-8 py-6 font-bold text-lg relative overflow-hidden group"
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
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-md"
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
                            : "ক্যারিয়ার অন্বেষণ করুন"}
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Floating decorative elements */}
                <div className="absolute -top-8 -left-8">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="p-3 rounded-full"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "rgba(34, 197, 94, 0.1)"
                          : "rgba(34, 197, 94, 0.05)",
                    }}
                  >
                    <RiRocketFill className="text-emerald-500 dark:text-emerald-400 text-2xl" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Email Section */}
              <motion.div variants={itemVariants} className="relative">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <HiMail className="text-3xl text-emerald-500 dark:text-emerald-400" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {language === "en" ? "Stay Updated" : "আপডেট থাকুন"}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {language === "en"
                        ? "Get notified about new job openings and career opportunities"
                        : "নতুন চাকরির সুযোগ এবং ক্যারিয়ার অপরচুনিটি সম্পর্কে জানুন"}
                    </p>
                  </motion.div>

                  {/* Enhanced Email Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={
                          language === "en"
                            ? "Enter your email address"
                            : "আপনার ইমেইল ঠিকানা দিন"
                        }
                        variant="bordered"
                        size="lg"
                        className="w-full"
                        classNames={{
                          input: "text-lg",
                          inputWrapper:
                            isClient && theme === "dark"
                              ? "bg-slate-800/50 border-emerald-500/30 hover:border-emerald-400/50 focus-within:border-emerald-400"
                              : "bg-white/80 border-emerald-300/50 hover:border-emerald-400/70 focus-within:border-emerald-500",
                        }}
                        startContent={
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <MdEmail className="text-2xl text-emerald-500 dark:text-emerald-400" />
                          </motion.div>
                        }
                        endContent={
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              type="submit"
                              color="primary"
                              variant="shadow"
                              size="sm"
                              isDisabled={!email || isSubmitted}
                              className="font-medium"
                              endContent={
                                isSubmitted ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      duration: 1,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                  >
                                    <HiSparkles className="text-sm" />
                                  </motion.div>
                                ) : (
                                  <FaPaperPlane className="text-sm" />
                                )
                              }
                            >
                              {isSubmitted
                                ? language === "en"
                                  ? "Sent!"
                                  : "পাঠানো হয়েছে!"
                                : language === "en"
                                  ? "Subscribe"
                                  : "সাবস্ক্রাইব"}
                            </Button>
                          </motion.div>
                        }
                      />

                      {/* Success animation */}
                      {isSubmitted && (
                        <motion.div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1.05, 1],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{ duration: 1 }}
                        >
                          <div className="w-full h-full rounded-xl bg-gradient-to-r from-emerald-400/20 to-blue-400/20" />
                        </motion.div>
                      )}
                    </div>
                  </motion.form>

                  {/* Trust indicators */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-1">
                      <HiLightningBolt className="text-yellow-500" />
                      <span>
                        {language === "en"
                          ? "Instant updates"
                          : "তাৎক্ষণিক আপডেট"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdAutoAwesome className="text-purple-500" />
                      <span>
                        {language === "en" ? "No spam" : "কোন স্প্যাম নয়"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                    className="p-2 rounded-full"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "rgba(59, 130, 246, 0.1)"
                          : "rgba(59, 130, 246, 0.05)",
                    }}
                  >
                    <HiSparkles className="text-blue-500 dark:text-blue-400 text-lg" />
                  </motion.div>
                </div>

                <div className="absolute -bottom-4 -left-4">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                    className="p-2 rounded-full"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "rgba(168, 85, 247, 0.1)"
                          : "rgba(168, 85, 247, 0.05)",
                    }}
                  >
                    <FaUsers className="text-purple-500 dark:text-purple-400 text-lg" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Benefit Badge Component
const BenefitBadge = ({ icon, text, color }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  const getColors = (color) => {
    switch (color) {
      case "emerald":
        return {
          bg:
            isClient && theme === "dark"
              ? "rgba(34, 197, 94, 0.1)"
              : "rgba(34, 197, 94, 0.05)",
          border:
            isClient && theme === "dark"
              ? "rgba(34, 197, 94, 0.3)"
              : "rgba(34, 197, 94, 0.2)",
          icon: "#10b981",
          text: isClient && theme === "dark" ? "#34d399" : "#059669",
        };
      case "blue":
        return {
          bg:
            isClient && theme === "dark"
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(59, 130, 246, 0.05)",
          border:
            isClient && theme === "dark"
              ? "rgba(59, 130, 246, 0.3)"
              : "rgba(59, 130, 246, 0.2)",
          icon: "#3b82f6",
          text: isClient && theme === "dark" ? "#60a5fa" : "#2563eb",
        };
      case "purple":
        return {
          bg:
            isClient && theme === "dark"
              ? "rgba(168, 85, 247, 0.1)"
              : "rgba(168, 85, 247, 0.05)",
          border:
            isClient && theme === "dark"
              ? "rgba(168, 85, 247, 0.3)"
              : "rgba(168, 85, 247, 0.2)",
          icon: "#a855f7",
          text: isClient && theme === "dark" ? "#c084fc" : "#7c3aed",
        };
      default:
        return {
          bg:
            isClient && theme === "dark"
              ? "rgba(34, 197, 94, 0.1)"
              : "rgba(34, 197, 94, 0.05)",
          border:
            isClient && theme === "dark"
              ? "rgba(34, 197, 94, 0.3)"
              : "rgba(34, 197, 94, 0.2)",
          icon: "#10b981",
          text: isClient && theme === "dark" ? "#34d399" : "#059669",
        };
    }
  };

  const colors = getColors(color);

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium"
      style={{
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        backdropFilter: "blur(10px)",
      }}
      whileHover={{
        y: -3,
        scale: 1.05,
        boxShadow:
          isClient && theme === "dark"
            ? "0 10px 20px -5px rgba(0, 0, 0, 0.3)"
            : "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span style={{ color: colors.icon }}>{icon}</span>
      <span style={{ color: colors.text }}>{text}</span>
    </motion.div>
  );
};

export default JoinOurTeamSection;
