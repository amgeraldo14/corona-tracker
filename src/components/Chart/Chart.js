import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import styles from './Chart.module.css'
import { Line, Bar } from 'react-chartjs-2'

function Chart(){
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    async function fetchDailyAPI(){
      console.log(await fetchDailyData())
      setDailyData(await fetchDailyData())
    }
    fetchDailyAPI()
  }, [])

  const lineChart = (
    dailyData.length !== 0 ?
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed.total),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths.total),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }]
      }}
    /> : null
  )


  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart