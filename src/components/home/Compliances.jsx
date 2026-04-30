"use client"

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations"

const compliancesData = [
    {},
    {},
    {},
]

const Compliances = () => {
    return (
        <>
            <section className="bg-[url('/images/banners/compliances-bg.png')] bg-cover bg-center">
                {/* Top */}
                <div>
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1.1rem] py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                        <span className="text-[1rem] text-black font-[500]">Compliances</span>
                    </div>
                    <motion.h6
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-[2rem]"
                    >
                        Trusted by partners and <br /> projects worldwide
                    </motion.h6>
                </div>
                {/* Cards Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[3rem]
                    pb-[5rem]
                ">
                    {compliancesData.map((item, index) => {
                        return(
                            <div key={index} className="
                                w-[31.5%] aspect-square bg-white rounded-md shadow-md
                            ">

                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Compliances
