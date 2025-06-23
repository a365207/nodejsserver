# Dockerfile
# Usar una imagen base oficial de Node.js (versión 18, ligera)
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app/nodejsserver

# Copiar todos los archivos de tu proyecto local al directorio /app/nodejsserver dentro del contenedor
COPY . .

# Exponer el puerto en el que tu servidor Node.js va a escuchar (3000 en http-server.js)
EXPOSE 3000

# Exponer el puerto en el que tu servidor Node.js va a escuchar (3001 en sincrono-server.js)
#EXPOSE 3001
# Exponer el puerto en el que tu servidor Node.js va a escuchar (3002 en asincrono-server.js)
#EXPOSE 3002

# Comando para ejecutar el servidor http
CMD ["node", "http-server.js"]

# Comando para ejecutar el servidor sincrono
#CMD ["node", "sincrono-server.js"]
# Comando para ejecutar el servidor asincrono
#CMD ["node", "asincrono-server.js"]