import {Mural} from "../interfaces/Mural";
import {connect} from "../../src/database";

export async function insertMural(mural: Mural) {
    try {
        const mysqlConnection = await connect()
        const query : string =  "(INSERT INTO mural (muralId, muralAddress, muralArtist, muralCreationYear, muralImageUrl, muralLat, muralLong, muralTitle ) VALUES(UUID_TO_BIN(UUID()), :muralAddress, :muralArtist, :muralCreationYear, :muralImageUrl, :muralLat, :muralLong, :muralTitle))";

        const [rows] = await mysqlConnection.execute(query, mural)
        return "Mural created successfully"
    } catch (error) {
        console.log(error)
    }
}