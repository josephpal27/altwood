"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const ContactDetails = () => {
    return (
        <div>
            <div className="
                border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem] 
                py-[0.3rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.26rem] 2xl:py-[0.3rem]
            ">
                <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black font-[500]">
                    Let's Connect
                </span>
            </div>
            <motion.h2
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-[1.5rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem] lg:w-max"
            >
                Connect with Our Expert for <br /> Premium Plywoods
            </motion.h2>
            <p className="mt-[1rem] lg:mt-[1.5rem]">
                Connect with our experienced specialists for premium tile and marble solutions designed to elevate every space.
            </p>
        </div>
    )
}

export default ContactDetails
