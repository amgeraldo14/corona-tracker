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

export async function fetchDailyData(){
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map(dailyData => {
      return {
        confirmed: dailyData.confirmed,
        deaths: dailyData.deaths,
        date: dailyData.reportDate
      }
    })
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}