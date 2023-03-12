<p align="center">
  <img src="https://github.com/Applepie46/mediaMaratonAburraSolucion/blob/master/public/images/logos/logoNoBg.png" />
</p>

# Media Maratón Aburrá de los Yamesíes - Documentación del proyecto

## Introduccion
Este proyecto es una solución que ofrece un formulario de registro en línea para los 
participantes de la media maratón. El formulario de registro se encarga de recopilar la 
información personal de cada participante, así como su estado de salud. Además, utiliza una API 
pública para obtener un listado de ciudades del departamento de Antioquia y permitir al 
usuario seleccionar su ciudad de origen en una lista desplegable.

El proyecto está desarrollado con Node.js versión 18 y utiliza el framework Express para el back  end. También utiliza el motor de vistas EJS para la presentación de las vistas y el 
almacenamiento de información de los usuarios se hace en el localStorage del navegador.


## Guía para obtener y ejecutar el proyecto, siga los siguientes pasos:

### Paso 1: Descargar o clonar el repositorio

- Abre una terminal en tu máquina local.
- Usa el comando git clone para clonar el repositorio o descarga el repositorio en formato 
ZIP y extrae los archivos en una carpeta local.

`git clone https://github.com/Applepie46/mediaMaratonAburraSolucion.git`

### Paso 2: Instalar las dependencias

- Ejecuta el siguiente comando para instalar las dependencias necesarias:

`npm install`

### Paso 3: Iniciar la aplicación

- En la terminal ejecuta el siguiente comando para iniciar la aplicación:

`npm start`

Este comando iniciará el servidor en el puerto 3000 y permitirá que la aplicación se ejecute.
Verás un mensaje en la terminal que indica que el servidor está en funcionamiento

### Paso 4: Acceder a la aplicación

- Abre un navegador web y accede a la dirección local donde se está ejecutando la 
aplicación (http://localhost:3000).
- Esto te permitirá acceder a la aplicación y probarla.

### Paso 5: Detener la aplicación

- Cuando hayas terminado de usar la aplicación, puedes detener el servidor Node.js 
presionando `Ctrl+C` en la terminal.

## End points

### GET

- `/`
Renderiza la vista index de la aplicacion

## Requerimientos del sistema:

### El proyecto requiere de las siguientes herramientas y tecnologías:

- Node.js versión 18
- Express.js 
- EJS como motor de vistas
- API Colombia (https://api-colombia.com/) para obtener información de las ciudades

#### Notas:

1. Utilizamos Node versión 18 ya que se implementó una versión global experimental API 
de fetch(), debido a esto ya no tenemos que hacer uso del paquete node_fetch

2. Para obtener la información de las ciudades del departamento de Antioquia de la API 
publica Colombia utilizamos el siguiente end-point:
https://api-colombia.com/api/v1/Department/2/cities

## Uso del formulario de registro:

### El formulario de registro de la media maratón presenta los siguientes campos:

- Nombre completo (obligatorio)
- Identificación (obligatorio)
- Correo electrónico
- Ciudad de origen 
- Altura (en metros)
- Peso (en kilogramos)
- Talla de camiseta (M/L/XL) (obligatorio)
- ¿Ha tenido dolor en el pecho durante el ejercicio o deporte que practica? (Sí/No)

### Funcionamiento de los campos:

- Los campos obligatorios se validarán el enviar el formulario
- El campo IMC es un campo calculado que se genera automáticamente al introducir los 
valores de altura y peso.
- El campo de valoración es otro campo calculado que se genera automáticamente en 
función del peso y la presencia o ausencia de dolor en el pecho durante el ejercicio o 
deporte.
- El campo de ciudad de origen se presenta como una lista desplegable que obtiene la 
información de la API pública https://api-colombia.com/. 
- Para almacenar la información del usuario, se utiliza el localStorage del navegador. La 
información se almacena temporalmente hasta que la información es mostrada al 
usuario, al presionar el botón entendido la información del localStorage es eliminada






