-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: abqmural
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `likeMuralId` binary(16) NOT NULL,
  `likeProfileId` binary(16) NOT NULL,
  PRIMARY KEY (`likeMuralId`,`likeProfileId`),
  KEY `likeMuralId` (`likeMuralId`),
  KEY `likeProfileId` (`likeProfileId`),
  CONSTRAINT `like_ibfk_1` FOREIGN KEY (`likeMuralId`) REFERENCES `mural` (`muralId`),
  CONSTRAINT `like_ibfk_2` FOREIGN KEY (`likeProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (_binary '\n\∆\Ê\ÎÍßØB¨\0',_binary '§ñ{\Ò@õ†#àû\È\Îó'),(_binary '\n\∆\Ê\ÎÍßØB¨\0',_binary '\‡’§\‰ñOtéò∑5('),(_binary '\n\ç\Ê\ÎÍßØB¨\0',_binary '\‚	π\Â\Îø\Íõ\"B¨\0'),(_binary '\n\„\Ê\ÎÍßØB¨\0',_binary '§ñ{\Ò@õ†#àû\È\Îó'),(_binary '\n\„\Ê\ÎÍßØB¨\0',_binary '\‡’§\‰ñOtéò∑5('),(_binary '\n\„\Ê\ÎÍßØB¨\0',_binary '\‚	π\Â\Îø\Íõ\"B¨\0'),(_binary '\nû\Ê\ÎÍßØB¨\0',_binary '\‡’§\‰ñOtéò∑5('),(_binary '\nû\Ê\ÎÍßØB¨\0',_binary '\‚	π\Â\Îø\Íõ\"B¨\0'),(_binary '\n}Ö\Ê\ÎÍßØB¨\0',_binary '\‚	π\Â\Îø\Íõ\"B¨\0'),(_binary '\n+ü\Ê\ÎÍßØB¨\0',_binary '\‚	π\Â\Îø\Íõ\"B¨\0');
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mural`
--

DROP TABLE IF EXISTS `mural`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mural` (
  `muralId` binary(16) NOT NULL,
  `muralAddress` varchar(255) DEFAULT NULL,
  `muralArtist` varchar(255) DEFAULT NULL,
  `muralCreationYear` char(4) DEFAULT NULL,
  `muralImageUrl` varchar(140) NOT NULL,
  `muralLat` decimal(8,5) NOT NULL,
  `muralLong` decimal(8,5) NOT NULL,
  `muralTitle` char(150) NOT NULL,
  PRIMARY KEY (`muralId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mural`
--

LOCK TABLES `mural` WRITE;
/*!40000 ALTER TABLE `mural` DISABLE KEYS */;
INSERT INTO `mural` VALUES (_binary '\n\∆\Ê\ÎÍßØB¨\0','5th & Copper NW','Gilberto Guzman','1984','http://farm4.staticflickr.com/3044/2479130748_15f6abb119_m.jpg',-106.65255,35.08540,'The Harvest'),(_binary '\n\∆\Ê\ÎÍßØB¨\0','6100 Taylor Ranch Rd NW','Celia Kimball','1985','http://farm8.staticflickr.com/7068/6926342359_f99ba36534_m.jpg',-106.69366,35.15430,'Heritage'),(_binary '\n\Ó=\Ê\ÎÍßØB¨\0','1025 Broadway SE','Emanuel Martinez','1996','http://farm4.staticflickr.com/3050/2439175208_49dbff1c16_m.jpg',-106.64605,35.07270,'Mestizaje, De Colores Hispanic Heritage Festival Mural'),(_binary '\n\˜f\Ê\ÎÍßØB¨\0','1801 4th Street NW','Patricio A. Zamora (PAZ)','1998','http://farm3.staticflickr.com/2263/2478320549_e77672598e_m.jpg',-106.64836,35.10210,'El Camino Real, Road of Life'),(_binary '\n¯A\Ê\ÎÍßØB¨\0','Bridge Blvd and Old Coors DR SW','Patricio A. Zamora (PAZ)','1997','http://farm8.staticflickr.com/7002/6836564611_bfb467d0d3_m.jpg',-106.71100,35.07000,'La Communidad'),(_binary '\n	\Ï∑\Ê\ÎÍßØB¨\0','724 Silver SW','Patricio A. Zamora (PAZ)','1999','http://farm8.staticflickr.com/7143/6836582183_261be223f8_m.jpg',-106.65665,35.08290,'More than a Fire Fighter'),(_binary '\n\n\Û¢\Ê\ÎÍßØB¨\0','263 Garfield SE','Francisco LeFebre','2013','https://murosabq.com/wp-content/uploads/2018/06/img589-1.jpg',-106.64708,35.07220,'La Primavera'),(_binary '\n\ç\Ê\ÎÍßØB¨\0','423 Central Ave NE','Diana Stetson','1996','http://farm2.staticflickr.com/1041/1030111983_d89e36d5ef_m.jpg',-106.64218,35.08360,'Historical Timeline of Books'),(_binary '\n\„\Ê\ÎÍßØB¨\0','2000 Mountain Rd NW','Frederico Vigil','1992','http://farm3.staticflickr.com/2036/2479133388_6691947336_m.jpg',-106.66871,35.09810,'Santa Madre Tierra y su Alma'),(_binary '\n\r\Úg\Ê\ÎÍßØB¨\0','Menaul & Punta de Vista NE','Nancy Young','1996','http://farm2.staticflickr.com/1136/1030113225_b0db2c9e19_m.jpg',-106.49108,35.10800,'Morning Allegory'),(_binary '\nÃ∏\Ê\ÎÍßØB¨\0','2601 Central Ave NW','Claudia Baragiola','1996','http://farm4.staticflickr.com/3041/2478321775_c671ca4b39_m.jpg',-106.68089,35.09270,'Mediterranean Conservatory Mural'),(_binary '\n\Ò\Ê\ÎÍßØB¨\0','Monta√±o at the Rio Grande NW','Dave Dekker','1997','http://farm4.staticflickr.com/3275/2478321975_5377542e6f_m.jpg',-106.67900,35.14600,'Bosque Rio Sunset'),(_binary '\ne\≈\Ê\ÎÍßØB¨\0','129 Hartline SW','Bernadette Vigil ','1994','http://farm8.staticflickr.com/7025/6832079139_d8435d8026_m.jpg',-106.66914,35.06880,'Sue√±o Entre Sue√±o'),(_binary '\n\Zß\ˆ\Ê\ÎÍßØB¨\0','601 Yale SE','Juan Navarrete','2000','http://farm3.staticflickr.com/2273/2439176092_6784a30b46_m.jpg',-106.62228,35.07220,'Wheels in Motion'),(_binary '\n≤ë\Ê\ÎÍßØB¨\0','1025 Broadway SE','Bernadette Vigil ','1995','http://farm3.staticflickr.com/2310/2438351125_85649a6019_m.jpg',-106.64605,35.07270,'Oneness of Dance'),(_binary '\nû\Ê\ÎÍßØB¨\0','423 Central Ave NW','Carl von Hassler',NULL,'http://farm3.staticflickr.com/2072/2479134548_370a4caccd_m.jpg',-106.65245,35.08484,'Carl von Hassler Mural Restoration'),(_binary '\n\Ëª\Ê\ÎÍßØB¨\0','4904 4th St NW','Raymundo Sesma','2008','http://farm8.staticflickr.com/7207/6881979813_2962928e20_m.jpg',-106.64223,35.13151,'Campo Expandido XVIII'),(_binary '\n}Ö\Ê\ÎÍßØB¨\0','1700 Sunshine Ter. SE','Edward Duval-Carrie','2008','http://farm8.staticflickr.com/7192/6870983725_da4ae36a9c_m.jpg',-106.62852,35.06259,'Lowell Elementary Sculpture Wall'),(_binary '\n \ÛJ\Ê\ÎÍßØB¨\0',NULL,'Nani Chacon','2012','http://farm4.staticflickr.com/3778/10426367866_820b077c07.jpg',-106.64450,35.09810,'She Taught Us to Weave'),(_binary '\n\"ç\Õ\Ê\ÎÍßØB¨\0',NULL,'Larry Phillips','2012','http://farm6.staticflickr.com/5488/10426468315_b6980fe3f2_m.jpg',-106.64450,35.09810,'Trance Dance'),(_binary '\n#ê\Î\Ê\ÎÍßØB¨\0',NULL,'Larry Phillips','2012','http://farm8.staticflickr.com/7415/10426645903_627d56fe38_m.jpg',-106.64450,35.09810,'Dualities'),(_binary '\n$ñ¸\Ê\ÎÍßØB¨\0',NULL,'David Leigh','2012','http://farm6.staticflickr.com/5501/10426544606_423758cddb_m.jpg',-106.64450,35.09810,'Mirrored Robots'),(_binary '\n%µ≤\Ê\ÎÍßØB¨\0',NULL,'Nettrice Gaskins','2012','http://farm6.staticflickr.com/5520/10426735573_f80cf63ca5_m.jpg',-106.64450,35.09810,'Augmented Reality for Open Spaces'),(_binary '\n&œõ\Ê\ÎÍßØB¨\0',NULL,'John McClendon','2012','http://farm4.staticflickr.com/3754/10426656386_67b5500d21_m.jpg',-106.64450,35.09810,'Untitled (Bees)'),(_binary '\n\'\›<\Ê\ÎÍßØB¨\0',NULL,'Jamison \"Chas\" Banks','2013','http://farm3.staticflickr.com/2832/10426702456_4f98e78629_m.jpg',-106.64450,35.09810,'Inland Empire: A Suspended Animation'),(_binary '\n(\Ù\Ê\ÎÍßØB¨\0',NULL,'Frank Buffalo Hyde','2013','http://farm8.staticflickr.com/7340/10426729214_0864f737a1_m.jpg',-106.64450,35.09810,'Patternation'),(_binary '\n)\Ó\Ê\ÎÍßØB¨\0','508 1st St NW','Aaron Noble','2013','http://farm6.staticflickr.com/5522/11933203414_b4d181cf78_n.jpg',-106.64690,35.08810,'Quantum Bridge'),(_binary '\n+ü\Ê\ÎÍßØB¨\0','100 Central Ave. SW','Larry Phillips','2014','https://c2.staticflickr.com/4/3955/15484859631_ba34042073_m.jpg',-106.64830,35.08330,'Signs of the Times'),(_binary '+PJMEÈÄüo÷ù°áØ','2200 Sunport Blvd SE','Pop Chalee','1945','http://farm4.staticflickr.com/3144/2456694077_bbe1a16839_m.jpg',-106.61667,35.04880,'Horse Mural'),(_binary 'N%£CÉ\ıNwôn†s]\÷mì','2200 Sunport Blvd SE','Pop Chalee','1945','http://farm3.staticflickr.com/2051/2456694143_953dd1d221_m.jpg',-106.61667,35.04880,'Buffalo Mural'),(_binary '†i’ü\nÜD»Ñ≥†]s1[','4645 Pitt NE','Joan Weissman','1986','http://farm2.staticflickr.com/1398/1030112581_fdf618683a_m.jpg',-106.53060,35.13410,'Ceramic Tile Mural');
/*!40000 ALTER TABLE `mural` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muralRoute`
--

DROP TABLE IF EXISTS `muralRoute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muralRoute` (
  `muralRouteMuralId` binary(16) NOT NULL,
  `muralRouteRouteId` binary(16) NOT NULL,
  PRIMARY KEY (`muralRouteMuralId`,`muralRouteRouteId`),
  KEY `muralRouteMuralId` (`muralRouteMuralId`),
  KEY `muralRouteRouteId` (`muralRouteRouteId`),
  CONSTRAINT `muralRoute_ibfk_1` FOREIGN KEY (`muralRouteMuralId`) REFERENCES `mural` (`muralId`),
  CONSTRAINT `muralRoute_ibfk_2` FOREIGN KEY (`muralRouteRouteId`) REFERENCES `route` (`routeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muralRoute`
--

LOCK TABLES `muralRoute` WRITE;
/*!40000 ALTER TABLE `muralRoute` DISABLE KEYS */;
INSERT INTO `muralRoute` VALUES (_binary '\n\∆\Ê\ÎÍßØB¨\0',_binary 'I>\„qîM–û\Ÿ\›…îòA'),(_binary '\n\Ó=\Ê\ÎÍßØB¨\0',_binary '\˜D(=boL ôã}˙µ7K2'),(_binary '\n\n\Û¢\Ê\ÎÍßØB¨\0',_binary '\˜D(=boL ôã}˙µ7K2'),(_binary '\n\Zß\ˆ\Ê\ÎÍßØB¨\0',_binary '-\ƒgSFÉ∫™\Ì?\Ï]\"'),(_binary '\nû\Ê\ÎÍßØB¨\0',_binary 'û@\…ó\‡@`è\Û ï˙w\«˘'),(_binary '\n}Ö\Ê\ÎÍßØB¨\0',_binary '-\ƒgSFÉ∫™\Ì?\Ï]\"'),(_binary '\n\"ç\Õ\Ê\ÎÍßØB¨\0',_binary 'I>\„qîM–û\Ÿ\›…îòA'),(_binary '\n)\Ó\Ê\ÎÍßØB¨\0',_binary 'I>\„qîM–û\Ÿ\›…îòA');
/*!40000 ALTER TABLE `muralRoute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileActivationToken` char(32) DEFAULT NULL,
  `profileContent` varchar(1000) NOT NULL,
  `profileEmail` varchar(128) NOT NULL,
  `profileHash` char(97) NOT NULL,
  `profileName` varchar(128) NOT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileEmail` (`profileEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (_binary '\0\ÿ\ﬂ\Ó%\Íµ\'B¨\0','8998c9cc52a671e87e9928f628fa0df2','It is Andrei','vankoa5345+1@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$6h0GgeKRDVURxYSx1Vt3nw$5yad+iTnBwmwKn02s23oh57SL3zB/5/pvM3x0Be1o84','Andrei'),(_binary '\Ïœ†\Ò0\Í≤$B¨\0','8db6ce073e72192454e8c2984ed75589','Something','hristian.andrei@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$rQ0eSCpF+GZqB0NOXaHEDQ$lR1ghSrZlmc/GGMz1AHJmHWSigUXrQTfIx/aAHw3VAc','Andrei'),(_binary '$	nu\Ò\Ô\Í≤$B¨\0','aa255c08d90a609f3e23e943628edaae','luv art','asjnfjj@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$fCqWT0IWTMFTSJk8CKRE2w$Z0i6Mu0Pev93hJg2sixGfp2fGaPbrNbVo11z8nUG/I8','A'),(_binary '8YC\Ú#\ÍÖfB¨\0','0d2a88808fe0952eef3781e3873868bd','da','hristian123@gmao.com','$argon2id$v=19$m=65536,t=3,p=1$o3JJgcIVNZJDsODA9jpaGQ$e2UHKy2bUsLiDsSxcx8c6Rxkb7bH9WhmjswmHssP3Ws','dsf'),(_binary 'Y7Ñ\Ïã\Íµ\'B¨\0','f2fad46c7cbdc4365137c5cf736010de','It is Andrei','vankoa5345@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$EgFrZx8AK85yvAqVAhU2yw$5IxQqmwOOe/N4ABZ2s+Djt7ZcT1+fLzYaJ2nzl1wZFg','Andrei'),(_binary '§ñ{\Ò@õ†#àû\È\Îó','password','test 0 profile Peter','peter@peter.com','I dont know what','Pete Something'),(_binary '\‡’§\‰ñOtéò∑5(','password','test 0 profile Carl','carl@carl.com','I dont know what','Carl Something'),(_binary '\‚	π\Â\Îø\Íõ\"B¨\0',NULL,'Myjaramillo','vankoa1123@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$YwtbLojX6898fnH7FFKJYw$ONsvAIf0GgHn6rr+nnvK9a6TrfjY0qqTb6pBkrq2m+o','jaramillo');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `routeId` binary(16) NOT NULL,
  `routeContent` varchar(1000) NOT NULL,
  `routeImageUrl` varchar(140) NOT NULL,
  `routeName` char(155) NOT NULL,
  `routeNeighbourhoodLat` decimal(5,2) NOT NULL,
  `routeNeighbourhoodLong` decimal(5,2) NOT NULL,
  PRIMARY KEY (`routeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (_binary '-\ƒgSFÉ∫™\Ì?\Ï]\"','An exciting, vibrant neighborhood in south-central Albuquerque, Nob Hill offers much in the way of culture and exploration. With no shortage of restaurants and bars to visit, there are also rich and colorful murals living on many of the buildings and eateries here. As you explore the area, take the chance to explore artworks that inspire awe and appreciation for the talent with which they were made, and try some of New Mexico`s best local restaurants and cafe`s. Places such as Little Bear Coffee, Flying Star Cafe, and Tractor Brewing Company, can be visited as you explore the art of this area.','https://images.unsplash.com/photo-1507603312191-2b1e247ef6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80','Nob Hill',35.08,106.60),(_binary 'I>\„qîM–û\Ÿ\›…îòA','Downtown Albuquerque houses our most vibrant nightlife, with plenty of local bars and restaurants to visit and socialize in the evenings. With that being said, your visit to Downtown is not strictly an evening affair. Taking the day to walk around downtown in the afternoon will yield the opportunity to see several breathtaking murals- with some stretching the height of the building upon which they are painted, and made even more awe-inspiring by the stories they tell. As you discover these murals, you will also find many places to stop in for coffee, explore for antiques, visit galleries and screen printing shops, and even a theater and museum.','https://images.unsplash.com/photo-1520050984229-709501d9c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80','Downtown',35.09,106.65),(_binary 'û@\…ó\‡@`è\Û ï˙w\«˘','Following the Historic Route 66, this route features a posh local restaurant- The Grove Market- where you can find coffee, pastries, and excellent breakfast food and dine in a chic and modern atmosphere. As you travel West, keep an eye out for Farina Pizzeria, Artichoke Cafe, and, of course, the murals! Many of the murals on this route feature vibrant colors, strong cultural messages, and some of the best work that local artists have created for our city.','https://images.unsplash.com/photo-1507603380313-a5a86122545d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80','Huning Highland',35.08,106.64),(_binary '\˜D(=boL ôã}˙µ7K2','If you are a book and art lover, this is the route for you. As you travel from the Albuquerque Fire Station to Red Planet Books & Comics, stop at the Downtown Books used bookstore and browse their wonderful selection in a tranquil and vintage environment amidst a maze of bookshelves and quiet reading rooms. Then, once you have a new read in hand, the second mural is just around the corner of Java Joes, one of downtown Albuquerque`s most popular coffee shops/cafe`s. This is a perfect route for those looking for some art, inspiration, and a little fresh air!','https://images.unsplash.com/photo-1597782018684-84fd98a1674c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80','Raynolds Addition',35.08,106.65);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-09 19:16:22
