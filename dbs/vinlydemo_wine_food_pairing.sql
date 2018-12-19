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

-- Dump completed on 2018-12-14 16:53:46