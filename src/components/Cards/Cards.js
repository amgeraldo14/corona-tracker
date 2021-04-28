import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'

//{data: {confirmed, deaths, lastUpdate, recovered}}

function Cards({data: {confirmed, deaths, lastUpdate, recovered}}){
  if(!confirmed){
    return <Typography> Loading... </Typography>
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Infected </Typography>
            <Typography variant="h5" gutterBottom> {confirmed.value} </Typography>
            <Typography color="textSecondary" gutterBottom> Real Date </Typography>
            <Typography variant="body2" gutterBottom> Number of active cases </Typography>
          </CardContent>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Cards