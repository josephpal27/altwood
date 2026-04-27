import { GoArrowUpRight } from "react-icons/go";

const WudonProductFeatures = ({data, reverse}) => {
    return (
        <>
            <section>

                {/* Head */}
                <div className="flex flex-col items-center">
                    <h3>
                        {data.title}
                    </h3>
                    <p className="w-[50%] text-center mt-[1rem]">
                        {data.description}
                    </p>
                </div>

                {/* Content Row */}
                <div className={`
                    flex justify-between flex-wrap mt-[3rem] 
                    ${reverse ? "flex-row-reverse" : ""}
                `}>
                    <div className="w-[48%]">
                        <span className="text-[2rem] font-clash font-[600] text-[#1d1d1d]">
                            Key Features :
                        </span>
                        <div className="mt-[2rem]">
                            {data.features.map((item) => {
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
                        <img src={data.image} alt={data.title} loading="lazy" className="w-full rounded-md" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default WudonProductFeatures
