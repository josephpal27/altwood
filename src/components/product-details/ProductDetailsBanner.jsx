"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"

const ProductDetailsBanner = ({product}) => {
    return (
        <>
            <section className="p-0 relative">
                <img src={product?.banner} alt="Products Banner" loading="eager" className="
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
                            text-[2rem] sm:text-[2.5rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                            mt-[7rem] lg:mt-[4.5rem]
                        "
                    >
                        {product?.name}
                    </motion.h1>
                    <p className="
                        text-white text-center mt-[0.6rem] lg:mt-[0.8rem] w-full lg:w-[50%]
                    ">
                        {product?.desc}
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner
