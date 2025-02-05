import { useState } from "react";
import AddNew from "../../components/utils/AddNew";
import ServerForm from "../../components/commands/ServerForm";
import GroupServer from "../../components/commands/GroupServer";

const data = [
  {
    id: 1,
    group: "",
    name: "Server 1",
    type: "ubuntu",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 2,
    group: "",
    name: "Server 2",
    type: "debian",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 3,
    group: "",
    name: "Server 3",
    type: "centos",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 4,
    group: "Group 1",
    name: "Server 4",
    type: "fedora",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 5,
    group: "Group 1",
    name: "Server 5",
    type: "other",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 6,
    group: "Group 1",
    name: "Server 6",
    type: "ubuntu",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 7,
    group: "Group 1",
    name: "Server 7",
    type: "fedora",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 8,
    group: "Group 1",
    name: "Server 8",
    type: "other",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
  {
    id: 9,
    group: "Group 1",
    name: "Server 9",
    type: "ubuntu",
    host: "172.31.35.2",
    port: 22,
    user: "sargon",
    password: "123456",
  },
];

const CommandHome = () => {
  const [openForm, setOpenForm] = useState(false);

  const groupedData = data.reduce((acc, item) => {
    const groupKey = item.group || "Ungrouped";
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-col gap-4 text-white">
      <div className="w-full flex justify-end items-center pr-4">
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
