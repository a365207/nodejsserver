
// Nombre completo: Luis Alberto Del Angel Rivas
// Matr�cula: 365207
// Unidad: Objeto II (2do Parcial)
// Nombre del Profesor: Oscar Daniel P�rez Pi�on

// http
const http = require('http'); // Importa el m�dulo HTTP de Node.js
const hostname = '0.0.0.0'; // La IP local (localhost)
const port = 3000; // El puerto en el que escuchar� el servidor

// creamos el server
const server = http.createServer((req, res) => 
	{
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');

	  // Env�a la respuesta "Hola Mundo" y finaliza la conexi�n
		res.end('Hola Mundo!\n');
	});

// inicia el servidor para que escuche en el puerto y hostname 
server.listen(port, hostname, () => 
	{
		console.log(`Servidor corriendo en http://${hostname}:${port}/`); // arma la url del server
		console.log('Abre la URL en tu navegador para ver el mensaje.');
	});

