import { CampaignImage } from "assets/images";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "shared/Card";
import Table from "shared/Table";
import greater from "assets/svgs/arrowRight.svg";

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
      Header: "Total Volunteers",
      accessor: (d) => (
        <Link className="flex justify-start ml-4 capitalize" to={`/admin/home`}>
          <p>{d?.totalvolunteers ? d?.totalvolunteers : "N/A"}</p>
        </Link>
      ),
    },
    {
      Header: "Total Donators",
      accessor: (d) => (
        <Link className="flex justify-start ml-4" to={`/admin/home`}>
          <p>{d?.totaldonators ? d?.totaldonators : "N/A"}</p>
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
              className="cursor-pointer text-eden  border-eden w-fit"
            >
               <img src={greater} className="w-6 h-6"/> 
            </p>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Card>
      {/* <p className="text-[24px] mb-4">Today</p> */}
      <div>
        <Table
          columns={columns}
          data={[
            {
              id: 1,
              title: "Education for locals in ikorodu",
              totalvolunteers: "20",
              totaldonators: "10",
              textColor: "text-persianBlue",
            },
            {
              id: 2,
              title: "Education for locals in ikorodu",
              totalvolunteers: "14",
              totaldonators: "2",
              textColor: "text-mountainMeadow",
            },
            {
              id: 3,
              title: "Education for locals in ikorodu",
              totalvolunteers: "18",
              totaldonators: "1",
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
