import React from "react";
import offeringData from "../../lib/offeringData";
import OfferCard from "@/components/OfferSection/OfferCard";

const page = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl md:text-5xl mb-10">
        Explore our offering
      </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {offeringData.map((data, index) => (
        <div key={index} >
          <OfferCard data={data} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default page;
