import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 190,
    marginRight:4,
    // backgroundColor:bg
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function CardCom({info,bgcolor,textname}) {
      
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{backgroundColor:bgcolor}}>
      <CardContent>
    
        <Typography variant="h5" component="h5">
        {textname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {info}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default CardCom
