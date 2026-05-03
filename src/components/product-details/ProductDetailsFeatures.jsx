import { GoArrowUpRight } from "react-icons/go";
import GlareImage from "../GlareImage";

const ProductDetailsFeatures = ({product}) => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap
            ">

                {/* Image */}
                <div className="w-[48%]">
                    <GlareImage
                        src={product.productImage}
                        alt={product.name}
                        className="w-full rounded-md"
                    />
                </div>

                {/* Content */}
                <div className="w-[48%]">
                    <span className="text-[2rem] font-clash font-[600] text-[#1d1d1d]">
                        Key Features :
                    </span>
                    <div className="mt-[2rem]">
                        {product?.features.map((item) => {
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

            </section>
        </>
    )
}

export default ProductDetailsFeatures
