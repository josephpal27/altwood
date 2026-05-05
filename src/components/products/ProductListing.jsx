import { productsData } from "@/data/productsData";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ProductListing = () => {
    return (
        <>
            <section className="pb-[2.5rem]">

                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                ">
                    {productsData.map((product, index) => {
                        return (
                            <Link href={`/products/${product.slug}`} key={index} className="
                                w-[32%] bg-[#ebebeb] hover:bg-[#e3e3e3] overflow-hidden rounded-md group
                                mb-[1.7rem]
                                p-[2rem]
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
                                    mt-[1.5rem]
                                    flex flex-col items-center
                                ">
                                    <span className="
                                        font-clash text-[2rem] font-[600] text-gray-900
                                    ">
                                        {product.name}
                                    </span>
                                    <p className="
                                        text-center text-gray-900 font-[500] mt-[0.5rem]
                                        text-[1rem]
                                    ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, unde.
                                    </p>
                                </div>

                                {/* Arrow */}
                                <MdArrowOutward className="
                                    absolute right-[1.5rem] top-[1.5rem]
                                    w-[40px] h-[40px] rounded-full p-[0.3rem] scale-0 group-hover:scale-100
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
