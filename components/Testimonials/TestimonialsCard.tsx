"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards, Autoplay } from "swiper/modules";


import testimonialsData from "@/lib/testimonialsData";
import Card1 from "./Card1";

// Define the type for the testimonial data
interface Testimonial {
  name: string;
  image: string;
  rating: number;
  description:string
}

const TestimonialsCard: React.FC = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-full shadow"
      >
        <div className="mt-10">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[EffectCards, Autoplay]}
            className="w-full shadow"
          >
            {testimonialsData?.length > 0 &&
              testimonialsData?.map((user: Testimonial, index: number) => (
                <SwiperSlide
                  className=""
                  key={index}
                >
                  <Card1 user={user} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;
