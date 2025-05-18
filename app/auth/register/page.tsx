"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRocket, FaSatellite, FaUserAstronaut } from "react-icons/fa";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    favoriteColor: "#4f46e5",
    age: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError(t("registerForm", "passwordMismatch"));
      setIsLoading(false);
      return;
    }

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Redirect to login on success
      router.push("/auth/login?registered=true");
    } catch (err: Error | unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Spacecraft animation variants
  const spacecraftVariants = {
    step1: { x: "0%", rotate: 0 },
    step2: { x: "100%", rotate: 10 },
    step3: { x: "200%", rotate: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-800 flex items-center justify-center px-4 py-12">
      {/* Animated stars background */}
      <div className="space-stars absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Planet decorations */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 rounded-full bg-amber-400 opacity-60"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-green-400 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8 relative z-10 bg-white bg-opacity-90">
          <div className="text-center mb-8">
            <motion.div
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaUserAstronaut className="text-6xl text-blue-600 mx-auto" />
            </motion.div>{" "}
            <motion.h2
              className="mt-4 text-3xl font-bold text-blue-700"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              {t("registerForm", "title")}
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("registerForm", "subtitle")}
            </motion.p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8 relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div
              className="absolute -top-3 text-2xl"
              animate={`step${step}`}
              variants={spacecraftVariants}
              transition={{ type: "spring", stiffness: 100 }}
              initial={false}
            >
              🚀
            </motion.div>
          </div>

          {error && (
            <motion.div
              className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring" }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
              >
                <div className="space-y-5">
                  <div>
                    {" "}
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "usernameLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                        placeholder={t("registerForm", "usernamePlaceholder")}
                      />
                      <div className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-blue-500">
                        <motion.div whileHover={{ rotate: 20 }}>👨‍🚀</motion.div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "emailLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                        placeholder={t("registerForm", "emailPlaceholder")}
                      />
                      <div className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-blue-500">
                        <motion.div whileHover={{ scale: 1.2 }}>@</motion.div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center justify-center">
                      {t("registerForm", "continueButton")}{" "}
                      <FaSatellite className="ml-2" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "passwordLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                        placeholder="••••••••"
                      />
                      <div className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-blue-500">
                        <motion.div whileHover={{ rotate: 45 }}>🔑</motion.div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "confirmPasswordLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                        placeholder="••••••••"
                      />
                      <div className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-blue-500">
                        <motion.div whileHover={{ scale: 1.2 }}>🔐</motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t("registerForm", "backButton")}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t("registerForm", "continueButton")}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "ageLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="5"
                        max="17"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                        placeholder="10"
                      />
                      <div className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-blue-500">
                        <motion.div whileHover={{ scale: 1.2 }}>🎂</motion.div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="favoriteColor"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("registerForm", "colorLabel")}
                    </label>
                    <div className="relative">
                      <input
                        id="favoriteColor"
                        name="favoriteColor"
                        type="color"
                        value={formData.favoriteColor}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
                      />
                    </div>
                    <div className="mt-2 flex justify-center">
                      <motion.div
                        className="text-4xl"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ color: formData.favoriteColor }}
                      >
                        🚀
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t("registerForm", "backButton")}
                    </motion.button>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <motion.div
                            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          {t("registerForm", "loadingText")}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <FaRocket className="mr-2" />{" "}
                          {t("registerForm", "submitButton")}
                        </div>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </form>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-600">
              {t("registerForm", "alreadyRegistered")}{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {t("registerForm", "loginLink")}
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
