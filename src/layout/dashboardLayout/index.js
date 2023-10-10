import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children, className }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex w-full h-screen">
      <Sidebar setToggle={setToggle} toggle={toggle} />
      <div className="h-full w-full flex flex-col overflow-hidden">
        <Header setToggle={setToggle} toggle={toggle} />
        <div
          className={`overflow-y-auto bg-blackHaze h-full flex gap-6 p-8 max-md:p-4 ${className} flex-col flex-1`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
