"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import offeringData from "../../lib/offeringData";
import OfferCard from "./OfferCard";
import { Button } from "@nextui-org/button";
import Link from "next/link";

// Define a type
type OfferingData = {
  type: string;
  image: string;
  title: string;
  name: string;
};

const OfferSection: React.FC = () => {
  // Split data into chunks of two for each slide
  const chunkedData = [];
  for (let i = 0; i < offeringData.length; i += 2) {
    chunkedData.push(offeringData.slice(i, i + 2));
  }



  return (
    <div className="max-w-7xl px-6 mx-auto">
      <h1 className="text-center font-bold text-3xl md:text-5xl mb-10">
        Explore our offering
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        loop={true}
        className="w-full"
      >
        {chunkedData.map((pair, index) => (
          <SwiperSlide key={index} className="shadow-none">
            <div className="grid grid-rows-2 gap-4 ">
              {pair.map((data, subIndex) => (
                <OfferCard key={subIndex} data={data} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center mt-10">
        <Link href="/all-offer">
        <Button color="primary" variant="ghost">
          Learn more
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferSection;
