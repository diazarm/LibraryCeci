'use client'
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@heroui/react";



const FormContact = () => {

// Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        mensaje: mensaje
    }),
  });
  const data = await response.json();

    if (response.ok) {
      alert("Mensaje enviado con éxito");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    
    <div className="bg-zinc-800 rounded-2xl text-zinc-200 w-full sm:w-3/4 xl:w-3/4" >     

      <form className='flex flex-col justify-center items-center rounded-xl gap-5 py-20 '
            onSubmit={handleSubmit}>
        <h1 className="text-2xl text-zinc-200">Escribeme</h1>
        <Input
          type="text"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required />

        <Input
          type="text"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required
          
        />

        <Textarea
          isRequired
          disableAnimation          
          placeholder="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          minRows={5}
        />

        <Button className="text-zinc-300 mt-5 py-6 px-8 text-base" 
                color="primary" 
                variant="bordered" 
                type="submit">Enviar</Button>
      </form>
    </div>
  )
}

export default FormContact;

/*EMAIL_USER=escritor@sanchorecabarren.cl
EMAIL_PASS=sancho.alexei
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=465*/