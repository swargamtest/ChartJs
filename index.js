let r = (Math.random() + 1).toString(36).substring(7);
console.log("random", r);
const color= ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of shitz',
            data: [10, 15, 4, 6, 9, 7],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }  ],
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    },
    options: {
        plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
            tooltip:
            {
                callbacks:
                {
                    beforeTitle:function(context)
                    {
                        return "fore the title";
                    },
                    afterTitle:function(context)
                    {
                        return "after title"
                    },
                    title:function(context)
                    {
                        return `${context[0].label} Color:${color[context[0].dataIndex]}`
                    },
                    beforeBody:function(context)
                    {
                        return "something"
                    },
                        beforeLabel:function(context)
                        {
                            return "labelsiuu"
                        },
                    afterBody:function(context)
                    {
                        return "finishedd siuuu"
                    },
                }
            }
          },
        scales: {
            y: {
                beginAtZero: true,
                stacked:true
            },
            
            x: {
                // ticks: {
                //     // Include a dollar sign in the ticks
                //     callback: function(value, index, ticks) {
                //         return '$' + Chart.Ticks.formatters.numeric.apply(this, [value, index, ticks]);                    
                //     }
                // },
                stacked:true
            }
        }
    }
});
