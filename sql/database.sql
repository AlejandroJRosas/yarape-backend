-- Domains and Types
CREATE DOMAIN dom_name VARCHAR(64);
CREATE DOMAIN dom_email VARCHAR(64);
CREATE DOMAIN dom_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- 1

CREATE TABLE admins (
  admin_id INTEGER GENERATED ALWAYS AS IDENTITY,
  name dom_name NOT NULL,
  email dom_email UNIQUE NOT NULL,
  password VARCHAR(64) NOT NULL,
  created_at dom_created_at,
  PRIMARY KEY (admin_id)
);

-- 2

CREATE TABLE categories (
  category_id INTEGER GENERATED ALWAYS AS IDENTITY,
  description dom_name UNIQUE NOT NULL,
  PRIMARY KEY (category_id)
);

-- 3

CREATE TABLE questions (
  category_id INTEGER,
  question_id INTEGER GENERATED ALWAYS AS IDENTITY,
  description dom_name NOT NULL,
  PRIMARY KEY (category_id, question_id),
  CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories (category_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

-- 4

CREATE TABLE quest_options (
  category_id INTEGER,
  question_id INTEGER,
  option_id INTEGER GENERATED ALWAYS AS IDENTITY,
  description dom_name NOT NULL,
  value FLOAT NOT NULL,
  PRIMARY KEY (category_id, question_id, option_id),
  CONSTRAINT fk_questions_id FOREIGN KEY (category_id, question_id) 
    REFERENCES questions (category_id, question_id) 
    ON UPDATE CASCADE 
    ON DELETE RESTRICT,
  CONSTRAINT chk_value CHECK (value >= 0)
);

-- 5

CREATE TABLE campus (
  campus_id INTEGER GENERATED ALWAYS AS IDENTITY,
  name dom_name UNIQUE NOT NULL,
  PRIMARY KEY (campus_id)
);

-- 6

CREATE TABLE careers (
  career_id INTEGER GENERATED ALWAYS AS IDENTITY,
  name dom_name UNIQUE NOT NULL,
  PRIMARY KEY (career_id)
);

-- 7

CREATE TABLE careers_in_campus (
  career_id INTEGER,
  campus_id INTEGER,
  PRIMARY KEY (career_id, campus_id)
);

-- 8

CREATE TABLE users (
  user_id INTEGER GENERATED ALWAYS AS IDENTITY,
  name dom_name NOT NULL,
  is_ucab_member BOOLEAN NOT NULL,
  campus_id INTEGER, -- OPTIONAL si forma parte de la ucab
  role VARCHAR(64), -- OPTIONAL si forma parte de la ucab
  career_id INTEGER, -- OPTIONAL si su rol es de tipo estudiante
  PRIMARY KEY (user_id),
  CONSTRAINT fk_campus_id FOREIGN KEY (campus_id) REFERENCES campus (campus_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  CONSTRAINT fk_career_id FOREIGN KEY (career_id) REFERENCES careers (career_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

-- 9

CREATE TABLE answers (
  user_id INTEGER,
  category_id INTEGER,
  question_id INTEGER,
  option_id INTEGER,
  PRIMARY KEY (user_id, category_id, question_id, option_id),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  CONSTRAINT fk_questions_id FOREIGN KEY (category_id, question_id, option_id) 
    REFERENCES quest_options (category_id, question_id, option_id) 
    ON UPDATE CASCADE 
    ON DELETE RESTRICT
);
