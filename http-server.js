
// Nombre completo: Luis Alberto Del Angel Rivas
// Matr�cula: 365207
// Unidad: Objeto II (2do Parcial)
// Nombre del Profesor: Oscar Daniel P�rez Pi�on

// http
const http = require('http'); // Importa el m�dulo HTTP de Node.js
const hostname = '127.0.0.1'; // La IP local (localhost)
const port = 3000; // El puerto en el que escuchar� el servidor

// Crea el servidor HTTP
const server = http.createServer((req, res) => 
	{
	  // req: objeto de solicitud (request) - contiene informaci�n de la solicitud del cliente
	  // res: objeto de respuesta (response) - se usa para enviar la respuesta al cliente
	  // Establece el c�digo de estado HTTP (200 OK) y el tipo de contenido
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');

	  // Env�a la respuesta "Hola Mundo" y finaliza la conexi�n
		res.end('Hola Mundo!\n');
	});

// inicia el servidor para que escuche en el puerto y hostname definidos
server.listen(port, hostname, () => 
	{
		console.log(`Servidor corriendo en http://${hostname}:${port}/`); // arma la url del server
		console.log('Abre la URL en tu navegador para ver el mensaje.');
	});

