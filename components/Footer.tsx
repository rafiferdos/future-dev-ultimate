"use client";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import Logo from "@/public/logo.png";
import { Tooltip } from "@heroui/tooltip";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiLightningBolt, HiSparkles } from "react-icons/hi";
import { MdEmail, MdLocationOn, MdPhone, MdRocket } from "react-icons/md";
import { RiHeartFill, RiStarSmileFill } from "react-icons/ri";

// Fixed particle positions to prevent hydration mismatch
const PARTICLE_POSITIONS = [
  { top: 10, left: 15, icon: 0 },
  { top: 25, left: 85, icon: 1 },
  { top: 40, left: 20, icon: 2 },
  { top: 55, left: 75, icon: 3 },
  { top: 70, left: 35, icon: 0 },
  { top: 85, left: 90, icon: 1 },
  { top: 15, left: 60, icon: 2 },
  { top: 30, left: 10, icon: 3 },
  { top: 45, left: 95, icon: 0 },
  { top: 60, left: 25, icon: 1 },
  { top: 75, left: 80, icon: 2 },
  { top: 90, left: 45, icon: 3 },
  { top: 5, left: 70, icon: 0 },
  { top: 20, left: 40, icon: 1 },
  { top: 35, left: 85, icon: 2 },
  { top: 50, left: 15, icon: 3 },
  { top: 65, left: 65, icon: 0 },
  { top: 80, left: 30, icon: 1 },
  { top: 95, left: 75, icon: 2 },
  { top: 12, left: 50, icon: 3 },
];

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isClient = useIsClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
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

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "#",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <FaTwitter />,
      href: "#",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      label: "LinkedIn",
      color: "#0A66C2",
    },
  ];

  const quickLinks = [
    { href: "/", label: language === "en" ? "Home" : "হোম" },
    { href: "/about", label: language === "en" ? "About" : "সম্পর্কে" },
    { href: "/courses", label: language === "en" ? "Courses" : "কোর্স" },
    { href: "/contact", label: language === "en" ? "Contact" : "যোগাযোগ" },
  ];

  const legalLinks = [
    {
      href: "/privacy",
      label: language === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি",
    },
    {
      href: "/terms",
      label: language === "en" ? "Terms of Service" : "সেবার শর্তাবলী",
    },
    { href: "/support", label: language === "en" ? "Support" : "সাহায্য" },
  ];

  const getParticleIcon = (iconIndex: number) => {
    const icons = [
      <HiSparkles className="text-blue-400/30 text-xs" />,
      <RiStarSmileFill className="text-purple-400/30 text-xs" />,
      <HiLightningBolt className="text-yellow-400/30 text-xs" />,
      <MdRocket className="text-emerald-400/30 text-xs" />,
    ];
    return icons[iconIndex];
  };

  if (!isClient) {
    return (
      <footer className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
          }}
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={Logo}
                    alt="Future Dev Logo"
                    width={56}
                    height={56}
                    className="rounded-2xl"
                  />
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {siteConfig.name}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {language === "en"
                        ? "Future of Education"
                        : "শিক্ষার ভবিষ্যৎ"}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-8 max-w-md leading-relaxed text-lg">
                  {language === "en"
                    ? "Empowering the next generation with innovative technology education and creative learning experiences that prepare students for tomorrow's digital world."
                    : "উদ্ভাবনী প্রযুক্তি শিক্ষা এবং সৃজনশীল শেখার অভিজ্ঞতার মাধ্যমে পরবর্তী প্রজন্মকে আগামীর ডিজিটাল বিশ্বের জন্য প্রস্তুত করা।"}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  {language === "en" ? "Quick Links" : "দ্রুত লিংক"}
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  {language === "en" ? "Legal & Support" : "আইনগত ও সাহায্য"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))"
              : "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: showScrollTop ? 1 : 0,
          opacity: showScrollTop ? 1 : 0,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-white text-lg" />
      </motion.button>

      {/* Footer Section */}
      <footer className="relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
                  : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
            }}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                theme === "dark"
                  ? "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
                  : "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Fixed positioned floating particles */}
          <div className="absolute inset-0">
            {PARTICLE_POSITIONS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {getParticleIcon(particle.icon)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Link href="/" className="inline-block group mb-6">
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="relative"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={Logo}
                        alt="Future Dev Logo"
                        width={56}
                        height={56}
                        className="rounded-2xl"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {siteConfig.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {language === "en"
                          ? "Future of Education"
                          : "শিক্ষার ভবিষ্যৎ"}
                      </p>
                    </div>
                  </motion.div>
                </Link>

                <motion.p
                  variants={itemVariants}
                  className="text-slate-600 dark:text-slate-300 mb-8 max-w-md leading-relaxed text-lg"
                >
                  {language === "en"
                    ? "Empowering the next generation with innovative technology education and creative learning experiences that prepare students for tomorrow's digital world."
                    : "উদ্ভাবনী প্রযুক্তি শিক্ষা এবং সৃজনশীল শেখার অভিজ্ঞতার মাধ্যমে পরবর্তী প্রজন্মকে আগামীর ডিজিটাল বিশ্বের জন্য প্রস্তুত করা।"}
                </motion.p>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <ContactItem
                    icon={<MdPhone />}
                    text="+8801706-276447"
                    href="tel:+8801706-276447"
                    gradient="from-emerald-500 to-teal-500"
                  />
                  <ContactItem
                    icon={<MdEmail />}
                    text="futuredev@gmail.com"
                    href="mailto:futuredev@gmail.com"
                    gradient="from-blue-500 to-cyan-500"
                  />
                  <ContactItem
                    icon={<MdLocationOn />}
                    text="Green Corner, Green Road, Dhaka 1205"
                    href="#"
                    gradient="from-purple-500 to-pink-500"
                  />
                </motion.div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                  <HiSparkles className="text-blue-500" />
                  {language === "en" ? "Quick Links" : "দ্রুত লিংক"}
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover:font-medium transition-all duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal & Support */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                  <HiLightningBolt className="text-purple-500" />
                  {language === "en" ? "Legal & Support" : "আইনগত ও সাহায্য"}
                </h3>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover:font-medium transition-all duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="my-12 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"
            />

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-center gap-8"
            >
              {/* Copyright */}
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="text-lg">© {new Date().getFullYear()}</span>
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Future Dev
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RiHeartFill className="text-red-500 text-lg" />
                </motion.div>
                <span className="text-lg">
                  {language === "en" ? "Made with love" : "ভালোবাসা দিয়ে তৈরি"}
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} {...social} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

// Contact Item Component
const ContactItem = ({ icon, text, href, gradient }) => {
  return (
    <motion.div
      whileHover={{ x: 8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={href}
        className="group flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-all duration-300"
      >
        <motion.div
          className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="text-white text-lg">{icon}</span>
        </motion.div>
        <span className="group-hover:font-medium transition-all duration-200">
          {text}
        </span>
      </Link>
    </motion.div>
  );
};

// Social Link Component
const SocialLink = ({ icon, href, label, color, index }) => {
  return (
    <Tooltip content={label}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <motion.div
            className="p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg"
            whileHover={{
              scale: 1.15,
              y: -5,
              backgroundColor: `${color}20`,
              borderColor: `${color}40`,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              style={{ color: color }}
              className="text-xl block"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.span>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle, ${color}30, transparent 70%)`,
                filter: "blur(8px)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </motion.div>
    </Tooltip>
  );
};

export default Footer;
