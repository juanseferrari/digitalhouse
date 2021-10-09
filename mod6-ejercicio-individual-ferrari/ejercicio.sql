
--DROP DATABASE `users_notes`;
CREATE DATABASE `users_notes`;
USE users_notes;


--DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  email VARCHAR(300) NOT NULL
) default charset utf8;

CREATE TABLE notas (
    id_nota INT(12) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    fecha_creacion timestamp NULL DEFAULT NULL,
    fecha_modificacion timestamp NULL DEFAULT NULL,
    descripcion VARCHAR(10) NOT NULL,
    eliminable TINYINT(1) NOT NULL ,
    id_usuario INT(12) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES 
(DEFAULT, 'Alex Gopal Barlow', 'alex@gmail.com'), 
(DEFAULT, 'Ashley R. Haner', 'AshleyRHaner@dayrep.com'),
(DEFAULT, 'Joe C. Becker', 'JoeCBecker@dayrep.com'),
(DEFAULT, 'Perpetuo Loya Ledesma', 'PerpetuoLoyaLedesma@armyspy.com'),
(DEFAULT, 'Viridiana Najera Sánchez', 'ViridianaNajeraSanchez@jourrapide.com'),
(DEFAULT, 'Charles P. Sexton', 'CharlesPSexton@teleworm.us'),
(DEFAULT, 'Gloria S. Cox', 'GloriaSCox@jourrapide.com'),
(DEFAULT, 'Edna M. Rodriguez', 'EdnaMRodriguez@teleworm.us'),
(DEFAULT, 'Travis P. Findlay', 'TravisPFindlay@dayrep.com'),
(DEFAULT, 'Lisa F. Fisher', 'LisaFFisher@rhyta.com');


--DROP TABLE IF EXISTS notas;

INSERT INTO notas 
VALUES (DEFAULT,'Contabilidad', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 7, false, 1),
(DEFAULT,'Arquitectura', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 3, true, 2),
(DEFAULT,'Gestion de Negocios', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 10, false, 3),
(DEFAULT,'Programación I', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 9, true, 4),
(DEFAULT,'Programación II', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 7, false, 5),
(DEFAULT,'Microeconomía', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 1, true, 6),
(DEFAULT,'Macroeconomía', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 8, false, 7),
(DEFAULT,'JavaScript', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 9, true, 8),
(DEFAULT,'Bases de Datos', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 10, true, 9),
(DEFAULT,'Sistemas de Gestión', '2019-01-01 00:00:00', '2011-01-01 00:00:00', 6, true, 10);

