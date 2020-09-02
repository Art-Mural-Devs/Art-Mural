export const signUpValidator = {
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
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profileName: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        }
    }
};