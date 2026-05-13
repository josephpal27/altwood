"use client"

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import GlareImage from "../GlareImage";

const ProductDetailsFeatures = ({ product }) => {

    const [activeImage, setActiveImage] = useState(
        product?.productImages?.[0]
    );

    const [fade, setFade] = useState(true);

    const handleImageChange = (img) => {
        if (img === activeImage) return;

        setFade(false);

        setTimeout(() => {
            setActiveImage(img);
            setFade(true);
        }, 200);
    };

    return (
        <>
            <section className="
                flex justify-between flex-wrap
            ">

                {/* Image */}
                <div className="w-full lg:w-[48%] mt-[-0.8rem] lg:mt-0">
                    <div className="bg-[#ede6d4] rounded-md overflow-hidden p-[1rem] lg:p-0">
                        <GlareImage
                            src={activeImage}
                            alt={product?.name}
                            className={`
                                w-full aspect-[5/4]
                                transition-opacity duration-300
                                ${fade ? "opacity-100" : "opacity-0"}
                            `}
                        />
                    </div>
                    <div className="
                        mt-[0.5rem] lg:mt-[1rem]
                        flex justify-between gap-[0.5rem] lg:gap-[1rem]
                    ">
                        {product?.productImages?.map((img, index) => {
                            return (
                                <GlareImage
                                    key={index}
                                    src={img}
                                    alt={product?.name}
                                    onClick={() => handleImageChange(img)}
                                    className="w-[25%] rounded-md bg-[#ede6d4] aspect-[5/4] cursor-pointer p-[0.3rem] lg:p-0"
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[48%] mt-[1.5rem] lg:mt-0">
                    <span className="text-[1.4rem] lg:text-[2rem] font-clash font-[600] text-[#1d1d1d]">
                        Key Features :
                    </span>
                    <div className="mt-[1rem] lg:mt-[2rem]">
                        {product?.features.map((item) => {
                            return (
                                <p key={item.id} className="
                                    flex items-center gap-[0.5rem]
                                    mb-[1rem] lg:mb-[1.5rem]
                                    underline underline-offset-[5px] lg:underline-offset-[8px]
                                ">
                                    <GoArrowUpRight className="
                                        flex-shrink-0 text-[1.3rem] lg:text-[1.2rem]
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
