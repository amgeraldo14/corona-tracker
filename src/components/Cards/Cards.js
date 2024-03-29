import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

//{data: {confirmed, deaths, lastUpdate, recovered}}

function Cards({data: {confirmed, deaths, lastUpdate, recovered}}){
  if(!confirmed){
    return <Typography> Loading... </Typography>
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Infected </Typography>
            <Typography variant="h5" gutterBottom> 
              <CountUp start={0} end={confirmed.value}duration={2}separator=","/>
            </Typography>
            <Typography color="textSecondary" gutterBottom> {new Date(lastUpdate).toDateString()} </Typography>
            <Typography variant="body2"> Number of active cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Recovered </Typography>
            <Typography variant="h5" gutterBottom> 
              <CountUp start={0} end={recovered.value}duration={2}separator=","/>
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of people recovered </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths </Typography>
            <Typography variant="h5" gutterBottom> 
              <CountUp start={0} end={deaths.value}duration={2}separator=","/> 
            </Typography>
            <Typography color="textSecondary" gutterBottom> {new Date(lastUpdate).toDateString()} </Typography>
            <Typography variant="body2"> Number of deaths</Typography>
          </CardContent>
        </Grid>

        
      </Grid>
    </div>
  )
}

export default Cards