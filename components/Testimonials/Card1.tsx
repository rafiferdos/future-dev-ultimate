"use client"
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Avatar } from "@nextui-org/avatar";

// Define the type for the user prop
interface User {
  name: string;
  image: string;
  rating: number; 
  description: string;
}

function StarIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Card1: React.FC<{ user: User }> = ({ user }) => {
  const { name, image, rating, description } = user || {};
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="w-full">
      <Card className="p-5 mr-5 border border-primary">
        <CardHeader className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar isBordered color="primary" src={image} />
            <h3>{name}</h3>
          </div>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            isRequired
          />
        </CardHeader>
        <CardBody className="">
          <p>{description}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card1;
