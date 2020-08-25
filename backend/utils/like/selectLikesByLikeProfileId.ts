
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function selectLikesByLikeProfileId(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT likeMuralId = UUID_TO_BIN(:likeMuralId) FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, like)
    } catch(error) {
        console.log(error)
    }
}

