
import {connect} from "../../src/database";

export async function getAllMurals(orderBy: string) {
        const orderByOptions = ["muralArtist", "muralTitle"];
        const sortBy = orderByOptions.includes(orderBy) ? orderBy : "muralCreationYear";
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(muralId) AS muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural ORDER BY " + sortBy + " ASC"
        const [rows] = await mySqlConnection.execute(mySqlQuery, {sortBy});
        return rows;
}