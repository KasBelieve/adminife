import NotFound from "pages/NotFound";
import AdminLogin from "pages/auth/AdminLogin";
import CampaignsContents from "pages/dashboard/campaigns";
import HomeContents from "pages/dashboard/home";
import MessageContents from "pages/dashboard/message";
import PartnershipContents from "pages/dashboard/partnerships";
import { Outlet } from "react-router-dom";

export const adminRoutes = [
  {
    path: "admin/*",
    element: <Outlet />,
    children: [
      {
        path: "home",
        element: <HomeContents />,
      },
      {
        path: "campaigns",
        element: <CampaignsContents />,
      },
      {
        path: "partnerships",
        element: <PartnershipContents />,
      },
      {
        path: "message",
        element: <MessageContents />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const publicRoutes = [
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
