export const profileValidator = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileId'
        }, in: ["params", "body"]
    },
    profileContent: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileContent must be between seven and thirty two characters',
            options: { min: 1, max: 1000 }
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'your ProfileName must be less than 128 characters',
            options: { max: 128 }
        },
    }
};