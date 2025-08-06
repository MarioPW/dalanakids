
# Proyecto: Dalana Kids (E-Comerce)

Proyecto realizado utilizando Vite y React para desarrollar una aplicación web. 

## Requisitos Previos



- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)

## Configuración de Variables de Entorno
Para configurar las variables de entorno deberás tener un servicio de alojamiento de imágenes en Cloudinary. *Si deseas uasr un servicio de nube como Firebase Storage, Amazon S3, etc., deberás cambiar la configuración del proyecto según los requerimientos particulares del servicio*. Sigue estos pasos:

1. Crea un archivo .env.local en la raíz del proyecto.

2. Agrega tlas siguientes variables de entorno al archivo:

```JS
VITE_API_URL= *URL de la api que se va a utilizar en este proyecto.

VITE_INSTAGRAM= "URL del la cuenta de Instagram de la empresa.

VITE_WHATSAPP="URL del whatsapp de la empresa."

VITE_CLOUDINARY="URL del servicio de alojamiento de imágenes Cloudinary"
```
Nota: *Todas las variables de entorno en un proyecto Vite deben comenzar con VITE_.*
## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/marioPW/dalanakids.git
   cd tu-repositorio

2. **Instala las dependencias:**

```bash
npm install
```

## Ejecución en Desarrollo
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```
Este comando inicia un servidor de desarrollo y abre la aplicación en tu navegador predeterminado. Por lo general, la aplicación estará disponible en http://localhost:5173.

## Scripts Disponibles
En este proyecto, puedes ejecutar los siguientes scripts de npm:

- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Compila la aplicación para producción  en la carpeta dist.
- npm run preview: Previsualiza la compilación de producción localmente.
- npm run lint: Ejecuta linters para verificar la calidad del código.

