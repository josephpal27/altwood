"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"
import Button from "../Button"

const WudonBanner = () => {
    return (
        <>
            <section className="p-0 relative">
                <img
                    src="/images/banners/wudon-banner.avif"
                    alt="Wudon Banner"
                    loading="eager"
                    className="w-full h-[100dvh] object-cover"
                />
                {/* Content */}
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black/90
                    px-[7%] py-[4rem]
                ">
                    <motion.h1
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem] w-max"
                    >
                        Engineered Wood Solutions <br/> for Modern Spaces
                    </motion.h1>
                    <p className="text-white w-full lg:w-[55%] mt-[1rem]">
                        Our brand is the result of visionary leadership, world-class manufacturing infrastructure, and a firm commitment to quality delivering engineered wood solutions that professionals across India trust and rely on.
                    </p>
                    <div className="mt-[1.7rem] lg:mt-[2rem]">
                        <Button label="Explore Our Collection" url="/" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WudonBanner
