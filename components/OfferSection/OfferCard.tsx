"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface OfferCardProps {
  data: {
    type: string;
    image: string;
    title: string;
    name: string;
  };
}

const OfferCard: React.FC<OfferCardProps> = ({ data }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/courses/${data.type}`}>
      <motion.div
        className="relative rounded-xl overflow-hidden h-[220px] group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        {/* Border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? [0.4, 0.8, 0.4] : 0,
            boxShadow: isHovered
              ? isClient && theme === "dark"
                ? "0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(56, 189, 248, 0.2) inset"
                : "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1) inset"
              : "none",
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          style={{
            background:
              isClient && theme === "dark"
                ? "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(37, 99, 235, 0.2))"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))",
            border:
              isClient && theme === "dark"
                ? "1px solid rgba(56, 189, 248, 0.3)"
                : "1px solid rgba(59, 130, 246, 0.2)",
          }}
        />

        {/* Tech pattern overlay */}
        <div
          className="absolute inset-0 z-10 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
          style={{
            backgroundImage:
              isClient && theme === "dark"
                ? "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px)"
                : "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px, 20px 20px",
          }}
        />

        {/* Image with overlay */}
        <div className="relative w-full h-full z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-900/40" />

          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={250}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
          {/* Tech badge */}
          <motion.div
            className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            style={{
              background:
                isClient && theme === "dark"
                  ? "linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(37, 99, 235, 0.3))"
                  : "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(14, 165, 233, 0.2))",
              border:
                isClient && theme === "dark"
                  ? "1px solid rgba(56, 189, 248, 0.5)"
                  : "1px solid rgba(59, 130, 246, 0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            {data.type}
          </motion.div>

          {/* Title with glowing effect */}
          <motion.h3
            className="text-xl font-bold text-white mb-1 relative"
            animate={{
              textShadow: isHovered
                ? isClient && theme === "dark"
                  ? "0 0 8px rgba(56, 189, 248, 0.7)"
                  : "0 0 8px rgba(59, 130, 246, 0.5)"
                : "none",
            }}
          >
            {data.title}
          </motion.h3>

          <motion.p
            className="text-slate-300 text-sm mb-3"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {data.name}
          </motion.p>

          {/* Animated action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <span className="text-cyan-400 dark:text-cyan-300">
              {language === "en" ? "Explore Course" : "কোর্স দেখুন"}
            </span>
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-cyan-500 dark:bg-cyan-400 rounded-full p-1"
            >
              <FaArrowRight className="text-[10px] text-white" />
            </motion.div>
          </motion.div>

          {/* Tech decorative elements */}
          <motion.div
            className="absolute left-0 bottom-0 w-16 h-[1px]"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 60 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                isClient && theme === "dark"
                  ? "linear-gradient(to right, transparent, rgba(56, 189, 248, 0.7), transparent)"
                  : "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)",
            }}
          />

          <motion.div
            className="absolute -left-2 -bottom-2 w-4 h-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-4 h-4 border-l border-b rounded-bl-md"
              style={{
                borderColor:
                  isClient && theme === "dark"
                    ? "rgba(56, 189, 248, 0.7)"
                    : "rgba(59, 130, 246, 0.5)",
              }}
            />
          </motion.div>

          {/* Animated dot pattern */}
          {isHovered && (
            <div className="absolute right-4 bottom-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 3 - i * 0.5 + "px",
                    height: 3 - i * 0.5 + "px",
                    background:
                      isClient && theme === "dark" ? "#38bdf8" : "#3b82f6",
                    bottom: i * 6 + "px",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default OfferCard;
