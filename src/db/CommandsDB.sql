CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	userName VARCHAR(50) NOT NULL,
    userLogin VARCHAR(50) NOT NULL,
    userPassword VARCHAR(255) NOT NULL,
    userPokemonFavoriteType VARCHAR(50) NOT NULL,
    userCategory VARCHAR(50) NOT NULL
);

INSERT INTO users (userName, userLogin, userPassword, userPokemonFavoriteType, userCategory)
	VALUES ('Nick', 'nick.szk', '123', 'Dragon', 'Leader');
SELECT * FROM users;
SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE userName = '';
SELECT * FROM users WHERE userLogin = 'nick.szk' AND userPassword = '123';

DELETE FROM users WHERE id != 1;
ALTER TABLE users AUTO_INCREMENT = 2;

ALTER TABLE users RENAME COLUMN userPokemonFavotireType TO userPokemonFavoriteType;
