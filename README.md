PRÁCTICA FORMATIVA 2
Parte I
 COMANDOS USADOS PARA REALIZAR EL EJERCICIO
2) Buscar una imagen con Apache o Nginx
docker search httpd
3) Crear un contenedor a partir de esa imagen
docker pull httpd

4) Repetir el punto 2 y 3 para una imagen Mysql
docker search mysql
docker pull mysql


docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=testdb -p 3306:3306 mysql
 5) Linkear los dos contenedores y comprobar que estén corriendo el servidor Web y el servidor Mysql  
docker run -d --name web-server --link mysql-server:mysql -p 8080:80 httpd
 docker inspect web-server
 


Devuelve:
[
	{
"HostConfig": {…
 "Links": [
                "/mysql-server:/web-server/mysql"
       	 ],…
}
  	]
}
Para verificar que están corriendo ingresamos a los logs y verificamos que está escuchando
mysql:
2025-05-18T18:02:53.187948Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
 apache:
[Sun May 18 18:03:11.177492 2025] [mpm_event:notice] [pid 1:tid 1] AH00489: Apache/2.4.63 (Unix) configured -- resuming normal operations
8) Generar la imagen, levantar el contenedor y compartirlo usando Docker Hub  
Creamos el archivo Dockerfile con el contenido:
FROM php:7.4-apache
# Instalar extensión MySQL
RUN docker-php-ext-install mysqli
 # Copiar archivo PHP al directorio web
COPY . /var/www/html/
 
Creamos la imagen:
docker build -t 2pfo .
Corremos la imagen del contenedor. Se cambia el puerto de 8080 a 8081:
 docker run -d -p 8081:80 --name my-web-server --link mysql-server:mysql 2pfo
 Compartimos la imagen en Docker Hub:
Corroboramos el nombre de usuario
docker login 
Ponemos etiqueta
docker tag 2pfo sergiodev1984/2pfo  
Pusheamos   	
docker push sergiodev1984/2pfo
imagen en Docker Hub sergiodev1984/2pfo



Parte II
a) Creamos un nuevo repositorio en github
git init
git add .
git commit -m "Primer commit"

git remote add origin https://github.com/sergioacos/Deveops2PFO.git

b) Creamos el archivo Dockerfile

Con el siguiente contenido:

# Imagen base con Apache
FROM httpd:2.4

# Copiar archivos de la página al directorio de Apache
COPY . /usr/local/apache2/htdocs/

c) Creamos la imagen con el siguiente comando

docker build -t mi-pagina-web .

d) Corremos el contenedor en el puerto 8082 

docker run -d -p 8082:80 --name web-mi-pagina mi-pagina-web

e) Compartimos la imagen en Docker Hub
Ponemos etiqueta
docker tag mi-pagina-web sergiodev1984/mi-pagina-web
Pusheamos  
docker push sergiodev1984/mi-pagina-web

 imagen en Docker Hub  sergiodev1984/mi-pagina-web
 
Como problemas vimos la dificultad de poder crear las imágenes de Docker a partir de los proyectos ejecutados en la carrera debido a que la mayoría se realizaban 
en node con Windows forms y por lo que pudimos no es buena compatibilidad con Docker por lo que tuvimos que optar por crear un proyecto  nuevo para este trabajo.
