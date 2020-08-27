
DROP TABLE IF EXISTS muralRoute;
DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS route;
DROP TABLE IF EXISTS mural;
DROP TABLE IF EXISTS profile;

-- create the profile entity
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileContent VARCHAR(1000) NOT NULL,
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
