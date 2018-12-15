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
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `food_id` int(11) NOT NULL AUTO_INCREMENT,
  `food_type` varchar(45) NOT NULL,
  `primary_flavor` varchar(45) NOT NULL,
  `food_group` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (17,'Steak','Savory, Fatty','Red Meat','Finer cuts of beef.'),(18,'Hamburger','Salty, Savory','Red Meat','Ground red meat.'),(19,'Lamb','Savory','Red Meat','Flavorful meat, a popular alternative to steak.'),(20,'Mutton','Salty, Savory, Gamy','Red Meat','A bit tougher than lamb, but great for stew.'),(21,'Venison','Gamy, Savory','Red Meat','Requires skillful cooking, but delicious.'),(22,'Pork','Sweet, Savory','Red Meat','Requires skillful cooking, but delicious.'),(23,'Ham','Salty, Savory','Red Meat','Requires skillful cooking, but delicious.'),(24,'Chicken','Savory','Poultry','Classic white meat.'),(25,'Turkey','Savory','Poultry','Lean white meat.'),(26,'Duck','Savory, Gamy','Poultry','A popular game bird.'),(27,'Goose','Savory, Greasy','Poultry','Can be greasy, but a classic for Christmas.'),(28,'Shellfish','Sweet, Savory','Seafood','Crustaceans, like Shrimp, Lobster, and Crab.'),(29,'Mollusk','Sweet, Savory','Seafood','Clam, Mussel, Oysters.'),(30,'Light Fish','Mild, Savory','Seafood','Tilapia, Cod, Halibut'),(31,'Dark Fish','Strong, Savory','Seafood','Salmon, Tuna, Swordfish'),(32,'Squid','Gamy, Sweet','Seafood','A multi-armed critter that makes great calamari rings'),(33,'Crudite','Crisp','Vegetable','Artfully cut vegetables.'),(34,'Soft Cheese','Creamy','Dairy','Soft cheese, spreadable'),(35,'Hard Cheese','Savory','Dairy','Great for cutting and putting on crackers'),(36,'Egg Dish','Savory','Dairy','Versatile dishes, often savory, with vegetable'),(37,'Roasted Vegetable','Savory','Vegetable','Savory vegetables.'),(38,'Dessert','Sweet','Sugar','Surprisingly able to paired with beer and wine.'),(39,'White Pasta','Starch, Creamy','Starch','Pastas that pair well with white wines.'),(40,'Red Pasta','Starch, Sacory','Starch','Pastas that pair well with red wines.'),(41,'Cured Meat','Savory, Salty','Cured Meat','Smoky and cured food');
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

-- Dump completed on 2018-12-14 16:53:45
