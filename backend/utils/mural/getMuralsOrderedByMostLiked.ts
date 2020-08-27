import {connect} from "../../src/database";

export async function getMuralsOrderedByMostLiked() {
    const mySqlConnection = await connect();
    const mySqlQuery = "SELECT BIN_TO_UUID(likeMuralId) AS likeMuralId, BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle, COUNT(likeMuralId) as mostLiked FROM mural LEFT JOIN `like` ON mural.muralId = like.likeMuralId GROUP BY mural.muralId ORDER BY mostLiked DESC";

    const [rows] = await mySqlConnection.execute(mySqlQuery)
    return rows;
}
