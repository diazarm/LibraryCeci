import nodemailer from "nodemailer";

export async function POST(req) {
    try {
    const { name, email, message } = await req.json();
    console.log("Datos recibidos:", name, email, message);

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Todos los campos son obligatorios." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

   
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, 
            port: process.env.SMTP_PORT, 
            secure: true, //solo funciona con el puerto 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`, // Nombre y correo del remitente
            replyTo: email,
            to: "escritor@sanchorecabarren.cl",
            subject: "Nuevo mensaje desde el formulario de contacto",
            text: `De: ${name} (${email})\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
            
        return new Response(JSON.stringify({ success: "Correo enviado correctamente." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error al enviar el correo:", error);

        return new Response(JSON.stringify({ error: "Error al enviar el correo." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

//Si usas el App Router de Next.js, los archivos en /api deben estar 
// dentro de app/api/sendEmail/route.js y
//  la función POST debe recibir request en lugar de req: