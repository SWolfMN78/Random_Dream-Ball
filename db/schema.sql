CREATE DATABASE dreamBall_db;

USE dreamBall_db;

CREATE TABLE dreamBall (
	id INT (10) AUTO_INCREMENT NOT NULL,
    charName VARCHAR (100) NOT NULL,
    homePlanet VARCHAR (100) NOT NULL,
    powerPoints INT (10) NOT NULL, 
    specialSkills INT (10) NOT NULL,
    charCost INT (10) NOT NULL,
    ownerID INT (10) NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (id)
);   