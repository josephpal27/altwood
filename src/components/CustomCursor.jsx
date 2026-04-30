"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const [isHoveringHeading, setIsHoveringHeading] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("h1, h2, h3, h4, h5, h6")) {
        setIsHoveringHeading(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("h1, h2, h3, h4, h5, h6")) {
        setIsHoveringHeading(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: isHoveringHeading ? 5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="
        fixed top-0 left-0 z-[9999]
        w-3 h-3 bg-white rounded-full
        pointer-events-none
        mix-blend-difference
        -translate-x-1/2 -translate-y-1/2
      "
    />
  );
};

export default CustomCursor;