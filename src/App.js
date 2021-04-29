import React, { useEffect, useState }from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import covid from './images/covid-edit.png'

function App(){
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetch = async function(){
      const data = await fetchData()
      return setData(data)  
    }
    fetch()
  }, [])

  async function handleCountryChange(country){
    const fetchedData = await fetchData(country)
    console.log(fetchedData,'ini fetcched data')
    setData(fetchedData)
    if(country !== 'global'){
      setCountry(country)
    } else {
      setCountry('')
    }
  }

  return (
    <div className={styles.container}>
      <img src={covid} alt="covid" className={styles.img}></img>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}

export default App