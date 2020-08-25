
import {connect} from "../../src/database";

export async function getMuralsByMostLiked(likeProfileId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural, (SELECT COUNT(*) FROM `like` WHERE mural.muralId = like.likeMuralId) AS likeCount FROM `like` INNER JOIN profile ON profile.profileId = like.likeProfileId WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) ORDER BY likeCount DESC'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {likeProfileId})
    return rows;
}