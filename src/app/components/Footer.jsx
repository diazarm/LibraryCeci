"use client";

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
/*import FormContact from "../contact/FormContact";*/
/*import { Button } from "@heroui/react";
import { Textarea } from "@heroui/react"
import {Input} from "@heroui/input"*/




const Footer = () => {
    return (
      <footer className="bg-zinc-800 text-zinc-200 py-6">
      <div className="container mx-auto text-center px-4">

{/* 🔹 Redes Sociales */}
    <div className="flex justify-center space-x-10 mt-8 mb-4">
          <a href="https://www.facebook.com/SanchoRecabarren/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 hover:text-blue-500 transition-colors" />
          </a>
         
         {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
          </a>*/}
          <a href="mailto:escritor@sanchorecabarren.cl">
            <FaEnvelope className="w-8 h-8 hover:text-pink-500 transition-colors" />
          </a>
        </div>
       </div>     
 {/* 🔹 Formulario de Contacto */}
     

 {/*<form className='flex flex-col justify-center items-center rounded-xl gap-5 py-20 bg-transparent'>
   <h1 className="text-2xl text-zinc-200">Escribeme</h1>
   <Input
     type="text"
     label="Nombre"
     className="w-1/2 xl:w-1/3"
     variant="bordered" />

   <Input
     type="text"
     label="Email"
     className="w-1/2 xl:w-1/3"
     variant="bordered"
     isRequired
   />

   <Textarea
     
     disableAnimation
     disableAutosize
     placeholder="Mensaje"
     className="w-1/2 xl:w-1/3"
     variant="bordered"
     isRequired
   />

   <Button className="text-zinc-300 mt-5 py-6 px-8 text-base" 
           color="primary" variant="bordered" type="submit" >Enviar</Button>
 </form>
</div>*/}




 {/* 🔹 Derechos de Autor */}
     
          <p className="text-zinc-400 text-sm text-center justify-center mt-10 items-center">
            &copy; {new Date().getFullYear()} sanchorecabarren.cl - Todos los derechos reservados.
          </p>
          <p className="text-zinc-400 text-xs mt-2 text-center justify-center items-center">Desarrollado por Sancho</p>       
          
        

      </footer>
    );
  };
  
  export default Footer;

  //<div className="flex flex-col justify-center items-center gap-5 py-10">
  //<div className=" text-zinc-200 w-full sm:w-3/4 xl:w-3/4" > 

  /*<form className=" p-4 rounded-md w-full max-w-md mx-auto">
  <p className="text-lg mb-4 font-semibold">Escribeme</p>
  <input
    type="text"
    placeholder="Nombre"
    className="w-full p-3 rounded text-black "
    variant="bordered"
    required
  />
  <input
    type="email"
    placeholder="E-mail"
    className="w-full p-2 rounded text-black"
    variant="bordered"
    required
  />
 
  <textarea
   disableAnimation
   disableAutosize
    placeholder="Mensaje"
    className="w-full p-2 mt-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows="3"
    variant="bordered"
    required
  ></textarea>
 
  <Button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 w-full transition-all"
  >
    Enviar
  </Button>
 </form>*/