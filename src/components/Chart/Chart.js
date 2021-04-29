import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import styles from './Chart.module.css'
import { Line, Bar } from 'react-chartjs-2'

function Chart({ data : {confirmed, recovered, deaths}, country }){
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

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              data: [confirmed.value, recovered.value, deaths.value],
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)',]
            }]
          }}
          options={{
            title: { display: true, text: `Current state in ${country}`},
            legend: { display: false }
          }}
        />
      ) : null
  )


  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart