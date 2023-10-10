import React from "react";

const HomeCard = ({ title, amount, toBeDonated, textColor, borderColor }) => {
  return (
    <div
      className={`bg-white w-[328px] h-[149px] max-[450px]:h-full font-medium px-8 py-4 border-r ${borderColor} flex flex-col justify-between`}
    >
      <p className="text-gunsmoke text-[12px]">
        Project: <span className={`${textColor}`}>{title}</span>
      </p>
      <p className="text-[24px]">N {amount}</p>
      <p className="text-martini text-[10px]">To be Donated: N {toBeDonated}</p>
    </div>
  );
};

export default HomeCard;
