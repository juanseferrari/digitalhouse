
-- CLASE 29 MANIPULACION DE DATOS
USE movies_db


-------------

INSERT INTO genres (id, name, ranking, active)
VALUES (DEFAULT, "Investigación", 13, 1)

------------
UPDATE genres
SET name = "Investigación Científica"
WHERE id = 15

--------------

DELETE FROM genres
WHERE id = 15

--------------

SELECT * FROM movies

--------------
SELECT first_name, last_name, rating
FROM actors

------ Clase 29: Micro desafío - Paso 2: -------

SELECT * FROM actors
WHERE rating > 7.5

SELECT title,rating,awards FROM movies
WHERE rating > 7.5 AND awards > 2

SELECT title, rating FROM movies
ORDER BY rating DESC


----- Clase 30: Uniones y funciones de agregación -----
----- Paso 1
SELECT series.title, genres.name
FROM series
INNER JOIN genres
ON series.genre_id = genres.id

SELECT episodes.title, actors.first_name, actors.last_name
FROM episodes
INNER JOIN actor_episode
ON episodes.id = actor_episode.episode_id
INNER JOIN actors
ON actors.id = actor_episode.actor_id

----- Paso 2
SELECT DISTINCT actors.first_name, actors.last_name
FROM movies
INNER JOIN actor_movie
ON movies.id = actor_movie.movie_id
INNER JOIN actors
ON actor_movie.actor_id = actors.id
WHERE movies.title LIKE "La Guerra de las galaxias%"

----- Paso 3 
SELECT movies.title, COALESCE(genres.name, "no tiene género")
FROM movies
LEFT JOIN genres
ON movies.genre_id = genres.id;

----- Paso 4
SELECT title, DATEDIFF(end_date, release_date) AS "Duracion"
FROM series

---- Paso 5
SELECT first_name, LENGTH(first_name)
FROM actors
GROUP BY first_name
HAVING LENGTH(first_name) > 6

SELECT COUNT(*)
FROM episodes

SELECT series.title, COUNT(seasons.id)
FROM series
INNER JOIN seasons
ON series.id = seasons.serie_id
GROUP BY series.title

SELECT genres.name, COUNT(movies.id)
FROM genres
INNER JOIN movies
ON genres.id= movies.genre_id
GROUP BY genres.name
HAVING COUNT(movies.id) >= 3

