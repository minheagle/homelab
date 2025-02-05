import { Outlet } from "@tanstack/react-router";
import Navigation from "../components/root/Navigation";
import Header from "../components/root/Header";

const RootLayout = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-black text-white">
      <div className="">
        <Header />
      </div>
      <div className="flex-1 min-h-full flex">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
