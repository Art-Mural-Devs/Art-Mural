import axios from "axios"
import {Mural} from "./interfaces/Mural";
import {insertMural} from "./mural/insertMurals";
import {getAllMurals} from "./mural/getAllMurals";


function dataDownLoaderMurals() : Promise<any> {
  return main()

  async function main () {
    try {
      await downloadMurals()

    } catch (e) {
      console.log(e)
    }
  }

  async function downloadMurals () {

    try {
      const {data} = await axios.get("https://coagisweb.cabq.gov/arcgis/rest/services/public/PublicArt/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson")
      let muralsArray = []
      for (let i = 0; i < data.features.length; i++) {
        if (data.features[i].attributes.TYPE == 'mural paintings (visual works)') {
          muralsArray = data.features[i]
        }
      }
      console.log("muralsArray.length", muralsArray)
      for (const muralElement of muralsArray) {
        let mural : Mural = {
          muralId: null,
          muralAddress: muralElement.attributes.ADDRESS,
          muralArtist: muralElement.attributes.ARTIST,
          muralCreationYear: muralElement.attributes.YEAR,
          muralImageUrl: muralElement.attributes.JPG_URL,
          muralLat: muralElement.attributes.X,
          muralLong: muralElement.attributes.Y,
          muralTitle: muralElement.attributes.TITLE
        }
        console.log(mural);
        let result = await insertMural(mural)
        console.log(result);
      }

    } catch (error) {
      console.error(error)
    }
  }
}

dataDownLoaderMurals().catch(error => console.error(error))
