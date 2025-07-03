import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";

interface IHeaderProps {
  sidebarDesktopOpen: string | boolean | undefined;
  sidebarMobileOpen: string | boolean | undefined;
  setSidebarMobileOpen: (arg0: boolean) => void;
}


const Header: React.FC<IHeaderProps> = ({
  sidebarMobileOpen,
  setSidebarMobileOpen,
}) => {
  return (
    <header className="width-maker fixed top-0 z-50 bg-onHover/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-2 gap-3 relative">
        <div className="lg:hidden">
          <button
            onClick={() => setSidebarMobileOpen(!sidebarMobileOpen)}
            className="text-black hover:text-gray-300 p-1"
          >
            <IoMenuSharp size={24} />
          </button>
        </div>

        <div className="hidden lg:block" />
        <div className="flex-grow max-w-md relative">
          <input
            type="search"
            className="block w-full py-2 px-4 pr-3 border-border-outline border-[1px] rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-gray-600"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center gap-4">
          <FaUserCircle size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
