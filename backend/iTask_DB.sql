DROP DATABASE IF EXISTS iTask_DB;
CREATE DATABASE iTask_DB;
USE iTask_DB;

CREATE TABLE status (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO status
  (`name`)
VALUES
  ('pendente'), ('em andamento'), ('pronto');

CREATE TABLE task (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `status_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  FOREIGN KEY (`status_id`) REFERENCES status (`id`)
);

INSERT INTO iTask_DB.task
	(`name`, `status_id`, `created_at`)
VALUES
  ('Lavar a louça', 1, NOW()),
  ('Escovar os dentes', 3, NOW()),
  ('Assistir TV', 2, NOW());