CREATE DATABASE  IF NOT EXISTS `vinlydemo` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `vinlydemo`;
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

--
-- Table structure for table `beer_food_pairing`
--

DROP TABLE IF EXISTS `beer_food_pairing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beer_food_pairing` (
  `beer_pairing_id` int(11) NOT NULL AUTO_INCREMENT,
  `beer_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`beer_pairing_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beer_food_pairing`
--

LOCK TABLES `beer_food_pairing` WRITE;
/*!40000 ALTER TABLE `beer_food_pairing` DISABLE KEYS */;
INSERT INTO `beer_food_pairing` VALUES (1,18,17),(3,18,22),(4,18,23),(5,18,24),(6,18,25),(7,18,26),(9,18,18),(11,18,33),(17,18,27),(19,19,22),(20,19,23),(21,19,24),(22,19,34),(23,19,35),(24,19,36),(25,27,36),(26,27,38),(27,27,41),(28,27,17),(29,27,34),(31,26,39),(32,26,30),(33,26,31),(34,26,32),(35,26,34);
/*!40000 ALTER TABLE `beer_food_pairing` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `user_favorite_beer`
--

DROP TABLE IF EXISTS `user_favorite_beer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_favorite_beer` (
  `favorite_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `beer_id` int(11) NOT NULL,
  PRIMARY KEY (`favorite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorite_beer`
--

LOCK TABLES `user_favorite_beer` WRITE;
/*!40000 ALTER TABLE `user_favorite_beer` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_favorite_beer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favorite_food`
--

DROP TABLE IF EXISTS `user_favorite_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_favorite_food` (
  `favorite_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`favorite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorite_food`
--

LOCK TABLES `user_favorite_food` WRITE;
/*!40000 ALTER TABLE `user_favorite_food` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_favorite_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favorite_wine`
--

DROP TABLE IF EXISTS `user_favorite_wine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_favorite_wine` (
  `favorite_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `wine_id` int(11) NOT NULL,
  PRIMARY KEY (`favorite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorite_wine`
--

LOCK TABLES `user_favorite_wine` WRITE;
/*!40000 ALTER TABLE `user_favorite_wine` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_favorite_wine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` char(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'bcrypttest','Test','Test','Test','bcrypt@gmail.com','$2b$10$lUZUNp0uMkO8wAQNwgmnuOYRGvELgJa7R1lD4m4/doVz9Ybwz2Q.K');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wine`
--

DROP TABLE IF EXISTS `wine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wine` (
  `wine_id` int(11) NOT NULL AUTO_INCREMENT,
  `varietal` varchar(100) NOT NULL,
  `flavor_profile` varchar(100) NOT NULL,
  `notes` varchar(100) NOT NULL,
  `body` varchar(32) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`wine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine`
--

LOCK TABLES `wine` WRITE;
/*!40000 ALTER TABLE `wine` DISABLE KEYS */;
INSERT INTO `wine` VALUES (18,'Pinot Noir','Dark Fruit, Cherry, Currant','Rose, Acidic','Medium-Dry','A light red that is well balanced and versatile.'),(19,'Cabernet Sauvignon','Pepper, Oak, Dark Fruit','Oaky, Spiced, Cherry','Semi-Dry','A deeper red with a lot of body and great for starting wine drinkers trying to get into dryer bodied wines.'),(20,'Merlot','Red Fruit, Spiced, Earthy','Baking Spice, Blackfruit, Plum','Dry','A once popular red, good for barbeques and meat dishes.'),(21,'Zinfandel','Pepper, Anise, Blackberry','Red Berry, Red Fruit','Dry','Accessible beers, can be quite sweet like candy.'),(22,'Malbec','Tannic, Plum, Cherry','Jam, Blackberry','Dry','Surprisingly versatile with both meat and cheese.'),(23,'Viognier','Fruity, Sweet, Tropical','Mango, Rose, Peach','Medium Sweet','Chardonnay\'s saucier cousin.'),(24,'Grenache','Spicy, Berry, Red Fruit','Leather, White Pepper','Medium','A variable wine, settling around medium. Is very versatile and heavily dependent on the grape season and vintage.'),(25,'Sangiovese','Spice, Berry, Earthy','Cherry, Tar, Strawberry','Medium','Italian wine known for its flavor. Can be either heeavier on berry or tar depending on how long it has been aged.'),(26,'Semillion','Citrus, Lemon, Green Apple','Sour, Honey','Semi-Dry','A widely spread grape varietal that can produce versatile wines. Originated from France.'),(27,'Chenin Blanc','Green Apple, ','Oak. Verbana, Mellow Flavor','Dry','A flavorful dry wine, great for cured meats and crudite. Can be sweet as well.'),(28,'Moscato','Honeysuckle, Citrus, Pear','Orange, Lightly Acid','Variable','A highly versatile wine that can be fizzy or still, and the region of the grapes can greatly influence flavor.'),(29,'Chardonnay','Apple, Butter, Vanilla','Melon, Oak','Variable','A popular and versatile wine grape. Can be creamy or crisp, oaky or buttery. Great chilled on a warm summer evening.'),(30,'Riesling','Citrus, Honey, Diesel','Acid, Vanilla, Jasmine','Variable','Aromatic wine, usually sweet, but can also be bone dry depending on vintage.'),(31,'Gewuerztraminer','Citrus, Sweet','Rose, Ginger','Medium-Dry','Intense and floral. A favorite from Germany.'),(32,'Pinot Grigio','Fruity, Mineral','Stone, Melon, Flower','Variable','Of three types, this wine can be dry and fruit, sweet and fruity, or dry and mineral.'),(33,'Sauvignon Blanc','Herbal, Green Apple, Melon','Peach, Citrus, Cranberry','Dry','A wonderful, acidic wine that is highly versatile and much beloved.'),(34,'Tempranillo','Cherry, Fig, Dill','Tobacco, Cedar, Tannic','Dry','Spanish wine, can be quite oaky.'),(35,'Nebbiolo','Tannic, Cherry, Anise','Leather, Clay, Rose','Bone Dry','A highly tannic, acidic wine of great fame from Italy.'),(36,'Syrah','Tart Fruit, Jam','Blackberry, Boysenberry, Pepper','Medium','A dark red wine, often blended, but a bold finish if drunk pure.');
/*!40000 ALTER TABLE `wine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wine_food_pairing`
--

DROP TABLE IF EXISTS `wine_food_pairing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wine_food_pairing` (
  `wine_pairing_id` int(11) NOT NULL AUTO_INCREMENT,
  `wine_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`wine_pairing_id`),
  KEY `food_pair_idx` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine_food_pairing`
--

LOCK TABLES `wine_food_pairing` WRITE;
/*!40000 ALTER TABLE `wine_food_pairing` DISABLE KEYS */;
INSERT INTO `wine_food_pairing` VALUES (1,18,31),(2,18,22),(3,18,23),(4,18,24),(5,18,25),(6,18,26),(7,18,27),(8,18,28),(9,18,29),(10,18,39),(11,18,40),(12,18,41),(14,19,17),(15,19,18),(16,19,19),(17,19,20),(18,19,21),(19,19,41),(20,19,34),(21,19,35),(22,19,37),(23,36,41),(24,36,17),(25,36,18),(26,36,19),(27,36,20),(28,36,21),(30,36,34),(31,36,35),(32,36,37),(34,20,23),(35,20,24),(36,20,25),(37,20,26),(38,20,18),(39,20,19),(40,20,17),(41,20,20),(42,20,21),(43,20,22),(44,21,37),(45,21,22),(46,21,23),(47,21,24),(48,21,25),(49,21,26),(50,21,18),(51,21,19),(52,21,17),(53,21,20),(54,21,21),(56,21,41),(57,21,40),(58,22,37),(59,22,22),(60,22,23),(61,22,24),(62,22,25),(63,22,26),(64,22,18),(65,22,19),(66,22,17),(67,22,20),(68,22,21),(69,22,22),(70,22,41),(71,22,40),(72,24,37),(73,24,22),(74,24,23),(75,24,24),(76,24,25),(77,24,26),(78,24,18),(79,24,19),(80,24,17),(81,24,20),(82,24,21),(84,24,41),(85,24,40),(86,24,34),(87,24,35),(88,23,34),(89,23,39),(90,23,30),(91,23,31),(92,23,24),(93,23,25),(94,23,26),(95,27,22),(96,27,23),(97,25,37),(98,25,22),(99,25,23),(100,25,24),(101,25,25),(102,25,26),(103,25,18),(104,25,19),(105,25,17),(106,25,20),(107,25,21),(109,25,41),(110,25,40),(111,26,33),(112,26,37),(113,26,39),(114,26,36),(115,26,34),(116,26,35),(117,26,30),(118,26,32),(119,27,33),(120,27,37),(121,27,39),(122,27,36),(123,27,34),(124,27,35),(125,27,30),(126,27,32),(127,27,22),(128,27,23),(129,27,24),(130,27,25),(131,27,26),(132,27,27),(133,27,28),(134,27,29),(135,27,30),(136,28,34),(137,28,35),(138,28,39),(139,28,41),(140,28,38),(141,29,34),(142,29,39),(143,29,40),(144,29,24),(145,29,23),(146,29,22),(147,29,25),(148,29,26),(149,29,27),(150,29,28),(151,29,29),(152,29,30),(153,29,31),(154,30,34),(155,30,35),(156,30,39),(157,30,41),(158,31,34),(159,31,35),(160,31,39),(161,31,41),(162,31,38),(163,31,40),(165,32,33),(166,32,37),(167,32,34),(168,32,35),(169,32,30),(170,32,28),(171,32,29),(172,33,33),(173,33,37),(174,33,34),(175,33,35),(176,33,30),(177,33,28),(178,33,29),(179,33,41),(180,33,36),(181,33,24),(182,33,25),(183,34,17),(184,34,18),(185,34,19),(186,34,20),(187,34,21),(188,34,22),(189,34,23),(190,34,24),(191,34,25),(192,34,26),(193,34,35),(194,34,37),(195,36,17),(196,36,18),(197,36,19),(198,36,20),(199,36,21),(200,36,22),(201,36,23),(202,36,24),(203,36,25),(204,36,26),(205,36,35),(206,36,37),(207,35,36),(208,35,34),(210,35,41),(211,35,17),(212,35,18);
/*!40000 ALTER TABLE `wine_food_pairing` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-14 16:54:58
