import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import Header from "../global/Header";
import Navbar from "../components/HomeComponents/Navbar";

const DefaultLayout = () => {
    const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true);
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);

    const location = useLocation();

    const authRoutes = ["/signin", "/signup", "/forgot-password", "/otp-verify"];
    const isAuthRoute = authRoutes.includes(location.pathname);

    const isHomePage = location.pathname === "/";

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

    if (isAuthRoute) {
        // 💥 Auth layout: no sidebar, no header
        return (
            <main className="h-full w-full">
                <Outlet />
            </main>
        );
    }

    if (isHomePage) {
        // 💥 Home layout: Navbar only
        return (
            <div className="h-full w-full">
                <Navbar />
                <main className="h-full w-full">
                    <Outlet />
                </main>
            </div>
        );
    }

    // 💥 Dashboard layout: sidebar + header
    return (
        <div className="relative overflow-x-hidden">
            <div className="flex min-h-screen z-30">
                <Sidebar
                    sidebarDesktopOpen={sidebarDesktopOpen}
                    setSidebarDesktopOpen={setSidebarDesktopOpen}
                    sidebarMobileOpen={sidebarMobileOpen}
                    setSidebarMobileOpen={setSidebarMobileOpen}
                />

                <div className="relative flex flex-1 flex-col lg:ml-64">
                    <Header
                        sidebarDesktopOpen={sidebarDesktopOpen}
                        sidebarMobileOpen={sidebarMobileOpen}
                        setSidebarMobileOpen={setSidebarMobileOpen}
                    />

                    <main className="h-full w-full">
                        <div className="w-[95%] py-2 pt-16 mx-auto h-full">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
