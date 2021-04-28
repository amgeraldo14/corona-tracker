import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export async function fetchData(){
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
    const modifiedData = {confirmed, recovered, deaths, lastUpdate}
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}