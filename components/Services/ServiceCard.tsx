"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";


import "@smastrom/react-rating/style.css";

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

// Define the type for the user prop
interface Data {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}



const ServiceCard: React.FC<{ data: Data }> = ({ data }) => {
  const { image, title,  description,link } = data || {};

  return (
    <div className="w-full">
      <Card className="p-5 border border-primary">
        <CardHeader className="flex justify-between">
          <div className="flex w-full items-center justify-center gap-4">
            <Avatar
              isBordered
              color="primary"
              src={image}
              className="w-20 h-20 text-large"
            />
          </div>
        </CardHeader>
        <CardBody className="space-y-3">
          <h3 className="text-primary font-bold text-4xl">{title}</h3>
          <p>{description}</p>
          <Link className="font-bold" href={"#"}>{link}</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServiceCard;
