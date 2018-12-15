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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-14 16:53:46
