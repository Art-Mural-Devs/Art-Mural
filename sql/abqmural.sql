
DROP TABLE IF EXISTS muralRoute;
DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS route;
DROP TABLE IF EXISTS mural;
DROP TABLE IF EXISTS profile;

-- create the profile entity
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileName VARCHAR(32) not null,
                         profileActivationToken CHAR(32),
                         profileContent VARCHAR(1000) NOT NULL,
                         profileEmail VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         UNIQUE(profileEmail),
                         PRIMARY KEY(profileId)

);

-- create the mural entity
CREATE TABLE mural (
                       muralId BINARY(16) NOT NULL,
                       muralTitle CHAR(150) NOT NULL,
                       muralArtist VARCHAR(255) NOT NULL,
                       muralAddress VARCHAR(255) NOT NULL,
                       muralCreationYear YEAR(4) NOT NULL,
                       muralImageUrl VARCHAR(140) NOT NULL,
                       muralLat VARCHAR(250) NOT NULL,
                       muralLong VARCHAR(250) NOT NULL,
                       PRIMARY KEY(muralId)
);
-- create the route entity
CREATE TABLE route (
                       routeId BINARY(16) NOT NULL,
                       routeImageUrl VARCHAR(140) NOT NULL,
                       routeName CHAR(155) NOT NULL,
                       routeNeighbourhoodLat VARCHAR(250) NOT NULL,
                       routeNeighbourhoodLong VARCHAR(250) NOT NULL,
                       PRIMARY KEY(routeId)
);
-- create the like entity
CREATE TABLE like (
                       likeProfileId BINARY(16) NOT NULL,
                       likeMuralId BINARY(16) NOT NULL,
                       FOREIGN KEY(likeProfileId) REFERENCES profile(ProfileId),
                       FOREIGN KEY(likeMuralId) REFERENCES mural(MuralId),
);

-- create the muralRoute entity
CREATE TABLE muralRoute (
                       muralRouteRouteId BINARY(16) NOT NULL,
                       muralRouteMuralId BINARY(16) NOT NULL,
                       FOREIGN KEY(muralRouteRouteId) REFERENCES route(routeId),
                       FOREIGN KEY(muralRouteMuralId) REFERENCES mural(MuralId),
);
