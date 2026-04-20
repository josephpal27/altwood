"use client";

import { useState } from "react";

const servicesData = [
    {
        title: "MODULAR KITCHEN",
        desc: "Premium modern kitchen design",
        img: "/images/services/1.jpg",
    },
    {
        title: "CUSTOM FURNITURE",
        desc: "Handcrafted furniture solutions",
        img: "/images/services/2.jpg",
    },
    {
        title: "WOODEN STAIRS",
        desc: "Elegant staircase design",
        img: "/images/services/3.jpg",
    },
    {
        title: "WOOD FLOORING",
        desc: "Luxury wooden flooring",
        img: "/images/services/4.jpg",
    },
    {
        title: "WARDROBES",
        desc: "Smart storage solutions",
        img: "/images/services/1.jpg",
    },
    {
        title: "INTERIOR DESIGN",
        desc: "Complete home interiors",
        img: "/images/services/2.jpg",
    },
];

const ProductShowcase = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="">
            <h4 className="text-center">
                Premium Interior Services
            </h4>

            {/* Row */}
            <div className="flex">
                {servicesData.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                        className={`
              relative rounded-[20px] overflow-hidden cursor-pointer
              transition-all duration-500 ease-in-out
              ${active === index ? "flex-[5]" : "flex-[1.5]"}
            `}
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className={`
                w-full h-full object-cover
                transition-transform duration-700
                ${active === index ? "scale-110" : "scale-100"}
              `}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                        {/* Content (visible on hover) */}
                        <div
                            className={`
                absolute bottom-0 left-0 w-full p-6 text-white
                transition-all duration-500
                ${active === index
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }
              `}
                        >
                            <h3 className="text-xl font-semibold mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm opacity-80">
                                {item.desc}
                            </p>
                        </div>

                        {/* Vertical Text (default state) */}
                        <div
                            className={`
                absolute inset-0 flex items-center justify-center
                text-white text-[14px] tracking-widest font-medium
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