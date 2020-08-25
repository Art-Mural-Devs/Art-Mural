import {Mural} from "../interfaces/Mural";
import {connect} from "../../src/database";

export async function  SelectMuralsByMuralsTitle(muralTitle: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT muralId,muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle FROM mural) ORDER BY muralTitle ASC'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {muralTitle})
    return rows;
}