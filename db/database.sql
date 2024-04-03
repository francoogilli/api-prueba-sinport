CREATE DATABASE IF NOT EXISTS empleadosdb;

USE empleadosdb;

CREATE TABLE empleado(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) DEFAULT NULL,
    salario INT(10) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleado;


INSERT INTO empleado VALUES
    (1, 'Prueba 1', 1000),
    (2, 'Prueba 2', 2000),
    (3, 'Prueba 3', 3000),
    (4, '¡Prueba 4!', 4000);