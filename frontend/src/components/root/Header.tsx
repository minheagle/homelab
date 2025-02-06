import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut, IoInformationCircle } from "react-icons/io5";
import ROUTER from "../../constants/routes";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const menuRef = useRef(null);
  const [isOpenDropdown, setIsOpenDropdown] = useClickOutside(menuRef);

  return (
    <div className="w-full h-16 flex justify-between item-center text-white">
      <div className="flex justify-center items-center text-2xl font-medium px-4">
        <Link to={ROUTER.HOME.ROOT}>Homelab</Link>
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="relative" ref={menuRef}>
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            <FaUserAlt className="text-2xl text-white" />
          </button>
          {isOpenDropdown && (
            <div className="absolute top-8 right-0 p-2 border border-white bg-black rounded z-50">
              <button className="cursor-pointer w-full flex justify-start items-center gap-2 px-2 py-1 rounded hover:bg-white hover:text-black">
                <IoInformationCircle className="text-3xl" />
                <p className="font-medium">Information</p>
              </button>
              <button className="cursor-pointer w-full flex justify-start items-center gap-2 px-2 py-1 rounded hover:bg-white hover:text-black">
                <IoLogOut className="text-3xl" />
                <p className="font-medium">Logout</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
