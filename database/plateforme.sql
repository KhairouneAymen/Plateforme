-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 23 août 2022 à 18:15
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `plateforme_éducative`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnements`
--

;
CREATE TABLE `abonnements` (
  `IDab` int(8) NOT NULL,
  `type` varchar(255) NOT NULL,
  `prix` float NOT NULL,
  `validité` varchar(255) NOT NULL,
  `ID` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `abonnements`:
--   `ID`
--       `utilisateurs` -> `ID`
--

-- --------------------------------------------------------

--
-- Structure de la table `examens`
--

CREATE TABLE `examens` (
  `EXID` int(8) NOT NULL,
  `EXtitre` varchar(255) NOT NULL,
  `EXtype` varchar(255) NOT NULL,
  `EXniveau` varchar(255) NOT NULL,
  `EXspécialité` varchar(255) NOT NULL,
  `ID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `examens`:
--   `ID`
--       `utilisateurs` -> `ID`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `ID` int(8) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `datenaissance` date NOT NULL,
  `tel` int(8) NOT NULL,
  `niveau` varchar(255) NOT NULL,
  `spécialité` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `utilisateurs`:
--

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD PRIMARY KEY (`IDab`),
  ADD UNIQUE KEY `IDab` (`IDab`),
  ADD KEY `Index IDAB` (`ID`) USING BTREE;

--
-- Index pour la table `examens`
--
ALTER TABLE `examens`
  ADD PRIMARY KEY (`EXID`),
  ADD UNIQUE KEY `EXID` (`EXID`),
  ADD KEY `FK_examsID` (`ID`),
  ADD KEY `Index IDEXAM` (`EXID`) USING BTREE;

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `Index ID` (`ID`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `abonnements`
--
ALTER TABLE `abonnements`
  MODIFY `IDab` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `examens`
--
ALTER TABLE `examens`
  MODIFY `EXID` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD CONSTRAINT `FK_ID` FOREIGN KEY (`ID`) REFERENCES `utilisateurs` (`ID`);

--
-- Contraintes pour la table `examens`
--
ALTER TABLE `examens`
  ADD CONSTRAINT `FK_examsID` FOREIGN KEY (`ID`) REFERENCES `utilisateurs` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
