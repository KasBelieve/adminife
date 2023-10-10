import {
  IconCampaign,
  IconHome,
  IconMessage,
  IconPartnership,
} from "assets/svgs";

export const sidebarContent = [
  {
    icon: <IconHome />,
    title: "Home",
    path: "/admin/home",
  },
  {
    icon: <IconCampaign />,
    title: "Ongoing Campaigns",
    path: "/admin/campaigns",
  },
  {
    icon: <IconPartnership />,
    title: "Partnership",
    path: "/admin/partnerships",
  },
  {
    icon: <IconMessage />,
    title: "Message",
    path: "/admin/message",
  },
];
