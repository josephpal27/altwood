"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const stepsData = [
    {
        id: 1,
        title: "Step 1",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/1.jpg",
    },
    {
        id: 2,
        title: "Step 2",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/2.jpg",
    },
    {
        id: 3,
        title: "Step 3",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/3.jpg",
    },
    {
        id: 4,
        title: "Step 4",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/4.jpg",
    },
    {
        id: 5,
        title: "Step 5",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/5.jpg",
    },
    {
        id: 6,
        title: "Step 6",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/1.jpg",
    },
    {
        id: 7,
        title: "Step 7",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/2.jpg",
    },
    {
        id: 8,
        title: "Step 8",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/3.jpg",
    },
    {
        id: 9,
        title: "Step 9",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/4.jpg",
    },
    {
        id: 10,
        title: "Step 10",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
        image: "/images/5.jpg",
    },
]

const TenSteps = () => {

    const [current, setCurrent] = useState(stepsData[0].image);
    const [next, setNext] = useState(null);

    const handleHover = (img) => {
        if (img === current) return;
        setCurrent(img);
    };

    return (
        <>
            <section className="p-0 relative overflow-hidden mt-[5.5rem] bg-black">

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
            </section>
        </>
    )
}

export default TenSteps
