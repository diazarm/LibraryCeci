"use client";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@heroui/react";
import dynamic from "next/dynamic";

// Evita el error de hidratación con un estado de montaje
const FormContact = dynamic(() => Promise.resolve(() => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false); // Para evitar errores de hidratación

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita el error de hidratación

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      alert("Todos los campos son obligatorios.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, introduce un email válido.");
      return false;
    }

    if (formData.mensaje.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Mensaje enviado con éxito");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      console.error("Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-800 rounded-2xl text-zinc-200 w-full sm:w-3/4 xl:w-3/4">
      <form className="flex flex-col justify-center items-center rounded-xl gap-5 py-10" onSubmit={handleSubmit}>
        <h1 className="text-base break-words text-center justify-center py-6 text-zinc-200">
          Si quieres consultar sobre algo en particular, envíame un mensaje.
        </h1>

        <Input
          type="text"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required
          aria-label="Nombre completo"
        />

        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/2 xl:w-1/3"
          variant="bordered"
          required
          aria-label="Correo electrónico"
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
          aria-label="Escribe tu mensaje"
        />

        <Button 
          className="text-zinc-300 mt-5 py-6 px-8 text-base" 
          color="primary" 
          variant="bordered" 
          type="submit"
          isDisabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
}), { ssr: false });

export default FormContact;
