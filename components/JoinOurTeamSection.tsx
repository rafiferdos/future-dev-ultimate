import { Button } from "@heroui/button";
import Link from 'next/link';
import React from 'react'
import { Input } from "@heroui/input";
import { CiMail } from "react-icons/ci";


const JoinOurTeamSection = () => {
  return (
    <div className="grid mx-5 grid-cols-1 max-w-7xl  px-6 lg:mx-auto md:grid-cols-2 gap-10 items-center border p-10 border-primary rounded-3xl">
      <div className="space-y-3 ">
        <h2 className="mb-5 mt-2 font-extrabold text-3xl lg:text-5xl">
          Join Our Team
        </h2>
        <p>
          Join Learn HQ and help shape the future of education with innovation
          solutions.
        </p>
        <div>
          <Link href="#">
            <Button color="primary" variant="ghost">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
      <div className="">
        <Input
          type="email"
          placeholder="Enter Your Email"
          variant="bordered"
          className="max-w-full"
          startContent={
            <CiMail className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            <Button color="primary" variant="shadow">
              submit
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default JoinOurTeamSection