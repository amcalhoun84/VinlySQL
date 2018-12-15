-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vinlydemo
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `beer`
--

DROP TABLE IF EXISTS `beer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beer` (
  `beer_id` int(11) NOT NULL AUTO_INCREMENT,
  `beer_type` varchar(100) NOT NULL,
  `notes` varchar(100) NOT NULL,
  `intensity` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`beer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beer`
--

LOCK TABLES `beer` WRITE;
/*!40000 ALTER TABLE `beer` DISABLE KEYS */;
INSERT INTO `beer` VALUES (18,'Ale','Spiced, Hoppy, Malty','Intense, Bold','Amber','A wide family of beers that has a great deal of versatility. Usually intense and bold.'),(19,'Blonde Ale','Dry, Crisp, Malty','Assertive, Acidic','Pale Gold','Ale\'s lighter relative. Generally drier and crisper, but very good.'),(20,'Lager','Bready, Sweet or Dry','Smooth, Accessible','Golden','Accessible beers, can be sweet or bitter'),(21,'Pilsner','Dry, Crisp, Bready','Medium Body, Accessible','Pale Gold','Bready, classic.'),(22,'Porter','Coffee, Chocolate, Bread','Assertive, Balanced','Dark Red','Sweeter, malty beer.'),(23,'Stout','Dark Coffee, Nutty','Intense, Assertive','Very Dark Red','Guinness is the most famous, but a drier alternative to porter'),(24,'India Pale Ale','Hoppy, Malty, Floral','Intense, Aggressive','Deep Brown','Pale Ale\'s hoppier brother. Intense and floral. Great with spicy food.'),(25,'Cream Ale','Sweet, Creamy, Malty','Mild, Accessible','Golden','A very mild, easy ale.'),(26,'Wheat','Fruity, Ester, Baking Spice','Accessible, Mild','Hazy Gold','Very easy to drink.'),(27,'Bock','Sweet, Malty','Bold, Roasty','Dark Red','Truly, an extravagence in a glass');
/*!40000 ALTER TABLE `beer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-14 16:53:45
