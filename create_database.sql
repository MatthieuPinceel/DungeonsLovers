CREATE DATABASE DungeonDatabase;

USE DungeonDatabase

CREATE USER 'DungeonLover'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'DungeonLover'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE TABLE users (UserId int NOT NULL AUTO_INCREMENT, LastName varchar(255), FirstName varchar(255), Username varchar(255) NOT NULL, Password varchar(255) NOT NULL, PRIMARY KEY (UserId));

CREATE TABLE otherInfos(MiscellaneousId int NOT NULL AUTO_INCREMENT, forward int NOT NULL, backward int NOT NULL, critBuffBonus varchar(255), isReligious boolean NOT NULL, providesItems varchar(255) NOT NULL, PRIMARY KEY (MiscellaneousId));

CREATE TABLE resistances(ResListId int NOT NULL AUTO_INCREMENT, Stun int NOT NULL, Blight int NOT NULL, Disease int NOT NULL, Move int NOT NULL, Bleed int NOT NULL, Debuff int NOT NULL, Trap int NOT NULL, DeathBlow int NOT NULL, PRIMARY KEY(ResListId));

CREATE TABLE heroes(HeroId int NOT NULL AUTO_INCREMENT, Name varchar(255), MaxHP int NOT NULL, Dodge double NOT NULL, Protection double NOT NUll, Speed double NOT NULL, AccuracyModifier double NOT NULL, CriticChance double NOT NULL, Damage double NOT NULL, ResListId int NOT NULL, MiscellaneousId int NOT NULL, imageURL varchar(255), PRIMARY KEY (HeroId), FOREIGN KEY (ResListId) REFERENCES resistances(ResListId), FOREIGN KEY (MiscellaneousId) references otherInfos(MiscellaneousId));