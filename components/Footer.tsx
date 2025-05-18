"use client"
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Tooltip } from "@heroui/tooltip";
import Logo from "@/public/logo.png";
import FooterImage from "@/public/footer_image.png";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 divide-y shadow-2xl border-t py-4 mt-16">
      <div className="mx-auto max-w-[1332px] md:px-7 lg:px-2 flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="self-center gap-2 flex items-center text-lg md:text-2xl font-semibold">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <Image alt="logo" className="w-12 h-12" src={Logo} />
                <p className="font-bold text-inherit">{siteConfig.name}</p>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  font-medium text-sm gap-x-4 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 col-span-2">
            <h3 className="tracking-wide capitalize">Contact us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  href="tel:+8801706-276447"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span>+8801706-276447</span>
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  href="mailto:futuredev@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>futuredev@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>Green Corner, Green Road, Dhaka 1205</span>
                </Link>
              </li>
              <li>
                <div className="flex flex-wrap text-white items-center justify-start space-x-3 text-2xl">
                  <Tooltip content="Twitter">
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="#"
                      id="twitter"
                      className="flex items-center p-1"
                    >
                      <AiFillTwitterCircle />
                    </Link>
                  </Tooltip>

                  <Tooltip content="Instagram">
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="#"
                      id="instagram"
                      className="flex items-center p-1"
                    >
                      <FaInstagram />
                    </Link>
                  </Tooltip>

                  <Tooltip content="Facebook">
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="#"
                      id="facebook"
                      className="flex items-center p-1"
                    >
                      <FaFacebook />
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn">
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="#"
                      id="linkedIn"
                      className="flex items-center p-1"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </Tooltip>
                </div>
              </li>
            </ul>
          </div>
          {/* Additional sections for links */}
          <div className="space-y-3">
            <h3 className="tracking-wide capitalize ">Important Links</h3>
            <ul className="space-y-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/course"}>Course</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide capitalize ">About Our Details</h3>
            <div className="flex gap-1">
              <ul className="space-y-5">
                <li>
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/privacy_policy"}>Privacy & Policy</Link>
                </li>
                <li>
                  <Link href={"/terms_condition"}>Terms & Condition</Link>
                </li>
              </ul>
              <div>
                <Image src={FooterImage} alt="" />
              </div>
            </div>
          </div>
          {/* Additional sections for links */}
        </div>
      </div>
      <div className="border-b-2 border-[#13131326]"></div>
      <div className="py-6 text-sm text-center">
        <p className=" font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-extrabold">Future Dev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
