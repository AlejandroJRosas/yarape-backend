-- admins ✅

INSERT INTO admins (
  name,
  email,
  password
) VALUES
  ('Luís Gonzales', 'luisgonzalezsalazar03@gmail.com', '1234'),
  ('Alejandro Rosas', 'alejandrojrosas2001@gmail.com', '1234');

-- categories ✅

INSERT INTO categories (
  category_id,
  description
) VALUES
  (1, 'Vivienda'),
  (2, 'Transporte'),
  (3, 'Alimentos'),
  (4, 'Agua'),
  (5, 'Compras'),
  (6, 'Producción de residuos'),
  (7, 'Energía');

-- questions ✅

INSERT INTO questions (
  category_id,
  question_id,
  question_key,
  description
) VALUES
  -- Categoria Vivienda
  (1, 1, 'enQueCasaVives', '¿En qué tipo de casa vives?'),
  (1, 2, 'livingSize', 'La casa en la que vives es:'),
  (1, 3, 'personasQueHabitan', '¿Cuántas personas habitan la vivienda?'),
  -- Caregoria Transporte
  (2, 1, 'transportMethod', '¿Qué medio frecuentas para trasladarte?'),
  (2, 2, 'isElectrical', '¿Es un vehículo eléctrico?'),
  (2, 3, 'quantityPeopleTransport', '¿Sueles llevar a personas en tu vehículo?'),
  (2, 4, 'distanceHouse', '¿Qué tanto recorres diariamente en tu medio de transporte?'),
  (2, 5, 'fliesYear', '¿Cuántas veces realizas viajes en avión al año?'),
  -- Categoria Alimentos
  (3, 1, 'enQueSeBasaTuDieta', '¿En qué se basa tu dieta común?'),
  (3, 2, 'tipoDeCarneFrecuente', '¿Qué tipo de carne sueles consumir?'),
  (3, 3, 'consumesCarneDiario', '¿Consumes carnes diariamente?'),
  (3, 4, 'consumesComidaImportada', '¿Consumes alimentos importados?'),
  -- Categoria Agua
  (4, 1, 'usasLosBanosDeUniversidad', '¿Cuántas veces vas al baño al día?'),
  (4, 2, 'usasLosFiltrosDeLaUniversidad', '¿Cuánto tiempo te tomas al ducharte?'),
  -- Categoria Compras
  (5, 1, 'vestimentaComun', 'Tu vestimenta comun es:'),
  (5, 2, 'tuRopaEsImportada', '¿Tu ropa es importada?'),
  -- Categoria Produccion de residuos
  (6, 1, 'usasCuadernosReciclados', '¿Usas productos reciclados?'),
  (6, 2, 'comprasProductosQueVenganEnPlastico', '¿Compras productos que vengan en envases plásticos?'),
  (6, 3, 'tuReutilizasLosProductos', '¿Reutilizas esos envases?'),
  -- Categoria Energia
  (7, 1, 'tienesBombillosAhorradoresEnCasa', '¿Tienes bombillos ahorradores en tu casa?'),
  (7, 2, 'cuantasHorasUsasElAire', '¿Cuántas horas usas el aire acondicionado al día?');

-- quest_options ✅

INSERT INTO quest_options (
  category_id,
  question_id,
  option_id,
  description,
  amount
) VALUES
  -- Categoria 1
  -- Pregunta 1
  (1, 1, 1, 'Apartamento', 237),
  (1, 1, 2, 'Casa / Townhouse', 1),
  -- Pregunta 2
  (1, 2, 1, 'Casa pequeña (2 habitaciones)', 1700),
  (1, 2, 2, 'Casa mediana (3 - 4 habitaciones)', 3400),
  (1, 2, 3, 'Casa grande (+5 habitaciones)', 5000),
  -- Pregunta 3
  (1, 3, 1, 'Vivo solo/a', 1),
  (1, 3, 2, '2 personas', 0.2),
  (1, 3, 3, '3 personas', 0.3),
  (1, 3, 4, '+4 personas', 0.5),
  -- Categoria 2
  -- Pregunta 1
  (2, 1, 1, 'Carro', 0.17),
  (2, 1, 2, 'Moto', 0.12),
  (2, 1, 3, 'Autobus', 0.04),
  (2, 1, 4, 'Bicicleta', 0.02),
  (2, 1, 5, 'Camino', 0),
  -- Pregunta 2
  (2, 2, 1, 'Si', 0.01),
  (2, 2, 2, 'No', 1),
  -- Pregunta 3
  (2, 3, 1, 'Si', 0.2),
  (2, 3, 2, 'No', 3),
  -- Pregunta 4
  (2, 4, 1, '0-2km', 1040),
  (2, 4, 2, '3-5km', 2600),
  (2, 4, 3, '+6km', 3120),
  -- Pregunta 5
  (2, 5, 1, '1 vez', 100),
  (2, 5, 2, '2-3 veces', 250),
  (2, 5, 3, '+4 veces', 500),
  (2, 5, 4, 'No suelo viajar', 0),
  -- Categoria 3
  -- Pregunta 1
  (3, 1, 1, 'Carne/Lacteos/vegetales', 1.46),
  (3, 1, 2, 'Carne/Lacteos', 1.34),
  (3, 1, 3, 'Vegetariana', 1800),
  (3, 1, 4, 'Vegana', 1500),
  -- Pregunta 2
  (3, 2, 1, 'Carnes Rojas', 5.4),
  (3, 2, 2, 'Carnes Blancas', 3.6),
  -- Pregunta 3
  (3, 3, 1, 'Si', 365),
  (3, 3, 2, 'No', 200),
  -- Pregunta 4
  (3, 4, 1, 'Si', 700),
  (3, 4, 2, 'No', 0),
  -- Categoria 4
  -- Pregunta 1
  (4, 1, 1, '1 vez', 0.825),
  (4, 1, 2, '2-3 veces', 1.65),
  (4, 1, 3, '+3 veces', 3.3),
  -- Pregunta 2
  (4, 2, 1, '1-5 min', 31.5),
  (4, 2, 2, '5-10 min', 60.3),
  (4, 2, 3, '10-15 min', 94.5),
  (4, 2, 4, '+15 min', 126),
   -- Categoria 5
  -- Pregunta 1
  (5, 1, 1, 'De segunda mano', 60),
  (5, 1, 2, 'Nueva', 360),
  -- Pregunta 2
  (5, 2, 1, 'Si', 369),
  (5, 2, 2, 'No', 0),
  -- Categoria 6
  -- Pregunta 1
  (6, 1, 1, 'Si', 40.2),
  (6, 1, 2, 'No', 60.4),
  -- Pregunta 2
  (6, 2, 1, 'Si', 192),
  (6, 2, 2, 'No', 25),
  -- Pregunta 3
  (6, 3, 1, 'Si', -96.2),
  (6, 3, 2, 'No', 0),
  -- Categoria 7
  -- Pregunta 1
  (7, 1, 1, 'Si', 403),
  (7, 1, 2, 'No', 672),
  -- Pregunta 2
  (7, 2, 1, '1-3hrs', 672),
  (7, 2, 2, '3-6hrs', 1680),
  (7, 2, 3, '+7hrs', 2352),
  (7, 2, 4, 'No uso AC', 0);

-- campus ✅

INSERT INTO campus (
  name
) VALUES
  ('guayana'),
  ('caracas');

-- careers ✅

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

-- careers_in_campus ✅

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
