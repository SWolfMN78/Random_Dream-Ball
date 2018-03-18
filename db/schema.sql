CREATE DATABASE dreamBall_db;

USE dreamBall_db;

CREATE TABLE dreamBalls (
	id INT (10) AUTO_INCREMENT NOT NULL,
    charName VARCHAR (100) NOT NULL,
    homePlanet VARCHAR (100) NOT NULL,
    powerPoints INT (10) NOT NULL, 
    specialSkills INT (10) NOT NULL,
    charCost INT (10) NOT NULL,
    ownerID INT (10) NOT NULL,
    createdAt INT (10) NOT NULL,
    updatedAt INT (10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE userID (
	id INT (10) AUTO_INCREMENT NOT NULL,
    userName VARCHAR (100) NOT NULL,
    passWord INT (10) NOT NULL,
    teamName VARCHAR (100) NOT NULL,
    createdAt INT (10) NOT NULL,
    updatedAt INT (10) NOT NULL,     
    PRIMARY KEY (id)
);

CREATE TABLE skillTable (
	id INT (10) AUTO_INCREMENT NOT NULL,
    charSpecialSkill VARCHAR (100) NOT NULL,
    skillWeight INT (10) NOT NULL,
    createdAt INT (10) NOT NULL,
    updatedAt INT (10) NOT NULL,
    PRIMARY KEY (id)
);