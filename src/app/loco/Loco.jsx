"use client"

import React from 'react'
import Image from 'next/image';
import locofondo from '/public/locofondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"

const Loco = () => {
  return (
    <div className="about-section  bg-cover bg-center min-h-screen relative">
    
    {/* Fondo de imagen */}  
      <div className="-z-10 object-cover  w-full h-full">  
        <Image
            className="absolute inset-0  flex flex-col "
            src={locofondo}
            alt="Fondo de la sección loco"
            fill// Ocupa todo el contenedor. layout="fill"
       // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
            priority
        />
        </div>
        
 {/* Título */}
      <div className="absolute inset-0 flex items-center justify-start  ">
        <h1  className="text-orange-600 p-8  font-medium text-6xl mb-72"
             style={{ fontFamily: "Averia Sans Libre" }} >
            ... y algo de Loco
        </h1>          
      </div>
   {/* Texto descriptivo */}    
      <div className="absolute inset-0 flex items-center mb-20 " 
            style={{ top: "40%" }}  >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col justify-center  relative group cursor-pointer'>
      

      <div className=" bg-orange-200 bg-opacity-60 p-6 rounded-xl max-w-2xl"
              style={{ top: "40%" }}>
              <Link href="/loco/sancho-loco">
            <p className= "cursor-pointer hover text-orange-600 text-3xl sm:px-20 sm:ml-0 sm:mr-0 "
            style={{ fontFamily: "Averia Sans Libre" }}> 
              Sancho es aficionado lector del género fantástico, particularmente
               de ciencia ficción, lo que lo ha llevado a hacer sus aportes 
               al género con textos algo alucinados. Espera poder seguir 
               produciendo esa locura para no volverse loco.
               </p> 
               </Link> 
            </div>
            </motion.div> 
           
      </div>
   

    
    </div>
   
  )
}

export default Loco;

/* Botón + 
<div className="absolute inset-0 flex items-end justify-start ">
<Link href="/loco/sancho-loco">
  <span className='text-rose-600 font-bold ml-20 mb-5 '  
      target="_blank"
      rel="noopener noreferrer"  
      style={{ fontSize: '90px', cursor: 'pointer' }}>+</span>
</Link>         
</div>*/