const DAYS_IN_MONTHS=[1,28,31,30,31,30,31,31,30,31,30,31]

export const returnDays=(today)=>{

    let days=DAYS_IN_MONTHS.slice(0,1);
    let total=days.reduce((acc,curr)=>{
       return acc+curr
       },0)
    return total+today.getDate();


}
//Last seven day data
export const lastSevenDays=(data,no_Of_Days)=>{
     let info= data.cases_time_series.slice(no_Of_Days-6,no_Of_Days+1)
    
     //recovered
     let recovered=info.map((info)=>{
         return parseInt(info.dailyrecovered);

     })

     let dailyConfirmed =info.map((info)=>{
        return parseInt(info.dailyconfirmed);

    })
      let dailyDeceased=info.map((info)=>{
          return parseInt(info.dailydeceased);
      })
     //
     let obj={
         recover:recovered,
         confirm:dailyConfirmed,
         death:dailyDeceased
     }
     return obj

}






