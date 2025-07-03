export interface SidebarNavLinkType {
    name: string;
    to: string;
    icon: any;
}

export interface ISidebarProps {
    sidebarDesktopOpen: boolean;
    setSidebarDesktopOpen: (arg: boolean) => void;
    sidebarMobileOpen: boolean;
    setSidebarMobileOpen: (arg: boolean) => void;
}
export interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string | ((props: { isActive: boolean }) => string);
    onClick?: () => void;
}


export interface Product {
    image: string;
    name: string;
    description: string;
    price: number;
    rating: number;
}