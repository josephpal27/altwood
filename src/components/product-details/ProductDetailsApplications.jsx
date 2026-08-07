"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import GlareImage from "../GlareImage"

const ProductDetailsApplications = ({ product }) => {

    const items = product?.applications || [];
    const topRow = items.slice(0, 3);
    const bottomRow = items.slice(3, 5);

    const renderCard = (item, index) => {
        // Only the 2nd card (index 1) gets reversed (text on top, image on bottom)
        const isReverse = index === 1;

        return (
            <div key={item.id} className={`
                w-full lg:w-[30%]
                flex flex-col items-center 
                ${isReverse ? "flex-col lg:flex-col-reverse" : ""}
                ${isReverse ? "mb-[1rem] lg:mb-[2rem]" : "mb-[1rem]"}
            `}>
                {/* Image */}
                <div className="
                    px-[1rem] sm:px-[1.5rem] lg:px-[1.4rem] xl:px-[1.7rem] 2xl:px-[2rem]
                ">
                    <GlareImage
                        src={item.image}
                        alt={`Application ${item.id}`}
                        className="
                            w-full rounded-full border-[#363636] aspect-square
                            border-[9px] lg:border-[10px] xl:border-[13px] 2xl:border-[15px]
                        "
                    />
                </div>
                {/* Content */}
                <div className="
                    py-[1.5rem] lg:py-[2rem]
                    flex flex-col items-center
                ">
                    <span className="
                        bg-[#363636] text-white rounded-full font-clash
                        px-[1.5rem] lg:px-[1.6rem]
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
    }

    return (
        <>
            <section className="
                bg-[url('/images/banners/black-bg-2.avif')] bg-cover bg-center relative
                mt-[2.5rem] lg:mt-[5rem]
                pt-[2.5rem] lg:pt-[4.5rem]
                pb-[0.5rem] lg:pb-[3rem]
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

                {/* Top Row */}
                <div className="
                    mt-[2rem] lg:mt-[3.5rem]
                    flex justify-between flex-wrap relative
                ">
                    {topRow.map((item, index) => renderCard(item, index))}
                </div>

                {/* Bottom Row */}
                <div className="
                    mt-[1rem] lg:mt-0
                    flex justify-center flex-wrap gap-x-[10%] relative
                ">
                    {bottomRow.map((item, index) => renderCard(item, index + 3))}
                </div>

            </section >
        </>
    )
}

export default ProductDetailsApplications