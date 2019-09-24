let ctx = document.getElementById('line-chart').getContext('2d'),
mdef_ = ['0', '25', '50', '75', '100', '125', '150', '175', '200', '225', '250', '275', '300', '325', '350', '375', '400']

let myChart = new Chart(ctx, {
  //graphic type
    type: 'line',
    //graphic data
    data: {
        labels: mdef_,
        datasets: [{
            label: "Dano Final",
            data: [100, 82, 70, 61.43, 55, 50, 46, 42.73, 40, 37.7, 35.72, 34.01, 32.5, 31.18, 30, 28.95, 28.01],
            backgroundColor: [
                'rgba(0,191,255,0.5)',
            ],
            borderColor: [
                'rgba(0,191,255,1)',
            ],
            borderWidth: 3,
            pointBackgroundColor: 'rgba(0,191,255,1)'
        },
        {
          label: 'Redução no Dano',
          data: [0, 18, 30, 38.57, 45, 50, 54, 57.27, 60, 62.3, 64.28, 65.99, 67.5, 68.82, 70, 71.05, 72],
          backgroundColor: [
              'rgba(220, 126, 35, 0.5)',
          ],
          borderColor: [
              'rgba(220, 126, 35, 1)',
          ],
          borderWidth: 3,
          pointBackgroundColor: 'rgba(220, 126, 35, 1)'
        }]
    },
    //config
    options: {
      //titulo
      title:{
        display: true,
        text: 'Comportamento da MDEF sobre o Dano',
        fontSize: 20,
        fontColor: "#555"
      },
      //responsivo ou não
      responsive: true,
      maintainAspectRatio: true,
      //labels
        scales: {
          //eixo y
            yAxes: [{
                ticks: {
                    fontSize:16,
                    fontColor: "#555",
                    beginAtZero: true,
                    callback: function(value, index, values){
                      return value + "%";
                    }
                },
                scaleLabel: {
                  display: true,
                  labelString: ''
                }
            }],
            xAxes: [{
                ticks: {
                  fontSize:16,
                  fontColor: "#555",
                },
                // scaleLabel: {
                //   display: true,
                //   labelString: 'MDEF'
                // }
            }]
        },
        //tooltips
        tooltips:{
          mode:'index',
          callbacks:{
            //incluir % após valor
            label: function(tooltipItem, data){
              return data.datasets[tooltipItem.datasetIndex].label +": "+ data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%"
            }
          }
        }
    }
});
