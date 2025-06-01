"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@heroui/navbar";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaLaptopCode,
  FaPython,
  FaRobot,
  FaSpaceShuttle,
  FaUserAstronaut,
} from "react-icons/fa";
import { HiMoon } from "react-icons/hi2";
import { IoCode, IoGameController, IoRocket, IoStar } from "react-icons/io5";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { useIsClient } from "@/hooks/useIsClient";
import Logo from "@/public/logo.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, t } = useLanguage();

  // Always start with dark theme on server-side for consistent hydration
  const { theme: themeFromContext } = useTheme();
  const [theme, setTheme] = useState("dark");
  const isClient = useIsClient();

  // Only update theme after client-side hydration
  useEffect(() => {
    if (isClient && themeFromContext) {
      setTheme(themeFromContext);
    }
  }, [isClient, themeFromContext]);

  // Replace random-generating refs with static values to avoid hydration mismatches
  const particlePositionsRef = useRef([
    [45, -20, -30],
    [50, -15, -35],
    [55, -25, -40],
    [48, -18, -32],
    [52, -22, -38],
  ]);

  const registerParticlesRef = useRef([
    [20, 15, -20],
    [25, -15, -30],
    [30, 20, -25],
    [35, -10, -15],
    [28, 12, -35],
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map icons to nav items - Python themed icons
  const navIcons = {
    "/": <FaPython className="text-lg text-yellow-300" />,
    "/about": <IoCode className="text-lg text-cyan-300" />,
    "/programs": <FaLaptopCode className="text-lg text-green-300" />,
    "/courses": <IoGameController className="text-lg text-pink-300" />,
  };

  // Variants for staggered animations
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "transition-all duration-500 py-3 z-50",
        scrolled
          ? "bg-gradient-to-r from-blue-950/95 via-indigo-950/95 to-blue-900/95 shadow-lg shadow-blue-900/30"
          : "bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-blue-900/80"
      )}
    >
      {/* Background animations - client-side only */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={clsx(
              "absolute h-14 w-14 rounded-full blur-xl",
              theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-500/5"
            )}
            style={{ top: "10%", left: "5%" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div
            className={clsx(
              "absolute h-20 w-20 rounded-full blur-xl",
              theme === "dark" ? "bg-blue-300/10" : "bg-blue-400/5"
            )}
            style={{ top: "60%", left: "20%" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className={clsx(
              "absolute h-16 w-16 rounded-full blur-xl",
              theme === "dark" ? "bg-indigo-400/10" : "bg-indigo-500/5"
            )}
            style={{ top: "30%", right: "10%" }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
      )}

      {/* Logo and brand - with consistent dark styling for server render */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className="relative">
            <NextLink
              className="flex justify-start items-center gap-3"
              href="/"
            >
              <div className="relative">
                {/* Logo container - always dark for initial render */}
                <div className="relative rounded-full p-1.5 bg-blue-800">
                  <Image
                    alt="CodePy logo"
                    className="w-10 h-10 rounded-full"
                    src={Logo}
                  />
                </div>

                {/* Orbiting Python logo - client-side only */}
                {isClient && (
                  <motion.div
                    className="absolute -top-1 -right-1 rounded-full p-0.5 shadow-lg z-10 border-2 bg-yellow-400 text-blue-900 border-blue-900/30"
                    style={{
                      width: "1.3rem",
                      height: "1.3rem",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaPython className="w-full h-full" />
                  </motion.div>
                )}
              </div>

              {/* Logo text - with dark theme styling for server render */}
              <div>
                <p className="font-bold text-2xl tracking-tight leading-none text-white">
                  <span className="text-cyan-300">
                    {language === "en" ? "Code" : "কোড"}
                  </span>
                  <span className="text-yellow-300">
                    {language === "en" ? "Py" : "পাই"}
                  </span>
                </p>
                <p className="text-xs leading-none text-blue-200">
                  {t("siteTagline", "")}
                </p>
              </div>
            </NextLink>
          </div>
        </NavbarBrand>

        {/* Desktop Navigation - with consistent initial styling */}
        <div className="hidden lg:flex gap-1 justify-start ml-8">
          {siteConfig.navItems.map((item, i) => {
            const isActive = pathname === item.href;
            const itemLabel = t("navItems", item.label.toLowerCase());

            return (
              <motion.div
                key={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <NavbarItem>
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NextLink
                      className={clsx(
                        "px-4 py-2 rounded-full flex items-center gap-2 transition-all relative",
                        isActive
                          ? "bg-white/15 text-white font-medium"
                          : "text-white/90 hover:bg-white/10"
                      )}
                      href={item.href}
                    >
                      {/* Icon with bounce effect on hover */}
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {navIcons[item.href as keyof typeof navIcons]}
                      </motion.div>

                      {itemLabel}

                      {/* Active indicator */}
                      {isActive && isClient && (
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="ml-1"
                        >
                          <IoStar className="text-yellow-300 text-xs" />
                        </motion.div>
                      )}
                    </NextLink>
                  </motion.div>
                </NavbarItem>
              </motion.div>
            );
          })}
        </div>
      </NavbarContent>

      {/* Right-side controls - with consistent initial dark styling */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle with consistent dark styling for server render */}
          <div className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-800/80 border border-blue-700">
            <HiMoon className="w-5 h-5 text-cyan-300" />
            {isClient && (
              <ThemeSwitch className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
            )}
          </div>

          {/* Parent portal button with consistent dark styling */}
          <div className="flex items-center h-9">
            <Button
              as={Link}
              href="/parent-portal"
              className="border-0 shadow-md h-9 px-3 flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
              radius="full"
              size="sm"
            >
              <div className="flex items-center gap-1.5">
                <FaRobot className="text-cyan-200" />
                <span>{t("auth", "parentAccess")}</span>
              </div>
            </Button>
          </div>
        </NavbarItem>

        {/* Registration button */}
        <NavbarItem className="hidden md:flex">
          <div className="relative">
            <Button
              as={Link}
              href="/auth/register"
              className="text-white font-bold border-0 px-6 shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              radius="full"
              startContent={
                <span className="text-yellow-300">
                  <FaUserAstronaut className="text-lg" />
                </span>
              }
            >
              {t("auth", "register")}
            </Button>
          </div>
        </NavbarItem>

        {/* Login button with consistent dark styling */}
        <NavbarItem className="hidden md:flex ml-2">
          <div className="flex items-center">
            <Button
              as={Link}
              href="/auth/login"
              variant="flat"
              className="shadow-inner bg-white/10 text-white border border-white/20"
              radius="full"
              startContent={<FaSpaceShuttle className="text-cyan-200" />}
            >
              {t("auth", "login")}
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle with consistent dark styling */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-2">
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher />

          {/* Mobile Theme Toggle with dark styling */}
          <div className="p-1 rounded-full backdrop-blur-sm bg-blue-600/50">
            <div className="relative overflow-hidden rounded-full flex items-center justify-center">
              <HiMoon className="w-5 h-5 text-cyan-300" />
              {isClient && (
                <ThemeSwitch className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
              )}
            </div>
          </div>

          {/* Menu toggle with dark styling */}
          <NavbarMenuToggle
            className="rounded-full p-1 backdrop-blur-sm bg-blue-600/40"
            icon={
              <div>
                <IoRocket className="text-lg text-cyan-200" />
              </div>
            }
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </NavbarContent>

      {/* Mobile menu with consistent dark styling */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMenu className="bg-gradient-to-b from-blue-950/95 via-indigo-950/95 to-blue-900/95 pt-8 pb-6">
            {/* Navigation items with improved animations */}
            <motion.div
              className="flex flex-col gap-2 px-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {siteConfig.navItems.map((item, index) => {
                // Translate navigation items for mobile
                const itemLabel = t("navItems", item.label.toLowerCase());
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.07 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <NavbarMenuItem>
                        <NextLink
                          href={item.href}
                          className={clsx(
                            "flex items-center gap-3 w-full px-5 py-4 rounded-xl",
                            isActive
                              ? theme === "dark"
                                ? "bg-blue-600/30 text-white shadow-inner border border-blue-400/20"
                                : "bg-blue-100/60 text-blue-800 shadow-inner border border-blue-200"
                              : theme === "dark"
                                ? "text-white hover:bg-blue-600/20"
                                : "text-blue-800 hover:bg-blue-100/40"
                          )}
                        >
                          <motion.div
                            animate={{
                              rotate: isActive ? [0, 10, -10, 0] : 0,
                            }}
                            transition={{
                              duration: 3,
                              repeat: isActive ? Infinity : 0,
                            }}
                          >
                            {navIcons[item.href as keyof typeof navIcons]}
                          </motion.div>
                          <span className="font-medium">{itemLabel}</span>

                          {/* Show indicator for active page */}
                          {isActive && (
                            <motion.div
                              className="ml-auto"
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <IoStar className="text-yellow-300" />
                            </motion.div>
                          )}
                        </NextLink>
                      </NavbarMenuItem>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action buttons with animation - theme aware */}
            <motion.div
              className="px-4 mt-6 space-y-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {/* Button backgrounds with glow effect */}
              <motion.div
                className={clsx(
                  "absolute rounded-xl blur-xl -z-10 opacity-30",
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                    : "bg-gradient-to-r from-cyan-300 to-blue-400"
                )}
                style={{ top: "10%", height: "40%" }}
                animate={{
                  opacity:
                    theme === "dark" ? [0.2, 0.4, 0.2] : [0.15, 0.35, 0.15],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <Button
                as={Link}
                href="/auth/register"
                className={clsx(
                  "w-full font-bold shadow-lg border-0",
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                )}
                radius="full"
                size="lg"
                startContent={
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-yellow-300"
                  >
                    <FaUserAstronaut className="text-xl" />
                  </motion.div>
                }
              >
                {t("auth", "register")}
              </Button>

              <Button
                as={Link}
                href="/auth/login"
                className={clsx(
                  "w-full backdrop-blur-sm",
                  theme === "dark"
                    ? "bg-blue-700/40 text-white border border-blue-400/20"
                    : "bg-blue-100/80 text-blue-700 border border-blue-200"
                )}
                radius="full"
                size="lg"
                startContent={
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaSpaceShuttle
                      className={
                        theme === "dark"
                          ? "text-cyan-200 text-lg"
                          : "text-blue-400 text-lg"
                      }
                    />
                  </motion.div>
                }
              >
                {t("auth", "login")}
              </Button>

              <Button
                as={Link}
                href="/parent-portal"
                className={clsx(
                  "w-full",
                  theme === "dark"
                    ? "bg-transparent text-blue-100 border border-blue-400/20"
                    : "bg-transparent text-blue-700 border border-blue-200"
                )}
                radius="full"
                variant="bordered"
                size="lg"
                startContent={
                  <FaRobot
                    className={
                      theme === "dark" ? "text-cyan-200" : "text-blue-400"
                    }
                  />
                }
              >
                {t("auth", "parentAccess")}
              </Button>
            </motion.div>

            {/* Footer credits in mobile menu */}
            <motion.div
              className={clsx(
                "absolute bottom-4 left-0 right-0 text-center text-xs",
                theme === "dark" ? "text-blue-200/60" : "text-blue-600/60"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p>{t("mobileFooter", "")}</p>
            </motion.div>
          </NavbarMenu>
        )}
      </AnimatePresence>
    </NextUINavbar>
  );
};
