"use client"
import React from 'react'
import { 
  Card, 
  CardHeader,
  CardBody,   
} from "@heroui/react";



const Andino = () => {
  const works = [
    {
      title: "Aproximación poética a una montaña andina",
      type:"Libro de poema de divulgación en ocho cantos, con fotografías",
      publisher: "Publicado por Editorial Usach, 2022",
      link: "/libros",
    },
    {
      title: "Rogativa al guardián, su ojo",
      type: "Poema",
      publisher:"Publicado por Revista Entre Paréntesis, revista Nº 103, p.86, 2023",
      link: "https://entreparentesischile.com/data/files/revistadejulio.pdf",
    },
    {
      title: "Todavía de a pie (por Chile, sus Andes)",
      type:"Libro de crónicas, con lenguaje poético, que aprovechan de divulgar conocimientos",
      publisher: "Publicado por Mago Editores, 2024",
      link: "/libros",
    },
    {
      title: "Historia de una montaña, de Élisée Reclus" ,
      type:"Traducción. Libro de divulgación, muy poético y de amplios conocimientos, publicado en 1880",
      publisher: "Publicado por Nadar Ediciones, 2024",
      link: "libros",
    },
  ];


  return (
   <div className="p-6 pt-4 pb-16 flex  flex-col gap-6 bg-emerald-600" > 
    
   <div className="relative text-center p-6 rounded-xl">     
            <h1 className="text-5xl font-medium items-center text-center text-emerald-200 -mt-4 pt-6"
                style={{ fontFamily: "Averia Sans Libre" }}>Algo de Andino</h1><br/>
            <p className="mt-4 text-3xl text-center text-emerald-200 mb-10 "
               style={{ fontFamily: "Averia Sans Libre" }} >
            La naturaleza andina Sancho la ha escrito principalmente 
            como poemas y crónicas; hasta ahora, solamente un cuento suyo
            habla de la cordillera. No obstante, lo andino abarca dos 
            de sus tres primeros libros publicados.
            </p>
      </div>
      
      <div>
        <h1 className="text-4xl font-medium text-center text-emerald-200 -mt-4 pt-5"
            style={{ fontFamily: "Averia Sans Libre" }} >Títulos Relacionados</h1>
      </div> <br/>
        
   {/* Listado de obras */}

     <div className="grid grid-cols-1 mb-16  sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {works.map((work, index) => (
       <Card key={index} className='bg-emerald-200' >
         <CardHeader className='text-emerald-950 text-2xl font-bold'
                      style={{ fontFamily: "Averia Sans Libre" }}>
          <div>
            {work.title}
            <p className="text-lg font-semibold text-emerald-950">{work.type}</p>
          </div>
         </CardHeader>

         <CardBody className="text-lg  font-bold text-emerald-950" 
                  style={{ fontFamily: "Averia Sans Libre" }} >          
           <p className="text-sm text-emerald-950">{work.publisher}</p>
           {work.link && (
             <a
               href={work.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-emerald-950 text-center"
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

export default Andino;

