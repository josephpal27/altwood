"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const ContactLocation = () => {
    return (
        <section className="pb-[2rem] lg:pb-[5rem] mt-[1.3rem] lg:mt-0">

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
                <p className="mt-[1rem] lg:mt-[1.5rem] w-full lg:w-[60%]">
                    Collaborate with us to transform ideas into inspiring spaces. we'll create environments that reflect your vision, blending functionality, style, and innovation.
                </p>
            </div>

            {/* Map */}
            <div className="mt-[2rem] sm:mt-[2.3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem] h-[30dvh] lg:h-[60dvh] rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8721528720534!2d88.3457348750769!3d22.54646142951039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027713e10193a3%3A0xd678eb064667ffdc!2sEverest%20House!5e0!3m2!1sen!2sin!4v1788978051612!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>

        </section>
    )
}

export default ContactLocation
