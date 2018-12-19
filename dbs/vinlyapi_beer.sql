-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vinlyapi
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
  `beer_name` varchar(100) NOT NULL,
  `brewery` varchar(100) DEFAULT NULL,
  `region` varchar(100) NOT NULL,
  `beer_type` varchar(100) NOT NULL,
  `notes` varchar(100) NOT NULL,
  `intensity` varchar(100) NOT NULL,
  `color` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`beer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beer`
--

LOCK TABLES `beer` WRITE;
/*!40000 ALTER TABLE `beer` DISABLE KEYS */;
INSERT INTO `beer` VALUES (1,'Firestone Walker 805','Firestone','Central Coast California, SAN LUIS','Blonde Ale','Bready, sweet','Light, accessible','Amber','A light, flavorful beer.'),(2,'IPA','Lagunitas','Northern California','India Pale Ale','Bready, Bitter, Hoppy','Acrid, Intense','Dark Brown','Beer Speaks, People Mumble'),(3,'Celebration','Sierra Nevada','Chico, California','Fresh Hop India Pale Ale','Hoppy, Bitter, Slightly Sweet','Heady, Accessible','Red-Brown','Christmas Brew'),(4,'Coors Light','Coors-Miller Brewing','Golden, Colorado','Light Lager','Sweet, Light','Accessible, Average, Sulfuric','Golden','A classic, accessible American standy. Should be drunk cold.'),(5,'Newcastle','Newcastle Brewing','Newcastle, UK','Brown Ale','Bready, Mouthy, Flavorful','Relaxed, Balanced','Deep Brown','A great beer to have with roasts or on a cold night.'),(6,'Lil Sumthin\' Sumthin','Lagunitas','Northern California','India Pale Ale','Bready, Bitter, Hoppy','Intense, Mouthy','Medium Brown','Has a cute pinup girl on the bottle.'),(7,'Sierra Nevada','Sierra Nevada','Chico, California','Pale Ale','Bitter, Heavy','Smooth, Intense','Medium Brown','The Original. The Classic. Sierra Nevada Pale Ale. Good beer for those just starting to drink heavies.'),(8,'High Life','Coors-Miller Brewing','Golden, Colorado','Lager','Sweet, Light','Accessible, Average, Bitey','Golden','The high end of Miller\'s offerings. Enjoyable at a BBQ. The Champagne of Beers.'),(9,'Banquet','Coors-Miller Brewing','Golden, Colorado','Brown Ale','Bready, Mouthy, Flavorful','Relaxed, Balanced','Deep Brown','A great beer to have with roasts or on a cold night.'),(10,'Blue Ribbon','Pabst','Miluakee, Wisconsin','Pilsner','Light, White Bread','Mild, Accessible','Light Gold','The classic College Beer. I miss $2.50 for a 12-pack at Albertsons on Wednesday.'),(11,'Natural Ice','Coors-Miller Brewing','Golden, Colorado','Light Pilsner','Bready, Slight Fruit','Mild, Accessible','Light Gold','Have a rager coming up? Get a 24-pack for like $6 back in 2005.'),(12,'Pabst American','Pabst','Miluakee, Wisconsin','American Pale Ale','Heady, Sharp, Dark Bread','Intense, Acrid','Medium Brown','A surprisingly competent offering into the APA market by Pabst. One to watch.');
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

-- Dump completed on 2018-12-07  9:49:41
