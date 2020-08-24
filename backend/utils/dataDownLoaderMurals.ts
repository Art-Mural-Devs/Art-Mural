import axios from "axios"
import {Murals} from "./interfaces/Murals";

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
      // console.log('data', data.features)
      // console.log(data.features[1].attributes.TITLE)
      let count = 0
      let muralsArray = []
      for (let i = 0; i < data.features.length; i++) {
        if (data.features[i].attributes.TYPE == 'mural paintings (visual works)') {
          muralsArray[count] = data.features[i]
          count = count + 1
        }
      }
      console.log(muralsArray)
      console.log('Number of murals: ' + count)


      // console.log(data.features)
      // console.log(Object.keys(data))

      // const resultMurals = {data}.features.attributes.filter(mural => mural.features.attributes.TYPE == 'mural paintings (visual works)')
      // console.log(resultMurals)
      // const wordMural = ['mural paintings (visual works)', 'mural', 'murals', 'mural painting', 'murals painting']
      // const resultMurals = data.filter(wordMural)
      // mural paintings (visual works)
      // Change this part.  Instead of putting the posts into an arrray insert them into the database.
      // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
      // const createMurals = (array: any[]) : Mural[] => {
      //
      // }
    } catch (error) {
      console.error(error)
    }
  }
}


dataDownLoaderMurals().catch(error => console.error(error))