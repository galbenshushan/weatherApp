import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import classes from './Button.module.css'
import { useSelector } from 'react-redux';

const OutlinedCard = (props) => {
  const themeSlice = useSelector(state => state.theme)

  const cityInfo = props.cityInfo

  const dynamicTheme = themeSlice === 'dark' ? 'white' : '#00445f' ;
  
  return (
    <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width:'18rem', boxShadow: '10px 10px 5px #070608'  }}>
      <CardContent>
        <Typography sx={{ mb: 2.5 }} style={{ color: dynamicTheme }}>
          {cityInfo.time}
        </Typography>
        <Typography variant="body2" style={{ color: dynamicTheme, fontSize: '2rem', fontWeight: '600' }}>
          {cityInfo.name}
        </Typography>
        <Typography sx={{ mb: 2.5 }} style={{ color: dynamicTheme, fontSize: '1.4rem', fontWeight: '600' }} >
          {cityInfo.weatherText}
          <br />
          {cityInfo.currentTemperature.Metric.Value}<sup>o</sup>C / {cityInfo.currentTemperature.Imperial.Value}<sup>o</sup>F
        </Typography>
      </CardContent>
      <CardActions>
        <button style={{width:'fit-content'}} className={classes.btn} onClick={() => props.onRemove(cityInfo)}>Remove from favorites</button>
      </CardActions>
    </Card>

  );
}

export default OutlinedCard