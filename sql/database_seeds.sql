-- admins

INSERT INTO admins (
  name,
  email,
  password
) VALUES
  ('Luís Gonzales', 'luisgonzalezsalazar03@gmail.com', '1234'),
  ('Alejandro Rosas', 'alejandrojrosas2001@gmail.com', '1234');

-- categories

-- questions

-- quest_options

-- campus

INSERT INTO campus (
  name
) VALUES
  ('caracas'),
  ('guayana');

-- careers

INSERT INTO careers (
  name
) VALUES
  ('Administración de Empresas'),
  ('Contaduría Pública'),
  ('Relaciones Industriales'),
  ('Sociología'),
  ('Economía'),
  ('Derecho'),
  ('Letras'),
  ('Psicología'),
  ('Filosofía'),
  ('Educación'),
  ('Comunicación Social'),
  ('Ingeniería en Telecomunicaciones'),
  ('Ingeniería Civil'),
  ('Ingeniería Industrial'),
  ('Ingeniería Informática'),
  ('Arquitectura'),
  ('Teología');

-- careers_in_campus

INSERT INTO careers_in_campus (
  career_id, 
  campus_id
) VALUES
-- Administración de Empresas
(1, 1), (1, 2),
-- Contaduría Pública
(2, 1), (2, 2),
-- Relaciones Industriales
(3, 1), (3, 2),
-- Sociología
(4, 2),
-- Economía
(5, 2),
-- Derecho
(6, 1), (6, 2),
-- Letras
(7, 2),
-- Psicología
(8, 2),
-- Filosofía
(9, 2),
-- Educación
(10, 1), (10, 2),
-- Comunicación Social
(11, 1), (11, 2),
-- Ingeniería en Telecomunicaciones
(12, 2),
-- Ingeniería Civil
(13, 1), (13, 2),
-- Ingeniería Industrial
(14, 1), (14, 2),
-- Ingeniería Informática
(15, 1), (15, 2),
-- Arquitectura
(16, 2),
-- Teología
(17, 2);

-- users

-- answers