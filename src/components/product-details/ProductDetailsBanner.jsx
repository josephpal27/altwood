
const ProductDetailsBanner = ({banner, name}) => {
    return (
        <>
            <section className="p-0 relative">
                <img src={banner} alt="Products Banner" loading="eager" className="w-full" />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center
                    px-[7%] bg-black/50
                ">
                    <h1 className="
                        text-white text-[4rem] mt-[3rem]
                    ">
                        {name}
                    </h1>
                    <p className="
                        text-white mt-[0.5rem]
                    ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner
