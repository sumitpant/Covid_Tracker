import React from 'react'
import ReactDOM from 'react-dom';
import {Doughnut,Chart} from 'react-chartjs-2';

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var active= chart.config.data.datasets[0].data[0];
    
    

    var text = active,
        textX = Math.round((width - ctx.measureText(text).width) / 3),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    
  }
})
function Donut({ active, death, recovered }) {
    
    const data = {
        labels:['active','death','recovered'],
        datasets: [{
            
            data: [active, death, recovered],
            backgroundColor:[
                'red',
                'grey',
                'green'
            ],
           
        }],
      
    }
    const options={

        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 88,
        
            legend: { display: true, position: "right" ,
            labels: {
                usePointStyle: true,
              }

        },
  
            datalabels: {
              display: true,
              color: "white",
            }
    }
    return (
        
        <Doughnut data={data} options={options}/>
    )
}

export default Donut
