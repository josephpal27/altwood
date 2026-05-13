import { productsData } from "@/data/productsData";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ProductListing = () => {
    return (
        <>
            <section className="pb-[1rem] lg:pb-[2.5rem] mt-[-0.5rem] lg:mt-0">

                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                ">
                    {productsData.map((product, index) => {
                        return (
                            <Link href={`/products/${product.slug}`} key={index} className="
                                w-[48%] lg:w-[32%] bg-[#ebebeb] hover:bg-[#e3e3e3] overflow-hidden rounded-md group
                                mb-[1.1rem] lg:mb-[1.7rem]
                                p-[0.8rem] lg:p-[2rem]
                                hover:translate-y-[-7px] transition duration-300 shadow-md relative
                            ">
                                {/* Image */}
                                <div className="relative w-full aspect-[5/4] overflow-hidden">
                                    <img
                                        src={product.productImages[0]}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={product.productImages[2]}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pt-[7%]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="
                                    mt-[1rem] lg:mt-[1.5rem]
                                    flex flex-col items-center
                                ">
                                    <span className="
                                        font-clash text-[1.2rem] lg:text-[2rem] font-[600] text-gray-900 text-center
                                    ">
                                        {product.name}
                                    </span>
                                    <p className="
                                        text-center text-gray-900 font-[500] mt-[0.5rem]
                                        text-[0.6rem] lg:text-[1rem]
                                    ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, unde.
                                    </p>
                                </div>

                                {/* Arrow */}
                                <MdArrowOutward className="
                                    absolute 
                                    right-[0.7rem] lg:right-[1.5rem] 
                                    top-[0.7rem] lg:top-[1.5rem]
                                    w-[22px] lg:w-[40px] 
                                    h-[22px] lg:h-[40px] 
                                    rounded-full p-[0.2rem] lg:p-[0.3rem] scale-0 group-hover:scale-100
                                    transition duration-500 bg-[#7d4c0a] hover:bg-[#114a27] hover:rotate-45 text-white
                                " />

                            </Link>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default ProductListing
