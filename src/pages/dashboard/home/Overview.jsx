import React from "react";
import HomeCard from "./components/HomeCard";

const Overview = () => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-[40px] max-md:text-[24px]">Overview</p>
      </div>
      <div className="flex max-md:gap-2 flex-wrap">
        {[
          {
            title: "Education for locals in Ikorodu",
            amount: 150000,
            toBeDonated: 300000,
            textColor: "text-persianBlue",
            borderColor: "border-persianBlue",
          },
          {
            title: "Healthcare for all in Ikeja",
            amount: 200000,
            toBeDonated: 400000,
            textColor: "text-mountainMeadow",
            borderColor: "border-mountainMeadow",
          },
          {
            title: "Education for locals in Mile 2",
            amount: 100000,
            toBeDonated: 200000,
            textColor: "text-violetEggplant",
            borderColor: "border-violetEggplant",
          },
        ].map(({ title, amount, toBeDonated, textColor, borderColor }, idx) => (
          <HomeCard
            key={idx}
            title={title}
            amount={amount}
            toBeDonated={toBeDonated}
            textColor={textColor}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
