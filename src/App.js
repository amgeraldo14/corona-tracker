import React, { useEffect, useState }from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import { CssBaseline } from '@material-ui/core'

function App(){
  const [data, setData] = useState({})
  const [country, setCountry] = useState({})

  useEffect(() => {
    const fetch = async function(){
      const data = await fetchData()
      return setData(data)  
    }
    fetch()
  }, [])

  async function handleCountryChange(country){
    console.log(country, 'ini dari app')
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart/>
    </div>
  )
}

export default App