# Imagen base con Apache
FROM httpd:2.4

# Copiar archivos de la página al directorio de Apache
COPY . /usr/local/apache2/htdocs/