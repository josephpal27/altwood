"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import GlareImage from "../GlareImage"

const ProductDetailsApplications = ({ product }) => {

    const items = product?.applications || [];
    const isFour = items.length === 4;

    return (
        <>
            <section className="
                bg-[url('/images/banners/black-bg-2.avif')] bg-cover bg-center relative
                mt-[5rem]
                pt-[4.5rem]
                pb-[3rem]
            ">
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000] bg-opacity-20 w-full h-full"></div>

                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
                        text-white text-center relative mx-auto w-max
                    "
                >
                    Applications
                </motion.h2>

                {/* Row */}
                <div className="
                    mt-[3.5rem]
                    flex justify-between flex-wrap relative
                ">
                    {items.map((item, index) => {

                        // Reverse logic
                        const isReverse = isFour
                            ? (index === 1 || index === 3) // 2nd & 4th
                            : (index === 1 || index === 4); // 2nd & 5th

                        return (
                            <div key={item.id} className={`
                                ${isFour ? "w-[24%]" : "w-[30%]"}
                                flex flex-col items-center 
                                ${isReverse ? "flex-col-reverse" : ""}
                                ${isReverse ? "mb-[2rem]" : "mb-[1rem]"}
                            `}>
                                {/* Image */}
                                <div className="
                                    px-[3rem]
                                ">
                                    <GlareImage
                                        src={item.image}
                                        alt={` Application ${item.id}`}
                                        className={`
                                            w-full rounded-full border-[#363636] 
                                            ${isFour ? "border-[10px]" : "border-[15px]"}
                                        `}
                                    />
                                </div>
                                {/* Content */}
                                <div className="
                                    py-[2rem]
                                    flex flex-col items-center
                                ">
                                    <span className="
                                        bg-[#363636] text-white rounded-full font-clash
                                        px-[1.6rem]
                                        py-[0.2rem]
                                    ">
                                        0{item.id}
                                    </span>
                                    <p className="
                                        text-white text-center mt-[1rem] 
                                    " dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section >
        </>
    )
}

export default ProductDetailsApplications

