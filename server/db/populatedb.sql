CREATE TABLE IF NOT EXISTS uporabnik (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS vadba (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  ime VARCHAR ( 255 ) NOT NULL,
  fk_uporabnik INT,
  FOREIGN KEY(fk_uporabnik) REFERENCES uporabnik(id)
);

CREATE TABLE IF NOT EXISTS vaja (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  ime VARCHAR ( 255 ) NOT NULL,
  opis TEXT
);

CREATE TABLE IF NOT EXISTS vaja_vadba (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  zaporedje_vaje INT NOT NULL,
  fk_vadba INT,
  fk_vaja INT,
  FOREIGN KEY(fk_vadba) REFERENCES vadba(id),
  FOREIGN KEY(fk_vaja) REFERENCES vaja(id)
);

INSERT INTO product (name, fk_category) 
VALUES
  ('Toilet paper roll', 1),
  ('Paper towels', 1),
  ('Paper tissues', 1);


INSERT INTO categories (name)
VALUES
  ('Paper');