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

const Services = () => {

    const [active, setActive] = useState(1); // default expanded

    return (
        <>
            <section className="">
                <h4 className="text-center">
                    Lorem ipsum dolor sit amet consectetur elit
                </h4>

                {/* Row */}
                <div className="flex h-[500px] gap-4 px-6">

                    {servicesData.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActive(index)}
                            className={`
              relative rounded-[20px] overflow-hidden cursor-pointer
              transition-all duration-500 ease-in-out
              ${active === index ? "flex-[5]" : "flex-[1]"}
            `}
                        >
                            {/* Image */}
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* Content */}
                            <div
                                className={`
                absolute bottom-0 left-0 w-full p-5 text-white
                transition-all duration-500
                ${active === index ? "opacity-100" : "opacity-0"}
              `}
                            >
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-sm opacity-80">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Vertical text (default state) */}
                            <div
                                className={`
                absolute inset-0 flex items-center justify-center
                text-white text-[14px] tracking-widest
                transition-all duration-500
                ${active === index ? "opacity-0" : "opacity-100"}
              `}
                                style={{ writingMode: "vertical-rl" }}
                            >
                                {item.title}
                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Services
