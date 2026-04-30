const GlareImage = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative overflow-hidden group ${className}`}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
            />

            {/* Glare */}
            <div className="
        pointer-events-none absolute inset-0
        before:content-['']
        before:absolute before:top-1/2 before:left-1/2
        before:-translate-x-1/2 before:-translate-y-1/2
        before:w-0 before:h-0
        before:opacity-0
        before:bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,transparent_70%)]
        before:transition-all before:duration-700 before:ease-out

        group-hover:before:w-[200%]
        group-hover:before:h-[200%]
        group-hover:before:opacity-100
      " />
        </div>
    );
};

export default GlareImage;