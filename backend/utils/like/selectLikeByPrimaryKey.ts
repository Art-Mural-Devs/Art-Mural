
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function selectLikeByPrimaryKey(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeMuralId = UUID_TO_BIN(:likeMuralId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, like)
    } catch(error) {
        console.log(error)
    }
}
