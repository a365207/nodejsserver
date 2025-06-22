
// Nombre completo: Luis Alberto Del Angel Rivas
// Matrícula: 365207
// Unidad: Objeto II (2do Parcial)
// Nombre del Profesor: Oscar Daniel Pérez Piñon

// Server http
const http = require('http');
const fs = require('fs'); 

const hostname = '127.0.0.1';
// Usamos un puerto mas 1 ya que el otro server usa el 3000
const port = 3001; 

// Crea el servidor HTTP
const server = http.createServer((req, res) => 
{
  if (req.url === '/') 
  { 
    try 
	{
      //Invocamos el archivo, tenemos que poner el formto utf8 para no tener temas
	  const data = fs.readFileSync('archivo.txt', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(data); 
	  
    } catch (err) 
	{
      console.error('No se puede leer el archivo sincrono:', err.message);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('El server no puede leer el archivo sincrono.\n');
    }
  } 
  else 
  {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pagina no encontrada ERROR 404.\n');
  }
});

server.listen(port, hostname, () => 
{
		console.log(`Servidor corriendo en http://${hostname}:${port}/`); // arma la url del server
		console.log('Abre la URL en tu navegador para ver el mensaje.');
});
