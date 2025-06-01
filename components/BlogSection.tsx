"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBookmark,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { HiLightningBolt, HiSparkles, HiTrendingUp } from "react-icons/hi";
import { MdAutoAwesome, MdRocket, MdTrendingUp } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import blogs from "../lib/blogData";

// Enhanced blog type with additional fields
type Blog = {
  id: string;
  image: string;
  date: string;
  description: string;
  title?: string;
  titleEn?: string;
  author?: string;
  authorEn?: string;
  readTime?: string;
  category?: string;
  categoryEn?: string;
  views?: number;
  likes?: number;
  trending?: boolean;
};

// Enhanced blog data with additional information
const enhancedBlogs: Blog[] = blogs.map((blog, index) => ({
  ...blog,
  title: [
    "প্রোগ্রামিং শেখার নতুন উপায়",
    "রোবটিক্সের ভবিষ্যৎ",
    "ওয়েব ডেভেলপমেন্ট ট্রেন্ডস",
    "AI এবং মেশিন লার্নিং",
    "গেম ডেভেলপমেন্ট গাইড",
    "সাইবার সিকিউরিটি টিপস",
  ][index % 6],
  titleEn: [
    "New Ways to Learn Programming",
    "The Future of Robotics",
    "Web Development Trends",
    "AI and Machine Learning",
    "Game Development Guide",
    "Cybersecurity Tips",
  ][index % 6],
  author: ["আহমেদ করিম", "ফাতিমা খান", "রহিম উদ্দিন"][index % 3],
  authorEn: ["Ahmed Karim", "Fatima Khan", "Rahim Uddin"][index % 3],
  readTime: ["5 মিনিট", "8 মিনিট", "12 মিনিট"][index % 3],
  category: ["টিউটোরিয়াল", "নিউজ", "গাইড"][index % 3],
  categoryEn: ["Tutorial", "News", "Guide"][index % 3],
  views: Math.floor(Math.random() * 5000) + 500,
  likes: Math.floor(Math.random() * 200) + 50,
  trending: index < 2,
}));

const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

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

  const categories = [
    { id: "all", label: language === "en" ? "All Posts" : "সব পোস্ট" },
    { id: "tutorial", label: language === "en" ? "Tutorials" : "টিউটোরিয়াল" },
    { id: "news", label: language === "en" ? "News" : "নিউজ" },
    { id: "guide", label: language === "en" ? "Guides" : "গাইড" },
  ];

  const filteredBlogs =
    activeCategory === "all"
      ? enhancedBlogs
      : enhancedBlogs.filter((blog) =>
          language === "en"
            ? blog.categoryEn?.toLowerCase() === activeCategory
            : blog.category?.toLowerCase() === activeCategory
        );

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r="0.5"
                fill={isClient && theme === "dark" ? "#60a5fa" : "#3b82f6"}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  r: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke={isClient && theme === "dark" ? "#38bdf8" : "#3b82f6"}
                strokeWidth="0.1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Floating tech elements */}
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
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {i % 4 === 0 && <MdRocket className="text-blue-400 text-2xl" />}
              {i % 4 === 1 && (
                <HiLightningBolt className="text-yellow-400 text-xl" />
              )}
              {i % 4 === 2 && (
                <MdAutoAwesome className="text-purple-400 text-lg" />
              )}
              {i % 4 === 3 && <HiSparkles className="text-cyan-400 text-xl" />}
            </motion.div>
          ))}
        </div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[60rem] h-[60rem] rounded-full blur-[150px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(56, 189, 248, 0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.04), transparent 70%)",
            top: "-20%",
            right: "-25%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text px-4 py-2 text-sm font-bold rounded-full border border-cyan-200 dark:border-cyan-700 flex items-center justify-center gap-2">
                <RiFlashlightLine className="text-cyan-500 dark:text-cyan-300" />
                {language === "en" ? "Latest Insights" : "সর্বশেষ অন্তর্দৃষ্টি"}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 font-extrabold text-4xl md:text-6xl bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            >
              {language === "en"
                ? "Future-Ready Blog"
                : "ভবিষ্যৎ-প্রস্তুত ব্লগ"}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              {language === "en"
                ? "Explore cutting-edge insights, tutorials, and innovations in technology education. Stay ahead with the latest trends and discoveries in programming, robotics, and digital creativity."
                : "প্রযুক্তি শিক্ষায় অত্যাধুনিক অন্তর্দৃষ্টি, টিউটোরিয়াল এবং উদ্ভাবন অন্বেষণ করুন। প্রোগ্রামিং, রোবটিক্স এবং ডিজিটাল সৃজনশীলতার সর্বশেষ ট্রেন্ড এবং আবিষ্কারের সাথে এগিয়ে থাকুন।"}
            </motion.p>

            {/* Category Filter */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background:
                      activeCategory === category.id
                        ? isClient && theme === "dark"
                          ? "linear-gradient(45deg, #06b6d4, #3b82f6)"
                          : "linear-gradient(45deg, #0891b2, #2563eb)"
                        : isClient && theme === "dark"
                          ? "rgba(15, 23, 42, 0.6)"
                          : "rgba(255, 255, 255, 0.8)",
                    color:
                      activeCategory === category.id ? "#ffffff" : undefined,
                    border:
                      activeCategory === category.id
                        ? "none"
                        : isClient && theme === "dark"
                          ? "1px solid rgba(56, 189, 248, 0.3)"
                          : "1px solid rgba(219, 234, 254, 0.8)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Blog Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredBlogs?.length > 0 &&
              filteredBlogs
                .slice(0, 6)
                .map((blog: Blog, index: number) => (
                  <FuturisticBlogCard
                    key={blog.id}
                    blog={blog}
                    index={index}
                    isHovered={hoveredCard === blog.id}
                    onHover={() => setHoveredCard(blog.id)}
                    onLeave={() => setHoveredCard(null)}
                  />
                ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="inline-block p-8 rounded-3xl"
              style={{
                background:
                  isClient && theme === "dark"
                    ? "rgba(15, 23, 42, 0.7)"
                    : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                border:
                  isClient && theme === "dark"
                    ? "1px solid rgba(56, 189, 248, 0.3)"
                    : "1px solid rgba(219, 234, 254, 0.8)",
              }}
              whileHover={{
                y: -5,
                boxShadow:
                  isClient && theme === "dark"
                    ? "0 25px 50px -12px rgba(56, 189, 248, 0.25)"
                    : "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <MdTrendingUp className="text-3xl text-cyan-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {language === "en"
                    ? "Explore More Insights"
                    : "আরো অন্তর্দৃষ্টি অন্বেষণ করুন"}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto">
                {language === "en"
                  ? "Dive deeper into our comprehensive blog archive filled with expert tutorials, industry insights, and innovative learning resources."
                  : "বিশেষজ্ঞ টিউটোরিয়াল, শিল্প অন্তর্দৃষ্টি এবং উদ্ভাবনী শেখার সংস্থানে ভরা আমাদের ব্যাপক ব্লগ আর্কাইভে গভীরভাবে ডুব দিন।"}
              </p>

              <Link href="/blog">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
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
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md"
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
                      {language === "en" ? "View All Posts" : "সব পোস্ট দেখুন"}
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Futuristic Blog Card Component
const FuturisticBlogCard = ({
  blog,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  blog: Blog;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const cardColors = [
    { primary: "#06b6d4", secondary: "#0891b2" },
    { primary: "#3b82f6", secondary: "#2563eb" },
    { primary: "#8b5cf6", secondary: "#7c3aed" },
    { primary: "#f59e0b", secondary: "#d97706" },
    { primary: "#ef4444", secondary: "#dc2626" },
    { primary: "#10b981", secondary: "#059669" },
  ];

  const color = cardColors[index % cardColors.length];

  return (
    <motion.div
      className="group relative h-full"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div
        className="rounded-3xl overflow-hidden h-full relative"
        style={{
          background:
            isClient && theme === "dark"
              ? "rgba(15, 23, 42, 0.8)"
              : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          border:
            isClient && theme === "dark"
              ? `1px solid ${color.primary}40`
              : `1px solid ${color.primary}30`,
          boxShadow: isHovered
            ? isClient && theme === "dark"
              ? `0 25px 50px -12px ${color.primary}40`
              : `0 25px 50px -12px ${color.primary}30`
            : "0 4px 20px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Animated top accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${color.primary}, ${color.secondary})`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />

        {/* Trending badge */}
        {blog.trending && (
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <div
              className="px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
              style={{
                background: `linear-gradient(45deg, ${color.primary}, ${color.secondary})`,
              }}
            >
              <HiTrendingUp />
              {language === "en" ? "Trending" : "ট্রেন্ডিং"}
            </div>
          </motion.div>
        )}

        {/* Image section with overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={
              language === "en"
                ? blog.titleEn || blog.description
                : blog.title || blog.description
            }
            width={500}
            height={300}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/20" />

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{
                background: `linear-gradient(45deg, ${color.primary}CC, ${color.secondary}CC)`,
                backdropFilter: "blur(10px)",
              }}
            >
              {language === "en" ? blog.categoryEn : blog.category}
            </span>
          </motion.div>

          {/* Action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <motion.button
              className="p-2 rounded-full backdrop-blur-md"
              style={{
                background: isLiked
                  ? `linear-gradient(45deg, ${color.primary}AA, ${color.secondary}AA)`
                  : "rgba(255, 255, 255, 0.2)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLiked(!isLiked)}
            >
              <FaHeart
                className={`text-sm ${isLiked ? "text-white" : "text-white/70"}`}
              />
            </motion.button>

            <motion.button
              className="p-2 rounded-full backdrop-blur-md"
              style={{
                background: isBookmarked
                  ? `linear-gradient(45deg, ${color.primary}AA, ${color.secondary}AA)`
                  : "rgba(255, 255, 255, 0.2)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <FaBookmark
                className={`text-sm ${isBookmarked ? "text-white" : "text-white/70"}`}
              />
            </motion.button>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 relative z-10">
          <motion.h3
            className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {language === "en" ? blog.titleEn : blog.title}
          </motion.h3>

          <motion.p
            className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {blog.description}
          </motion.p>

          {/* Meta information */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock />
                <span>{blog.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <FaEye />
                <span>{blog.views?.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHeart />
                <span>{blog.likes}</span>
              </div>
            </div>
          </div>

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: `linear-gradient(45deg, ${color.primary}, ${color.secondary})`,
                }}
              >
                <FaUser />
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {language === "en" ? blog.authorEn : blog.author}
              </span>
            </div>

            <Link href={`/blog/${blog.id}`}>
              <motion.button
                className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? `${color.primary}20`
                      : `${color.primary}10`,
                  color: color.primary,
                }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  background: `${color.primary}30`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {language === "en" ? "Read More" : "আরো পড়ুন"}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowRight className="text-xs" />
                </motion.div>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Holographic effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${color.primary}15, transparent 50%, ${color.secondary}15)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "-100%" : "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div
            className="w-full h-1 blur-sm"
            style={{
              background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
