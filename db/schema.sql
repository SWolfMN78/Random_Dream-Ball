CREATE DATABASE dreamBall_db;

USE dreamBall_db;

CREATE TABLE dreamBall (
	id INT (10) AUTO_INCREMENT NOT NULL,
    characterName VARCHAR (100) NOT NULL,
    birthPlace VARCHAR (100) NOT NULL,
    fieldPosition VARCHAR (100) NOT NULL, 
    illusion VARCHAR (100) NOT NULL,
    powerPoints INT (10) NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (id)
);  