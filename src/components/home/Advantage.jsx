import Link from "next/link"

const advantageData = [
    {
        id: 1,
        title: "Living Room Tiles",
        desc: "Transform your living space with tiles that combine style.",
        image: "/images/demo-3.jpg",
        url: "/products",
    },
    {
        id: 2,
        title: "Living Room Tiles",
        desc: "Transform your living space with tiles that combine style.",
        image: "/images/demo-3.jpg",
        url: "/products",
    },
    {
        id: 3,
        title: "Living Room Tiles",
        desc: "Transform your living space with tiles that combine style.",
        image: "/images/demo-3.jpg",
        url: "/products",
    },
]

const Advantage = () => {
    return (
        <>
            <section className="
                bg-[url('/images/banners/advantage-bg-2.jpg')] bg-cover bg-center relative
                mt-[5rem]
                pb-[4.5rem]
            ">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 w-full h-full"></div>

                {/* Head */}
                <div className="flex flex-col items-center relative">
                    <div className="
                        border-[1px] border-gray-300 w-max rounded-full flex items-center gap-[0.5rem]
                        px-[1.1rem] py-[0.3rem]
                    ">
                        <span className="w-2 h-2 rounded-full bg-[#a87310] block" />
                        <span className="text-[1rem] text-white font-[500]">Premium Tiles Collection</span>
                    </div>
                    <h3 className="mt-[1.5rem] text-white text-center">
                        Elevate every space with our <br /> finest tile selection
                    </h3>
                </div>

                {/* Cards */}
                <div className="
                    flex justify-between flex-wrap relative
                    mt-[3.5rem]
                ">
                    {advantageData.map((item) => {
                        return(
                            <div className="w-[31.5%] overflow-hidden rounded-lg relative group">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    loading="lazy"
                                    className="w-full transition duration-500 group-hover:scale-105"
                                />
                                <div className="
                                    w-full h-full absolute top-0 left-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50
                                    p-[1.5rem] 
                                ">
                                    <span className="text-white text-[1.5rem] font-[600] leading-[1.2]">
                                        {item.title}
                                    </span>
                                    <div className="w-full h-[1px] bg-[#cdcdcd2d] my-[1rem]"></div>
                                    <p className="text-white">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="relative flex justify-center items-center mt-[4rem]">
                    {/* Icon will add here */}
                    <p className="text-center text-white flex items-center gap-[0.6rem]">
                        Let's make something great work together.  
                        <Link href="/contact" className="text-white underline">Get Free Quote</Link>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Advantage
