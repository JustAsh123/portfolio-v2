import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  onAnimationComplete: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ onAnimationComplete }) => {
  const controls = useAnimation();
  const text = "Ashmit";
  const duration = 2;

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        strokeDashoffset: 0,
        transition: { duration },
      });

      await controls.start({
        fill: "#7CCF00", // Tailwind lime-500
        transition: { duration: 0.5 },
      });

      await controls.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });

      onAnimationComplete();
    };
    sequence();
  }, [controls, onAnimationComplete]);

  return (
    <div className="fixed inset-0 big-font flex justify-center items-center h-screen text-center bg-slate-950 z-[9999]">
      <svg viewBox="0 0 400 120" className="relative z-[10000] big-font">
        <motion.text
          x="20"
          y="80"
          fontSize="70"
          fill="transparent"
          stroke="#7CCF00"
          strokeWidth="2"
          strokeDasharray="300"
          className={"big-font"}
          strokeDashoffset="300"
          initial={{ strokeDashoffset: 300, opacity: 1 }}
          animate={controls}
        >
          {text}
        </motion.text>
      </svg>
    </div>
  );
};

export default AnimatedText;
