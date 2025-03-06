"use client"
import React from 'react'
import { 
  Card, 
  CardHeader,
  CardBody,   
} from "@heroui/react";

const Loco = () => {
    const works = [
      {
        title: "Doce postales de ayer",
        type:"Cuento fantástico como Intermezzo en los 'TexTos (a)SimétricoS'",
        publisher: "Publicado por Mago Editores, 2021",
        link: "/libros",
      },
      {
        title: "Nanohistoria del fin",
        type:"Historia con capítulos de máximo siete palabras cada uno",
        publisher: "Publicado en Revista Mal de Ojo, 2024",
        link: "https://revistamaldeojo.cl/index.php/2024/08/09/nanohistoria-del-fin-por-sancho-recabarren/",
      },
      {
        title: "Atrapado en el cerro Bello",
        type: "Cuento de ficción, en el Intermezzo en 'Todavía de a pie (por Chile, sus Andes)'",
        publisher: "Publicado por Mago Editores, 2024",
        link: "/libros",
      },
      {
        title: "En edición: Sueños en sectores defectuosos",
        type:"Novela futurista (mención honrosa en Juegos Literarios Gabriela Mistral 2023)",
        publisher: "Próximamente!!",
        link: "",
      },
    ];

    return (
        <div className="p-6 pt-4 pb-16 flex  flex-col gap-10 bg-orange-600" > 
         <div className="relative text-center p-6 rounded-xl">     
                 <h1 className="text-5xl font-medium item-center text-center text-orange-200  -mt-4 pt-5"
                      style={{ fontFamily: "Averia Sans Libre" }}>y algo de Loco</h1><br/>
                 <p className="mt-4 text-3xl text-center text-orange-200  mb-10 "
                    style={{ fontFamily: "Averia Sans Libre" }} >
                 Sin contar la mezcla de géneros que resultan sus textos, 
                 lo disparatado se puede ver en su narrativa de ficción, 
                 ya en la historia, ya en sus personajes. Aún con pocos títulos, 
                 éstos van apareciendo entre las publicaciones.
     
                 </p>
           </div>

           <div>
             <h1 className="relative text-4xl font-medium text-center items-center text-orange-200 -mt-4 pt-5"
                 style={{ fontFamily: "Averia Sans Libre" }} >Títulos Relacionados</h1>
           </div> 
  {/* Listado de obras */} 
             <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {works.map((work, index) => (
               <Card key={index} className='bg-orange-200 py-4 '>
                     
                 <CardHeader className="text-2xl  font-bold text-orange-800" 
                 style={{ fontFamily: "Averia Sans Libre" }} >
                 <div>
                    {work.title}
                   <p className="text-lg font-normal text-orange-800">{work.type}</p>
                   </div>
                   </CardHeader>  

                  <CardBody className="text-lg  font-bold text-orange-800" 
                            style={{ fontFamily: "Averia Sans Libre" }} >
                   <p className="text-sm">{work.publisher}</p>
                   {work.link && (
                     <a
                       href={work.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-orange-800 text-center"
                     >
                      <br/> ver
                     </a>
                   )}
                 </CardBody>
               </Card>
             ))}
           </div>
           </div>
            );
         }
           
         export default Loco    