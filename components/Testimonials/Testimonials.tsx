"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaHeart,
  FaQuoteLeft,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { HiHeart, HiLightBulb, HiSparkles } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { RiDoubleQuotesL, RiEmotionHappyLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Enhanced testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "আরিয়ান রহমান",
    nameEn: "Arian Rahman",
    age: 12,
    course: "প্রোগ্রামিং বেসিক্স",
    courseEn: "Programming Basics",
    rating: 5,
    image: "/testimonials/student1.jpg",
    testimonial:
      "ফিউচার ডেভ-এ পড়ে আমি কোডিং শিখেছি এবং এখন আমি নিজেই গেম বানাতে পারি! শিক্ষকরা খুবই সহায়ক এবং ক্লাসগুলো অনেক মজার।",
    testimonialEn:
      "Learning at Future Dev helped me understand coding and now I can create my own games! The teachers are very helpful and classes are so much fun.",
    location: "ঢাকা",
    locationEn: "Dhaka",
    beforeAfter: {
      before: "কোডিং সম্পর্কে কিছুই জানতাম না",
      beforeEn: "Knew nothing about coding",
      after: "নিজের গেম বানাতে পারি",
      afterEn: "Can create my own games",
    },
  },
  {
    id: 2,
    name: "সারা খান",
    nameEn: "Sara Khan",
    age: 10,
    course: "রোবটিক্স ফর কিডস",
    courseEn: "Robotics for Kids",
    rating: 5,
    image: "/testimonials/student2.jpg",
    testimonial:
      "রোবটিক্স ক্লাসে আমি রোবট বানিয়েছি যেটা আমার কথা শুনে চলে! এটা ছিল আমার জীবনের সবচেয়ে মজার অভিজ্ঞতা।",
    testimonialEn:
      "In robotics class, I built a robot that follows my commands! This was the most exciting experience of my life.",
    location: "চট্টগ্রাম",
    locationEn: "Chittagong",
    beforeAfter: {
      before: "রোবট মানে শুধু সায়েন্স ফিকশন ভাবতাম",
      beforeEn: "Thought robots were just science fiction",
      after: "নিজেই রোবট বানাতে পারি",
      afterEn: "Can build robots myself",
    },
  },
  {
    id: 3,
    name: "রাহুল ইসলাম",
    nameEn: "Rahul Islam",
    age: 14,
    course: "ওয়েব ডেভেলপমেন্ট",
    courseEn: "Web Development",
    rating: 5,
    image: "/testimonials/student3.jpg",
    testimonial:
      "ওয়েব ডেভেলপমেন্ট কোর্সে আমি আমার নিজের ওয়েবসাইট বানিয়েছি। শিক্ষকরা প্রতিটি স্টেপ খুব সহজ করে বুঝিয়েছেন।",
    testimonialEn:
      "In the web development course, I created my own website. Teachers explained every step very simply.",
    location: "সিলেট",
    locationEn: "Sylhet",
    beforeAfter: {
      before: "HTML কি জানতাম না",
      beforeEn: "Didn't know what HTML was",
      after: "পূর্ণাঙ্গ ওয়েবসাইট বানাতে পারি",
      afterEn: "Can build complete websites",
    },
  },
  {
    id: 4,
    name: "তানিয়া আক্তার",
    nameEn: "Tania Akter",
    age: 11,
    course: "গ্রাফিক্স ডিজাইন",
    courseEn: "Graphics Design",
    rating: 5,
    image: "/testimonials/student4.jpg",
    testimonial:
      "গ্রাফিক্স ডিজাইন শিখে আমি এখন সুন্দর পোস্টার এবং লোগো ডিজাইন করতে পারি। এটা আমার স্বপ্নের কাজ ছিল!",
    testimonialEn:
      "Learning graphics design, I can now create beautiful posters and logos. This was my dream job!",
    location: "রাজশাহী",
    locationEn: "Rajshahi",
    beforeAfter: {
      before: "শুধু ছবি আঁকতে পারতাম",
      beforeEn: "Could only draw pictures",
      after: "ডিজিটাল আর্ট বানাতে পারি",
      afterEn: "Can create digital art",
    },
  },
];

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const statsControls = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
        {/* Testimonial-themed background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              isClient && theme === "dark"
                ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M10 10h5v5h-5zM25 25h5v5h-5zM40 40h5v5h-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M10 10h5v5h-5zM25 25h5v5h-5zM40 40h5v5h-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating quote marks */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            >
              <FaQuoteLeft
                className={`text-4xl ${
                  isClient && theme === "dark"
                    ? "text-blue-400"
                    : "text-blue-500"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Heart and star particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 3,
              }}
            >
              {i % 3 === 0 ? (
                <FaHeart className="text-red-400 text-sm" />
              ) : i % 3 === 1 ? (
                <FaStar className="text-yellow-400 text-sm" />
              ) : (
                <HiSparkles className="text-purple-400 text-sm" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Large glowing orbs */}
        <motion.div
          className="absolute w-[40rem] h-[40rem] rounded-full blur-[120px]"
          style={{
            background:
              isClient && theme === "dark"
                ? "radial-gradient(circle, rgba(244, 63, 94, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(244, 63, 94, 0.05), transparent 70%)",
            top: "10%",
            right: "-15%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
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
                ? "radial-gradient(circle, rgba(245, 158, 11, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(245, 158, 11, 0.05), transparent 70%)",
            bottom: "15%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
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
        >
          {/* Enhanced Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400 text-transparent bg-clip-text px-4 py-2 text-sm font-bold rounded-full border border-rose-200 dark:border-rose-700 flex items-center justify-center gap-2">
                <RiEmotionHappyLine className="text-rose-500 dark:text-rose-300" />
                {language === "en" ? "Student Stories" : "শিক্ষার্থীদের গল্প"}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 font-extrabold text-4xl md:text-6xl bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 dark:from-rose-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent"
            >
              {language === "en"
                ? "What Students Say?"
                : "শিক্ষার্থীরা কী বলে?"}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              {language === "en"
                ? "Discover the voices of success! Our students share their transformative learning experiences and how technology education has changed their perspective on the future."
                : "সফলতার কণ্ঠস্বর আবিষ্কার করুন! আমাদের শিক্ষার্থীরা তাদের রূপান্তরিত শিক্ষার অভিজ্ঞতা এবং প্রযুক্তি শিক্ষা কীভাবে ভবিষ্যৎ সম্পর্কে তাদের দৃষ্টিভঙ্গি পরিবর্তন করেছে তা শেয়ার করে।"}
            </motion.p>

            {/* Floating decorative elements */}
            <div className="flex justify-center gap-8 mb-8">
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="p-3 rounded-full"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(59, 130, 246, 0.05)",
                }}
              >
                <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-xl" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="p-3 rounded-full"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? "rgba(244, 63, 94, 0.1)"
                      : "rgba(244, 63, 94, 0.05)",
                }}
              >
                <HiHeart className="text-rose-500 dark:text-rose-400 text-xl" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="p-3 rounded-full"
                style={{
                  background:
                    isClient && theme === "dark"
                      ? "rgba(245, 158, 11, 0.1)"
                      : "rgba(245, 158, 11, 0.05)",
                }}
              >
                <FaStar className="text-amber-500 dark:text-amber-400 text-xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))"
                          : "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    }}
                  >
                    <RiDoubleQuotesL className="text-blue-500 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {language === "en"
                        ? "Real Student Experiences"
                        : "প্রকৃত শিক্ষার্থীর অভিজ্ঞতা"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {language === "en"
                        ? "Authentic testimonials from students who have completed our programs and achieved remarkable results in their learning journey."
                        : "আমাদের প্রোগ্রাম সম্পন্ন করা এবং তাদের শেখার যাত্রায় অসাধারণ ফলাফল অর্জনকারী শিক্ষার্থীদের সত্যিকারের প্রশংসাপত্র।"}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(245, 158, 11, 0.2))"
                          : "linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(245, 158, 11, 0.1))",
                    }}
                  >
                    <FaTrophy className="text-amber-500 dark:text-amber-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {language === "en"
                        ? "Transformative Results"
                        : "রূপান্তরিত ফলাফল"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {language === "en"
                        ? "Join us in nurturing the next generation of innovators! Our carefully designed courses provide hands-on experience in programming, robotics, and game development."
                        : "পরবর্তী প্রজন্মের উদ্ভাবকদের লালন-পালনে আমাদের সাথে যোগ দিন! আমাদের সতর্কতার সাথে ডিজাইন করা কোর্সগুলি প্রোগ্রামিং, রোবটিক্স এবং গেম ডেভেলপমেন্টে হাতে-কলমে অভিজ্ঞতা প্রদান করে।"}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background:
                        isClient && theme === "dark"
                          ? "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))"
                          : "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
                    }}
                  >
                    <HiLightBulb className="text-emerald-500 dark:text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {language === "en"
                        ? "Innovation & Creativity"
                        : "উদ্ভাবন ও সৃজনশীলতা"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {language === "en"
                        ? "Making learning fun and effective through innovative teaching methods that spark creativity and build confidence in young minds."
                        : "উদ্ভাবনী শিক্ষণ পদ্ধতির মাধ্যমে শেখাকে মজাদার এবং কার্যকর করা যা সৃজনশীলতার স্ফুলিঙ্গ জাগায় এবং তরুণ মনে আত্মবিশ্বাস গড়ে তোলে।"}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Enhanced Testimonial Slider */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Custom Navigation */}
                <div className="flex justify-center mb-6">
                  {testimonialsData.map((_, index) => (
                    <motion.button
                      key={index}
                      className="mx-1 w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        background:
                          activeSlide === index
                            ? isClient && theme === "dark"
                              ? "linear-gradient(45deg, #f43f5e, #f59e0b)"
                              : "linear-gradient(45deg, #dc2626, #f59e0b)"
                            : isClient && theme === "dark"
                              ? "rgba(255, 255, 255, 0.3)"
                              : "rgba(0, 0, 0, 0.2)",
                      }}
                      whileHover={{ scale: 1.3 }}
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
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  effect="creative"
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-20%", 0, -1],
                      rotate: [0, 0, -10],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                      rotate: [0, 0, 10],
                    },
                  }}
                  modules={[Autoplay, Pagination, EffectCreative]}
                  loop={true}
                  className="testimonials-swiper"
                >
                  {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <EnhancedTestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsControls}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <StatCard
              icon={<FaUsers />}
              number="500+"
              label={language === "en" ? "Happy Students" : "খুশি শিক্ষার্থী"}
              color="blue"
            />
            <StatCard
              icon={<FaStar />}
              number="4.9"
              label={language === "en" ? "Average Rating" : "গড় রেটিং"}
              color="amber"
            />
            <StatCard
              icon={<FaGraduationCap />}
              number="95%"
              label={language === "en" ? "Success Rate" : "সফলতার হার"}
              color="emerald"
            />
            <StatCard
              icon={<FaHeart />}
              number="100%"
              label={language === "en" ? "Satisfaction" : "সন্তুষ্টি"}
              color="rose"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Testimonial Card Component
const EnhancedTestimonialCard = ({ testimonial }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-8 rounded-3xl h-full"
      style={{
        background:
          isClient && theme === "dark"
            ? "rgba(15, 23, 42, 0.8)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        border:
          isClient && theme === "dark"
            ? "1px solid rgba(244, 63, 94, 0.3)"
            : "1px solid rgba(244, 63, 94, 0.2)",
        boxShadow: isHovered
          ? isClient && theme === "dark"
            ? "0 25px 50px -12px rgba(244, 63, 94, 0.25)"
            : "0 25px 50px -12px rgba(244, 63, 94, 0.15)"
          : "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Quote decoration */}
      <motion.div
        className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #f43f5e, #f59e0b)",
        }}
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaQuoteLeft className="text-white text-lg" />
      </motion.div>

      {/* Rating stars */}
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <FaStar className="text-yellow-400 text-lg mx-1" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial content */}
      <div className="text-center mb-6">
        <p className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed">
          "
          {language === "en"
            ? testimonial.testimonialEn
            : testimonial.testimonial}
          "
        </p>
      </div>

      {/* Student info */}
      <div className="text-center">
        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
          {language === "en" ? testimonial.nameEn : testimonial.name}
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          {language === "en"
            ? `Age ${testimonial.age}`
            : `বয়স ${testimonial.age}`}{" "}
          • {language === "en" ? testimonial.locationEn : testimonial.location}
        </p>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {language === "en" ? testimonial.courseEn : testimonial.course}
        </p>

        {/* Before/After comparison */}
        <motion.div
          className="mt-4 p-3 rounded-xl"
          style={{
            background:
              isClient && theme === "dark"
                ? "rgba(59, 130, 246, 0.1)"
                : "rgba(59, 130, 246, 0.05)",
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs text-slate-600 dark:text-slate-400">
            <div className="mb-2">
              <span className="font-medium">
                {language === "en" ? "Before:" : "আগে:"}
              </span>{" "}
              {language === "en"
                ? testimonial.beforeAfter.beforeEn
                : testimonial.beforeAfter.before}
            </div>
            <div>
              <span className="font-medium">
                {language === "en" ? "After:" : "পরে:"}
              </span>{" "}
              {language === "en"
                ? testimonial.beforeAfter.afterEn
                : testimonial.beforeAfter.after}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-4 right-4"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <MdVerified className="text-green-500 text-xl" />
      </motion.div>
    </motion.div>
  );
};

// Statistics Card Component
const StatCard = ({ icon, number, label, color }) => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  const getGradient = (color) => {
    switch (color) {
      case "blue":
        return "linear-gradient(135deg, #3b82f6, #8b5cf6)";
      case "amber":
        return "linear-gradient(135deg, #f59e0b, #f97316)";
      case "emerald":
        return "linear-gradient(135deg, #10b981, #059669)";
      case "rose":
        return "linear-gradient(135deg, #f43f5e, #e11d48)";
      default:
        return "linear-gradient(135deg, #3b82f6, #8b5cf6)";
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-center p-6 rounded-2xl"
      style={{
        background:
          isClient && theme === "dark"
            ? "rgba(15, 23, 42, 0.6)"
            : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border:
          isClient && theme === "dark"
            ? "1px solid rgba(56, 189, 248, 0.2)"
            : "1px solid rgba(219, 234, 254, 0.8)",
      }}
      whileHover={{
        y: -5,
        boxShadow:
          isClient && theme === "dark"
            ? "0 15px 30px -5px rgba(0, 0, 0, 0.3)"
            : "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
        style={{ background: getGradient(color) }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-3xl font-bold mb-2"
        style={{
          background: getGradient(color),
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        whileHover={{ scale: 1.1 }}
      >
        {number}
      </motion.div>
      <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default Testimonials;
