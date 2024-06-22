import React from "react";
import Card from "./Card";
import { benefitsData } from "@lib/data/data";
const Benefits = () => {
  return (
    <section className="w-full">
      <div className="container  mx-auto px-5 md:p-10 lg:p-20 border-b  border-b-[#F4F6F8]">
        <div className="flex flex-row  max-sm:py-2 flex-wrap justify-between">
        {benefitsData.map((benefit) => (
          <Card {...benefit} key={benefit.id}/>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
