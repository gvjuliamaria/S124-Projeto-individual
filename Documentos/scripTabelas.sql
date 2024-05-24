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
  
ALTER TABLE usuario ADD CONSTRAINT chkfrequenciaContato 
CHECK (frequenciaContato IN('diariamente','semanalmente','mensalmente','raramente'));

ALTER TABLE usuario ADD CONSTRAINT chknivelEstresse
CHECK (nivelEstresse IN('baixo','medio','alto','muitoalto'));

ALTER TABLE usuario ADD CONSTRAINT chksentimento 
CHECK (sentimento IN('muitobem','bem','neutro','desconfortavel'));

CREATE TABLE simulacao (
  idSimulacao INT AUTO_INCREMENT,
  planta VARCHAR(45),
  meses VARCHAR(45),
  fkUsuario INT,
  PRIMARY KEY (idSimulacao, fkUsuario),
  CONSTRAINT fk_simulacao_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
  );
  
  INSERT INTO usuario VALUES 
  (default, 'julia','ju@hot.com',12,'diariamente','baixo','muito bem');
  
  INSERT INTO simulacao VALUES
  (default, );

SELECT * FROM usuario;
SELECT * FROM simulacao;