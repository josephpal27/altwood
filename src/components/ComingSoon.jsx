const ComingSoon = () => {
  return (
    <section className="
      fixed inset-0
      flex flex-col justify-between
      bg-[#0b1f16]
      overflow-hidden
      h-[100dvh]
    ">

      {/* Glow (contained properly) */}
      <div className="
        absolute top-[-20%] left-[-10%]
        w-[400px] h-[400px]
        bg-[#114a27]/40 blur-[120px]
        rounded-full pointer-events-none
      " />

      <div className="
        absolute bottom-[-20%] right-[-10%]
        w-[400px] h-[400px]
        bg-[#7c4d0b]/40 blur-[120px]
        rounded-full pointer-events-none
      " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">

        <span className="text-[0.7rem] tracking-[3px] uppercase opacity-60 text-white">
          Mobile Experience
        </span>

        <h1 className="mt-4 text-[2.2rem] leading-tight font-[600] tracking-[1px] text-white">
          Crafted for Bigger Screens
        </h1>

        <p className="mt-4 text-[0.95rem] text-white opacity-70 max-w-[300px]">
          We're designing a refined mobile experience.
          For now, explore the full site on desktop.
        </p>

        <div className="mt-6 w-[60px] h-[1px] bg-white/40" />

        <p className="mt-6 text-[0.75rem] tracking-[2px] opacity-50 uppercase text-white">
          In Progress
        </p>

      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center pb-6 text-[0.7rem] tracking-[2px] opacity-40 text-white">
        ALTWOOD
      </div>

    </section>
  );
};

export default ComingSoon;