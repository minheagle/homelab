import React, { useState } from "react";
import AddNew from "../../components/utils/AddNew";
import ServerForm from "../../components/commands/ServerForm";
import GroupServer from "../../components/commands/GroupServer";
import { Server, ServerType } from "../../types/commands/ServerTypes";

const data: Server[] = [
  {
    id: 1,
    group: "",
    name: "Server 1",
    type: ServerType.UBUNTU,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 2,
    group: "",
    name: "Server 2",
    type: ServerType.DEBIAN,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 3,
    group: "",
    name: "Server 3",
    type: ServerType.CENTOS,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 4,
    group: "Group 1",
    name: "Server 4",
    type: ServerType.FEDORA,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 5,
    group: "Group 1",
    name: "Server 5",
    type: ServerType.OTHER,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 6,
    group: "Group 1",
    name: "Server 6",
    type: ServerType.UBUNTU,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 7,
    group: "Group 1",
    name: "Server 7",
    type: ServerType.FEDORA,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 8,
    group: "Group 1",
    name: "Server 8",
    type: ServerType.OTHER,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 9,
    group: "Group 1",
    name: "Server 9",
    type: ServerType.UBUNTU,
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
];

const CommandHome = () => {
  const [openForm, setOpenForm] = useState(false);

  const groupedData = data.reduce((acc: Record<string, Server[]>, item) => {
    const groupKey = item.group || "Ungrouped";
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-col gap-4 text-white">
      <div className="w-full flex justify-between items-center px-4">
        <button className="h-8 flex justify-center items-center p-2 border border-white text-white font-medium rounded hover:scale-110">
          Active Session
        </button>
        <button className="cursor-pointer" onClick={() => setOpenForm(true)}>
          <AddNew />
        </button>
      </div>
      {Object.entries(groupedData).map(([key, value]) => (
        <GroupServer key={key} name={key} value={value} />
      ))}
      {openForm && (
        <ServerForm setOpenForm={setOpenForm} isEdit={true} isCreate={true} />
      )}
    </div>
  );
};

export default CommandHome;
