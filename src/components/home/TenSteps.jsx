"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const stepsData = [
    {
        id: 1,
        title: "Step 1",
        desc: "Responsible timber sourcing",
        image: "/images/1.jpg",
    },
    {
        id: 2,
        title: "Step 2",
        desc: "Log conditioning and seasoning",
        image: "/images/2.jpg",
    },
    {
        id: 3,
        title: "Step 3",
        desc: "Precision log peeling",
        image: "/images/3.jpg",
    },
    {
        id: 4,
        title: "Step 4",
        desc: "Log drying and moisture control",
        image: "/images/4.jpg",
    },
    {
        id: 5,
        title: "Step 5",
        desc: "Log grading and selection",
        image: "/images/5.jpg",
    },
    {
        id: 6,
        title: "Step 6",
        desc: "Adhesive application",
        image: "/images/1.jpg",
    },
    {
        id: 7,
        title: "Step 7",
        desc: "Layer assembly and cross graining",
        image: "/images/2.jpg",
    },
    {
        id: 8,
        title: "Step 8",
        desc: "Hot pressing under controlled pressure",
        image: "/images/3.jpg",
    },
    {
        id: 9,
        title: "Step 9",
        desc: "Finishing, sanding and edge calibration",
        image: "/images/4.jpg",
    },
    {
        id: 10,
        title: "Step 10",
        desc: "Quality inspection",
        image: "/images/5.jpg",
    },
]

const TenSteps = () => {

    const [current, setCurrent] = useState(stepsData[0].image);

    const handleHover = (img) => {
        if (img === current) return;
        setCurrent(img);
    };

    return (
        <>
            <section className="p-0 mt-[5rem]">

                <div className="px-[7%] flex flex-col items-center">
                    <h5>
                        Built On Trust
                    </h5>
                    <p className="text-center w-[55%] mt-[1rem]">
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
                        flex justify-between flex-wrap z-20 relative h-[100dvh]
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
                                    <span className="text-white text-[1.3rem] font-[600]">
                                        {item.title}
                                    </span>
                                    <p className="text-white mt-[0.7rem] text-[1rem]">
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

export default TenSteps
