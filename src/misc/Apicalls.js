import axios from 'axios' ;

const URL__DAILY="https://api.covid19india.org/data.json"

///states for deceasesed and REcovered
export const extract=(statewise,value)=>{
     let cases;
     switch(value){
     
     case "active":{
      cases=statewise.map((data)=>{
           return data.active

     });
     break;
      }
     case "deceased":{
          cases=statewise.map((data)=>{
               return data.deaths
          })
          break;
     }
     case"recovered":{
          cases=statewise.map((data)=>{
               return data.recovered
          })
          break;
     }


}
     
    return  reduceFun(cases);
}

 export const reduceFun=(Cases)=>{
      let total =Cases.reduce((accumulator,curr)=>{
           return parseInt(accumulator)+parseInt(curr);
      },0)
     
      return total 
}

export const fetchDaily=()=>{
       return axios.get(URL__DAILY)
    
}