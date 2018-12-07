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
-- Table structure for table `wine`
--

DROP TABLE IF EXISTS `wine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wine` (
  `wine_id` int(11) NOT NULL AUTO_INCREMENT,
  `wine_name` varchar(100) NOT NULL,
  `winery` varchar(100) DEFAULT NULL,
  `vintage` int(11) NOT NULL,
  `region` varchar(100) NOT NULL,
  `varietal` varchar(100) NOT NULL,
  `flavor_profile` varchar(50) NOT NULL,
  `notes` varchar(100) NOT NULL,
  `body` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`wine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine`
--

LOCK TABLES `wine` WRITE;
/*!40000 ALTER TABLE `wine` DISABLE KEYS */;
INSERT INTO `wine` VALUES (1,'Calhoun Red Christmas Blend','Colhoquon Vineyards',2017,'Sonoma, CA','Red Blend - Malbec, Pinot Noir, Merlot','Earthy, dark fruit, tannin','Cherry, Blackcurrant, blackberry','Semi-Dry','Heady and delicious, fresh from the Colhoquon Vineyards!'),(3,'Raging Bull','Test Winery',2017,'','Cabarnet Sauvignon','Fruity and dark','Darkfruit, Cherry, Blackcurrant','Medium','Acceptably drinkable. Low cost and very high quality at its price point.'),(5,'Gallo Wineyard','Test Winery',2009,'','Merlot','Foul, cloying, and disgusting','Spoiled milk, overly sweet','AAACK','Someone donated this... it\'s been sitting in a hot car for 5 years. And yet, I\'m drinking it.'),(6,'Trix','Test Winery',2012,'','Brut','Fizzy','Almond','Dry','A test wine.'),(7,'Ty Caton','Ty Caton',2015,'Sonoma, CA','Red Blend','Rich, smooth, fruity','Cherry, Earthy','Medium','Delicious and smooth. Very drinkable any time of year and for any occassion'),(8,'Red Herring','Colhoquon Vineyards',2017,'Napa, CA','Pinot Noir','Raspberry, Cherry, Dark Stone Fruit','Plum, Light Pepper, ','Medium','Test wine, based off the grapes my family grows'),(9,'Flip Flop Barefoot','Barefoot',2017,'California','Pinot Noir','Berry, Cherry','Cherried pepper','Medium','Test Wine, does not actually exist'),(10,'Yellowtail Shiraz','Yellowtail',2016,'Australia','Shiraz','Pepper, berry, spice','Spicy, blackberry, faint cinnamon','Medium','A drinkable Shiraz at an affordable price. Bring it to your next BBQ or dinner party.'),(11,'Northern Mead','Norsk Vineyards',2014,'Oslo, Norway','Mead','Honey','Honey','Medium','Technically not a wine, but it qualifies as it can be paired with things.'),(12,'Heidlberg Suess','Heidlberg Weinhof GmBH',2018,'Rhine, Germany','Riesling','Sweet, candy-like, effervescent','Sugared fruit, sweet grape','Sweet','A fizzy, fun wine, great for Grillenparties!'),(13,'Cote du Rhone','Rhone',2000,'Rhone, France','Grenache','Spicy with berry','Pepper, blackberry, blueberry','Dry','An excellent year. French wine and Californian wine will always be at war.'),(14,'Old Tyme','UK Vintners',1998,'Sussex, England','Port','Rich, sweet, heady','Licorice, tabacco, chocolate','Sweet','A very good year, '),(15,'Stella Rosa Rose','Stella Rosa',2019,'Paso Robles, CA','Rose','Faintly sweet, crisp','Strawberry, White Grape','Semi-Sweet','A quintessential holiday wine.'),(16,'Ty Caton','Ty Caton',2015,'Sonoma, CA','Savignon Blanc','Crisp stone fruit and melon','Peach, Pear. Melon','Dry','Excellent and light.'),(17,'Dancing Bull','Dancing Bull',2015,'California','Zinfindel','Spicy and decadent','Pepper, Cherry','Semi-Dry','The original from Dancing Bull. Pairs well with grilled meat or charcuterie.'),(18,'Dancing Bull','Dancing Bull',2015,'California','Cabaranet Sauvignon','Blackcurrant and Cherry','Stone fruit, dark fruits','Medium','Affordable luxury, much higher quality than its price implies. Great for grilled meat and steaks.'),(19,'Gallo','Gallo Brothers Vineyards',2015,'Modesto, CA','Pinot Grigio','Melon, crisp','Honeydew, Dew','Semi-Dry','An affordable table wine for summer and early autumn BBQs.');
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

-- Dump completed on 2018-12-07  9:49:42
