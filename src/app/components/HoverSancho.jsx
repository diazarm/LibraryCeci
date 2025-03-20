"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HoverSancho({ text, info }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative text-center "
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onTouchStart={() => setIsHovered(!isHovered)} // Permite interacción táctil
  >
  <h2
  className="text-zinc-800 text-5xl font-bold pt-96 break-words"
  style={{ fontFamily: "Averia Sans Libre" }}
>
  {text}
</h2>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className='absolute left-0 mt-2 bg-zinc-800 p-10 shadow-lg rounded-xl border-spacing-5 z-10 ${
    isHovered ? "opacity-100" : "opacity-0"
  } transition-opacity duration-300`}'
          style={{ fontFamily: "Noto Sans" }} 
          >
          {info}
        </motion.div>
      )}
    </div>
  );
}