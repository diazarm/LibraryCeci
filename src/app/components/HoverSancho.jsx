"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HoverSancho({ text, info }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative  ">
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer text-red-500"
      >
        {text}
      </span>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 bg-zinc-800 p-10 shadow-lg rounded-xl border-spacing-5 z-10"
          style={{ fontFamily: "Noto Sans" }} 
          >
          {info}
        </motion.div>
      )}
    </div>
  );
}