DROP TABLE IF EXISTS muralRoute;
DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS route;
DROP TABLE IF EXISTS mural;
DROP TABLE IF EXISTS profile;

-- create the profile entity
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileContent VARCHAR(1000),
                         profileEmail VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         profileName VARCHAR(128) not null,
                         UNIQUE(profileEmail),
                         PRIMARY KEY(profileId)
);

-- create the mural entity
CREATE TABLE mural (
                       muralId BINARY(16) NOT NULL,
                       muralAddress VARCHAR(255),
                       muralArtist VARCHAR(255),
                       muralCreationYear CHAR(4) ,
                       muralImageUrl VARCHAR(140) NOT NULL,
                       muralLat DECIMAL(8,5) NOT NULL,
                       muralLong DECIMAL(8,5) NOT NULL,
                       muralTitle CHAR(150) NOT NULL,
                       PRIMARY KEY(muralId)
);
UPDATE mural SET muralImageUrl = "https://murosabq.com/wp-content/uploads/2018/06/img589-1.jpg" WHERE muralId = UUID_TO_BIN("0a0af3a2-e6eb-11ea-a7af-0242ac150002");
UPDATE mural SET muralTitle = "Mestizaje, De Colores Hispanic Heritage Festival Mural" WHERE muralId = UUID_TO_BIN("0a06ee3d-e6eb-11ea-a7af-0242ac150002");
UPDATE mural SET muralTitle = "Mediterranean Conservatory Mural" WHERE muralId = UUID_TO_BIN("0a0eccb8-e6eb-11ea-a7af-0242ac150002");
INSERT INTO mural (muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle) VALUES (UUID_TO_BIN('a069d59f-0a86-44c8-84b3-a0185d73315b'), "4645 Pitt NE",  "Joan Weissman",  "1986", "http://farm2.staticflickr.com/1398/1030112581_fdf618683a_m.jpg", "-106.53060000000001", "35.134099999999997", "Ceramic Tile Mural");
INSERT INTO mural (muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle) VALUES (UUID_TO_BIN('2b500f02-4a4d-45e9-809f-6fd69da187af'), "2200 Sunport Blvd SE",  "Pop Chalee",  "1945", "http://farm4.staticflickr.com/3144/2456694077_bbe1a16839_m.jpg", " -106.6166671", "35.0488", "Horse Mural");
INSERT INTO mural (muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle) VALUES (UUID_TO_BIN('4e25a343-83f5-4e77-996e-a0735dd66d93'), "2200 Sunport Blvd SE",  "Pop Chalee",  "1945",  "http://farm3.staticflickr.com/2051/2456694143_953dd1d221_m.jpg", " -106.6166671", "35.0488", "Buffalo Mural");


-- create the route entity
CREATE TABLE route (
                       routeId BINARY(16) NOT NULL,
                       routeContent VARCHAR(1000) NOT NULL,
                       routeImageUrl VARCHAR(140) NOT NULL,
                       routeName CHAR(155) NOT NULL,
                       routeNeighbourhoodLat DECIMAL(5,2) NOT NULL,
                       routeNeighbourhoodLong DECIMAL(5,2) NOT NULL,
                       PRIMARY KEY(routeId)
);

insert into route (routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong) values (UUID_TO_BIN('182dc467-5310-4683-baaa-ed3f14ec5d22'),'An exciting, vibrant neighborhood in south-central Albuquerque, Nob Hill offers much in the way of culture and exploration. With no shortage of restaurants and bars to visit, there are also rich and colorful murals living on many of the buildings and eateries here. As you explore the area, take the chance to explore artworks that inspire awe and appreciation for the talent with which they were made, and try some of New Mexico`s best local restaurants and cafe`s. Places such as Little Bear Coffee, Flying Star Cafe, and Tractor Brewing Company, can be visited as you explore the art of this area.', 'https://images.unsplash.com/photo-1507603312191-2b1e247ef6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'Nob Hill', '35.08', '106.60');
insert into route (routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong) values (UUID_TO_BIN('493ee371-0294-4dd0-9ed9-0bddc9949841'),'Downtown Albuquerque houses our most vibrant nightlife, with plenty of local bars and restaurants to visit and socialize in the evenings. With that being said, your visit to Downtown is not strictly an evening affair. Taking the day to walk around downtown in the afternoon will yield the opportunity to see several breathtaking murals- with some stretching the height of the building upon which they are painted, and made even more awe-inspiring by the stories they tell. As you discover these murals, you will also find many places to stop in for coffee, explore for antiques, visit galleries and screen printing shops, and even a theater and museum.', 'https://images.unsplash.com/photo-1520050984229-709501d9c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80', 'Downtown', '35.09', '106.65');
insert into route (routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong) values (UUID_TO_BIN('9e40f0c9-97e0-4060-8ff3-2095fa77c7f9'),'Following the Historic Route 66, this route features a posh local restaurant- The Grove Market- where you can find coffee, pastries, and excellent breakfast food and dine in a chic and modern atmosphere. As you travel West, keep an eye out for Farina Pizzeria, Artichoke Cafe, and, of course, the murals! Many of the murals on this route feature vibrant colors, strong cultural messages, and some of the best work that local artists have created for our city.', 'https://images.unsplash.com/photo-1507603380313-a5a86122545d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80', 'Huning Highland', '35.08', '106.64');
insert into route (routeId, routeContent, routeImageUrl, routeName, routeNeighbourhoodLat, routeNeighbourhoodLong) values (UUID_TO_BIN('f744283d-626f-4c20-998b-7dfab5374b32'),'If you are a book and art lover, this is the route for you. As you travel from the Albuquerque Fire Station to Red Planet Books & Comics, stop at the Downtown Books used bookstore and browse their wonderful selection in a tranquil and vintage environment amidst a maze of bookshelves and quiet reading rooms. Then, once you have a new read in hand, the second mural is just around the corner of Java Joe’s, one of downtown Albuquerque`s most popular coffee shops/cafe`s. This is a perfect route for those looking for some art, inspiration, and a little fresh air!', 'https://images.unsplash.com/photo-1597782018684-84fd98a1674c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80', 'Raynolds Addition', '35.08', '106.65');

-- create the like entity
CREATE TABLE `like` (
                       likeMuralId BINARY(16) NOT NULL,
                       likeProfileId BINARY(16) NOT NULL,
                       INDEX (likeMuralId),
                       INDEX (likeProfileId),
                       FOREIGN KEY(likeMuralId) REFERENCES mural(muralId),
                       FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY (likeMuralId, likeProfileId)
);

-- create the muralRoute entity
CREATE TABLE muralRoute (
                        muralRouteMuralId BINARY(16) NOT NULL,
                        muralRouteRouteId BINARY(16) NOT NULL,
                        INDEX (muralRouteMuralId),
                        INDEX (muralRouteRouteId),
                        FOREIGN KEY(muralRouteMuralId) REFERENCES mural(muralId),
                        FOREIGN KEY(muralRouteRouteId) REFERENCES route(routeId),
                        PRIMARY KEY (muralRouteMuralId, muralRouteRouteId)
);
insert into muralRoute (muralRouteMuralId, muralRouteRouteId) values (UUID_TO_BIN('7d51743d-e7b6-11ea-ada3-0242ac150002'),UUID_TO_BIN('182dc467-5310-4683-baaa-ed3f14ec5d22'));
insert into muralRoute (muralRouteMuralId, muralRouteRouteId) values (UUID_TO_BIN('7d53ab80-e7b6-11ea-ada3-0242ac150002'),UUID_TO_BIN('182dc467-5310-4683-baaa-ed3f14ec5d22'));
insert into muralRoute (muralRouteMuralId, muralRouteRouteId) values (UUID_TO_BIN('7d53ab80-e7b6-11ea-ada3-0242ac150002'),UUID_TO_BIN('493ee371-0294-4dd0-9ed9-0bddc9949841'));
insert into muralRoute (muralRouteMuralId, muralRouteRouteId) values (UUID_TO_BIN('7d54c09d-e7b6-11ea-ada3-0242ac150002'),UUID_TO_BIN('493ee371-0294-4dd0-9ed9-0bddc9949841'));