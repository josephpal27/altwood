"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const ProductsBanner = () => {
    return (
        <>
            <section className="p-0 relative">
                <img src="/images/banners/product-details-banner.avif" alt="Products Banner" loading="eager" className="
                    w-full h-[45dvh] lg:h-auto object-cover
                " />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center
                    px-[1rem] lg:px-[7%] bg-black/50
                ">
                    <motion.h1
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="
                            text-white
                            text-[2rem] sm:text-[2.2rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                            mt-[7rem] lg:mt-[4.5rem]
                        "
                    >
                        Our Collection
                    </motion.h1>
                    <p className="
                        text-white mt-[0.6rem] lg:mt-[0.8rem] 
                        w-full lg:w-[50%] text-center
                    ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductsBanner
