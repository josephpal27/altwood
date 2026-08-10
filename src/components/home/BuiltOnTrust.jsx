"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import { stepsData } from '@/data/stepsData';

const BuiltOnTrust = () => {

    const [current, setCurrent] = useState(stepsData[0].image);

    const handleHover = (img) => {
        if (img === current) return;
        setCurrent(img);
    };

    return (
        <>
            <section className="p-0 mt-[3rem] sm:mt-[3.5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]">

                <div className="px-[1rem] sm:px-[7%] flex flex-col items-center">
                    <motion.h5
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=""
                    >
                        Built On Trust
                    </motion.h5>
                    <p className="text-center w-full lg:w-[80%] mt-[1rem]">
                        Altwood blends five decades of heritage with modern innovation to create premium, personalised wood solutions that enrich any space. Quality craftsmanship meets accessible pricing, making timeless beauty affordable for all.
                    </p>
                </div>

                <div className="relative overflow-hidden bg-black mt-[1.7rem] sm:mt-[2rem] lg:mt-[2.3rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
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
                        flex justify-between flex-wrap z-20 relative h-[auto] lg:h-[100dvh] bg-[#00000072]
                    ">
                        {stepsData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="
                                    w-[50%] lg:w-[20%] border-[#ededed3c] border-b-[1px] border-r-[1px]   
                                    flex flex-col justify-center items-center text-center p-[1rem]   
                                "
                                    onMouseEnter={() => handleHover(item.image)}
                                >
                                    <span className="
                                        text-white text-[1.15rem] sm:text-[1.25rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-[600] font-clash
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="text-white mt-[0.4rem] lg:mt-[0.7rem] text-[0.85rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]"
                                        dangerouslySetInnerHTML={{__html: item.desc}}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default BuiltOnTrust
