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
                bg-[url('/images/banners/black-bg-1.avif')] bg-cover bg-center relative
                mt-[3rem] sm:mt-[3.5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
                pb-[2rem] sm:pb-[2.5rem] lg:pb-[3.5rem] xl:pb-[4rem] 2xl:pb-[4.5rem]
            ">

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#272727] bg-opacity-70 w-full h-full"></div>

                {/* Head */}
                <div className="flex flex-col items-center relative">
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem] 
                        py-[0.3rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.26rem] 2xl:py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                        <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-white font-[500]">
                            The Altwood Advantage
                        </span>
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
                    mt-[2rem] sm:mt-[1.5rem] lg:mt-[2.3rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {advantageData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-full lg:w-[31.5%] overflow-hidden rounded-md bg-[#313131] 
                                p-[1.2rem] sm:p-[1.5rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                                hover:translate-y-[-7px] transition duration-300
                                mb-[1.2rem] lg:mb-0
                            ">
                                <img src={item.image} alt={item.title} loading="lazy" className="
                                    w-[22%]
                                " />
                                <span className="
                                    text-white block
                                    text-[1.3rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-[700]
                                    mt-[1.5rem] sm:mt-[1.7rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[#ededed]
                                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                ">
                                    {item.desc}
                                </p>
                                <div className="
                                    border-t border-gray-600 
                                    mt-[1.2rem] sm:mt-[1.4rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                                    pt-[1.2rem] sm:pt-[1.4rem] lg:pt-[1.3rem] xl:pt-[1.4rem] 2xl:pt-[1.5rem]
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
                <div className="relative flex justify-center items-center mt-[1rem] sm:mt-[1.5rem] lg:mt-[3.1rem] xl:mt-[3.3rem] 2xl:mt-[3.5rem]">
                    {/* Icon will add here */}
                    <p className="text-center text-white flex items-center flex-col lg:flex-row gap-[0.6rem]">
                        Let's bring your vision to life.
                        <Link href="/contact" className="text-white underline">Get a Free Quote</Link>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Advantage
