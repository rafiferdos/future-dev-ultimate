import { Button } from "@nextui-org/button";
import React from "react";
// import gettyimage from "@/public/chooseUse.png";
import learning from "@/public/home/learning.webp";
import Image from "next/image";
import Link from "next/link";
import data from "../lib/data";
type Data = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const PlatformSection: React.FC = () => {
  return (
    <div className="max-w-7xl px-6 mx-auto">
      <div className="grid grid-cols-1 items-center  md:grid-cols-2  gap-24 ">
        {/* Left Section */}
        <div className="w-full  h-full">
            <Image
              className="rounded-3xl border border-blue-100"
              src={learning}
              alt="Program Illustration"
            />
          </div>

        {/* Right Section */}
        <div className="flex  pl-6 space-y-4 lg:space-y-5 md:px-0 col-span-1 flex-col justify-between">
          <div>
            <h4 className="font-siliguri">আরো দেখুন</h4>
            <h2 className="mb-5 mt-2 font-extrabold font-siliguri text-5xl">
              আমাদের শিক্ষামূলক প্ল্যাটফর্ম সম্পর্কে
            </h2>
          </div>
          <div className="space-y-2 lg:text-xl">
            <p className="font-siliguri">
              আমাদের প্ল্যাটফর্ম একটি আধুনিক ও উদ্ভাবনী শিক্ষা ব্যবস্থা যা
              শিশুদের দক্ষতা বৃদ্ধির জন্য বিশেষভাবে ডিজাইন করা হয়েছে। আমরা
              বিশ্বাস করি, শেখার প্রক্রিয়া হওয়া উচিত মজার, বাস্তবভিত্তিক এবং
              অনুপ্রেরণাদায়ক। প্রোগ্রামিং, রোবোটিক্স, এবং গেম ডেভেলপমেন্টের মতো
              বিষয়ে হাতে-কলমে শিক্ষার মাধ্যমে আমরা শিশুদের প্রযুক্তিগত এবং
              সৃজনশীল দক্ষতা গড়ে তুলতে সাহায্য করি।
            </p>
            <p className="font-siliguri">
              আমাদের লক্ষ্য হলো একটি এমন
              শিক্ষার পরিবেশ তৈরি করা যেখানে শিশুরা তাদের কৌতূহল এবং
              কল্পনাশক্তিকে কাজে লাগিয়ে নতুন কিছু শিখতে এবং উদ্ভাবন করতে পারে।
              আমাদের পাঠ্যক্রমগুলো বাস্তব জীবনের সমস্যার সমাধান করতে শেখার জন্য
              তৈরি, যা ভবিষ্যতের চ্যালেঞ্জ মোকাবিলায় তাদের আত্মবিশ্বাসী করে
              তোলে। আমাদের সাথে এই শিখন-যাত্রায় যোগ দিন এবং আপনার শিশুর শেখার
              অভিজ্ঞতাকে অনন্য ও কার্যকরী করে তুলুন।
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <Link href={"#"}>
              <Button className="font-siliguri font-extrabold" color="primary" variant="shadow" size="lg">
                যোগাযোগ করুন 
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-3 gap-3 mt-28">
        {data?.length > 0 &&
          data.map((value: Data, index: number) => (
            <div key={index} className="space-y-2">
              <h4 className="font-extrabold text-5xl text-success-500 dark:text-success-400">{value.number}</h4>
              <h5 className="font-extrabold text-xl text-secondary-400 dark:text-secondary-600">{value.title}</h5>
              <p className="text-warning">{value.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlatformSection;
