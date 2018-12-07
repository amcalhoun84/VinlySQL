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
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `food_id` int(11) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(100) NOT NULL,
  `food_type` varchar(100) NOT NULL,
  `primary_flavor` varchar(100) NOT NULL,
  `food_grouping` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Chicken Parmesean Pizza','Pizza','Sauce and Cheese','Pasta','A pizza topped with the trimmings of chicken parmesean.'),(2,'Lamb Vindaloo','Indian','Hot Spice, Meat','Red Meat','A hot and spicy classic. Bring the heat!'),(3,'Chicken Tarragon','French','Herbal, Creamy','Poultry','A delicious, deceptively easy dish that will impress everyone.'),(4,'Hamburger','American','Meat, Savory','Red Meat','The classic BBQ standby.'),(5,'Spaghetti Bolognese','Italian','Savory, Tomato','Pasta','A family style favorite.'),(6,'Sushi','Japanese','Savory, Salty','Vegetable','Rolled, vinegared rice in seaweed.'),(7,'Sashimi','Japanese','Varies, generally mild','Fish','This is what most people associate with sushi. This is the finely cut fish, meat, or vegetable.'),(8,'Fried Chicken','American','Bread, Chicken','Poultry','Comfort food staple.'),(9,'Crudite','Hors D\'ouvre','Crispy, Crunchy','Vegetable','Assorted veggies, often artfully cut up.'),(10,'Charcuterie','International','Smoked, Cured, Cheese','Cheese','Meat and cheese.');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
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
