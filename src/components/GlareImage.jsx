const GlareImage = ({ src, alt, className="" }) => {
    return (
        <div className={`relative overflow-hidden group ${className}`}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover"
            />

            {/* Smooth Glare Sweep */}
            <span className="
                pointer-events-none absolute top-0 left-[-75%]
                w-[35%] h-full blur-md
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]
                skew-x-[-20deg]
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                group-hover:left-[130%]
            "/>
        </div>
    );
};

export default GlareImage;