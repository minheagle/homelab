import React from "react";
import { Link } from "@tanstack/react-router";
import { IoHome } from "react-icons/io5";
import { HiMiniCommandLine } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa";
import ROUTER from "../../constants/routes";

const Navigation = () => {
  return (
    <div className="w-16 p-1">
      <div className="w-full h-full flex flex-col items-center gap-4 text-white">
        <Link
          to={ROUTER.HOME.ROOT}
          className="p-2 [&.active]:text-black [&.active]:bg-white [&.active]:rounded"
        >
          <IoHome className="text-4xl" />
        </Link>
        <Link
          to={ROUTER.COMMAND.ROOT}
          className="p-2 [&.active]:text-black [&.active]:bg-white [&.active]:rounded"
        >
          <HiMiniCommandLine className="text-4xl" />
        </Link>
        <Link
          to={ROUTER.DATABASE.ROOT}
          className="p-2 [&.active]:text-black [&.active]:bg-white [&.active]:rounded"
        >
          <FaDatabase className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
