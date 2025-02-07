import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials: React.FC = () => {
  return (
    <div className="mt-24">
      <div>
        <small className="">Stories of Student</small>
        <h2 className="mt-2 mb-5 font-extrabold  text-5xl">
          What student say?
        </h2>
      </div>
      <section>
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center">
            <div>
              <p>
                Discover the voices of success! Our candidates speak for
                themselves about their transformative experiences.
              </p>
              <p>
                Join us in nurturing the next generation of innovators! Our
                carefully designed courses provide hands-on experience in
                programming, robotics, and game development, making learning fun
                and effective. You can learn more about our program from the
                link given below.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <TestimonialsCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
