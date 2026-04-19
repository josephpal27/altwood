"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    const pathname = usePathname();

    // 🔥 Scroll Hide/Show Logic
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

    // 🔥 BODY SCROLL LOCK (WITH SHIFT FIX)
    useEffect(() => {
        if (open) {
            const scrollBarWidth =
                window.innerWidth - document.documentElement.clientWidth;

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
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
    ];

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={`fixed top-4 left-0 w-full z-50 px-4 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-[150%]"
                    }`}
            >
                <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-md relative">

                    {/* LEFT - LOGO */}
                    <img src="/images/logo.png" alt="logo" className="h-10 w-auto z-10" />

                    {/* CENTER */}
                    <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-gray-800 font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <li key={link.name} className="relative group">
                                    <Link href={link.href} className="relative">
                                        {link.name}

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[2px] bg-black transition-all duration-300 ${isActive
                                                    ? "w-[50%]"
                                                    : "w-0 group-hover:w-[80%]"
                                                }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* RIGHT BUTTON */}
                    <div className="hidden md:block z-10">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-yellow-500 text-white px-5 py-2 rounded-full font-medium shadow hover:opacity-90 transition">
                            Get in Touch <FiArrowUpRight />
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div className="md:hidden z-10">
                        <button onClick={() => setOpen(true)}>
                            <FiMenu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <div
                className={`fixed top-0 left-0 h-full w-[70%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <img src="/images/logo.png" className="h-8" />
                    <button onClick={() => setOpen(false)}>
                        <FiX size={24} />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="p-6">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-yellow-500 text-white px-5 py-3 rounded-full font-medium">
                        Get in Touch <FiArrowUpRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;