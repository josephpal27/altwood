"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const ContactLocation = () => {
    return (
        <section>
            {/* Head */}
            <div>
                <div className="
                    border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                    px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem] 
                    py-[0.3rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.26rem] 2xl:py-[0.3rem]
                ">
                    <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                    <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black font-[500]">
                        How to Reach Us
                    </span>
                </div>
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-[1.5rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem] lg:w-max"
                >
                    Let's Connect & Build Spaces
                </motion.h2>
                <p className="mt-[1rem] lg:mt-[1.5rem]">
                    Collaborate with us to transform ideas into inspiring spaces. we'll create environments that reflect your vision, blending functionality, style, and innovation.
                </p>
            </div>
        </section>
    )
}

export default ContactLocation
