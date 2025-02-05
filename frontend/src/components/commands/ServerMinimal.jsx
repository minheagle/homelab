import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { CgMoreR } from "react-icons/cg";
import ServerType from "./ServerType";
import ServerForm from "./ServerForm";
import DeleteModal from "./DeleteModal";
import useClickOutside from "../../hooks/useClickOutside";
import ROUTER from "../../constants/routes";

const ServerMinimal = ({ data }) => {
  const menuRef = useRef(null);
  const [isOpenDropdown, setIsOpenDropdown] = useClickOutside(menuRef);
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <div className="w-full h-full flex border border-white rounded p-2 relative">
      <div className="w-12 h-12 flex justify-center items-center">
        <ServerType type={data?.type} size={"4xl"} />
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="font-medium">{data?.name}</div>
        <div className="relative" ref={menuRef}>
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenDropdown((prev) => !prev)}
            aria-label="More options"
          >
            <CgMoreR className="text-2xl" />
          </button>

          {/* Dropdown menu */}
          {isOpenDropdown && (
            <div className="absolute right-0 mt-1 w-32 bg-black shadow-lg rounded-lg border border-gray-300 z-50">
              <ul className="text-white font-medium p-1">
                <li
                  className="px-4 py-2 hover:bg-gray-100 hover:text-gray-700 hover:rounded cursor-pointer"
                  onClick={() => console.log("Connect clicked")}
                >
                  <Link
                    to={ROUTER.COMMAND.TERMINAL}
                    params={{ serverId: data?.id }}
                  >
                    Connect
                  </Link>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 hover:text-gray-700 hover:rounded cursor-pointer"
                  onClick={() => setIsOpenView(true)}
                >
                  View
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 hover:text-gray-700 hover:rounded cursor-pointer"
                  onClick={() => setIsOpenEdit(true)}
                >
                  Edit
                </li>
                <li
                  className="px-4 py-2 hover:bg-red-100 hover:rounded text-red-500 cursor-pointer"
                  onClick={() => setIsOpenDelete(true)}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* View Modal */}
        {isOpenView && (
          <ServerForm data={data} setOpenForm={setIsOpenView} isEdit={false} />
        )}

        {/* Edit Modal */}
        {isOpenEdit && <ServerForm data={data} setOpenForm={setIsOpenEdit} />}

        {/* Delete Modal */}
        {isOpenDelete && <DeleteModal setOpenForm={setIsOpenDelete} />}
      </div>
    </div>
  );
};

export default ServerMinimal;
