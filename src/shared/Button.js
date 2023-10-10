import React from "react";
import { motion } from "framer-motion";

const Button = ({
  onClick,
  type,
  children,
  state,
  className,
  green,
  yellow,
  animate,
}) => {
  const defaultClass = green
    ? "h-[60px] min-w-[120px] whitespace-nowrap text-white text-[16px] bg-eden px-4 py-2 rounded-md flex justify-center items-center"
    : yellow
    ? "h-[60px] min-w-[120px] whitespace-nowrap text-black text-[16px] bg-schoolBusYellow px-4 py-2 rounded-md flex justify-center items-center"
    : "h-[60px] min-w-[120px] whitespace-nowrap text-white text-[16px] bg-black px-4 py-2 rounded-md flex justify-center items-center";
  return (
    <motion.button
      whileHover={animate && { scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      type={type}
      disabled={state}
      className={`${defaultClass} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
