import {connect} from "../../src/database";

export async function getMuralsOrderedByCreationYear() {
    const mySqlConnection = await connect();
    const mySqlQuery = "SELECT BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural ORDER BY muralCreationYear DESC";

    const [rows] = await mySqlConnection.execute(mySqlQuery)
    return rows;
}
