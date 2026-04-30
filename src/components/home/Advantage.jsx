"use client"

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"

const advantageData = [
    {
        id: 1,
        title: "Five Decades of Expertise",
        desc: "Backed by 50 years of manufacturing, every panel reflects generations of refinement and trust.",
        image: "/images/icons/1.svg",
        url: "/products",
    },
    {
        id: 2,
        title: "Engineered Strength",
        desc: "Precision-crafted using advanced processes for superior moisture resistance and lasting performance.",
        image: "/images/icons/2.svg",
        url: "/products",
    },
    {
        id: 3,
        title: "Diversified Solutions",
        desc: "From structural plywood to custom MDF panels, tailored solutions for every unique architectural vision.",
        image: "/images/icons/3.svg",
        url: "/products",
    },
]

const Advantage = () => {
    return (
        <>
            <section className="
                bg-[url('/images/banners/advantage-bg.jpg')] bg-cover bg-center relative
                mt-[5rem]
                pb-[4.5rem]
            ">

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#272727] bg-opacity-70 w-full h-full"></div>

                {/* Head */}
                <div className="flex flex-col items-center relative">
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1.1rem] py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                        <span className="text-[1rem] text-white font-[500]">The Altwood Advantage</span>
                    </div>
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-[1.5rem] text-white text-center"
                    >
                        Elevating Spaces with Engineered Precision
                    </motion.h3>
                </div>

                {/* Cards */}
                <div className="
                    flex justify-between flex-wrap relative
                    mt-[3rem]
                ">
                    {advantageData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-[31.5%] overflow-hidden rounded-md bg-[#313131] 
                                p-[2.5rem] 
                                hover:translate-y-[-7px] transition duration-300
                            ">
                                <img src={item.image} alt={item.title} loading="lazy" className="
                                    w-[22%]
                                " />
                                <span className="
                                    text-white block
                                    text-[1.4rem] font-[700]
                                    mt-[2.5rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[#ededed]
                                    mt-[1rem]
                                ">
                                    {item.desc}
                                </p>
                                <div className="
                                    border-t border-gray-600 
                                    mt-[1.5rem] 
                                    pt-[1.5rem]
                                ">
                                    <Link href={item.url} className="
                                    text-white w-max group
                                    flex items-center gap-[0.5rem]
                                ">
                                        View Products
                                        <MdArrowOutward className="
                                        text-[1.2rem] 
                                        group-hover:rotate-45 transition duration-500
                                    "/>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="relative flex justify-center items-center mt-[3.5rem]">
                    {/* Icon will add here */}
                    <p className="text-center text-white flex items-center gap-[0.6rem]">
                        Let's bring your vision to life.
                        <Link href="/contact" className="text-white underline">Get a Free Quote</Link>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Advantage
