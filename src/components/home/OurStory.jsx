import Button from "../Button"

const OurStory = () => {
    return (
        <>
            <section className="flex justify-between flex-wrap">
                {/* Left */}
                <div className="w-[46%] relative">
                    <img
                        src="/images/demo-1.jpg"
                        alt="Our Story 1"
                        loading="lazy"
                        className="w-[80%] rounded-lg"
                    />
                    <div className="rounded-lg bg-white w-[60%] absolute right-0 bottom-[4rem] p-1">
                        <img
                            src="/images/demo-4.jpg"
                            alt="Our Story 2"
                            loading="lazy"
                            className="w-full rounded-md"
                        />
                    </div>
                </div>
                {/* Right */}
                <div className="w-[50%]">

                    {/* Top */}
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1.1rem] py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block"/>
                        <span className="text-[1rem] text-black font-[500]">Our Story</span>
                    </div>
                    <h2 className="mt-[2rem]">
                        Five decades of expertise. <br /> A legacy in the making.
                    </h2>
                    <p className="mt-[1.5rem]">
                        We blend India's rich heritage with modern technology to craft premium wood solutions that stand the test of time. Your vision is our guide.
                    </p>

                    {/* Center */}
                    <div className="
                        flex justify-between flex-wrap items-center
                        mt-[3rem] py-[2rem] border-t-[1px] border-b-[1px] border-gray-200
                    ">
                        <div className="w-[65%]">
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
                                pt-[2rem] mt-[2rem]
                            ">
                                <div className="flex justify-between items-center">
                                    <span className="text-[1rem] text-black font-[600]">
                                        Excellence
                                    </span>
                                    <span className="text-[1rem] text-black font-[600]">
                                        95%
                                    </span>
                                </div>
                                <progress 
                                    max="100" 
                                    value="95" 
                                    className="w-full mt-[1rem]">

                                </progress>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <img 
                                src="/images/demo-3.jpg"
                                alt="Our Story 3"
                                loading="lazy"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-[3rem]">
                        <Button label="Discover Our Heritage" url="/about" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory
