\c postgres

DROP DATABASE yarapeback;

CREATE DATABASE yarapeback
ENCODING = 'UTF8'
LC_COLLATE = 'es_ES.UTF-8'
LC_CTYPE = 'es_ES.UTF-8'
TEMPLATE = template0;

\c yarapeback
