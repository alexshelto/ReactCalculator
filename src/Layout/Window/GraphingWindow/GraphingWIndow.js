
import React from "react"
import Chart from "chart.js"
import { relative } from "path";

function GraphingWindow(){

    


    var data = {
        labels: [-40,-30,-20,-10,0,10,20,30,40],
        dataSet: [{
            label: "f(x)=x*5", //will use props:
            function: function(x) {return x*5},
            data: [],
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false
        }]   
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data
    });
    
    // Chart.pluginService.register({
    //     beforeInit: function(chart) {
    //         // We get the chart data
    //         var data = chart.config.data;
    
    //         // For every dataset ...
    //         for (var i = 0; i < data.datasets.length; i++) {
    
    //             // For every label ...
    //             for (var j = 0; j < data.labels.length; j++) {
    
    //                 // We get the dataset's function and calculate the value
    //                 var fct = data.datasets[i].function,
    //                     x = data.labels[j],
    //                     y = fct(x);
    //                 // Then we add the value to the dataset data
    //                 data.datasets[i].data.push(y);
    //             }
    //         }
    //     }
    // });

    // var myBarChart = new Chart(ctx, {
    //     type: 'line',
    //     data: data,
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero:true
    //                 }
    //             }]
    //         }
    //     }
    // });






    return(
        <div className="graphing-window" style={{position: "relative", width:600, height:600}}>
            {myLineChart}
        </div>
    )
}

export default GraphingWindow