import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 10,
  },
  container: {
    maxHeight: 440,
  },
});

function TableData({states,handle}) {

    // let values=states.map((data)=>{
    //     return(data)
    // })
   let onlystates
    if(states &&states.length>0){
         onlystates = states.slice(1, states.length);
    }
   
    
    
    
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                  <Typography variant="h6" component="h6">
                  State/UT
                  </Typography>
                  
              </TableCell>
              <TableCell>
              <Typography variant="h6" component="h6">
                  Confirmed
                  </Typography>
              </TableCell>

              <TableCell>
              <Typography variant="h6" component="h6">
                  Active
                  </Typography>  
              </TableCell>
              <TableCell>
              <Typography variant="h6" component="h6">
                  Recovered
                  </Typography>  
              </TableCell>
              <TableCell>
              <Typography variant="h6" component="h6">

                  Deceased
                  </Typography>  
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            { onlystates && onlystates.map((data,key)=>{
                           return (
                  <TableRow key ={data.statecode} >
                       <TableCell onMouseOver={(e)=>handle(e)}  id={data.statecode}> {data.state}</TableCell>
                       <TableCell onMouseOver={(e)=>handle(e)}  id={data.statecode} > {data.confirmed}</TableCell>
                    <TableCell  onMouseOver={(e)=>handle(e)}  id={data.statecode}> {data.active}</TableCell>
                        <TableCell  onMouseOver={(e)=>handle(e)}  id={data.statecode}> {data.recovered}</TableCell>
                    <TableCell  onMouseOver={(e)=>handle(e)}  id={data.statecode}> {data.deaths}</TableCell>
                    </TableRow>)
            }) }
            
                
                
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default TableData;
