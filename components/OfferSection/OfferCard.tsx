"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";

interface Data {
  type: string;
  image: string;
  title: string;
  name: string;
}

const OfferCard: React.FC<{ data: Data }> = ({ data }) => {
  const { image, title, name, type } = data;

  // Define the button color based on the type
  let buttonColor: "primary" | "secondary" | "success" | "warning" | "danger" =
    "primary";
  if (type === "python") {
    buttonColor = "warning";

  } else if (type === "javascript") {
    buttonColor = "success";
  } else if (type === "nextjs") {
    buttonColor = "primary";
  } else if (type === "c++") {
    buttonColor = "danger";
  } else if (type === "java") {
    buttonColor = "secondary";
  }

  return (
    <div className="w-full h-full">
      {/* Fixed width and height */}
      <Card className="w-full h-[300px] p-5  border border-primary flex flex-col">
        <CardHeader className="flex  justify-center">
          <button className={`text-${buttonColor} capitalize text-2xl`}>
          {type}
          </button>
        </CardHeader>
        <CardBody className="space-y-7 flex flex-col items-center ">
          <h3 className="text-primary capitalize text-center font-bold text-lg ">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <Avatar
              isBordered
              color="primary"
              src={image}
              className="w-10 h-10"
            />
            <h3 className="text-center text-sm">{name}</h3>
          </div>
          <Button
            color="primary"
            className="px-12"
            variant="shadow"
            radius="full"
          >
            Enroll Now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OfferCard;
