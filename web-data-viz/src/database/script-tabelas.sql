
-- DROP DATABASE chacaraGouveia;

CREATE DATABASE chacaraGouveia;
USE chacaraGouveia;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200),
  email VARCHAR(100),
  idade INT,
  frequenciaContato VARCHAR(45),
  nivelEstresse VARCHAR(45),
  sentimento VARCHAR(45)
  );
  

CREATE TABLE simulacao (
  idSimulacao INT AUTO_INCREMENT,
  planta VARCHAR(45),
  meses VARCHAR(45),
  fkUsuario INT,
  PRIMARY KEY (idSimulacao, fkUsuario),
  CONSTRAINT fk_simulacao_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
  );
