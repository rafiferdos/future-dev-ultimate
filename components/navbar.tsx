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
import { HiMoon, HiSun } from "react-icons/hi2";
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
  const { theme } = useTheme();

  // Add this to ensure client-side only rendering for elements causing hydration issues
  const isClient = useIsClient();

  // Use refs to ensure stable values across renders for random numbers
  const particlePositionsRef = useRef<number[][]>(
    Array(5)
      .fill(0)
      .map(() => [
        45 + Math.floor(Math.random() * 10),
        -20 + Math.floor(Math.random() * 40),
        -30 - Math.floor(Math.random() * 20),
      ])
  );

  const registerParticlesRef = useRef<number[][]>(
    Array(5)
      .fill(0)
      .map(() => [
        20 + Math.floor(Math.random() * 15),
        (Math.random() - 0.5) * 50,
        (Math.random() - 1) * 40,
      ])
  );

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
          ? theme === "dark"
            ? "bg-gradient-to-r from-blue-950/95 via-indigo-950/95 to-blue-900/95 shadow-lg shadow-blue-900/30"
            : "bg-gradient-to-r from-white/90 via-blue-50/90 to-indigo-50/90 shadow-lg shadow-blue-200/30 border-b border-blue-100"
          : theme === "dark"
            ? "bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-blue-900/80"
            : "bg-gradient-to-r from-white/80 via-blue-50/80 to-indigo-50/80 backdrop-blur-sm"
      )}
    >
      {/* Only render client-side animations after hydration */}
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

      {/* Logo and brand - theme aware */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative"
          >
            <NextLink
              className="flex justify-start items-center gap-3"
              href="/"
            >
              <div className="relative">
                {isClient && (
                  <motion.div
                    className={clsx(
                      "absolute -inset-1 rounded-full bg-gradient-to-r blur-sm",
                      theme === "dark"
                        ? "from-cyan-400 to-blue-500 opacity-70"
                        : "from-cyan-300 to-blue-400 opacity-60"
                    )}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity:
                        theme === "dark" ? [0.5, 0.7, 0.5] : [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
                <div
                  className={clsx(
                    "relative rounded-full p-1.5",
                    theme === "dark" ? "bg-blue-800" : "bg-white shadow-inner"
                  )}
                >
                  <Image
                    alt="CodePy logo"
                    className="w-10 h-10 rounded-full"
                    src={Logo}
                  />
                </div>

                {/* Orbiting Python logo - client-side only */}
                {isClient && (
                  <motion.div
                    className={clsx(
                      "absolute -top-1 -right-1 rounded-full p-0.5 shadow-lg z-10 border-2",
                      theme === "dark"
                        ? "bg-yellow-400 text-blue-900 border-blue-900/30"
                        : "bg-yellow-400 text-blue-700 border-blue-700/30"
                    )}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: "center center",
                      width: "1.3rem",
                      height: "1.3rem",
                    }}
                  >
                    <FaPython className="w-full h-full" />
                  </motion.div>
                )}
              </div>

              <div>
                <motion.p
                  className={clsx(
                    "font-bold text-2xl tracking-tight leading-none",
                    theme === "dark" ? "text-white" : "text-blue-900"
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isClient ? (
                    <>
                      <motion.span
                        className={
                          theme === "dark" ? "text-cyan-300" : "text-cyan-600"
                        }
                        animate={{
                          textShadow:
                            theme === "dark"
                              ? [
                                  "0 0 8px rgba(103,232,249,0)",
                                  "0 0 15px rgba(103,232,249,0.5)",
                                  "0 0 8px rgba(103,232,249,0)",
                                ]
                              : [
                                  "0 0 8px rgba(8,145,178,0)",
                                  "0 0 15px rgba(8,145,178,0.3)",
                                  "0 0 8px rgba(8,145,178,0)",
                                ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        {language === "en" ? "Code" : "কোড"}
                      </motion.span>
                      <motion.span
                        className={
                          theme === "dark"
                            ? "text-yellow-300"
                            : "text-yellow-500"
                        }
                        animate={{
                          textShadow:
                            theme === "dark"
                              ? [
                                  "0 0 8px rgba(250,204,21,0)",
                                  "0 0 15px rgba(250,204,21,0.5)",
                                  "0 0 8px rgba(250,204,21,0)",
                                ]
                              : [
                                  "0 0 8px rgba(234,179,8,0)",
                                  "0 0 15px rgba(234,179,8,0.3)",
                                  "0 0 8px rgba(234,179,8,0)",
                                ],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 0.5,
                          repeat: Infinity,
                        }}
                      >
                        {language === "en" ? "Py" : "পাই"}
                      </motion.span>
                    </>
                  ) : (
                    <span>
                      <span
                        className={
                          theme === "dark" ? "text-cyan-300" : "text-cyan-600"
                        }
                      >
                        {language === "en" ? "Code" : "কোড"}
                      </span>
                      <span
                        className={
                          theme === "dark"
                            ? "text-yellow-300"
                            : "text-yellow-500"
                        }
                      >
                        {language === "en" ? "Py" : "পাই"}
                      </span>
                    </span>
                  )}
                </motion.p>
                <motion.p
                  className={clsx(
                    "text-xs leading-none",
                    theme === "dark" ? "text-blue-200" : "text-blue-700"
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {t("siteTagline", "")}
                </motion.p>
              </div>
            </NextLink>
          </motion.div>
        </NavbarBrand>

        {/* Desktop Navigation - theme aware */}
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
                          ? theme === "dark"
                            ? "bg-white/15 text-white font-medium"
                            : "bg-blue-100 text-blue-800 font-medium"
                          : theme === "dark"
                            ? "text-white/90 hover:bg-white/10"
                            : "text-blue-800 hover:bg-blue-50"
                      )}
                      href={item.href}
                    >
                      {/* Animated background for active item */}
                      {isActive && isClient && (
                        <motion.div
                          className={clsx(
                            "absolute inset-0 rounded-full -z-10",
                            theme === "dark"
                              ? "bg-blue-500/20"
                              : "bg-blue-200/70"
                          )}
                          animate={{
                            boxShadow:
                              theme === "dark"
                                ? [
                                    "0 0 0 0 rgba(59, 130, 246, 0)",
                                    "0 0 0 5px rgba(59, 130, 246, 0.3)",
                                    "0 0 0 0 rgba(59, 130, 246, 0)",
                                  ]
                                : [
                                    "0 0 0 0 rgba(147, 197, 253, 0)",
                                    "0 0 0 5px rgba(147, 197, 253, 0.3)",
                                    "0 0 0 0 rgba(147, 197, 253, 0)",
                                  ],
                          }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        />
                      )}

                      {/* Icon with bounce effect on hover */}
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {navIcons[item.href as keyof typeof navIcons]}
                      </motion.div>

                      {itemLabel}

                      {/* Active indicator with animation */}
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

      {/* Right-side controls - Desktop with improved theme toggle */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Enhanced Theme Toggle - Client-side only for animations */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div
              className={clsx(
                "relative overflow-hidden rounded-full p-1.5 flex items-center justify-center",
                theme === "dark"
                  ? "bg-blue-800/80 border border-blue-700"
                  : "bg-white shadow-inner border border-blue-200"
              )}
            >
              {isClient && (
                <motion.div
                  className="absolute inset-0 opacity-50"
                  animate={{
                    background:
                      theme === "dark"
                        ? [
                            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.2) 0%, transparent 60%)",
                            "radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 60%)",
                            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.2) 0%, transparent 60%)",
                          ]
                        : [
                            "radial-gradient(circle at 20% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 60%)",
                            "radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.15) 0%, transparent 60%)",
                            "radial-gradient(circle at 20% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 60%)",
                          ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              )}
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={
                      isClient ? { rotate: -30, opacity: 0, scale: 0.5 } : {}
                    }
                    animate={
                      isClient ? { rotate: 0, opacity: 1, scale: 1 } : {}
                    }
                    exit={
                      isClient ? { rotate: 30, opacity: 0, scale: 0.5 } : {}
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <HiMoon className="w-5 h-5 text-cyan-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={
                      isClient ? { rotate: 30, opacity: 0, scale: 0.5 } : {}
                    }
                    animate={
                      isClient ? { rotate: 0, opacity: 1, scale: 1 } : {}
                    }
                    exit={
                      isClient ? { rotate: -30, opacity: 0, scale: 0.5 } : {}
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <HiSun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                )}
              </AnimatePresence>
              <ThemeSwitch className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
            </div>
          </motion.div>

          {/* Parent portal button - theme aware */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoverButton("parent")}
            onHoverEnd={() => setHoverButton(null)}
          >
            <Button
              as={Link}
              href="/parent-portal"
              className={clsx(
                "border-0 shadow-md relative overflow-hidden",
                theme === "dark"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-teal-400 to-cyan-500 text-white"
              )}
              radius="full"
              size="sm"
            >
              {/* Animated particles on hover - client-side only with stable positions */}
              {isClient && (
                <AnimatePresence>
                  {hoverButton === "parent" && (
                    <>
                      {[...Array(3)].map((_, i) => {
                        const posData = particlePositionsRef.current[i];
                        return (
                          <motion.div
                            key={`parent-particle-${i}`}
                            className={clsx(
                              "absolute w-2 h-2 rounded-full",
                              theme === "dark" ? "bg-cyan-200" : "bg-cyan-100"
                            )}
                            initial={{
                              opacity: 0,
                              scale: 0,
                              x: 0,
                              y: 0,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0.5],
                              x: [0, posData[1]],
                              y: [0, posData[2]],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                              left: `${posData[0]}%`,
                              top: "50%",
                            }}
                          />
                        );
                      })}
                    </>
                  )}
                </AnimatePresence>
              )}

              <motion.div className="flex items-center gap-1.5">
                <FaRobot
                  className={
                    theme === "dark" ? "text-cyan-200" : "text-cyan-100"
                  }
                />{" "}
                {t("auth", "parentAccess")}
              </motion.div>
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Registration button with animation - theme aware */}
        <NavbarItem className="hidden md:flex">
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoverButton("register")}
            onHoverEnd={() => setHoverButton(null)}
            className="relative"
          >
            {/* Button glow effect - client-side only */}
            {isClient && (
              <motion.div
                className={clsx(
                  "absolute inset-0 rounded-full blur-md -z-10",
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                    : "bg-gradient-to-r from-cyan-300 to-blue-400"
                )}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.85, 0.9, 0.85],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            <Button
              as={Link}
              href="/auth/register"
              className={clsx(
                "text-white font-bold border-0 px-6 shadow-lg",
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500"
              )}
              radius="full"
              startContent={
                isClient ? (
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-yellow-300"
                  >
                    <FaUserAstronaut className="text-lg" />
                  </motion.div>
                ) : (
                  <span className="text-yellow-300">
                    <FaUserAstronaut className="text-lg" />
                  </span>
                )
              }
            >
              {t("auth", "register")}
              {/* Animated particles on hover - client-side only with stable positions */}
              {isClient && (
                <AnimatePresence>
                  {hoverButton === "register" && (
                    <>
                      {[...Array(5)].map((_, i) => {
                        const posData = registerParticlesRef.current[i];
                        return (
                          <motion.div
                            key={`register-particle-${i}`}
                            className="absolute w-1.5 h-1.5 rounded-full bg-yellow-300"
                            initial={{
                              opacity: 0,
                              x: 0,
                              y: 0,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              x: [0, posData[1]],
                              y: [0, posData[2]],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 + i * 0.1 }}
                            style={{
                              left: `${posData[0]}%`,
                              top: "50%",
                            }}
                          />
                        );
                      })}
                    </>
                  )}
                </AnimatePresence>
              )}
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Login button - theme aware */}
        <NavbarItem className="hidden md:flex ml-2">
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
            onHoverStart={() => setHoverButton("login")}
            onHoverEnd={() => setHoverButton(null)}
          >
            <Button
              as={Link}
              href="/auth/login"
              variant="flat"
              className={clsx(
                "shadow-inner",
                theme === "dark"
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              )}
              radius="full"
              startContent={
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaSpaceShuttle
                    className={
                      theme === "dark" ? "text-cyan-200" : "text-blue-400"
                    }
                  />
                </motion.div>
              }
            >
              {t("auth", "login")}
              {/* Animated trail on hover */}
              <AnimatePresence>
                {hoverButton === "login" && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`login-trail-${i}`}
                        className={clsx(
                          "absolute right-3 h-1.5 w-6 rounded-full",
                          theme === "dark" ? "bg-cyan-400/40" : "bg-blue-400/40"
                        )}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{
                          opacity: [0, 0.7, 0],
                          x: [0, -15 - i * 10],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle - theme aware */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-2">
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher />

          {/* Mobile Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              "p-1 rounded-full backdrop-blur-sm",
              theme === "dark" ? "bg-blue-600/50" : "bg-blue-100/80"
            )}
          >
            <div className="relative overflow-hidden rounded-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMoon className="w-5 h-5 text-cyan-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: 30, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -30, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiSun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                )}
              </AnimatePresence>
              <ThemeSwitch className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavbarMenuToggle
              className={clsx(
                "rounded-full p-1 backdrop-blur-sm",
                theme === "dark"
                  ? "text-white bg-blue-600/40"
                  : "text-blue-700 bg-blue-100"
              )}
              icon={
                isMenuOpen ? (
                  <motion.div
                    animate={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoRocket
                      className={`text-lg ${theme === "dark" ? "text-cyan-200" : "text-blue-400"}`}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <IoRocket
                      className={`text-lg ${theme === "dark" ? "text-cyan-200" : "text-blue-400"}`}
                    />
                  </motion.div>
                )
              }
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
          </motion.div>
        </div>
      </NavbarContent>

      {/* Mobile menu with improved animations - theme aware */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMenu
            className={clsx(
              "pt-16 pb-10",
              theme === "dark"
                ? "bg-gradient-to-b from-blue-800/97 via-blue-700/97 to-indigo-800/97"
                : "bg-gradient-to-b from-white/97 via-blue-50/97 to-indigo-50/97"
            )}
          >
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
