-- admins

INSERT INTO admins (
  name,
  email,
  password
) VALUES
  ('Luís Gonzales', 'luisgonzalezsalazar03@gmail.com', '1234'),
  ('Alejandro Rosas', 'alejandrojrosas2001@gmail.com', '1234');

-- categories 🌱

INSERT INTO categories (
  description
) VALUES
  ();

-- questions 🌱

INSERT INTO questions (
  category_id,
  question_key,
  description
) VALUES
  ();

-- quest_options 🌱

INSERT INTO questions (
  category_id,
  question_id,
  option_id,
  description
) VALUES
  ();

-- campus

INSERT INTO campus (
  name
) VALUES
  ('guayana'),
  ('caracas');

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
  (1, 1), (1, 2), -- Administración de Empresas
  (2, 1), (2, 2), -- Contaduría Pública
  (3, 1), (3, 2), -- Relaciones Industriales
  (4, 2), -- Sociología
  (5, 2), -- Economía
  (6, 1), (6, 2), -- Derecho
  (7, 2), -- Letras
  (8, 2), -- Psicología
  (9, 2), -- Filosofía
  (10, 1), (10, 2), -- Educación
  (11, 1), (11, 2), -- Comunicación Social
  (12, 2), -- Ingeniería en Telecomunicaciones
  (13, 1), (13, 2), -- Ingeniería Civil
  (14, 1), (14, 2), -- Ingeniería Industrial
  (15, 1), (15, 2), -- Ingeniería Informática
  (16, 2), -- Arquitectura
  (17, 2); -- Teología

-- users 🌱

INSERT INTO users (
  name,
  is_ucab_member,
  campus_id,
  role,
  career_id
) VALUES
  ();

-- answers 🌱

INSERT INTO answers (
  user_id,
  category_id,
  question_id,
  option_id
) VALUES
  ();
