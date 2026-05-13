"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const collectionData = [
    {
        title: "Film Faced",
        desc: "High density waterproof, BWP grade.",
        img: "/images/collection/film-faced.avif",
        url: "/products/film-faced",
    },
    {
        title: "Marine Grade",
        desc: "Marine Grade (IS: 710), BWP Grade, BWR Grade (IS: 303).",
        img: "/images/collection/marine-grade.avif",
        url: "/products/marine-grade",
    },
    {
        title: "BWP Grade",
        desc: "100% premium pine wood, BWP treatment (IS: 2202).",
        img: "/images/collection/bwp.avif",
        url: "/products/bwp-grade",
    },
    {
        title: "BWR Grade",
        desc: "Strong bonded core, moisture-resistant (IS: 1659).",
        img: "/images/collection/bwr.avif",
        url: "/products/bwr-grade",
    },
    {
        title: "Flush Door",
        desc: "High-density (650-800 KG/M³), termite & borer resistant.",
        img: "/images/collection/flush-door.avif",
        url: "/products/flush-door",
    },
    {
        title: "Block Board",
        desc: "Heavy-core density (>850 KG/M³), super moisture resistant.",
        img: "/images/collection/block-board.avif",
        url: "/products/block-board",
    },
];

const Collection = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="pt-[2rem] lg:pt-[4rem] overflow-hidden">
            <motion.h4
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center w-max mx-auto"
            >
                Premium Plywood <br className="block lg:hidden" /> Collection
            </motion.h4>

            {/* Row */}
            <div className="
                flex justify-between flex-wrap lg:flex-nowrap
                h-[auto] lg:h-[70dvh] 
                gap-[1rem] mt-[1.7rem] lg:mt-[3rem]
            ">
                {collectionData.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                        className={`
                            relative rounded-[15px] lg:rounded-[20px] overflow-hidden cursor-pointer
                            transition-all duration-500 ease-in-out
                            w-[47.5%] lg:w-auto 
                            h-[240px] lg:h-auto
                            ${active === index ? "lg:flex-[10]" : "lg:flex-[1.5]"}
                        `}
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className={`
                                w-full h-full object-cover
                                transition-transform duration-700
                                ${active === index ? "scale-100 lg:scale-102" : "scale-100"}
                            `}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                        {/* Content (always visible on mobile, hover-only on desktop) */}
                        <div className={`
                            absolute top-0 left-0 w-full h-full p-[0.7rem] lg:p-[2rem]
                            transition-all duration-300 z-10
                            flex justify-between items-end
                            ${active === index
                                ? "lg:opacity-100 lg:translate-y-0"
                                : "lg:opacity-0 lg:translate-y-10"
                            }
                        `}
                        >
                            <div className="w-full lg:w-[85%]">
                                <span className="text-[1.2rem] lg:text-[1.7rem] font-[700] text-white">
                                    {item.title}
                                </span>
                                <p className="opacity-90 text-white mt-[0.3rem] lg:mt-[0.5rem] lg:text-nowrap text-[0.65rem] sm:text-[1.1rem]">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="
                                absolute top-[0.6rem] right-[0.6rem] lg:relative
                            ">
                                <Link href={item.url}>
                                    <MdArrowOutward className="
                                        w-[25px] lg:w-[45px] 
                                        h-[25px] lg:h-[45px]
                                        rounded-full p-[0.3rem] lg:p-[0.5rem] hover:rotate-45 text-white transition duration-500
                                        bg-[#7d4c0a] hover:bg-[#114a27] 
                                    " />
                                </Link>
                            </div>
                        </div>

                        {/* Vertical Text (default state) */}
                        <div className={`
                            absolute inset-0 items-center justify-center uppercase
                            text-white text-[1.8rem] tracking-widest font-[700]
                            transition-all duration-500 hidden lg:flex
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

export default Collection;