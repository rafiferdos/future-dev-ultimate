"use client";
import React from "react";
import Image from "next/image";
import blogs from "../lib/blogData";
import { Button } from "@nextui-org/button";

// Define a type for blog data
type Blog = {
  id: string;
  image: string;
  date: string;
  description: string;
};

const BlogSection: React.FC = () => {
  return (
    <div className="max-w-7xl mt-12  px-6 mx-auto">
      <div>
        <small className="">Latest Insights</small>
        <h2 className="mb-5 mt-2 font-extrabold text-3xl lg:text-5xl">
          Our Blog Insights
        </h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.length > 0 &&
          blogs.map((blog: Blog, index: number) => (
            <div key={index} className="relative rounded-2xl border">
              <Image
                className="w-full h-full opacity-60 rounded-2xl"
                src={blog.image}
                alt=""
                width={500}
                height={300}
              />
              <span className="bg-primary px-3 py-1 rounded-full absolute top-10 left-2">
                {blog?.date}
              </span>
              <p className="text-center p-2 absolute bottom-2">
                {blog.description}
              </p>
            </div>
          ))}
      </div>
      {/*  */}
      <div className="flex my-12 justify-center items-center">
        <Button color="primary" variant="shadow">
          See More
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;
