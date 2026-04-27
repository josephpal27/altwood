"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    const pathname = usePathname();

    // Scroll Hide/Show Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 80) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // Body Scroll Lock on Mob
    useEffect(() => {
        if (open) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`; // prevent shift
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            document.body.style.touchAction = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            document.body.style.touchAction = "auto";
        };
    }, [open]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/services" },
        { name: "Contact Us", href: "/products" },
    ];

    return (
        <>
            <nav className={`
                fixed left-0 w-full z-50 transition-transform duration-300 
                px-[7%]
                top-[1rem]
                ${showNav ? "translate-y-0" : "-translate-y-[150%]"
                }`}>
                <div className="
                    bg-white rounded-full flex items-center justify-between shadow-md relative
                    p-[0.8rem]
                ">

                    {/* Left Logo */}
                    <Link href="/">
                        <img src="/images/logo.png" alt="logo" className="
                            w-[80px] 
                            ml-[0.5rem]
                        " />
                    </Link>

                    {/* Center */}
                    <ul className="
                        hidden md:flex absolute left-1/2 -translate-x-1/2 items-center 
                        gap-[2.5rem]
                    ">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <li key={link.name} className="relative group">
                                    <Link href={link.href} className="relative text-black font-[550]">
                                        {link.name}

                                        {/* Underline */}
                                        <span
                                            className={`absolute left-1/2 -translate-x-1/2 bg-black transition-all duration-300 rounded-full h-[1.5px] 
                                            bottom-[-7px] 
                                            ${isActive ? "w-[50%]" : "w-0 group-hover:w-[80%]"}
                                        `}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Button*/}
                    <div className="hidden md:block z-10">
                        <Button label="Explore Wudon" url="/wudon" />
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden z-10">
                        <button onClick={() => setOpen(true)}>
                            <FiMenu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div className={`
                fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 
                ${open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <div className={`
                fixed top-0 left-0 h-full w-[70%] max-w-sm bg-[#f7f7f7] z-50 shadow-lg transform transition-transform duration-500 
                ${open ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <img src="/images/logo.png" className="w-[80px]" />
                    <button onClick={() => setOpen(false)}>
                        <FiX size={24} />
                    </button>
                </div>

                <ul className="flex flex-col gap-[1.3rem] p-[1rem] mt-[1rem]">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setOpen(false)} className="font-[550] text-black">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="p-[1rem] mt-[1rem]">
                    <Button label="Download Brochure" url="/" />
                </div>
            </div>
        </>
    );
};

export default Navbar;