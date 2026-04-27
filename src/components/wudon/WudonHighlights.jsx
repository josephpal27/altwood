
const wudonHighlightsData = [
    {
        id: 1,
        title: "HIGH DENSITY & <br/> STRENGTH",
        desc: "Engineered for superior load-bearing capacity and long-term structural stability",
    },
    {
        id: 2,
        title: "SMOOTH, UNIFORM <br/> SURFACE",
        desc: "Ideal for painting, laminating, veneering, and premium finishes.",
    },
    {
        id: 3,
        title: "MOISTURE & SWELLING <br/> RESISTANCE",
        desc: "HDHMR performs reliably in humid and moisture-prone environments.",
    },
    {
        id: 4,
        title: "TERMITE & FUNGUS <br/> RESISTANT",
        desc: "Treated for protection against pests and microbial damage.",
    },
    {
        id: 5,
        title: "DIMENSIONAL <br/> STABILITY",
        desc: "Resists warping, cracking, and deformation over time.",
    },
    {
        id: 6,
        title: "EXCELLENT <br/> WORKABILITY",
        desc: "Easy to cut, shape, and CNC-route for detailed designs and precision work.",
    },
]

const WudonHighlights = () => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap
                mt-[-1rem]
            ">

                {/* left */}
                <div className="w-[47%]">
                    <p className="mt-[1.1rem]">
                        Wudon’s greenfield projects reflect a deep commitment to innovation, sustainability, and precision manufacturing. Guided by visionary promoters and a professional management team with academic excellence from institutions such as IITs and IIMs, the brand is built on strong operational standards and client-centric values.
                    </p>
                    <div className="mt-[2rem]">
                        <img src="/images/demo-3.jpg" alt="Wudon Highlight" loading="lazy" className="w-full rounded-md" />
                    </div>
                </div>

                {/* Right */}
                <div className="w-[49%] flex justify-between flex-wrap">
                    {wudonHighlightsData.map((item) => {
                        return(
                            <div key={item.id} className="
                                w-[48%] bg-white shadow-sm rounded-md flex flex-col justify-between
                                mt-[1.6rem]
                                p-[1.5rem]
                            ">
                                <div className="
                                    border-b border-gray-200 pb-[1rem]
                                ">
                                    <span className="
                                        text-[1.2rem]
                                        font-clash text-[#1d1d1d] font-[600]
                                    " dangerouslySetInnerHTML={{__html: item.title}} />
                                </div>
                                <div>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default WudonHighlights
