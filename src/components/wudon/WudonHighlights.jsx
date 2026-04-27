
const wudonHighlightsData = [
    {
        id: 1,
        title: "HIGH DENSITY & STRENGTH",
        desc: "Engineered for superior load-bearing capacity and long-term structural stability",
    },
    {
        id: 2,
        title: "SMOOTH, UNIFORM SURFACE",
        desc: "Ideal for painting, laminating, veneering, and premium finishes.",
    },
    {
        id: 3,
        title: "MOISTURE & SWELLING RESISTANCE",
        desc: "HDHMR performs reliably in humid and moisture-prone environments.",
    },
    {
        id: 4,
        title: "TERMITE & FUNGUS RESISTANT",
        desc: "Treated for protection against pests and microbial damage.",
    },
    {
        id: 5,
        title: "DIMENSIONAL STABILITY",
        desc: "Resists warping, cracking, and deformation over time.",
    },
    {
        id: 6,
        title: "EXCELLENT WORKABILITY",
        desc: "Easy to cut, shape, and CNC-route for detailed designs and precision work.",
    },
]

const WudonHighlights = () => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap
            ">

                {/* left */}
                <div className="w-[47%]">
                    <p>
                        Wudon’s greenfield projects reflect a deep commitment to innovation, sustainability, and precision manufacturing. Guided by visionary promoters and a professional management team with academic excellence from institutions such as IITs and IIMs, the brand is built on strong operational standards and client-centric values.
                    </p>
                    <div className="mt-[2rem]">
                        <img src="/images/demo-3.jpg" alt="Wudon Highlight" loading="lazy" className="w-full rounded-md" />
                    </div>
                </div>

                {/* Right */}
                <div className="w-[47%] flex justify-between flex-wrap">
                    {wudonHighlightsData.map((item) => {
                        return(
                            <div key={item.id} className="
                                w-[48%] bg-white shadow-sm rounded-md
                                mb-[1.6rem]
                            ">

                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default WudonHighlights
