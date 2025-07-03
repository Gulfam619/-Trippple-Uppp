import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import Header from "../global/Header";

const DefaultLayout = () => {
    const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true);
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);

    const location = useLocation();

    // Auth routes where we want to hide header and sidebar
    const authRoutes = ["/signin", "/signup", "/forgot-password", "/otp-verify"];
    const hideSidebarAndHeader = authRoutes.includes(location.pathname);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarDesktopOpen(true);
                setSidebarMobileOpen(false);
            } else {
                setSidebarDesktopOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                sidebarMobileOpen &&
                !target.closest('[data-sidebar="true"]') &&
                !target.closest('[data-menu-button="true"]')
            ) {
                setSidebarMobileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [sidebarMobileOpen]);

    return (
        <div className="relative overflow-x-hidden">
            <div className={`flex min-h-screen z-30 ${hideSidebarAndHeader ? "flex-col" : ""}`}>
                {!hideSidebarAndHeader && (
                    <Sidebar
                        sidebarDesktopOpen={sidebarDesktopOpen}
                        setSidebarDesktopOpen={setSidebarDesktopOpen}
                        sidebarMobileOpen={sidebarMobileOpen}
                        setSidebarMobileOpen={setSidebarMobileOpen}
                    />
                )}

                <div className={`relative flex flex-1 flex-col ${!hideSidebarAndHeader ? "lg:ml-64" : ""}`}>
                    {!hideSidebarAndHeader && (
                        <Header
                            sidebarDesktopOpen={sidebarDesktopOpen}
                            sidebarMobileOpen={sidebarMobileOpen}
                            setSidebarMobileOpen={setSidebarMobileOpen}
                        />
                    )}

                    <main className="h-full w-full">
                        <div className={` ${hideSidebarAndHeader ? "w-full" : "w-[95%] py-2  pt-16"} h-full  mx-auto`}>
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
