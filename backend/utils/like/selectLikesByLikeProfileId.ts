
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function selectLikesByLikeProfileId(likeProfileId:string) {
    try {

        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(likeMuralId) AS likeMuralId, BIN_TO_UUID(likeProfileId) AS likeProfileId, BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural INNER JOIN `like` ON mural.muralId = like.likeMuralId WHERE likeProfileId = UUID_TO_BIN(:likeProfileId)  ORDER BY likeMuralId DESC";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {likeProfileId})
    } catch(error) {
        console.log(error)
    }
}

