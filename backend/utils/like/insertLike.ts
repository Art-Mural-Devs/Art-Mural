
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function insertLike(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `like`(likeMuralId, likeProfileId) VALUES(UUID_TO_BIN(:likeMuralId), UUID_TO_BIN(:likeProfileId))";
        const [rows] = await mySqlConnection.execute(mySqlQuery, like)
        return "Like successfully inserted"
    } catch(error) {
        console.log(error)
    }
}
