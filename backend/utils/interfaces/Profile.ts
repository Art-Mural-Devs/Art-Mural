export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileContent: string,
    profileEmail: string,
    profileHash: string,
    profileName: string,
}

export interface PartialProfile {
    profileId : string|null,
    profileContent: string,
    profileEmail: string,
    profileName: string,
}