"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { Button } from "@heroui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import offeringData from "../../lib/offeringData";
import OfferCard from "./OfferCard";

// Define a type
type OfferingData = {
  type: string;
  image: string;
  title: string;
  name: string;
};

const OfferSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Split data into chunks of two for each slide
  const chunkedData = [];
  for (let i = 0; i < offeringData.length; i += 2) {
    chunkedData.push(offeringData.slice(i, i + 2));
  }

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              isClient && theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Animated glow spots */}
        <motion.div
          className="absolute w-[30rem] h-[30rem] rounded-full blur-[80px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%)"
                : "radial-gradient(circle, rgba(56, 189, 248, 0.1), transparent 70%)",
            top: "5%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-[35rem] h-[35rem] rounded-full blur-[100px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)",
            bottom: "10%",
            left: "-15%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
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
                opacity: [0.4, 0.8, 0.4],
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text px-4 py-1 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 flex items-center justify-center gap-2">
              <FaRegLightbulb className="text-cyan-500 dark:text-cyan-300" />
              {language === "en" ? "Our Offerings" : "আমাদের অফারসমূহ"}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-center mb-5 font-extrabold font-siliguri text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent"
          >
            {language === "en"
              ? "Explore Our Offerings"
              : "আমাদের অফারসমূহ দেখুন"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300"
          >
            {language === "en"
              ? "Discover our cutting-edge programs and courses designed to propel your tech journey forward."
              : "আপনার প্রযুক্তি যাত্রাকে এগিয়ে নিতে আমাদের অত্যাধুনিক প্রোগ্রাম এবং কোর্সগুলি দেখুন।"}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Tech-inspired decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-blue-500 dark:border-blue-400 opacity-60"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-blue-500 dark:border-blue-400 opacity-60"></div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            loop={true}
            onSlideChange={handleSlideChange}
            className="w-full pb-12"
          >
            {chunkedData.map((pair, index) => (
              <SwiperSlide key={index} className="shadow-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-rows-2 gap-4"
                  style={{
                    filter:
                      activeIndex === index
                        ? "brightness(1.1)"
                        : "brightness(0.9)",
                    transition: "filter 0.5s ease-in-out",
                  }}
                >
                  {pair.map((data, subIndex) => (
                    <motion.div
                      key={subIndex}
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          isClient && theme === "dark"
                            ? "0 0 15px rgba(56, 189, 248, 0.3)"
                            : "0 0 15px rgba(59, 130, 246, 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <OfferCard data={data} />
                    </motion.div>
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider indicator dots */}
          <div className="flex justify-center gap-1 mt-4">
            {chunkedData.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1.5 rounded-full ${
                  activeIndex === index
                    ? "w-6 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
                    : "w-1.5 bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mt-12"
        >
          <Link href="/all-offer">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                color="primary"
                variant="shadow"
                className="px-6 py-6 relative overflow-hidden group"
                endContent={
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowRight className="text-cyan-100 group-hover:text-white" />
                  </motion.div>
                }
                startContent={
                  <IoRocketOutline className="text-xl text-cyan-200 group-hover:text-white" />
                }
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="relative z-10 font-medium text-base">
                  {language === "en"
                    ? "Explore All Offerings"
                    : "সব অফার দেখুন"}
                </span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OfferSection;
