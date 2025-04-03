# ✍️ Sancho Recabarren - Sitio Web Oficial

Bienvenido al sitio web oficial de **Sancho Recabarren**, un espacio dedicado a la literatura, el arte y la creatividad. Aquí podrás conocer más sobre su trabajo, explorar sus escritos y ponerte en contacto con él.

## 🔍 Sobre el Proyecto
Este proyecto ha sido desarrollado con **Next.js**, proporcionando una experiencia rápida y accesible para los visitantes.

### 🌟 Características principales:
- **Diseño Responsivo**: Adaptado para todo tipo de dispositivos.
- **Formulario de Contacto**: Para que puedas enviar consultas o comentarios directamente al autor.
- **Optimización SEO**: Para mejorar la visibilidad en motores de búsqueda.
- **Despliegue Estático**: Configurado con `next export` para facilitar su hosting en cualquier servidor estático.

## 🛠️ Tecnologías Utilizadas
- **Next.js** (con salida estática)
- **React**
- **Tailwind CSS**
- **NextUI & HeroUI** para componentes accesibles y estilizados
- **Nodemailer** para la gestión del formulario de contacto

## 🛠 Configuración y Ejecución
Si deseas ejecutar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-repo.git
   cd nombre-repo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo **.env.local** y configura las credenciales de correo:
   ```env
   SMTP_HOST=smtp.ejemplo.com
   SMTP_PORT=465
   EMAIL_USER=tu_email@example.com
   EMAIL_PASS=tu_contraseña
   ```

4. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```

5. Para generar los archivos estáticos:
   ```bash
   npm run build && npm run export
   ```

## 💬 Contacto
Si tienes preguntas o deseas ponerte en contacto con el autor, puedes visitar la página y llenar el formulario de contacto o escribir directamente a **escritor@sanchorecabarren.cl**.

---

Gracias por visitar este proyecto. ¡Esperamos que disfrutes de la experiencia! 🎨📚

