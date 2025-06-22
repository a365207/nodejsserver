// Nombre completo: Luis Alberto Del Angel Rivas
// Matr�cula: 365207
// Unidad: Objeto II (2do Parcial)
// Nombre del Profesor: Oscar Daniel P�rez Pi�on

// http
const http = require('http');
const fs = require('fs'); // M�dulo File System
const path = require('path'); // M�dulo Path para manejar rutas de archivos

const hostname = '127.0.0.1';
// Usamos un puerto mas 2 ya que los otro server usa el 3000 y 3001

const port = 3002; // Usamos un puerto diferente

const filePath = path.join(__dirname, 'archivo.txt'); 

const server = http.createServer((req, res) => {
  if (req.url === '/') {

    //Invocamos el archivo, tenemos que poner el formto utf8 para no tener temas
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('No se puede leer el archivo asincrona::', err.message);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('El server no puede leer el archivo.\n');
        return;
      }

      res.statusCode = 200;
	  // Enviamos info al archivo
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(data); 
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pagina no encontrada ERROR 404.\n');
  }
});

server.listen(port, hostname, () => {
 		console.log(`Servidor corriendo en http://${hostname}:${port}/`); // arma la url del server
		console.log('Abre la URL en tu navegador para ver el mensaje.');
});