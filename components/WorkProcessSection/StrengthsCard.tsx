import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";

interface Data {
  id: string;
  image: string;
  title: string;
  description: string;
}

const StrengthsCard: React.FC<{ data: Data }> = ({ data }) => {
  const { image, title, description } = data;

  return (
    <div className="w-[210px] h-[300px]">
      {" "}
      {/* Fixed width and height */}
      <Card className="w-full h-full p-5 border border-primary flex flex-col hover:bg-primary-50 hover:cursor-pointer">
        <CardHeader className="flex justify-center">
          <Avatar
            isBordered
            color="primary"
            src={image}
            className="w-20 h-20"
          />
        </CardHeader>
        <CardBody className="space-y-3 flex flex-col items-center justify-between">
          <h3 className="text-primary font-bold text-xl text-center">
            {title}
          </h3>
          <p className="text-center text-sm">{description}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrengthsCard;
