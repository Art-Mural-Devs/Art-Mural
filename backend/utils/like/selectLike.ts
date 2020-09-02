
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";
export async function selectLike(like: Like) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeProfileId) as likeProfileId, BIN_TO_UUID(likeMuralId) as likeMuralId FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeMuralId = UUID_TO_BIN(:likeMuralId)';
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, like)
        return rows;

    } catch(error) {
        console.log(error)
    }
}