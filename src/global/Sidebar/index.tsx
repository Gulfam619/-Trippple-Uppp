import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ISidebarProps, NavLinkProps } from "../../utils/types";
import { navLinks } from "../../constants";
import logo from "../../assets/PNGs/logo.png"
const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const finalClassName = typeof className === "function" ? className({ isActive }) : className;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (to === "#") {
      e.preventDefault();
    } else {
      onClick && onClick();
    }
  };

  return (
    <Link to={to} className={finalClassName} onClick={handleClick}>
      {children}
    </Link>
  );
};

const Sidebar: React.FC<ISidebarProps> = ({
  sidebarDesktopOpen,
  sidebarMobileOpen,
  setSidebarMobileOpen,
}) => {
  const sidebar = useRef<HTMLDivElement>(null);

  const handleSidebarItemClick = (path: string): void => {
    console.log(path)
    setSidebarMobileOpen(false);
  };

  return (
    <div className="size-screen">
      <aside
        ref={sidebar}
        data-sidebar="true"
        className={`bg-dark-blue fixed left-0 top-0 z-[999] flex h-screen flex-col border-r border-border-outline overflow-hidden transition-all duration-300
          ${window.innerWidth >= 1024
            ? sidebarDesktopOpen
              ? "w-64"
              : "w-0"
            : sidebarMobileOpen
              ? "w-64 translate-x-0"
              : "-translate-x-full w-64"
          }`}
      >
        <div className="flex items-center gap-2 pb-8">
          <NavLink to="/" onClick={() => handleSidebarItemClick("/")}>
            <div className="flex items-center ">
              <img src={logo} alt="Logo" className="object-cover" />
            </div>
          </NavLink>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto">
          <nav className="mt-2">
            <div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      onClick={() => handleSidebarItemClick(link.to)}
                      className=
                      "text-gray-400 hover:text-gray-300 px-4 py-2.5  flex items-center gap-3"

                    >
                      <span className="w-5 h-5">{link.icon}</span>
                      <span className="text-lg">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside >
    </div >
  );
};

export default Sidebar;
