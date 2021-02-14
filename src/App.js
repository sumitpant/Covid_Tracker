import React, { useState, useEffect } from "react";
import "./App.css";
import CardCom from "./Components/CardCom";
import Figures from "./Components/Figures";
import Nav from "./Components/Nav";
import TableData from "./Components/TableData";
 import DatamapsIndia from 'react-datamaps-india'
import { fetchDaily, extract } from "./misc/Apicalls";
import { returnDays ,lastSevenDays} from "./misc/Days";




function App() {
  const [dailyCases, setdailyCases] = useState();
  const [deceased, setDeceased] = useState();
  const [recovered, setRecovered] = useState();
  const[dailyInfo ,setDailyInfo]=useState({});
  const[state_ut,setState_UT]=useState();
  const[mapstate,setMapState]=useState();
  const handlerState=({value})=>{
    setMapState({value})

  }

  let today = new Date();
  let no_Of_Days = returnDays(today);
  

  useEffect(() => {
    fetchDaily().then((data) => {
      let statewise = data.data.statewise;
      let active = extract(statewise, "active");
      let death = extract(statewise, "deceased");
      let recovered = extract(statewise, "recovered");
      setdailyCases(active);
      setDeceased(death);
      setRecovered(recovered);
    });
  });
  useEffect(() => {
    fetchDaily().then((data) => {
      let info=lastSevenDays(data.data,no_Of_Days)
      
      setDailyInfo(info);
    });
   
  });

  useEffect(()=>{
      fetchDaily().then((data)=>{
       setState_UT(data.data.statewise);
      
      })
  })

  return (
    <div className="App">
      <Nav />
      {/* <DatamapsIndia/> */}

      <div className="body">
        <div className="left__body">
          <Figures active={dailyCases} death={deceased} recovered={recovered} daily={dailyInfo} />
          <TableData states={state_ut}/>
        </div>
        <div className="right__body">
          <div className="right__Cards">
            <CardCom info={state_ut?state_ut[0].active:'loading'} bgcolor={'#facdf7'} textname={'Active'}/>
            <CardCom info={state_ut?state_ut[0].recovered:'loading'} bgcolor={'#aeeef2'} textname={'Recovered'}/>
            <CardCom info={state_ut?state_ut[0].deaths:'loading'} bgcolor={'#b3faac'} textname={'Deceased'}/>
          </div>
          <div className="maps">
           
            <DatamapsIndia
      
            />
            
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default App;
