'use client';

import React, { useState, useEffect } from "react";
import { IoRocket, IoPlanet, IoGameController, IoSchool } from "react-icons/io5";
import { FaUserAstronaut, FaRobot, FaStar } from "react-icons/fa";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Logo from '@/public/logo.png';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map icons to nav items
  const navIcons = {
    "/": <IoRocket className="text-lg" />,
    "/about": <IoPlanet className="text-lg" />,
    "/programs": <IoSchool className="text-lg" />,
    "/courses": <IoGameController className="text-lg" />,
  };

  return (
    <NextUINavbar 
      maxWidth="xl" 
      position="sticky"
      className={clsx(
        "transition-all duration-300 py-2",
        scrolled ? "bg-gradient-to-r from-indigo-600/95 to-purple-700/95 shadow-lg" : "bg-gradient-to-r from-indigo-600/70 to-purple-700/70"
      )}
    >
      {/* Logo and brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <NextLink className="flex justify-start items-center gap-2" href="/">
              <div className="relative">
                <Image 
                  alt="logo" 
                  className="w-12 h-12 rounded-full" 
                  src={Logo} 
                />
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="absolute -top-2 -right-2 text-lg"
                >
                  🚀
                </motion.div>
              </div>
              <div>
                <p className="font-bold text-white text-xl">
                  <span className="text-yellow-300">Code</span> Explorers
                </p>
                <p className="text-xs text-blue-200 -mt-1">Space Academy for Young Coders</p>
              </div>
            </NextLink>
          </motion.div>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 justify-start ml-6">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NextLink
                    className={clsx(
                      "px-3 py-2 rounded-full flex items-center gap-2",
                      isActive 
                        ? "bg-white/20 text-white font-medium shadow-inner" 
                        : "text-white/90 hover:bg-white/10"
                    )}
                    href={item.href}
                  >
                    {navIcons[item.href as keyof typeof navIcons]}
                    {item.label}
                    {isActive && (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <FaStar className="text-yellow-300 text-xs" />
                      </motion.div>
                    )}
                  </NextLink>
                </motion.div>
              </NavbarItem>
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
            whileHover={{ rotate: 360 }} 
            transition={{ duration: 0.6 }}
          >
            <ThemeSwitch />
          </motion.div>
          
          {/* Parent portal button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="/parent-portal"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0"
              radius="full"
              size="sm"
            >
              <FaRobot className="mr-1" /> Parent Portal
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Registration button with animation */}
        <NavbarItem className="hidden md:flex">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="/auth/register"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 font-bold border-0 px-6"
              radius="full"
              startContent={
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaUserAstronaut className="text-lg" />
                </motion.div>
              }
            >
              Join the Mission!
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Login button */}
        <NavbarItem className="hidden md:flex ml-2">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={Link}
              href="/auth/login"
              variant="flat"
              className="bg-white/20 text-white border-0"
              radius="full"
            >
              Mission Control
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <ThemeSwitch />
          </motion.div>
          <NavbarMenuToggle 
            className="text-white"
            icon={isMenuOpen ? 
              <IoRocket className="rotate-90 text-lg" /> : 
              <IoRocket className="text-lg" />
            }
            onChange={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </NavbarContent>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMenu className="pt-6 bg-gradient-to-b from-indigo-600/95 to-purple-700/95">
            {siteConfig.navItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavbarMenuItem>
                  <NextLink
                    href={item.href}
                    className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-white/10 rounded-lg"
                  >
                    {navIcons[item.href as keyof typeof navIcons]}
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-4 mt-6 space-y-3"
            >
              <Button
                as={Link}
                href="/auth/register"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 font-bold"
                radius="full"
                size="lg"
                startContent={<FaUserAstronaut />}
              >
                Join the Mission!
              </Button>
              
              <Button
                as={Link}
                href="/auth/login"
                className="w-full bg-white/20 text-white"
                radius="full"
                variant="flat"
              >
                Mission Control
              </Button>
            </motion.div>

            {/* Decorative stars in mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-yellow-300"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${Math.random() * 90}%`,
                    fontSize: `${Math.random() * 14 + 8}px`,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  ✦
                </motion.div>
              ))}
            </div>
          </NavbarMenu>
        )}
      </AnimatePresence>

      {/* Background stars decoration for navbar - only visible on desktop */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-100/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 6 + 4}px`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </NextUINavbar>
  );
};