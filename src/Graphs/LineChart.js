import React from 'react'
import {Line} from 'react-chartjs-2';
function LineChart({info}) {

   
    const data={
        
        datasets:[
            {
                label:"Recovered",
                data:[1,2,3,4,5],
                borderColor:"red",
                // backgroundColor:"red",
                pointBackgroundColor:"red",
                pointBorderColor:"red"
            },
            {
                label:"Confirmed",
                data:info.confirm,
                borderColor:"green",
                pointBackgroundColor:"green",
                pointBorderColor:"green"
            },
            {
                 label:"Death",
                 data:info.death,
                 borderColor:"black",
                 pointBackgroundColor:"grey",
                pointBorderColor:"grey"
            }
        ]
    }
    const options={
        title:{display:true},
        legend: {
            display: false
         },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:5,
                        stepSize:1
                    }
                }
            ]
        }


    }
    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart
