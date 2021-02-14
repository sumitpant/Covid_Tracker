import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Donut from "../Graphs/Donut";
import LineChart from "../Graphs/LineChart"
import '../Styles/Figures.css'
const useStyles = makeStyles({
  root: {
    width: 600,
    height: 200,
    borderRadius: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Figures({ active, death, recovered ,daily}) {
  const classes = useStyles();
 

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <div className="charts">
          <div className="donut">
          
          <Donut active={active} death={death} recovered={recovered}>{active}</Donut>
          </div>
          <div className="line">
            
            <LineChart info={daily}/>
          
          </div>
        </div>
        

        
      </CardContent>
    </Card>
  );
}
export default Figures;
