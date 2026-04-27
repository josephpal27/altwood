import { GoArrowUpRight } from "react-icons/go";
import { mdfData } from "@/data/mdfData";

const WudonProductFeatures = () => {
    return (
        <>
            <section>

                {/* Head */}
                <div className="flex flex-col items-center">
                    <h3>
                        MDF
                    </h3>
                    <p className="w-[50%] text-center mt-[1rem]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Dolore, adipisci.
                    </p>
                </div>

                {/* Content Row */}
                <div className="flex justify-between flex-wrap mt-[2.5rem]">
                    <div className="w-[50%]">
                        <span className="text-[2rem] font-clash font-[600] text-[#1d1d1d]">
                            Key Features :
                        </span>
                        <div className="mt-[2rem]">
                            {mdfData.map((item) => {
                                return (
                                    <p key={item.id} className="
                                        flex items-center gap-[0.5rem]
                                        mb-[1.5rem]
                                        underline underline-offset-[8px]
                                    ">
                                        <GoArrowUpRight className="
                                            flex-shrink-0 text-[1.2rem]
                                        " />
                                        {item.para}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <img src="/images/wudon/mdf.png" alt="MDF" loading="lazy" className="w-full rounded-md" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default WudonProductFeatures
