"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";

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
      <Card className="w-full h-full p-5  border border-primary flex flex-col">
        <CardHeader className="flex  justify-center">
          <Button
            color={buttonColor}
            className="px-12"
            variant="shadow"
            radius="full"
          >
            {type}
          </Button>
        </CardHeader>
        <CardBody className="space-y-5 flex flex-col items-center ">
          <h3 className="text-primary font-bold text-xl ">
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
