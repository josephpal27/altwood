"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import { GoArrowUpRight } from "react-icons/go";
import GlareImage from "../GlareImage";

const WudonProductFeatures = ({ data, reverse }) => {
    return (
        <>
            <section>

                {/* Head */}
                <div className="flex flex-col items-center">
                    
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=""
                    >
                        {data.title}
                    </motion.h2>

                    <p className="w-[50%] text-center mt-[1rem]">
                        {data.description}
                    </p>
                </div>

                {/* Content Row */}
                <div className={`
                    flex justify-between flex-wrap mt-[3rem] 
                    ${reverse ? "flex-row-reverse" : ""}
                `}>
                    <div className="w-[48%]">
                        <span className="text-[2rem] font-clash font-[600] text-[#1d1d1d]">
                            Key Features :
                        </span>
                        <div className="mt-[2rem]">
                            {data.features.map((item) => {
                                return (
                                    <p key={item.id} className="
                                        flex items-center gap-[0.5rem]
                                        mb-[1.5rem]
                                        underline underline-offset-[8px]
                                    ">
                                        <GoArrowUpRight className="
                                            flex-shrink-0 text-[1.2rem]
                                        " />
                                        {item.para}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <GlareImage
                            src={data.image}
                            alt={data.title}
                            className="w-full rounded-md"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default WudonProductFeatures
