"use client"
import React from 'react'
import Image from 'next/image';
import andinofondo from '/public/andinofondo.png'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "../components/utils/motionTransitions"
const Andino = () => {
  return (
    <div className="about-section  bg-cover bg-center min-h-screen relative">
        <div className="-z-10">    
        <Image
            className="mx-auto"
            src={andinofondo}
            alt="Fondo de la sección Andino"
            layout="fill" // Ocupa todo el contenedor
            objectFit="cover" // Asegura que la imagen se adapte
            quality={100} // Opcional: Ajusta la calidad
        />
        </div>
 
    <div className="absolute inset-0 flex items-center "
    >
        <h6 className="text-emerald-800  p-5 font-medium text-6xl mb-72"
            style={{ fontFamily: "Averia Sans Libre" }}>
            ... algo de Andino
        </h6>          
    </div>

    <div className="absolute inset-0 flex items-center justify-center mb-20" 
            style={{ top: "40%" }}  >
        <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='flex flex-col justify-center items-center  relative group cursor-pointer'>

            <div className="bg-emerald-400 bg-opacity-80 p-5 rounded-lg">     
       
                <Link href="/andino/sancho-andino">   
                <p className="cursor-pointer hover text-emerald-800 text-3xl text-center font-medium px-5 sm:px-40"
                    style={{ fontFamily: "Averia Sans Libre" }}>
                    Haber vivido Talcahuano, Copiapó y Santiago, además de las andanzas por territorio nacional,
                    lo han convencido que Chile es un país absolutamente andino, y todos sus habitantes también lo son. Parte de su obra abarca este arraigo cultural a los cerros.
                </p>
            </Link>  
            </div>  
        </motion.div> 
    </div>

    

    </div>
  )
}

export default Andino

{/* Botón + */}
/*<div className="absolute inset-0 flex items-end justify-start">
      
      <span className='text-rose-600 font-bold ml-20 mb-5'  
            target="_blank"
            rel="noopener noreferrer" 
            style={{ fontSize: '90px', cursor: 'pointer' }}>+</span>
      </Link>         
    </div>*/