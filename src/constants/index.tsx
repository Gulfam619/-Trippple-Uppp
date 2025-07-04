import { MdDashboard } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import type { Product, SidebarNavLinkType } from "../utils/types";

export const navLinks: SidebarNavLinkType[] = [
    {
        name: "Dashboard",
        to: "/",
        icon: <MdDashboard size={20} />,
    },
    {
        name: "Page-1",
        to: "/",
        icon: <AiFillDatabase size={20} />,
    },
    {
        name: "Page-2",
        to: "/",
        icon: <AiFillDatabase size={20} />,
    },
    {
        name: "Page 3 ",
        to: "/",
        icon: <AiFillDatabase size={20} />,
    },
    {
        name: "Page 4",
        to: "/",
        icon: <AiFillDatabase size={20} />,
    },

    {
        name: "Page 5",
        to: "/",
        icon: <AiFillDatabase size={20} />,
    },
    {
        name: "Profile",
        to: "/",
        icon: <FaUser size={20} />,
    },
];


export const dummyProducts: Product[] = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        sales: 1250
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        description: "Advanced fitness tracking with heart rate monitoring",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        sales: 890
    },
    {
        id: 3,
        name: "Portable Laptop Stand",
        description: "Ergonomic aluminum laptop stand for better posture",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        sales: 2100
    },
    {
        id: 4,
        name: "Wireless Charging Pad",
        description: "Fast wireless charging for all Qi-enabled devices",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
        sales: 1680
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 360-degree sound",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        sales: 1450
    },
    {
        id: 6,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with 4K HDMI and fast charging",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        sales: 980
    }
];

export const categories = [
    "All Categories",
    "Electronics",
    "Accessories",
    "Fitness",
    "Audio",
    "Computing"
];