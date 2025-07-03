import { MdDashboard } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import product from "../assets/PNGs/image.png";
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
        image: product,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        rating: 4.5,
    },
    {
        image: product,
        name: "Smart Watch",
        description: "Water-resistant smart watch with fitness tracking features.",
        price: 129.99,
        rating: 4.2,
    },
    {
        image: product,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        rating: 4.5,
    },
    {
        image: product,
        name: "Smart Watch",
        description: "Water-resistant smart watch with fitness tracking features.",
        price: 129.99,
        rating: 4.2,
    },
    {
        image: product,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        rating: 4.5,
    },
    {
        image: product,
        name: "Smart Watch",
        description: "Water-resistant smart watch with fitness tracking features.",
        price: 129.99,
        rating: 4.2,
    },
    {
        image: product,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        rating: 4.5,
    },
    {
        image: product,
        name: "Smart Watch",
        description: "Water-resistant smart watch with fitness tracking features.",
        price: 129.99,
        rating: 4.2,
    },
];