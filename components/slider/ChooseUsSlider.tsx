"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCreative, Autoplay } from "swiper/modules";


import testimonialsData from "@/lib/testimonialsData";
import Card1 from "../Testimonials/Card1";


// Define the type for the testimonial data
interface Testimonial {
  name: string;
  image: string;
  rating: number;
  description:string
}

const ChooseUsSlider = () => {
    return (
        <div>
          <Swiper
            effect={'creative'}
            grabCursor={true}
            autoplay={{
              delay: 4000,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -300],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="w-full"
          >
            <div className="">
              <Swiper
               effect={'creative'}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                }}
                modules={[EffectCreative, Autoplay]}
                className="w-full"
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
}

export default ChooseUsSlider