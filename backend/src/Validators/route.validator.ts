export const routeValidator = {
    routeContent: {
        isLength: {
            errorMessage: "Misquote Content is to long",
            options: {min: 1, max: 255}
        },
        trim: true,
        escape: true
    }, routeImageUrl: {
        isURL: {
            errorMessage: "the url provided for the route image url is too long.",
            options: { protocols: ['http','https'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }
        },
        trim: true,
    },
    routeName: {
        isLength: {
            errorMessage: "Route name is too long.",
            options: {min: 1, max: 64}
        },
        trim: true,
        escape: true,
    },
    routeNeighbourhoodLat: {
        isFloat: {
            errorMessage: "Route Neighbourhood Latitude is too long.",
            options: {min: -90, max: 90}
        },
        trim: true,
    },
    routeNeighbourhoodLong: {
        isFloat: {
            errorMessage: "Route Neighbourhood Longitude is too long.",
            options: {min: -180, max: 180}
        },
        trim: true,
    }
}
