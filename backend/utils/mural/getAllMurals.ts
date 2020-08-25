
import {connect} from "../../src/database";

export async function getAllMurals() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}