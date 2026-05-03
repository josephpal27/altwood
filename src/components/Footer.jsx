import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialHandles = [
    { icon: <FaFacebookF />, url: "#", },
    { icon: <FaInstagram />, url: "#", },
    { icon: <FaLinkedinIn />, url: "#", },
]

const footContent = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", url: "/" },
            { label: "About", url: "/about" },
            { label: "Products", url: "/products" },
            { label: "Contact Us", url: "/contact" },
        ]
    },
    {
        title: "Our Collection",
        links: [
            { label: "Film Faced", url: "/products/film-faced" },
            { label: "Marine Grade", url: "/products/marine-grade" },
            { label: "BWP Grade", url: "/products/bwp-grade" },
            { label: "BWR Grade", url: "/products/bwr-grade" },
            { label: "Flush Door", url: "/products/flush-door" },
            { label: "Block Board", url: "/products/block-board" },
        ]
    },
    {
        title: "Get In Touch",
        links: [
            {
                label: "46C, Jawaharlal Nehru Road, Everest House, 20th Floor, Suite-C, Kolkata 700071",
                url: "#"
            },
            { label: "info@altwood.in", url: "mailto:info@altwood.in" },
            { label: "+91 98754 61678", url: "tel:+919875461678" },
        ]
    },
]

const Footer = () => {
    return (
        <>
            <footer className="
                bg-[url('/images/banners/black-bg-1.avif')] bg-cover bg-center relative
                mt-[1rem]
                px-[7%]
            ">
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#272727] bg-opacity-80 w-full h-full"></div>

                {/* Content */}
                <div className="flex justify-between flex-wrap pt-[5.5rem] relative">
                    {/* Left */}
                    <div className="w-[32%] rounded-md bg-[#313131] p-[2.5rem]">
                        <div className="
                            bg-white aspect-square rounded-full flex items-center justify-center
                            w-[23%] px-[7px]
                        ">
                            <img src="/images/logo/altwood-logo.png" alt="Logo" loading="lazy" className="
                                w-full
                            " />
                        </div>
                        <p className="
                            text-[#ededed]
                            text-[1rem]
                            mt-[1.5rem]
                        ">
                            At Altwood, we understand that no two projects are alike. Your vision is our guide, and we take a collaborative approach to bring it to life.
                        </p>
                        <div className="
                            mt-[2.5rem]
                            pt-[1rem]
                            border-t border-gray-600 
                        ">
                            <span className="
                                text-white text-[1.3rem] font-[600] font-clash
                            ">
                                Follow Us on Social
                            </span>
                            <div className="
                                flex
                                gap-[1.1rem]
                                mt-[1rem] 
                            ">
                                {socialHandles.map((item, index) => {
                                    return (
                                        <a href={item.url} target="_blank" key={index} className="
                                            w-[40px]
                                            h-[40px]
                                            rounded-full text-white border border-gray-600 flex justify-center items-center
                                            hover:bg-[#d7b36e] transition
                                        ">
                                            {item.icon}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="w-[60%]">
                        <div className="flex justify-between flex-wrap">
                            {footContent.map((item, index) => {
                                return (
                                    <div key={index} className="
                                        w-[30%] first:w-[20%] last:w-[40%]
                                    ">
                                        <span className="
                                            text-white text-[1.4rem] font-[600] font-clash
                                        ">
                                            {item.title}
                                            <div className="mt-[1.5rem]">
                                                {item.links.map((link, index) => {
                                                    return (
                                                        <Link href={link.url} key={index} className="
                                                            flex items-center text-white hover:text-[#d7b36e] transition
                                                            mb-[1rem]
                                                        ">
                                                            {link.label}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="
                            mt-[1.5rem]
                            pt-[1.5rem]
                            border-t border-gray-700 
                        ">
                            <p className="text-white text-[1.2rem] font-[500] font-clash">
                                Premium Plywood Manufacturing Excellence
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="
                    mt-[3rem]
                    border-t border-gray-700 relative
                    py-[2rem]
                ">
                    <p className="text-center text-white text-[1rem]">
                        Copyright © 2026 | Altwood | All Rights Reserved
                    </p>
                </div>

            </footer>
        </>
    )
}

export default Footer
