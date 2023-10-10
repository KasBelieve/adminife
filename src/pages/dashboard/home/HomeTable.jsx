import { CampaignImage } from "assets/images";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "shared/Card";
import Table from "shared/Table";

const HomeTable = () => {
  // const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      Header: "Campaign",
      accessor: (d) => (
        <Link
          className="flex cursor-pointer gap-2 items-center justify-start ml-4"
          to={`/admin/home`}
        >
          <div className="w-[32px] h-[32px]">
            <img
              src={CampaignImage}
              alt={d.title}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <p className={`${d.textColor}`}>{d?.title}</p>
        </Link>
      ),
    },
    {
      Header: "Received",
      accessor: (d) => (
        <Link className="flex justify-start ml-4 capitalize" to={`/admin/home`}>
          <p>{d?.received ? d?.received : "N/A"}</p>
        </Link>
      ),
    },
    {
      Header: "Paid Out",
      accessor: (d) => (
        <Link className="flex justify-start ml-4" to={`/admin/home`}>
          <p>{d?.paidOut ? d?.paidOut : "N/A"}</p>
        </Link>
      ),
    },
    {
      Header: " ",
      accessor: (d) => (
        <div className="relative">
          <Link to={`/admin/home`}>
            <p
              onClick={() => {
                // setSelectedRow(d);
              }}
              className="cursor-pointer text-eden border-b border-eden w-fit"
            >
              View Details
            </p>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <p className="text-[24px] mb-4">Today</p>
      <div>
        <Table
          columns={columns}
          data={[
            {
              id: 1,
              title: "Education for locals in ikorodu",
              received: "Bisi Oye sent N 3000 via Bank Transfer",
              paidOut: "Paid out N 60,000",
              textColor: "text-persianBlue",
            },
            {
              id: 2,
              title: "Education for locals in ikorodu",
              received: "Bisi Oye sent N 3000 via Bank Transfer",
              paidOut: "",
              textColor: "text-mountainMeadow",
            },
            {
              id: 3,
              title: "Education for locals in ikorodu",
              received: "Bisi Oye sent N 3000 via Bank Transfer",
              paidOut: "Paid out N 40,000",
              textColor: "text-violetEggplant",
            },
          ]}
          type="You don’t have any campaigns. Create a campaign to get started"
        />
      </div>
    </Card>
  );
};

export default HomeTable;
