"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { headingVariant } from "@/utils/animations"

const stepsData = [
    {
        id: 1,
        title: "Step 1",
        desc: "Responsible timber sourcing",
        image: "/images/built-on-trust/1.avif",
    },
    {
        id: 2,
        title: "Step 2",
        desc: "Log conditioning and seasoning",
        image: "/images/built-on-trust/2.avif",
    },
    {
        id: 3,
        title: "Step 3",
        desc: "Precision log peeling",
        image: "/images/built-on-trust/3.avif",
    },
    {
        id: 4,
        title: "Step 4",
        desc: "Log drying and moisture control",
        image: "/images/built-on-trust/4.avif",
    },
    {
        id: 5,
        title: "Step 5",
        desc: "Log grading and selection",
        image: "/images/built-on-trust/5.avif",
    },
    {
        id: 6,
        title: "Step 6",
        desc: "Adhesive application",
        image: "/images/built-on-trust/6.avif",
    },
    {
        id: 7,
        title: "Step 7",
        desc: "Layer assembly and cross graining",
        image: "/images/built-on-trust/7.avif",
    },
    {
        id: 8,
        title: "Step 8",
        desc: "Hot pressing under controlled pressure",
        image: "/images/built-on-trust/8.avif",
    },
    {
        id: 9,
        title: "Step 9",
        desc: "Finishing, sanding and edge calibration",
        image: "/images/built-on-trust/9.avif",
    },
    {
        id: 10,
        title: "Step 10",
        desc: "Quality inspection",
        image: "/images/built-on-trust/10.avif",
    },
]

const BuiltOnTrust = () => {

    const [current, setCurrent] = useState(stepsData[0].image);

    const handleHover = (img) => {
        if (img === current) return;
        setCurrent(img);
    };

    return (
        <>
            <section className="p-0 mt-[5rem]">

                <div className="px-[7%] flex flex-col items-center">
                    <motion.h5
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=""
                    >
                        Built On Trust
                    </motion.h5>
                    <p className="text-center w-[80%] mt-[1rem]">
                        Altwood blends five decades of heritage with modern innovation to create premium, personalised wood solutions that enrich any space. Quality craftsmanship meets accessible pricing, making timeless beauty affordable for all.
                    </p>
                </div>

                <div className="relative overflow-hidden bg-black mt-[3rem]">
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
                        flex justify-between flex-wrap z-20 relative h-[100dvh] bg-[#0000005d]
                    ">
                        {stepsData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="
                                    w-[20%] border-[#ededed3c] border-b-[1px] border-r-[1px]   
                                    flex flex-col justify-center items-center text-center p-[1rem]   
                                "
                                    onMouseEnter={() => handleHover(item.image)}
                                >
                                    <span className="text-white text-[1.3rem] font-[600] font-clash">
                                        {item.title}
                                    </span>
                                    <p className="text-white mt-[0.7rem] text-[1.1rem]">
                                        {item.desc}
                                    </p>
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
