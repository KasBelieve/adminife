import DashboardLayout from "layout/dashboardLayout";
import React from "react";
import Overview from "./Overview";
import HomeTable from "./HomeTable";

const HomeContents = () => {
  return (
    <DashboardLayout>
      <Overview />
      <HomeTable />
    </DashboardLayout>
  );
};

export default HomeContents;
