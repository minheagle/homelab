import React from "react";
import { useNavigate, useParams, Link, Outlet } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import ROUTER from "../../constants/routes";
import { RootState } from "../../redux/store";
import { closeSession } from "../../redux/slices/commands";
import { Session } from "../../types/commands/ServerTypes";

const TerminalPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { serverId } = useParams({ strict: false });
  const { activeSession } = useSelector((state: RootState) => state.Commands);

  const handleActiveOnClick = (id: string | number) => {
    navigate({
      to: ROUTER.COMMAND.TERMINAL,
      params: { serverId: id },
    });
  };

  const handleCloseOnClick = (item: Session) => {
    dispatch(closeSession(item));
  };

  return (
    <div className="w-full h-full border-l border-t border-white rounded">
      <div className="w-full h-8 flex justify-start items-center border-b border-white">
        <Link
          to={ROUTER.COMMAND.ROOT}
          className="w-8 h-8 flex justify-center items-center cursor-pointer p-1 hover:scale-110"
        >
          <IoMdArrowRoundBack className="text-xl" />
        </Link>
        {activeSession.data.map((item) => (
          <div
            key={item.id}
            className={`w-36 h-8 flex justify-end items-center gap-2 border-x border-white pl-2 font-medium ${
              serverId == item.id ? "bg-white text-black" : ""
            }`}
          >
            <div
              onClick={() => handleActiveOnClick(item.id)}
              className="flex-1 cursor-pointer"
            >
              {item.name}
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleCloseOnClick(item)}
            >
              <FaWindowClose className="text-red-500 text-2xl" />
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default TerminalPage;
