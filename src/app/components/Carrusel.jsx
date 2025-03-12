"use client"
import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import {Popover, PopoverContent, Button} from "@heroui/react";


const PrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 text-white p-2 rounded-full hover:bg-gray-600"
      style={{ left: "10px" }} // Ajustar la posición
    >
      <ChevronLeft size={24} color="white"  />
    </button>
  );
  
  // Componente para la flecha derecha
  const NextArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-600 text-white p-2 rounded-full hover:bg-gray-600"
      style={{ right: "10px" }} // Ajustar la posición
    >
      <ChevronRight size={24} color="white" />
    </button>
  );

  

 function SimpleSlider() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Estado para manejar el popover

  // Abre el popover automáticamente al cargar la página
  useEffect(() => {
    setIsPopoverOpen(true);
  }, []); // El [] asegura que solo se ejecute una vez cuando el componente se monta

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,  // Asignar flecha izquierda
      nextArrow: <NextArrow />, 
    };


    return (
      <div className=" mt-20 slider-container">   
      <Popover className="  fixed inset-0 top-8 left-1/2 justify-center items-center transform -translate-x-1/2 z-50">
      

      {isPopoverOpen && (
      <PopoverContent className="w-[400px] h-auto py-6 bg-teal-600 rounded-lg">
        <div className="flex flex-col items-center">
        <img
        src="/reclus.png"
        alt="Popover Image"
        className="w-full  h-auto  object-cover rounded-lg py-1 " //max-h-[300px] regula el ancho del afiche
        onError={() => console.error("No se pudo cargar la imagen")}
      />
          <div className="text-xl font-bold mt-4">¡¡PRÓXIMAMENTE!!</div>
          <div className="text-tiny"></div>
          <button
                className="mt-4 px-6 py-1 bg-teal-300 text-teal-800 font-bold rounded-lg"
                onClick={() => setIsPopoverOpen(false)} // Cerrar el popover
              >Cerrar</button>
        </div>
      </PopoverContent>
      )}
    </Popover>


    
      <Slider {...settings}>
        <div style={{ maxWidth: "500px", maxHeight: "300px", margin: "auto" }} >
        <img 
        src= "/slider-banner-historia.png" 
        alt="Image 1" 
        style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ maxWidth: "500px", maxHeight: "300px", margin: "auto" }} >
        <img 
        src="/slider-banner-todavia.png" 
        alt="Image 2" 
        style={{ width: "100%", height: "auto", objectFit: "contain"  }} />
        </div>        
      </Slider>
     </div> 
    );
  }

  export default SimpleSlider;
