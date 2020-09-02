import {connect} from "../../src/database";

export async function selectAllProfiles() {
    try {
        const mySqlConnection = await connect()
        const [rows] = await mySqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileContent, profileEmail, profileHash, profileName FROM profile');

        // @ts-ignore is required so that rows can be interacted with like the array it is
      //  return rows.length !== 0 ? {...rows[0]} : undefined;
        return {}
    } catch (error) {
        console.log(error)
    }
}