1. CREATE DATABASE placementseason;
2.  CREATE TABLE `itemlist` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(25) DEFAULT NULL,
  `product_price` int(100) DEFAULT NULL,
  `product_gst` int(100) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
);
