USE musimundos


SELECT * FROM CLIENTES
WHERE pais = "USA"

SELECT * FROM canciones
WHERE milisegundos BETWEEN 200000 AND 300000

SELECT * FROM generos
ORDER BY nombre

SELECT primer_nombre FROM clientes
ORDER BY pais DESC, ciudad DESC

SELECT * FROM canciones
WHERE compositor LIKE 'A%'

SELECT * FROM generos
WHERE nombre LIKE '%ro%'

SELECT * FROM canciones
WHERE id BETWEEN 10 AND 20

SELECT * FROM canciones
ORDER BY milisegundos DESC;

SELECT * FROM canciones
ORDER BY nombre
LIMIT 5 OFFSET 5


SELECT  CONCAT("La canción ", nombre, " fue compuesta por ", compositor ) AS cancion_total
FROM canciones

SELECT *, EXTRACT(MONTH FROM fecha_factura) AS MES FROM facturas
WHERE id_cliente = 2
ORDER BY fecha_factura DESC


SELECT canciones.nombre
FROM canciones
WHERE canciones.id_genero = 1

SELECT albumes.titulo, artistas.nombre
FROM albumes
INNER JOIN artistas
ON albumes.id_artista = artistas.id
WHERE artistas.nombre = "Deep Purple"

SELECT *
FROM canciones
WHERE id_tipo_de_medio = 1

SELECT DISTINCT titulo
FROM empleados

SELECT id_genero, COUNT(*)
FROM canciones
GROUP BY id_genero

SELECT pais, COUNT(*)
FROM clientes
GROUP BY pais

SELECT SUM(total)
FROM facturas

SELECT MIN(bytes)
FROM canciones


SELECT pais_de_facturacion, SUM(total)
FROM facturas
GROUP BY pais_de_facturacion
HAVING SUM(total) > 100

SELECT ciudad, COUNT(*)
FROM clientes
GROUP BY ciudad
HAVING COUNT(*) >= 2


SELECT generos.nombre, COUNT(canciones.id)
FROM generos
INNER JOIN canciones
ON generos.id = canciones.id_genero
GROUP BY generos.nombre

SELECT id_album, AVG(milisegundos)
FROM canciones
WHERE id_album = 4
GROUP BY id_album

SELECT MAX(total)
FROM facturas
WHERE id_cliente = 48



