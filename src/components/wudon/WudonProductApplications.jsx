"use client"

import { useState } from 'react';
import { headingVariant } from "@/utils/animations"
import { motion, AnimatePresence } from "framer-motion";

const WudonProductApplications = ({ data }) => {

    const [current, setCurrent] = useState(data[0].image);

    const handleHover = (img) => {
        if (img === current) return;
        setCurrent(img);
    };

    return (
        <>
            <section className="p-0 mt-[5rem]">
                <div className="px-[7%]">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-max"
                    >
                        Applications
                    </motion.h3>
                </div>

                <div className="relative overflow-hidden bg-black mt-[2.5rem]">
                    {/* Background Image */}
                    <div className="absolute top-0 left-0 w-full h-full z-10">
                        <AnimatePresence mode="sync">
                            <motion.img
                                key={current}
                                src={current}
                                initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="
                        flex justify-between flex-wrap z-20 relative h-[100dvh]
                        bg-gradient-to-t from-black/90 via-black/30 to-transparent
                    ">
                        {data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="
                                    w-[33%] border-[#ededed3c] border-b-[1px] border-r-[1px]   
                                    flex flex-col justify-end text-center p-[2rem]   
                                "
                                    onMouseEnter={() => handleHover(item.image)}
                                >
                                    <span className="text-white text-[2rem] font-[500] text-clash">
                                        {item.title}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default WudonProductApplications
