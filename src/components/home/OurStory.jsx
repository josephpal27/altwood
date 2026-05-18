"use client"

import Button from "../Button"
import GlareImage from "../GlareImage"
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"

const OurStory = () => {
    return (
        <>
            <section className="flex justify-between flex-wrap flex-col-reverse lg:flex-row overflow-hidden" id="our-story">
                {/* Left */}
                <div className="w-full lg:w-[46%] relative mt-[2rem] lg:mt-0">
                    <GlareImage
                        src="/images/our-story/1.avif"
                        alt="Our Story 1"
                        className="w-[80%] rounded-lg aspect-[5/7]"
                    />
                    <div className="rounded-lg bg-[#f7f7f7] w-[60%] absolute right-0 bottom-[4rem] p-1">
                        <GlareImage
                            src="/images/our-story/2.avif"
                            alt="Our Story 2"
                            className="w-full rounded-md"
                        />
                    </div>
                </div>
                {/* Right */}
                <div className="w-full lg:w-[50%]">

                    {/* Top */}
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem] 
                        py-[0.3rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.26rem] 2xl:py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                        <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black font-[500]">
                            Our Story
                        </span>
                    </div>
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-[1.5rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem] lg:w-max"
                    >
                        Five Decades of Expertise. <br /> A Legacy in the Making.
                    </motion.h2>
                    <p className="mt-[1rem] lg:mt-[1.5rem]">
                        We blend India's rich heritage with modern technology to craft premium wood solutions that stand the test of time. Your vision is our guide.
                    </p>

                    {/* Center */}
                    <div className="
                        flex justify-between flex-wrap items-center border-t-[1px] border-b-[1px] border-gray-200
                        mt-[1rem] sm:mt-[1.5rem] lg:mt-[2.3rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                        py-[1rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                    ">
                        <div className="w-full lg:w-[65%]">
                            <div className="flex gap-[0.5rem] mb-[0.8rem]">
                                {/* Icon Will Add Here */}
                                <p>
                                    Advanced processes for engineered strength
                                </p>
                            </div>
                            <div className="flex gap-[0.5rem]">
                                {/* Icon Will Add Here */}
                                <p>
                                    Tailored finishes for individual preferences
                                </p>
                            </div>
                            <div className="
                                border-t-[1px] border-gray-200 
                                pt-[1rem] sm:pt-[1.5rem] lg:pt-[1.6rem] xl:pt-[1.8rem] 2xl:pt-[2rem]
                                mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                            ">
                                <div className="flex justify-between items-center">
                                    <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black font-[600]">
                                        Excellence
                                    </span>
                                    <span className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black font-[600]">
                                        95%
                                    </span>
                                </div>
                                {/* Progress Bar */}
                                <div className="
                                    mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    w-full bg-[#e5e5e5] 
                                    h-[10px] sm:h-[11px] lg:h-[10px] xl:h-[11px] 2xl:h-[12px]
                                    rounded-full overflow-hidden
                                ">
                                    <div className="
                                        h-full rounded-full bg-[#114a27] transition-all duration-700 ease-in-out w-[95%]
                                    "/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[30%] mt-[2rem] lg:mt-0">
                            <GlareImage
                                src="/images/our-story/3.avif"
                                alt="Our Story 3"
                                className="w-full rounded-lg aspect-[1/1]"
                            />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-[2rem] sm:mt-[1.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                        <Button label="Discover Our Heritage" url="/about" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory
