import Button from "../Button"

const HomeBanner = () => {
    return (
        <>
            <section className="p-0 relative">
                <img
                    src="/images/banners/home-banner.jpg"
                    alt="Home Banner"
                    loading="eager"
                    className="w-full h-screen object-cover"
                />
                {/* Content */}
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black/60
                    px-[7%] py-[4rem]
                ">
                    <h1 className="text-white text-[3.5rem]">
                        The Leading Vitrified Tiles <br /> Company in World
                    </h1>
                    <p className="text-white w-[50%] mt-[1rem]">
                        Our tiles and marble are crafted with precision to meet the evolving needs of architecture & interior design offering elegant textures.
                    </p>
                    <div className="mt-[2rem]">
                        <Button label="Explore Our Collection" url="/" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
