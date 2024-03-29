import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export async function fetchData(country){
  try {
    let dynamicUrl = url
    if(country && country !== 'global'){
      dynamicUrl = `${url}/countries/${country}`
    }
    const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(dynamicUrl)
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

export async function fetchCountries(){
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`)
    const modifiedData = countries.map(el => {
      return el.name
    })
    return modifiedData
  } catch (error) {
    
  }
}