import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';






export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="140"
        
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="ABC Comapny"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ABC Company
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Doamin:___________
        </Typography>
      </CardContent>
      <CardActions>

      <Button size='medium'>View more</Button>
      &nbsp;
      </CardActions>
      <CardActions>
    
      
      
      <OutlinedInput
            id="outlined-adornment-amount"
            type='number'
            
            placeholder="Enter Amount"
          /> 
       &nbsp;
       &nbsp;
       &nbsp;

      <Button variant="contained" color="success">
  Invest
</Button>
       
      </CardActions>
    </Card>
  );
}
