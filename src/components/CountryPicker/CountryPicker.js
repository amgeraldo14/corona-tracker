import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.modules.css'
import { fetchCountries } from '../../api'

function CountryPicker({ handleCountryChange }){
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function fetchCountriesAPI(){
      setCountries(await fetchCountries())
    }
    fetchCountriesAPI()
  }, [])
  return (
    countries.length ? 
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => { return handleCountryChange(e.target.value)}}>
        <option value={'global'}> Global </option>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country} style={{textAlign: 'center'}}> {country} </option>
          )
        })}
      </NativeSelect>
    </FormControl>
    : 'Loading...'
  )
}

export default CountryPicker