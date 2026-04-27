import Button from "../Button"

const WudonBanner = () => {
    return (
        <>
            <section className="p-0 relative">
                <img
                    src="/images/banners/wudon-banner.jpg"
                    alt="Wudon Banner"
                    loading="eager"
                    className="w-full h-screen object-cover"
                />
                {/* Content */}
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black/60
                    px-[7%] py-[4rem]
                ">
                    <h1 className="text-white text-[3.5rem]">
                        Wudon
                    </h1>
                    <p className="text-white w-[55%] mt-[1rem]">
                        Wudon embodies a vision to deliver world-class engineered wood solutions for modern India. From our early beginnings, we rapidly built a strong presence across multiple states, driven by quality, technology, and consistent performance.
                    </p>
                    <div className="mt-[2rem]">
                        <Button label="Explore Our Collection" url="/" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WudonBanner
