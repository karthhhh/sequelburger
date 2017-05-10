CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    burger_date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
