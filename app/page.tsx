"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Educators from "@/components/Educators";
import Testimonials from "@/components/Testimonials/Testimonials";
import ChooseUsSection from "@/components/ChooseUsSection";
import ProgramSection from "@/components/ProgramSection";
import PlatformSection from "@/components/PlatformSection";
import ServicesSection from "@/components/Services/ServicesSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import JoinOurTeamSection from "@/components/JoinOurTeamSection";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import Banner from "@/components/banner/Banner";

import ReactFullpage from "@fullpage/react-fullpage";
import program from "@/public/home/program.webp";
import learning from "@/public/home/learning.webp";
import service from "@/public/home/service.webp";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="banner">
      <ReactFullpage
        licenseKey="YOUR_LICENSE_KEY" // Replace with a valid key
        scrollingSpeed={1000} // Adjust scrolling speed if needed
        navigation
        slidesNavigation={true}
        controlArrows={false}
        render={() => (
          <ReactFullpage.Wrapper>
            <div
              className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${program.src})` }}
            >
              <h1 className="text-[calc(2em+2vw)] m-0 ">ব্যতিক্রমী শিক্ষা</h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">
                আমাদের কোর্সগুলো বিশেষভাবে ডিজাইন করা, যাতে শিশুরা মজা করে নতুন
                জিনিস শিখতে পারে
              </p>
            </div>
            <div
              className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${learning.src})` }}
            >
              <h1 className="text-[calc(2em+2vw)] m-0 ">
                গবেষণামূলক কার্যক্রম
              </h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">
                {" "}
                শিশুরা নতুন সমস্যার সমাধান করতে শেখে, যা তাদের সৃজনশীলতাকে আরো
                উজ্জীবিত করে
              </p>
            </div>
            <div
              className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${service.src})` }}
            >
              <h1 className="text-[calc(2em+2vw)] m-0 ">
                গবেষণামূলক কার্যক্রম
              </h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">
                শিশুরা নতুন সমস্যার সমাধান করতে শেখে, যা তাদের সৃজনশীলতাকে আরো
                উজ্জীবিত করে
              </p>
            </div>
            <div className="section  mt-20">
              <ProgramSection />
              <ChooseUsSection />
            </div>
            <div className="section  ">
              <ChooseUsSection />
            </div>

            <div className="section  ">
              <OfferSection />
            </div>

            <div className="section  ">
              <PlatformSection />
            </div>

            <div className="section  ">
              <WorkProcessSection />
            </div>

            <div className="section ">
              <ServicesSection />
            </div>

            <div className="section   ">
              <TeamSection />
              <Educators />
            </div>

            <div className="section  ">
              <Testimonials />
              <BlogSection />
            </div>

            <div className="section ">
              <JoinOurTeamSection />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
    // <div className="font-siliguri">
    //   <div className="relative">
    //     <Banner />
    //   </div>

    // <div className="mx-auto max-w-7xl pt-16 px-6 flex-grow">
    //   <ProgramSection />

    //   {/* Why Choose us */}
    //   <ChooseUsSection />

    //   {/* Explore our offering */}
    //   <OfferSection />

    //   {/*About Our Educational Platform  */}
    //   <PlatformSection />

    //   {/* Our Work Process */}
    //   <WorkProcessSection />

    //   {/* Explore Our Services */}
    //   <ServicesSection />

    //   {/* Join Our Team */}
    //   <TeamSection />

    //   {/* Our  Educators  */}
    //   <Educators />

    //   {/* Testimonials */}
    //   <Testimonials />

    //   {/*Our Blog Insights */}
    //   <BlogSection />

    //   {/* Join Our Team Section */}
    //   <JoinOurTeamSection />
    // </div>
    // </div>
  );
}
