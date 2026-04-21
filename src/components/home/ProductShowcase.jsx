"use client";

import { useState } from "react";

const servicesData = [
    {
        title: "Shuttering Plywood",
        desc: "High density waterproof, BWP grade.",
        img: "/images/product-showcase/1.jpg",
    },
    {
        title: "Plywood",
        desc: "Marine Grade (IS: 710), BWP Grade, BWR Grade (IS: 303).",
        img: "/images/product-showcase/2.jpg",
    },
    {
        title: "Flush Doors",
        desc: "100% premium pine wood, BWP treatment (IS: 2202).",
        img: "/images/product-showcase/3.jpg",
    },
    {
        title: "Block Boards",
        desc: "Strong bonded core, moisture-resistant (IS: 1659).",
        img: "/images/product-showcase/4.jpg",
    },
    {
        title: "MDF",
        desc: "High-density (650-800 KG/M³), termite & borer resistant.",
        img: "/images/product-showcase/1.jpg",
    },
    {
        title: "HDHMR",
        desc: "Heavy-core density (>850 KG/M³), super moisture resistant.",
        img: "/images/product-showcase/2.jpg",
    },
];

const ProductShowcase = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="pt-[4rem]">
            <h4 className="text-center">
                Premium Interior Services
            </h4>

            {/* Row */}
            <div className="flex h-[70dvh] gap-[1rem] mt-[3.5rem]">
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
                            transition-all duration-300
                            ${active === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }
                        `}
                        >
                            <span className="text-[1.5rem] font-[600] text-white">
                                {item.title}
                            </span>
                            <p className="opacity-90 text-white mt-[0.5rem]">
                                {item.desc}
                            </p>
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
                            style={{ writingMode: "vertical-rl" }}
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