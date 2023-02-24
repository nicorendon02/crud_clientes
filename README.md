# crud_clientes
CRUD con JavaScript y Node.JS conectado a base de datos postgreSQL con dependencias EJS, express

CRUD para la base de datos 'ventas'

-> Aplicacion web desarrollada con JavaScript y Node.JS

-> El proyecto se encuentra en la carpeta 'crud_clientes'

-> Se instalaron las siguientes dependencias en el package.json
	- ejs
	- express
	- pg (conexion con postgres)
	- nodemon (no es esencial para el proyecto)

El proyecto cuenta con unas vistas basicas
	- index (tabla con los clientes)
	- edit (formulario edicion de clientes)
	- create (formulario creacion de clientes)

Dentro de la carpeta controllers encontramos
	- sentencias sql para los metodos POST

*IMPORTANTE*
Configurar las credenciales para acceder a la bd desde el archivo bd.js
El proyecto se ejecuta por el puerto 8080 por defecto

Caracteristicas
- Listar clientes
- Crear clientes
- Modificar clientes
- Eliminar clientes

Opciones de mejora
- Buscar cliente por id
- Incorporar alerts cuando el usuario modifica la informacion sin tener en cuenta
constraints de la bd.
- Login y permisos superuser y user

*PARA EJECUTAR EL PROYECTO*
apuntar al archivo raiz 'app.js' para ejecutar el proyecto
"node app"
si se tiene instalada la dependencia nodemon:
"nodemon app"

El codigo implementado y los comentarios se establecieron en ingles.

V1.0
Nicolas Rendon Arias
