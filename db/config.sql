-- ---
-- Globals
-- ---

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP DATABASE IF EXISTS `guideme`;

CREATE DATABASE `guideme`;

USE guideme;

DROP TABLE IF EXISTS `Users`;
 
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NULL DEFAULT NULL,
  `password` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
-- CREATE TABLE `Users` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `username` VARCHAR(25) NULL DEFAULT NULL,
--   `password` VARCHAR(150) NULL DEFAULT NULL,
--   `isGuide` BOOLEAN(1) NULL DEFAULT 0,
--   `image` VARCHAR(200) NULL DEFAULT NULL,
--   `tel` VARCHAR(10) NULL DEFAULT NULL,
--   `email` VARCHAR(20) NULL DEFAULT NULL,
--   `bio` MEDIUMTEXT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );
-- ---
-- Table 'Tours'
-- 
-- ---

DROP TABLE IF EXISTS `Tours`;
 
CREATE TABLE `Tours` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(200) NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `price` VARCHAR(100) NULL DEFAULT NULL,
  `rating` FLOAT NULL DEFAULT 0,
  `numReviews` INTEGER NULL DEFAULT 0,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `duration` VARCHAR(20) NULL DEFAULT NULL,
  `location` VARCHAR(100) NULL DEFAULT NULL,
  `id_Guide` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Reviews'
-- 
-- ---

DROP TABLE IF EXISTS `Reviews`;
 
CREATE TABLE `Reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NULL DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `title` VARCHAR(50) NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `id_Tours` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'travelers_tours'
-- 
-- ---

DROP TABLE IF EXISTS `travelers_tours`;
 
CREATE TABLE `travelers_tours` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `id_Tours` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Tours` ADD FOREIGN KEY (id_Guide) REFERENCES `Users` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (id_Tours) REFERENCES `Tours` (`id`);
ALTER TABLE `travelers_tours` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `travelers_tours` ADD FOREIGN KEY (id_Tours) REFERENCES `Tours` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Tours` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `travelers_tours` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---
INSERT INTO `Users` (`username`,`password`) VALUES
('mark','$2a$10$bWZKl.MMpxTyBnNW2c8mbuU4eVhJojv3OfGfX4yFeCTDF8QwTDw0u');

INSERT INTO `Users` (`username`,`password`) VALUES
('alison','$2a$10$bWZKl.MMpxTyBnNW2c8mbuU4eVhJojv3OfGfX4yFeCTDF8QwTDw0u');



INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`, `location`, `id_Guide`) VALUES
('https://s-media-cache-ak0.pinimg.com/originals/58/3a/dd/583add86c194fa2de17ce38b88644435.jpg',
'Find a perfect girl with me in club',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'335 Powell St, San Francisco, CA 94102',
'Mark');

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`location`,`id_Guide`) VALUES
('http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000001168352_small.jpg',
'Jump in to Golden Gate Bridge',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'Golden Gate Bridge, San Francisco, CA 94129',
'Mark');

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`location`,`id_Guide`) VALUES
('https://waterworldswim.com/wp-content/uploads/2014/08/maggietidmore11.jpg',
'Swimming under the Golden Gate Bridge',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'Golden Gate Bridge, San Francisco, CA 94129',
'Mark');

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`location`,`id_Guide`) VALUES
('https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg',
'Visit really secret place',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'280 Geary St, San Francisco, CA 94108',
'Mark');

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`location`,`id_Guide`) VALUES
('http://hotinjuba.com/wp-content/uploads/2016/09/woman-smoking-weed.jpg',
'Smoke weed with me',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'899 Market St, San Francisco, CA 94103',
'Mark');

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`, `location` ,`id_Guide`) VALUES
('https://a0.muscache.com/im/pictures/89957997-2e3f-40cb-8f0b-dcbd5626bd9c.jpg?aki_policy=large',
'Maverick Biker',
500,
4.9,
120,
"Make sure you've showered, shaved, and cleaned off. You want to give the best first impression you can when meeting people, and that starts, for better or worse, with your physical appearance. Luckily, looking good does not actually take a lot of work clean off, brush your teeth, and wear clean, crisp clothes.",
'2 Days',
'3301 Lyon St, San Francisco, CA 94123',
'Mark');
