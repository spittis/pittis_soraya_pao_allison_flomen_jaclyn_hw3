-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 02, 2018 at 06:32 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_auto_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_features`
--

CREATE TABLE `tbl_features` (
  `features_ID` int(10) NOT NULL,
  `features_title` varchar(30) NOT NULL,
  `features_info` varchar(400) NOT NULL,
  `features_img` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_features`
--

INSERT INTO `tbl_features` (`features_ID`, `features_title`, `features_info`, `features_img`) VALUES
(1, 'Premium LED Headlights', 'Our new premium LED headlights are both eco-friendly and effective with their brightness.', 'headlights.jpg'),
(2, 'Durable Steel', 'The body of our JAZ Rover is made from indestructible steel that will provide safety and security for both everyday adventures as well as your greatest journeys. ', 'body.jpg'),
(3, 'Bluetooth Capabilities', 'Using Bluetooth technologies, users will be able to pair their mobile devices to access features through verbal commands. The Bluetooth feature also enables users to locate their car at all times as well as lock/unlock the vehicle and start the car.', 'subaru.jpg'),
(4, 'Custom Temperatures', 'No more fighting over the heat or air conditioning. With individual vents and fans located near each seat as well as seat heating, all passengers are able to choose their own temperatures.', 'mufflers.jpg'),
(5, 'User Profiles', 'Sharing a car can get frustrating with everyone changing the settings. With up to 5 user profiles, each driver can initialize their own settings customizing seat positioning, mobile pairing, as well as mirror angles that can be returned to each time.', 'orange-car.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_features`
--
ALTER TABLE `tbl_features`
  ADD PRIMARY KEY (`features_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
