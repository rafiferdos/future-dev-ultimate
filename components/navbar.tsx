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
import { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaPython,
  FaRobot,
  FaSpaceShuttle,
  FaUserAstronaut,
} from "react-icons/fa";
import { IoCode, IoGameController, IoRocket, IoStar } from "react-icons/io5";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const pathname = usePathname();

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
          ? "bg-gradient-to-r from-blue-700/95 via-blue-600/95 to-indigo-700/95 shadow-lg shadow-blue-800/20"
          : "bg-gradient-to-r from-blue-700/80 via-blue-600/80 to-indigo-700/80"
      )}
    >
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute h-14 w-14 rounded-full bg-cyan-400/10 blur-xl"
          style={{ top: "10%", left: "5%" }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-20 w-20 rounded-full bg-blue-300/10 blur-xl"
          style={{ top: "60%", left: "20%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-16 w-16 rounded-full bg-indigo-400/10 blur-xl"
          style={{ top: "30%", right: "10%" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Logo and brand */}
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
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative bg-blue-800 rounded-full p-1.5">
                  <Image
                    alt="CodePy logo"
                    className="w-10 h-10 rounded-full"
                    src={Logo}
                  />
                </div>

                {/* Orbiting Python logo */}
                <motion.div
                  className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 rounded-full p-0.5 shadow-lg border-2 border-blue-900/30 z-10"
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
              </div>

              <div>
                <motion.p
                  className="font-bold text-white text-2xl tracking-tight leading-none"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="text-cyan-300"
                    animate={{
                      textShadow: [
                        "0 0 8px rgba(103,232,249,0)",
                        "0 0 15px rgba(103,232,249,0.5)",
                        "0 0 8px rgba(103,232,249,0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    Code
                  </motion.span>
                  <motion.span
                    className="text-yellow-300"
                    animate={{
                      textShadow: [
                        "0 0 8px rgba(250,204,21,0)",
                        "0 0 15px rgba(250,204,21,0.5)",
                        "0 0 8px rgba(250,204,21,0)",
                      ],
                    }}
                    transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
                  >
                    Py
                  </motion.span>
                </motion.p>
                <motion.p
                  className="text-xs text-blue-200 leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Code Adventures for Youngers
                </motion.p>
              </div>
            </NextLink>
          </motion.div>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 justify-start ml-8">
          {siteConfig.navItems.map((item, i) => {
            const isActive = pathname === item.href;

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
                      {/* Animated background for active item */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-blue-500/20 -z-10"
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(59, 130, 246, 0)",
                              "0 0 0 5px rgba(59, 130, 246, 0.3)",
                              "0 0 0 0 rgba(59, 130, 246, 0)",
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

                      {item.label}

                      {/* Active indicator with animation */}
                      {isActive && (
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

      {/* Right-side controls - Desktop */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          {/* Fun animated theme switch */}
          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.2,
            }}
            transition={{ duration: 0.6 }}
          >
            <ThemeSwitch />
          </motion.div>

          {/* Parent portal button */}
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
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-md relative overflow-hidden"
              radius="full"
              size="sm"
            >
              {/* Animated particles on hover */}
              <AnimatePresence>
                {hoverButton === "parent" && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`parent-particle-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-cyan-200"
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.5],
                          x: [0, -20 + Math.random() * 40],
                          y: [0, -30 - Math.random() * 20],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                          left: `${45 + i * 5}%`,
                          top: "50%",
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <motion.div className="flex items-center gap-1.5">
                <FaRobot className="text-cyan-200" /> Parent Access
              </motion.div>
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Registration button with animation */}
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
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.85, 0.9, 0.85],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <Button
              as={Link}
              href="/auth/register"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-0 px-6 shadow-lg"
              radius="full"
              startContent={
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
              }
            >
              Start Coding Adventure
              {/* Animated particles on hover */}
              <AnimatePresence>
                {hoverButton === "register" && (
                  <>
                    {[...Array(5)].map((_, i) => (
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
                          x: [0, (Math.random() - 0.5) * 50],
                          y: [0, (Math.random() - 1) * 40],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 + Math.random() * 0.5 }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: "50%",
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Login button */}
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
              className="bg-white/10 text-white border border-white/20 shadow-inner"
              radius="full"
              startContent={
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaSpaceShuttle className="text-cyan-200" />
                </motion.div>
              }
            >
              Launch Console
              {/* Animated trail on hover */}
              <AnimatePresence>
                {hoverButton === "login" && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`login-trail-${i}`}
                        className="absolute right-3 h-1.5 w-6 rounded-full bg-cyan-400/40"
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

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600/50 p-1 rounded-full backdrop-blur-sm"
          >
            <ThemeSwitch />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavbarMenuToggle
              className="text-white bg-blue-600/40 rounded-full p-1 backdrop-blur-sm"
              icon={
                isMenuOpen ? (
                  <motion.div
                    animate={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoRocket className="text-lg text-cyan-200" />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <IoRocket className="text-lg text-cyan-200" />
                  </motion.div>
                )
              }
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
          </motion.div>
        </div>
      </NavbarContent>

      {/* Mobile menu with improved animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMenu className="pt-16 pb-10 bg-gradient-to-b from-blue-800/97 via-blue-700/97 to-indigo-800/97">
            {/* Background decorations */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-24 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute h-40 w-40 rounded-full bg-blue-400/20 blur-xl"
                style={{ top: "-10%", left: "10%" }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute h-32 w-32 rounded-full bg-cyan-400/20 blur-xl"
                style={{ top: "-5%", right: "20%" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Navigation items with improved animations */}
            <motion.div
              className="flex flex-col gap-2 px-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {siteConfig.navItems.map((item, index) => (
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
                          pathname === item.href
                            ? "bg-blue-600/30 text-white shadow-inner border border-blue-400/20"
                            : "text-white hover:bg-blue-600/20"
                        )}
                      >
                        <motion.div
                          animate={{
                            rotate:
                              pathname === item.href ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{
                            duration: 3,
                            repeat: pathname === item.href ? Infinity : 0,
                          }}
                        >
                          {navIcons[item.href as keyof typeof navIcons]}
                        </motion.div>
                        <span className="font-medium">{item.label}</span>

                        {/* Show indicator for active page */}
                        {pathname === item.href && (
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
              ))}
            </motion.div>

            {/* Action buttons with animation */}
            <motion.div
              className="px-4 mt-6 space-y-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {/* Button backgrounds with glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-xl -z-10 opacity-30"
                style={{ top: "10%", height: "40%" }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <Button
                as={Link}
                href="/auth/register"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg border-0"
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
                Start Coding Adventure
              </Button>

              <Button
                as={Link}
                href="/auth/login"
                className="w-full bg-blue-700/40 text-white border border-blue-400/20 backdrop-blur-sm"
                radius="full"
                size="lg"
                startContent={
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaSpaceShuttle className="text-cyan-200 text-lg" />
                  </motion.div>
                }
              >
                Launch Console
              </Button>

              <Button
                as={Link}
                href="/parent-portal"
                className="w-full bg-transparent text-blue-100 border border-blue-400/20"
                radius="full"
                variant="bordered"
                size="lg"
                startContent={<FaRobot className="text-cyan-200" />}
              >
                Parent Access
              </Button>
            </motion.div>

            {/* Decorative particles in mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-cyan-200"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${Math.random() * 90}%`,
                    fontSize: `${Math.random() * 10 + 6}px`,
                    opacity: 0.5 + Math.random() * 0.5,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: i % 2 === 0 ? [0, 180] : [180, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {i % 3 === 0 ? "●" : i % 3 === 1 ? "✦" : "■"}
                </motion.div>
              ))}
            </div>

            {/* Footer credits in mobile menu */}
            <motion.div
              className="absolute bottom-4 left-0 right-0 text-center text-blue-200/60 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p>CodePy - Where Python Adventures Begin</p>
            </motion.div>
          </NavbarMenu>
        )}
      </AnimatePresence>

      {/* Code particles floating in desktop navbar */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const symbol =
            i % 5 === 0
              ? "{"
              : i % 5 === 1
                ? "}"
                : i % 5 === 2
                  ? "<>"
                  : i % 5 === 3
                    ? "()"
                    : "//";
          return (
            <motion.div
              key={i}
              className="absolute text-blue-300/20 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 8 + 4}px`,
              }}
              animate={{
                y: [0, -5, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: i % 2 === 0 ? 0 : 180,
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>
    </NextUINavbar>
  );
};
