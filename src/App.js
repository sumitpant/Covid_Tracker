import React, { useState, useEffect } from "react";
import "./App.css";
import CardCom from "./Components/CardCom";
import Figures from "./Components/Figures";
import Nav from "./Components/Nav";
import TableData from "./Components/TableData";
import DatamapsIndia from "react-datamaps-india";
import { fetchDaily, extract } from "./misc/Apicalls";
import { returnDays, lastSevenDays } from "./misc/Days";

import json from "./json.zip";
import JSZipUtils from "jszip-utils";
import JSZip from "jszip";

function App() {
  const [dailyCases, setdailyCases] = useState();
  const [deceased, setDeceased] = useState();
  const [recovered, setRecovered] = useState();
  const [dailyInfo, setDailyInfo] = useState({});
  const [state_ut, setState_UT] = useState();
  const [mapstate, setMapState] = useState();
  let code;
  const handlerState = (e) => {
    if (e.target)
      code = state_ut.filter((data) => data.statecode === e.target.id);
    setMapState(code);
  };

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
      let info = lastSevenDays(data.data, no_Of_Days);

      setDailyInfo(info);
    });
  });
  //uncomment below for api call

  // useEffect(()=>{
    //let initApi=performance.now();
  //     fetchDaily().then((data)=>{
  //      setState_UT(data.data.statewise);
  
  //     })
      //let finalApi=performance.now();
      //console.log(finalApi-intitApi)
  // })

  //decompressing displaying data into table
  useEffect(() => {
    // let init=performance.now();
    let results = [];

    JSZipUtils.getBinaryContent(json, async function (err, data) {
      if (err) {
        throw err;
      }
      let zip = JSZip(data);

      zip.loadAsync(data).then(async function (obj) {
        obj.forEach(async function (relativePath, zipEntry) {
          let result = await zip.file(zipEntry.name).async("string");

          results.push(JSON.parse(result));

          setState_UT(results[0].statewise);
        });
      });
    });
    // let final=performance.now();
    //console.log(final-init)
  });

  return (
    <div className="App">
      <Nav />

      <div className="body">
        <div className="left__body">
          <Figures
            active={mapstate ? mapstate[0].active : dailyCases}
            death={mapstate ? mapstate[0].deaths : deceased}
            recovered={mapstate ? mapstate[0].recovered : recovered}
            daily={dailyInfo}
          />
          <TableData states={state_ut} handle={handlerState} />
        </div>
        <div className="right__body">
          <div className="right__Cards">
            <CardCom
              info={
                mapstate
                  ? mapstate[0].active
                  : state_ut
                  ? state_ut[0].active
                  : "loading"
              }
              bgcolor={"#facdf7"}
              textname={"Active"}
            />
            <CardCom
              info={
                mapstate
                  ? mapstate[0].recovered
                  : state_ut
                  ? state_ut[0].recovered
                  : "loading"
              }
              bgcolor={"#aeeef2"}
              textname={"Recovered"}
            />
            <CardCom
              info={
                mapstate
                  ? mapstate[0].deaths
                  : state_ut
                  ? state_ut[0].deaths
                  : "loading"
              }
              bgcolor={"#b3faac"}
              textname={"Deceased"}
            />
          </div>
          <div className="maps">
            <DatamapsIndia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
