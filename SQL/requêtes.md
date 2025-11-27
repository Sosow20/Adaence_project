CREATE TABLE personnes_âgées (
    id INT PRIMARY KEY,
    prénom VARCHAR(250) NOT NULL,
    âge INT NOT NULL,
    métier VARCHAR(250),
    ville VARCHAR(250),
    code_postal VARCHAR(250),
    description VARCHAR(250)
);
DROP TABLE personnes_âgées


INSERT INTO personnes_âgées (id, prénom, âge, métier, ville, code_postal, description)
VALUES
('1','Franco', '95', 'Ouvrier d''usine', 'Saint-Etienne', '42000', 'Franco adore raconter ses souvenirs de l''usine et partager un bon café avec les jeunes du quartier.'),
('2','Soares','84','Puéricultrice','Angers','49000','Soares a consacré sa vie aux tout-petits et aime aujourd''hui transmettre tendresse et conseils de vie.'),
('3','Tim','80','Facteur','Aurillac','15000','Ancien facteur, Tim connaît chaque recoin de sa ville et adore les longues balades en bonne compagnie.'),
('4','Shimo','94','Professeure','Besançon','25000','Shimo a le cœur sur la main et des tas d’histoires passionnantes à raconter sur ses années d''enseignement.'),
('5','Zanon','86', 'Journaliste','Paris','75011','Zanon est curieuse du monde et adore échanger autour d''un bon livre ou d''un article d''actualité.'),
('6','Matveev','77','Pilote d''avion','Toulouse','31000','Pilote à la retraite, Matveev a mille anecdotes à partager sur ses voyages aux quatre coins du monde.'),
('7','Mahe','93','Mécanicienne','Le Mans','72000','Mahe a les mains d’or et le sourire généreux. Elle aime parler de mécanique, mais surtout de lien humain.'),
('8','Samir','82','Musicien', 'Lyon','69007','Musicien passionné, Samir aime improviser quelques notes et créer des moments chaleureux avec les jeunes.');

SELECT * FROM personnes_âgées

-- LIEN ENTRE LES PERSONNES AGEES ET USERS

CREATE TABLE type_moments(
    id INTEGER PRIMARY KEY,
    type VARCHAR (250) NOT NULL
);

INSERT INTO type_moments (id, type)
VALUES
('1','un repas'),
('2', 'un café/thé'),
('3','une promenade'),
('4', 'une sortie culturelle'),
('5','autre activité');

SELECT * FROM type_moments