'use client';
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import program from "@/public/home/program.webp";
import learning from "@/public/home/learning.webp";
import service from "@/public/home/service.webp";

const Banner = () => {
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
            <div className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${program.src})` }}>
              <h1 className="text-[calc(2em+2vw)] m-0">Welcome to Our Site</h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">Discover amazing content</p>
            </div>
            <div className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${learning.src})` }}>
              <h1>Our Services</h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">We offer a variety of services</p>
            </div>
            <div className="section h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${service.src})` }}>
              <h1>Contact Us</h1>
              <p className="w-1/2 mx-auto my-2 text-[1.65em]">Get in touch with us</p>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Banner;