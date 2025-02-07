

import { Button } from "@nextui-org/button";
import React from "react";
import service from "@/public/service.png";
import Image from "next/image";
import servicesData from "../../lib/servicesData";
import ServiceCard from "./ServiceCard";
// Define a type
type ServiceData = {
  id: string;
  image: string;
  title:string,
  description: string;
  link:string
};

const ServicesSection: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-5 gap-24">
        {/* Left Section */}
        <div className="relative col-span-1 lg:col-span-2">
          <div className="bg-primary w-[269px] min-h-96 rounded-r-[53px]"></div>
          <div className="absolute bottom-10">
            <Image
              className="max-w-96"
              src={service}
              alt="Program Illustration"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex font-siliguri gap-6  lg:col-span-3 pl-6 space-y-10 lg:space-y-0 md:px-0 col-span-1 flex-col justify-center ">
          <h2 className="font-bold text-3xl mt-5 lg:text-5xl">
            Explore Our Services
          </h2>
          <div className="space-y-1  lg:text-xl">
            <p>
              Discover diverse educational services designed to guide learners
              toward academic excellence and personal growth.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Button color="primary" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      {/* card section */}
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-5 mt-28">
          {servicesData?.length > 0 &&
            servicesData.map((data: ServiceData, index: number) => (
              <ServiceCard data={data} key={index} />
            ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button color="primary" variant="ghost">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
