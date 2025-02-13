import { Button } from "@nextui-org/button";
import React from "react";
import program from "@/public/home/program.webp";
import Image from "next/image";

const ProgramSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  gap-24 max-w-7xl  px-6 mx-auto">
      {/* Left Section */}
      <div className="w-full  h-full">
            <Image
              className="rounded-3xl border border-blue-100"
              src={program}
              alt="Program Illustration"
            />
          </div>

      {/* Right Section */}
      <div className="flex pl-6 space-y-4 lg:space-y-0 md:px-0 col-span-1 flex-col justify-between">
        <h2 className="font-bold text-3xl lg:text-5xl">আমাদের প্রোগ্রামসমূহ</h2>
        <div className="space-y-3 font-siliguri lg:text-xl">
          <p>
            আমাদের সাথে পরবর্তী প্রজন্মের উদ্ভাবকদের গড়ে তুলতে যোগ দিন! আমাদের
            যত্নসহকারে তৈরি করা কোর্সগুলো প্রোগ্রামিং, রোবোটিক্স এবং গেম
            ডেভেলপমেন্টে হাতে-কলমে শেখার সুযোগ দেয়, যা শেখাকে মজার ও কার্যকরী
            করে তোলে।
          </p>
          <p>আমাদের প্রোগ্রাম সম্পর্কে আরো জানতে নিচের লিঙ্কটি দেখুন।</p>
        </div>
        <div className="flex gap-4 items-center">
          <Button color="primary" variant="shadow">
            বিনামূল্যে একটি ক্লাস বুক করুন!
          </Button>
          <Button color="primary" variant="light">
            আরো জানুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
