"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const servicesData = [
    {
        title: "Film Faced",
        desc: "High density waterproof, BWP grade.",
        img: "/images/product-showcase/1.jpg",
        url: "/products/film-faced",
    },
    {
        title: "Marine Grade",
        desc: "Marine Grade (IS: 710), BWP Grade, BWR Grade (IS: 303).",
        img: "/images/product-showcase/2.jpg",
        url: "/products/marine-grade",
    },
    {
        title: "BWP Grade",
        desc: "100% premium pine wood, BWP treatment (IS: 2202).",
        img: "/images/product-showcase/3.jpg",
        url: "/products/bwp-grade",
    },
    {
        title: "BWR Grade",
        desc: "Strong bonded core, moisture-resistant (IS: 1659).",
        img: "/images/product-showcase/4.jpg",
        url: "/products/bwr-grade",
    },
    {
        title: "Flush Door",
        desc: "High-density (650-800 KG/M³), termite & borer resistant.",
        img: "/images/product-showcase/1.jpg",
        url: "/products/flush-door",
    },
    {
        title: "Block Board",
        desc: "Heavy-core density (>850 KG/M³), super moisture resistant.",
        img: "/images/product-showcase/2.jpg",
        url: "/products/block-board",
    },
];

const ProductShowcase = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="pt-[4rem]">
            <motion.h4
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
            >
                Premium Plywood Collection
            </motion.h4>

            {/* Row */}
            <div className="flex h-[70dvh] gap-[1rem] mt-[3rem]">
                {servicesData.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                        className={`
                            relative rounded-[20px] overflow-hidden cursor-pointer
                            transition-all duration-500 ease-in-out
                            ${active === index ? "flex-[10]" : "flex-[1.5]"}
                        `}
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className={`
                                w-full h-full object-cover
                                transition-transform duration-700
                                ${active === index ? "scale-105" : "scale-100"}
                            `}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                        {/* Content (visible on hover) */}
                        <div className={`
                            absolute bottom-0 left-0 w-full p-[2rem]
                            transition-all duration-300 z-10
                            flex justify-between items-end
                            ${active === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }
                        `}
                        >
                            <div className="w-[85%]">
                                <span className="text-[1.7rem] font-[700] text-white">
                                    {item.title}
                                </span>
                                <p className="opacity-90 text-white mt-[0.5rem] text-nowrap">
                                    {item.desc}
                                </p>
                            </div>
                            <div>
                                <Link href={item.url}>
                                    <MdArrowOutward className="
                                        w-[45px] h-[45px] 
                                        rounded-full p-[0.5rem] hover:rotate-45 text-white transition duration-500
                                        bg-[#114a27] hover:bg-[#7d4c0a]
                                    " />
                                </Link>
                            </div>
                        </div>

                        {/* Vertical Text (default state) */}
                        <div className={`
                            absolute inset-0 flex items-center justify-center uppercase
                            text-white text-[1.8rem] tracking-widest font-[700]
                            transition-all duration-500
                            ${active === index
                                ? "opacity-0 scale-90"
                                : "opacity-100 scale-100"
                            }
                        `}
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;